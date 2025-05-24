from flask import Flask, request, jsonify
import json

def register_routes(app):
    # path to data
    data_path = "data.json"
    
    # load_data() function: returns python json object of the data json
    def load_data():
        with open(data_path, 'r') as f:
            data = json.load(f)
        return data
    
    # save_data() function: save python json object to json data file
    def save_data(data):
        with open(data_path, 'w') as f:
            json.dump(data, f, indent=4)

# -------ROUTES----------
    @app.route("/")
    def hello_world():
        return "<h1>Hello, World!</h1>"
    
    @app.route("/incrClicks", methods=['POST'])
    def add_one_to_clicks():
        data = load_data()
        data["button"]["clicks"] += 1
        save_data(data)
        return jsonify(data)

    @app.route("/getClicks", methods=['GET'])
    def get_clicks():
        data = load_data()
        return jsonify(data["button"]["clicks"])
        