from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from service.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='webapp/build')
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/api/hello')