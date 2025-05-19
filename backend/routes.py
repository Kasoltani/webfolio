from db_models import db, Project
import flask

def register_routes():
    @app.route("/")
    def hello_world():
        return "<p>Hello, World!</p>"
    
    @app.route("/addProj")
    def add_Proj():
        return "test"
        