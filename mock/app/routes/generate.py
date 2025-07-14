import random

from time import sleep
from flask import Blueprint, jsonify
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

    result = {
        "imageUrl": "http://localhost:5000/static/output/" + image_urls[0],
        "imageId": image_id
    }
    return jsonify(result)
