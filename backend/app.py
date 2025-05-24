from flask import Flask
from flask_cors import CORS
from routes import register_routes

#create app
app = Flask(__name__)

# allow for cross origin access
CORS(app)

#register routes
register_routes(app)


if __name__ == '__main__':
    app.run(debug=True)