from flask import Flask, render_template, request, redirect, url_for, session
import secret_key

app = Flask(__name__)
app.secret_key = secret_key.key


@app.route('/', methods=['GET', 'POST'])
def intro_screen():
    if request.method == 'POST':
        crush = request.form.get('crush')
        session['crush'] = crush
        return render_template('flower.html', crush=crush)
    return render_template('index.html')


@app.route('/flower', methods=['GET', 'POST'])
def flower_screen():
    if request.method == 'POST':
        session.pop('crush')
        return redirect('/')
    return render_template('flower.html')


@app.route('/booster')
def booster_screen():
    return render_template('booster.html')


if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )