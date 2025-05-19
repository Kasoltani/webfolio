from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from db_models import db
from routes import register_routes

class Base(DeclarativeBase):
    pass

#create app
app = Flask(__name__)

#configure the SQLite database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"

#initialize the app with extension
db.init_app(app)
register_routes(app)

with app.app_context():
    db.create_all

#register routes


if __name__ == '__main__':
    app.run(debug=True)