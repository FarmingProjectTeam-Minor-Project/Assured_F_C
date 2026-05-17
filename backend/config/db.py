from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["assured_contract_farming"]

# COLLECTIONS
users_collection = db["users"]
crops_collection = db["crops"]
negotiations_collection = db["negotiations"]


try:
    client.admin.command("ping")
    print("MongoDB Connected Successfully 🚀")

except Exception as e:
    print("MongoDB Connection Error:", e)