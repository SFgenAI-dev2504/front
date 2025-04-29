from app import db


class Test(db.Model):
    __tablename__ = "test"
    id = db.Column(db.Integer, primary_key=True)
    hoge = db.Column(db.String(255))
