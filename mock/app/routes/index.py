from flask import Blueprint, jsonify
from ..models.db import get_db

index_bp = Blueprint('index', __name__)


@index_bp.route('/api/message')
def get_message():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT NOW();")
    row = cursor.fetchone()
    return jsonify({"message": row[0] if row else "No message found"})
