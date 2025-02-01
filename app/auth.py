from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return 'Login'

@auth.route('/signup')
def signup():
    response = supabase.auth.sign_up(
    {"email": "email@example.com", "password": "password"}
    )
    return 'Signup'

