from flask import Flask
from controller.music_controller import music_controller
from os import environ
from waitress import serve


app = Flask(__name__)
app.register_blueprint(music_controller, url_prefix="/musics")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        # Servidor de desenvolvimento do Kit Werkzeug
        return app.run(debug=True, host=host, port=port)
    else:
        # Este é o waitress, otimizado para produção
        serve(app, host=host, port=port)

if __name__ == "__main__":
    start_server()