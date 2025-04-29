from flask import Blueprint, render_template, current_app
from app import db
from sqlalchemy import text  # text関数をインポート

index_bp = Blueprint('index', __name__, url_prefix='/')


@index_bp.route("/", methods=["GET"])
def index():
    key = current_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]
    result = db.session.execute(text('SELECT NOW();'))
    current_time = result.fetchone()[0]  # 結果の最初の列を取得
    res = f"Hello! DB Time is {current_time}"
    return render_template("index.html", key=key, res=res)
