from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)


@app.route('/')
def intro_screen():
    return render_template('index.html')


@app.route('/')
def flower_screen():
    pass


@app.route('/')
def booster_screen():
    pass


if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )