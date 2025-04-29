from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route("/")
def hello():
    conn = mysql.connector.connect(
        host="db",
        user="root",
        password="password",
        database="test_db"
    )
    cursor = conn.cursor()
    cursor.execute("SELECT NOW();")
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    return f"Hello! DB Time is {result[0]}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
