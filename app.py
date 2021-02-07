from flask import *
app = Flask(__name__)

@app.route('/')
def prepare():
    return render_template("prepare.html")

@app.route('/key_view', methods=['POST'])
def key_view():
    k = request.form['key']
    print(k)
    response = make_response("user: %s" % (k))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/space')
def space():
    

## おまじない
if __name__ == "__main__":
    app.run(debug=True)