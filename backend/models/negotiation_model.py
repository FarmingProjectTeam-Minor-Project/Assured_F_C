from config.db import (negotiations_collection)
from bson import ObjectId


class NegotiationModel:

    @staticmethod
    def create_offer(data):

        negotiation = {

            "crop_id":
            data.get("crop_id"),

            "crop_name":
            data.get("crop_name"),

            "farmer_name":
            data.get("farmer_name"),

            "buyer_name":
            data.get("buyer_name"),

            "buyer_email":
            data.get("buyer_email"),

            "offer_price":
            data.get("offer_price"),

            "quantity":
            data.get("quantity"),

            "message":
            data.get("message"),

            "status":
            "Pending"
        }

        result = (
            negotiations_collection
            .insert_one(
                negotiation
            )
        )

        negotiation["_id"] = str(
            result.inserted_id
        )

        return negotiation


    @staticmethod
    def get_all_negotiations():

        negotiations = list(

            negotiations_collection
            .find()

        )

        for negotiation in negotiations:

            negotiation["_id"] = str(

                negotiation["_id"]

            )

        return negotiations
    

    @staticmethod
    def update_status(negotiation_id,status):

        result = (

            negotiations_collection
            .update_one(

                {
                    "_id":
                    ObjectId(
                        negotiation_id
                    )
                },

                {
                    "$set": {
                        "status":
                        status
                    }
                }
            )
        )

        return (
            result.modified_count
            > 0
        )
    

    @staticmethod
    def make_payment(negotiation_id):

        result = (

            negotiations_collection
            .update_one(

                {
                    "_id":
                    ObjectId(
                        negotiation_id
                    )
                },

                {
                    "$set": {

                        "payment_status":
                        "Paid"
                    }
                }
            )
        )

        return (
            result.modified_count
            > 0
        )