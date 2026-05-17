from config.db import crops_collection
from bson import ObjectId


class CropModel:

    @staticmethod
    def create_crop(data):

        crop = {

            "farmer_id":
            data.get("farmer_id"),

            "farmer_name":
            data.get("farmer_name"),

            "crop_name":
            data.get("crop_name"),

            "price":
            data.get("price"),

            "quantity":
            data.get("quantity"),

            "harvest_date":
            data.get("harvest_date"),

            "location":
            data.get("location"),

            "description":
            data.get("description"),

            "image":
            data.get("image")
        }

        result = (
            crops_collection
            .insert_one(crop)
        )

        crop["_id"] = str(
            result.inserted_id
        )

        return crop

    @staticmethod
    def get_all_crops():

        crops = list(
            crops_collection.find()
        )

        for crop in crops:

            crop["_id"] = str(
                crop["_id"]
            )

        return crops
    
    @staticmethod
    def get_crop_by_id(crop_id): 

        crop = (
            crops_collection
            .find_one({
                "_id":
                ObjectId(crop_id)
            })
        )

        if crop:

            crop["_id"] = str(
                crop["_id"]
            )

        return crop
    
    @staticmethod
    def delete_crop(crop_id):

        result = (

            crops_collection
            .delete_one({

                "_id":
                ObjectId(crop_id)

            })
        )

        return (
            result.deleted_count
            > 0
        )
    

    @staticmethod
    def update_crop(crop_id,data):

        updated_data = {

            "crop_name":
            data.get(
                "crop_name"
            ),

            "price":
            data.get(
                "price"
            ),

            "quantity":
            data.get(
                "quantity"
            ),

            "harvest_date":
            data.get(
                "harvest_date"
            ),

            "location":
            data.get(
                "location"
            ),

            "description":
            data.get(
                "description"
            )
        }

        result = (

            crops_collection
            .update_one(

                {
                    "_id":
                    ObjectId(
                        crop_id
                    )
                },

                {
                    "$set":
                    updated_data
                }
            )
        )

        return (
            result.modified_count
            > 0
        )