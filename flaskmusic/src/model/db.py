from pymongo import MongoClient
from os import environ

# Conecta no Mongo, pela variável ambiente definida no Docker Compose
client = MongoClient(environ.get("MONGO_URL"))

# Cria um banco de dados
db = client.db_music