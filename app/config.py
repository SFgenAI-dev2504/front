import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'defaultsecretkey')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
