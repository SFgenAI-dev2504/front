from time import sleep

from flask import Blueprint, jsonify, request
import random

index_bp = Blueprint('index', __name__)


@index_bp.route('/generate', methods=['GET', 'POST'])
def generate():
    req = request.get_json()
    diameter = req.get("diameter")
    mass = req.get("mass")
    average_distance_from_the_sun = req.get("averageDistanceFromTheSun")
    revolution_period = req.get("revolutionPeriod")
    rotation_period = req.get("rotationPeriod")

    image_urls = [
        "test_image1.png",
        "test_image2.jpeg",
        "test_image3.jpeg",
        "test_image4.jpeg",
        "test_image5.jpeg",
        "test_image6.jpeg",
        "test_image7.jpeg",
    ]

    random.shuffle(image_urls)

    sleep(3)

    result = {
        "data": [
            {
                "id": 1,
                "element1": random.randint(0, 100),
                "element2": random.randint(0, 100),
                "element3": random.randint(0, 100),
                "element4": random.randint(0, 100),
                "element5": random.randint(0, 100),
            },
            {
                "id": 2,
                "element1": random.randint(0, 100),
                "element2": random.randint(0, 100),
                "element3": random.randint(0, 100),
                "element4": random.randint(0, 100),
                "element5": random.randint(0, 100),
            },
        ],
        "imageUrl": "http://localhost:5000/static/images/" + image_urls[0]
    }
    return jsonify(result)
