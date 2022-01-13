from flask_restful import Api, Resource, reqparse
from flask import Blueprint

sudoku_bp = Blueprint('sudoku', __name__)

@sudoku_bp.route('/new')
def games():
  return {
    'game': 'sudoku started'
  }