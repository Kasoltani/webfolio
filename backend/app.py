from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

#create app
app = Flask(__name__)

#configure the SQLite database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"

#initialize the app with extension
db.init_app(app)

#models
class User(db.Model):
    pass

with app.app_context():
    db.create_all

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"