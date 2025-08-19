import random
import json

from time import sleep
from flask import Blueprint, Response
from datetime import datetime
from zoneinfo import ZoneInfo

generate_bp = Blueprint('generate', __name__)


@generate_bp.route('/generate', methods=['POST'])
def generate():
    image_urls = [
        "Andromeda_Galaxy.png",
        "Betelgeuse.png",
        "Cat_s_Eye_Nebula.png",
        "Crab_Nebula.png",
        "Horsehead_Nebula.png",
        "Mercury.png",
        "Pillars_of_Creation.png",
        "Sun.png",
        "Venus.png",
        "Whirlpool_Galaxy.png",
    ]

    random.shuffle(image_urls)

    jst_time = datetime.now(ZoneInfo("Asia/Tokyo"))
    timestamp = jst_time.strftime("%Y%m%d%H%M%S")
    image_id = f"{timestamp}_{random.randint(1000, 9999)}"

    sleep(1)

    code = None
    message = None
    # code = "E01_001"
    # message = "ChatGPTの画像生成に失敗しました。"
    # code = "E01_002",
    # message = "ファイル、もしくはディレクトリが存在しません。"
    # code = "E01_003"
    # message = "ファイルが既に存在します。
    # code = "E01_004"
    # message = "ファイルへのアクセス権限がありません。"
    # code = "E01_005"
    # message = "ファイルのファイル操作でエラーが発生しました。"
    # code = "E01_006"
    # message = "画像生成で予期せぬエラーが発生しました。"

    if code is None:
        status = 200
        image_file_name = image_urls[0]
        image_url = "http://localhost:5000/static/output/" + image_file_name
        explanation = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストaiueoテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト1234６７８９０AWSテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト末尾です"
        rate = 1
    else:
        status = 500
        image_file_name = None
        image_url = None
        image_id = None
        explanation = None
        rate = None
    return Response(
        response=json.dumps(
            {
                "imageFileName": image_file_name,
                "imageUrl": image_url,
                "imageId": image_id,
                "explanation": explanation,
                "rate": rate,
                "code": code,
                "message": message,
            }
        ),
        status=status,
    )
