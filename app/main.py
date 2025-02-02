from flask import render_template, request, redirect, Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/')
def index():
    launch_data = {
        "message": "Welcome to the Launch Page"
    }
    return jsonify(launch_data)
