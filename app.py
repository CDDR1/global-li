from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')

@app.route('/foreign-direct-investments')
def investments():
    return render_template('foreign-direct-investments.html', title='Foreign Direct Investments')

@app.route('/exports')
def exports():
    return render_template('exports.html', title='Exports')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

if __name__ == '__main__':
    app.run(debug=False)