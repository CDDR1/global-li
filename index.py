from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')

@app.route('/foreign-direct-investments')
def investments():
    return render_template('')

@app.route('/exports')
def exports():
    return render_template('')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

# export FLASK_DEBUG=0 to deactivate debug mode