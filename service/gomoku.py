from flask_restful import Api, Resource, reqparse
from flask import Blueprint

gomoku_bp = Blueprint('gomoku', __name__)

@gomoku_bp.route('/new')
def games():
  return {
    'game': 'gomoku started'
  }