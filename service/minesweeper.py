from flask_restful import Api, Resource, reqparse
from flask import Blueprint

minesweeper_bp = Blueprint('minesweeper', __name__)

@minesweeper_bp.route('/new')
def games():
  return {
    'game': 'minesweeper started'
  }