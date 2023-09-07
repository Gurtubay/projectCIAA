from flask import Flask, render_template,jsonify,request
import numpy as np
from joblib import load
import os
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
#Generar el servidor(Back-End)
servidorWeb=Flask(__name__)

# Configura Flask-Login
login_manager = LoginManager()
login_manager.init_app(servidorWeb)

# Clase de usuario (puedes personalizarla según tus necesidades)
class User(UserMixin):
    def __init__(self, id):
        self.id = id
        # Agrega cualquier otro atributo de usuario que necesites, como nombre de usuario, contraseña, etc.

# Función para cargar un usuario desde la sesión
@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

#Cargar el modelo
dt=load('dt1.joblib')

#Servidor (backend)
servidorWeb = Flask(__name__)

@servidorWeb.route("/holamundo",methods=['GET'])
def formulario():
    return render_template('pagina1.html')

#Envio de datos a través de JSON
@servidorWeb.route('/modelo',methods=['POST'])
def modeloPrediccion():
	#Procesar los datos de entrada
	contenido =request.json
	print(contenido)
	return jsonify({'resultado':'Hola'})
	

if __name__ == '__main__':
    servidorWeb.run(debug=False,host='0.0.0.0',port='8080')

