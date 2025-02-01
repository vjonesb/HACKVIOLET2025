from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# blueprint for auth routes in our app #new blueprint
from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

# blueprint for non-authentication parts of the app
from .main import main as main_blueprint
app.register_blueprint(main_blueprint)

#secret_key = os.getenv('SECRET_KEY')
#database_url = os.getenv('DATABASE_URL')

from app import auth, main
