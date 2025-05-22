from flask import Flask

from routes import register_routes

#create app
app = Flask(__name__)

#register routes
register_routes(app)


if __name__ == '__main__':
    app.run(debug=True)