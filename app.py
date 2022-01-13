from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from service.minesweeper import minesweeper_bp

app = Flask(__name__, static_url_path='', static_folder='webapp/build')
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/api/games")
def games():
  return {
    'games':[
      'minesweeper'
    ]
  }

app.register_blueprint(minesweeper_bp, url_prefix="/api/games/minesweeper")
