from flask import Flask

def register_routes(app):
    @app.route("/")
    def hello_world():
        return "<h1>Hello, World!</h1>"
    
    @app.route("/addProj")
    def add_Proj():
        return "test"
        