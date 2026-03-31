from flask import jsonify
from pathlib import Path
import json

def register_routes(app):
    data_path = Path(__file__).with_name("data.json")
    
    def load_data():
        with data_path.open("r", encoding="utf-8") as f:
            data = json.load(f)
        return data
    
    @app.route("/")
    def api_root():
        return jsonify({
            "message": "Portfolio API is running.",
            "portfolioEndpoint": "/api/portfolio"
        })

    @app.route("/api/portfolio", methods=["GET"])
    def get_portfolio():
        return jsonify(load_data())
        
