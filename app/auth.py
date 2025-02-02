from flask import render_template, request, redirect, Blueprint, url_for, flash, jsonify
from supabase import create_client, Client
import os, re

supabase_key = os.getenv('SUPABASE_KEY')
supabase_url = os.getenv('SUPABASE_URL')

supabase: Client = create_client(supabase_url, supabase_key)

auth = Blueprint('auth', __name__)

def valid_email(email):
    return re.match(r"^[\w\.-]+@[\w\.-]+\.\w+$", email)

def valid_username(username):
    # Username should be 3-20 characters, alphanumeric and underscores only
    return re.match(r"^[a-zA-Z0-9_]{3,20}$", username)

@auth.route('/signup', methods=["GET","POST"])
def signup():
    data = request.get_json()

    email = data.get('email', '').strip()
    passw = data.get('password', '').strip()
    username = data.get('username', '').strip()

    if not valid_email(email):
        return jsonify({"status": "error", "message": "Invalid email format."}), 400

    if len(passw) < 6:
        return jsonify({"status": "error", "message": "Password must be at least 6 characters long."}), 400

    if not valid_username(username):
        return jsonify({"status": "error", "message": "Username must be 3-20 characters long and contain only letters, numbers, and underscores."}), 400
    
    response = supabase.auth.sign_up(
        {
            "email": email, 
            "password": passw,
            "options": {
                "data": {
                    "username": username,
                    "full_name": username
                }
            }
        }
    )

    if response["status"] == "success":
        return jsonify({"status": "success", "message": "Signup successful! Please log in."}), 200
    else:
        return jsonify({"status": "error", "message": "Signup failed. Please try again."}), 500



    # if request.method == "POST":
    #     email = request.form["nm"].strip()
    #     passw = request.form["pass"].strip()
    #     username = request.form["username"].strip()  # Add username field

    #     action = request.form.get("action")
    #     if action == "submit":
    #         if not valid_email(email):
    #             flash("Invalid email format. Please enter a valid email.", "error")
    #             return render_template("signup.html")

    #         if len(passw) < 6:
    #             flash("Password must be at least 6 characters long.", "error")
    #             return render_template("signup.html")
            
    #         if not valid_username(username):
    #             flash("Username must be 3-20 characters long and contain only letters, numbers, and underscores.", "error")
    #             return render_template("signup.html")
            
    #         response = supabase.auth.sign_up(
    #             {
    #                 "email": email, 
    #                 "password": passw,
    #                 "options": {
    #                     "data": {
    #                         "username": username,
    #                         "full_name": username
    #                     }
    #                 }
    #             }
    #         )
    #         flash("Signup successful! Please log in.", "success")
    #         #redirect to page that tells them to confirm their email
    #         #return redirect(url_for("main.index")) 
    #         return render_template("email.html")
    # return render_template("signup.html")

@auth.route('/login/', methods=['GET','POST'])
def login():
    if request.method == "POST":
        email = request.form["nm"].strip()
        passw = request.form["pass"].strip()

        action = request.form.get("action")
        if action == "submit":
            response = supabase.auth.sign_in_with_password(
                {"email": email, "password": passw}
            )
            return redirect(url_for("main.index")) 
    return render_template("login.html")