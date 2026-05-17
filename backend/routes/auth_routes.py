from flask import Blueprint
from controllers.auth_controller import (
    register,
    login
)

auth_bp = Blueprint(
    "auth",
    __name__
)


# REGISTER
auth_bp.route(
    "/register",
    methods=["POST"]
)(register)


# LOGIN
auth_bp.route(
    "/login",
    methods=["POST"]
)(login)