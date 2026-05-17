from flask import request, jsonify
from models.user_model import users_collection
import bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv

load_dotenv()

JWT_SECRET = os.getenv("JWT_SECRET")


# REGISTER
def register():

    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role")

    # check existing user
    existing_user = users_collection.find_one({
        "email": email
    })

    if existing_user:

        return jsonify({
            "success": False,
            "message": "Email already exists"
        }), 400

    # hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    # create user
    user = {
        "name": name,
        "email": email,
        "password": hashed_password,
        "role": role
    }

    users_collection.insert_one(user)

    return jsonify({
        "success": True,
        "message": "User registered successfully"
    }), 201


# LOGIN
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    # find user
    user = users_collection.find_one({
        "email": email
    })

    if not user:

        return jsonify({
            "success": False,
            "message": "User not found"
        }), 404

    # verify password
    is_password_correct = bcrypt.checkpw(
        password.encode("utf-8"),
        user["password"].encode("utf-8")
    )

    if not is_password_correct:

        return jsonify({
            "success": False,
            "message": "Invalid password"
        }), 401

    # create JWT token
    token = jwt.encode({

        "user_id": str(user["_id"]),
        "role": user["role"],
        "exp":
        datetime.datetime.utcnow()
        + datetime.timedelta(days=7)

    }, JWT_SECRET, algorithm="HS256")

    return jsonify({

        "success": True,
        "message": "Login successful",

        "token": token,

        "user": {
            "name": user["name"],
            "email": user["email"],
            "role": user["role"]
        }

    }), 200