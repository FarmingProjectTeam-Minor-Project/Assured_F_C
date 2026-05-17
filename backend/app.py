import os
from flask import Flask
from flask_cors import CORS

from config.db import db
from routes.auth_routes import auth_bp
from routes.crop_routes import crop_bp
from routes.negotiation_routes import (negotiation_bp)

app = Flask(__name__)

CORS(app)


@app.route("/")
def home():

    return {
        "message":
        "Assured Contract Farming Backend Running 🚀"
    }


@app.route("/api/test")
def test():

    return {
        "success": True,
        "message":
        "Backend connected successfully!"
    }


# AUTH ROUTES
app.register_blueprint(
    auth_bp,
    url_prefix="/api/auth"
)

app.register_blueprint(
    crop_bp,
    url_prefix="/api/crops"
)

app.register_blueprint(
    negotiation_bp,
    url_prefix="/api/negotiations"
)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )