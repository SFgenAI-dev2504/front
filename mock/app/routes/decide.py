from flask import Blueprint

decide_bp = Blueprint('decide', __name__)


@decide_bp.route('/decide', methods=['POST'])
def decide():
    return {"isOK": True}
    # return {
    #     "isOK": False,
    #     "code": "E02_001",
    #     "message": "submitファイル、もしくはディレクトリが存在しません。",
    # }
    # return {
    #     "isOK": False,
    #     "code": "E02_002",
    #     "message": "submitファイルが既に存在します。",
    # }
    # return {
    #     "isOK": False,
    #     "code": "E02_003",
    #     "message": "submitファイルへのアクセス権限がありません。",
    # }
    # return {
    #     "isOK": False,
    #     "code": "E02_004",
    #     "message": "submitファイルのファイル操作でエラーが発生しました。",
    # }
    # return {
    #     "isOK": False,
    #     "code": "E02_005",
    #     "message": "submitファイルのファイル操作で予期せぬエラーが発生しました。",
    # }
