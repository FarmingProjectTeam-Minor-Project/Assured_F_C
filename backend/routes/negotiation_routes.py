from flask import Blueprint

from controllers.negotiation_controller import (
    create_offer,
    get_negotiations,
    update_status,
    make_payment
)

negotiation_bp = Blueprint(
    "negotiation",
    __name__
)


# CREATE OFFER
negotiation_bp.route(
    "/add",
    methods=["POST"]
)(create_offer)


# GET NEGOTIATIONS
negotiation_bp.route(
    "",
    methods=["GET"]
)(get_negotiations)


# UPDATE STATUS
negotiation_bp.route(
    "/update/<negotiation_id>",
    methods=["PUT"]
)(update_status)

# PAYMENT
negotiation_bp.route(
    "/pay/<negotiation_id>",
    methods=["PUT"]
)(make_payment)