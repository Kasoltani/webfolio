from flask import Flask, request, jsonify
import json

def register_routes(app):

    @app.route("/")
    def hello_world():
        return "<h1>Hello, World!</h1>"
    
    @app.route("/addNum/", methods=['POST', 'GET'])
    def add_Proj():
        button_count += 1
        print(button_count)
        return button_count
        