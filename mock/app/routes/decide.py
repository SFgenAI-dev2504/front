from flask import Blueprint, Response
import json

decide_bp = Blueprint('decide', __name__)


@decide_bp.route('/decide', methods=['POST'])

def decide():
    code = None
    message = None
    # code = "E02_001"
    # message = "submitファイル、もしくはディレクトリが存在しません。"
    # code = "E02_002"
    # message = "submitファイルが既に存在します。"
    # code = "E02_003"
    # message = "submitファイルへのアクセス権限がありません。"
    # code = "E02_004"
    # message = "submitファイルのファイル操作でエラーが発生しました。"
    # code = "E02_005"
    # message = "submitファイルのファイル操作で予期せぬエラーが発生しました。"
    if code is None:
        status = 200
    else:
        status = 500
    return Response(
        response=json.dumps(
            {"code": code, "message": message}
        ),
        status=status,
    )
