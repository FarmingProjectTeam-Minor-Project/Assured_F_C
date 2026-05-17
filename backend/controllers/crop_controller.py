from flask import (request, jsonify)
from models.crop_model import CropModel
from config.db import (crops_collection,negotiations_collection)

# ADD CROP
def add_crop():

    data = request.json

    try:

        crop = (
            CropModel
            .create_crop(data)
        )

        return jsonify({

            "success": True,
            "message":
            "Crop added successfully",

            "crop": crop

        }), 201

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500


# GET ALL CROPS
def get_crops():

    try:

        crops = (
            CropModel
            .get_all_crops()
        )

        return jsonify({

            "success": True,
            "crops": crops

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500
    
# GET SINGLE CROP
def get_crop(crop_id):

    try:

        crop = (
            CropModel
            .get_crop_by_id(
                crop_id
            )
        )

        if not crop:

            return jsonify({

                "success": False,
                "message":
                "Crop not found"

            }), 404

        return jsonify({

            "success": True,
            "crop": crop

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,
            "message": str(e)

        }), 500
    

# DELETE CROP
def delete_crop(crop_id):

    try:

        deleted = (

            CropModel
            .delete_crop(
                crop_id
            )
        )

        if not deleted:

            return jsonify({

                "success":
                False,

                "message":
                "Crop not found"

            }), 404

        return jsonify({

            "success":
            True,

            "message":
            "Crop deleted successfully"

        }), 200

    except Exception as e:

        return jsonify({

            "success":
            False,

            "message":
            str(e)

        }), 500
    
# UPDATE CROP
def update_crop(
    crop_id
):

    try:

        data = request.json

        updated = (

            CropModel
            .update_crop(

                crop_id,

                data
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
            "Crop updated successfully"

        }), 200

    except Exception as e:

        return jsonify({

            "success":
            False,

            "message":
            str(e)

        }), 500
    

# FARMER DASHBOARD STATS
def farmer_dashboard():

    try:

        farmer_name = (
            request.args.get(
                "farmer_name"
            )
        )

        total_crops = (

            crops_collection
            .count_documents({

                "farmer_name":
                farmer_name
            })
        )

        pending_deals = (

            negotiations_collection
            .count_documents({

                "farmer_name":
                farmer_name,

                "status":
                "Pending"
            })
        )

        accepted_deals = (

            negotiations_collection
            .count_documents({

                "farmer_name":
                farmer_name,

                "status":
                "Accepted"
            })
        )

        rejected_deals = (

            negotiations_collection
            .count_documents({

                "farmer_name":
                farmer_name,

                "status":
                "Rejected"
            })
        )

        latest_crops = list(
            crops_collection.find({
                "farmer_name":farmer_name
            }).sort("_id", -1).limit(3)
)

        for crop in latest_crops:

            crop["_id"] = str(
                crop["_id"]
            )


        recent_offers = list(

            negotiations_collection
            .find({

                "farmer_name":
                farmer_name

            })

            .sort("_id", -1)
            .limit(5)
        )

        for offer in recent_offers:

            offer["_id"] = str(
                offer["_id"]
            )


        return jsonify({

            "success":
            True,

            "stats": {

                "total_crops":
                total_crops,

                "pending":
                pending_deals,

                "accepted":
                accepted_deals,

                "rejected":
                rejected_deals
            },

            "latest_crops":
            latest_crops,

            "recent_offers":
            recent_offers

        }), 200

    except Exception as e:

        return jsonify({

            "success":
            False,

            "message":
            str(e)

        }), 500