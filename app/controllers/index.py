from flask import Blueprint, render_template

index_bp = Blueprint('index', __name__, url_prefix='/')


@index_bp.route("/", methods=["GET"])
def index():
    # conn = mysql.connector.connect(
    #     host="db",
    #     user="root",
    #     password="password",
    #     database="test_db"
    # )
    # cursor = conn.cursor()
    # cursor.execute("SELECT NOW();")
    # result = cursor.fetchone()
    # cursor.close()
    # conn.close()
    # print(f"Hello! DB Time is {result[0]}")
    return render_template("index.html")
