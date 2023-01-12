from flask import Flask, render_template, request, redirect, session
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


@app.route('/booster')
def booster_screen():
    crush = session['crush']
    return render_template('booster.html', crush=crush)


@app.route('/restart')
def restart_game():
    session.pop('crush')
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True, port=5000, host='0.0.0.0')
