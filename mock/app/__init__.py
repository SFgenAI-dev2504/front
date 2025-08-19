from flask import Flask
from flask_cors import CORS
from .models.db import init_db
from .routes.generate import generate_bp
from .routes.decide import decide_bp


def create_app():
    # appの設定
    app = Flask(__name__)
    CORS(app)
    app.config.from_object("app.config.Config")

    print(app.config["DB_HOST"])
    print(app.config["DB_USER"])
    print(app.config["DB_PASSWORD"])
    print(app.config["DB_NAME"])

    # DBの設定
    init_db(app)

    # Blueprintの設定
    app.register_blueprint(generate_bp)
    app.register_blueprint(decide_bp)

    return app
