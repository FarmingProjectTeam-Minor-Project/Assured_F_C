from flask import (
    request,
    jsonify
)

from models.negotiation_model import (
    NegotiationModel
)


# CREATE OFFER
def create_offer():

    try:

        data = request.json

        # DEFAULT STATUS
        data["status"] = "Pending"

        # DEFAULT PAYMENT STATUS
        data["payment_status"] = "Unpaid"

        negotiation = (

            NegotiationModel
            .create_offer(data)

        )

        return jsonify({

            "success": True,

            "message":
            "Offer sent successfully",

            "negotiation":
            negotiation

        }), 201

    except Exception as e:

        return jsonify({

            "success": False,

            "message":
            str(e)

        }), 500


# GET NEGOTIATIONS
def get_negotiations():

    try:

        negotiations = (

            NegotiationModel
            .get_all_negotiations()

        )

        return jsonify({

            "success": True,

            "negotiations":
            negotiations

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,

            "message":
            str(e)

        }), 500


# UPDATE STATUS
def update_status(
    negotiation_id
):

    try:

        data = request.json

        status = (
            data.get(
                "status"
            )
        )

        updated = (

            NegotiationModel
            .update_status(

                negotiation_id,

                status
            )
        )

        if not updated:

            return jsonify({

                "success":
                False,

                "message":
                "Update failed"

            }), 400

        return jsonify({

            "success":
            True,

            "message":
            f"Deal {status}"

        }), 200

    except Exception as e:

        return jsonify({

            "success":
            False,

            "message":
            str(e)

        }), 500


# MAKE PAYMENT
def make_payment(
    negotiation_id
):

    try:

        paid = (

            NegotiationModel
            .make_payment(
                negotiation_id
            )
        )

        if not paid:

            return jsonify({

                "success":
                False,

                "message":
                "Payment failed"

            }), 400

        return jsonify({

            "success":
            True,

            "message":
            "Payment Successful"

        }), 200

    except Exception as e:

        return jsonify({

            "success":
            False,

            "message":
            str(e)

        }), 500