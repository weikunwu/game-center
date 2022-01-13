from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from service.minesweeper import minesweeper_bp
from service.sudoku import sudoku_bp

app = Flask(__name__, static_url_path='', static_folder='webapp/build')
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
    
@app.route("/api/games")
def games():
  return {
    'games':[
      'minesweeper',
      'sudoku'
    ]
  }

app.register_blueprint(minesweeper_bp, url_prefix="/api/games/minesweeper")
app.register_blueprint(sudoku_bp, url_prefix="/api/games/sudoku")
