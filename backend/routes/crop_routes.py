from flask import Blueprint

from controllers.crop_controller import (
    add_crop,
    get_crops,
    get_crop,
    delete_crop,
    update_crop,
    farmer_dashboard
)

crop_bp = Blueprint(
    "crop",
    __name__
)


# ADD CROP
crop_bp.route(
    "/add",
    methods=["POST"]
)(add_crop)


# GET ALL CROPS
crop_bp.route(
    "",
    methods=["GET"]
)(get_crops)

# GET SINGLE CROP
crop_bp.route(
    "/<crop_id>",
    methods=["GET"]
)(get_crop)

# DELETE CROP
crop_bp.route(
    "/delete/<crop_id>",
    methods=["DELETE"]
)(delete_crop)

# UPDATE CROP
crop_bp.route(
    "/update/<crop_id>",
    methods=["PUT"]
)(update_crop)

# FARMER DASHBOARD
crop_bp.route(
    "/farmer-dashboard",
    methods=["GET"]
)(farmer_dashboard)