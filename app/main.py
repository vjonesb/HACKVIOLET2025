from flask import render_template, request, redirect, Blueprint

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return 'Index'



