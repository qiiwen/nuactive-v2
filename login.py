from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'sql12.freemysqlhosting.net'
app.config['MYSQL_USER'] = 'sql12349722'
app.config['MYSQL_PASSWORD'] = 'JNTsPgGGpU'
app.config['MYSQL_DB'] = 'sql12349722'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/', methods=['GET'])
def getDefault():
    return 'Flask server up and running'

@app.route('/users/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()
	
    cur.execute("INSERT INTO users (first_name, last_name, email, password, created) VALUES ('" + 
		str(first_name) + "', '" + 
		str(last_name) + "', '" + 
		str(email) + "', '" + 
		str(password) + "', '" + 
		str(created) + "')")
    mysql.connection.commit()
	
    result = {
		'first_name' : first_name,
		'last_name' : last_name,
		'email' : email,
		'password' : password,
		'created' : created,
	}

    return jsonify({'result' : result})
	

@app.route('/users/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""
	
    cur.execute("SELECT * FROM users where email = '" + str(email) + "'")
    rv = cur.fetchone()
	
    if bcrypt.check_password_hash(rv['password'], password):
        access_token = create_access_token(identity = {'first_name': rv['first_name'],'last_name': rv['last_name'],'email': rv['email'],'points': rv['points'],'classes': rv['classes']})
        result = access_token
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result
	
if __name__ == '__main__':
    app.run(debug=True)


# @app.route('/users/activities', methods=['POST'])
# def add_task():
#     cur = mysql.connection.cursor()
#     # instead of getting title, need to get class name
#     title = request.get_json()['title']

#     cur.execute("INSERT INTO users (classes) VALUES ('" + str(title) + "')")
#     mysql.connection.commit()
#     result = {'title':title}

#     return jsonify({"result": result})