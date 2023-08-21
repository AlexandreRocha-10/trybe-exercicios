from flask import Blueprint, jsonify, request
from model.music_model import MusicModel

music_controller = Blueprint("music", __name__)

@music_controller.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), 201

@music_controller.route("/random", methods=["GET"])
def music_random():
    music = MusicModel.get_random()
    return jsonify(music.to_dict()), 201