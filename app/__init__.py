from flask import Flask

app = Flask(__name__)

# blueprint for auth routes in our app #new blueprint
from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

# blueprint for non-authentication parts of the app
from .main import main as main_blueprint
app.register_blueprint(main_blueprint)

from app import auth, main