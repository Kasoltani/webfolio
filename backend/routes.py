from flask import Flask, request, jsonify

button_count = 0

def register_routes(app):
    @app.route("/")
    def hello_world():
        return "<h1>Hello, World!</h1>"
    
    @app.route("/addNum/", methods=['POST'])
    def add_Proj():
        button_count += 1
        return button_count
        