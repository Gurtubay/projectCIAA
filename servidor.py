from flask import Flask, render_template, request, jsonify
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

@servidorWeb.route("/holamundo",methods=['GET'])
def formulario():
	return render_template('pagina1.html')

#Envio de datos a traves de JSON
@servidorWeb.route('/modelo',methods=['POST'])
def modeloPrediccion():
	#Procesar los datos de entrada
	contenido=request.json
	print(contenido)
	return jsonify({'resultado':'Hola'})
	

@servidorWeb.route("/login", methods=['GET', 'POST'])
def login():
      return 0
    # Aquí debes implementar la lógica de inicio de sesión, por ejemplo, verificar las credenciales del usuario.
    # Si el inicio de sesión es exitoso, utiliza 'login_user' para autenticar al usuario.
    # Luego, redirige al usuario a la página principal o a donde desees.

@servidorWeb.route("/logout")
@login_required
def logout():
      return 0
    # Implementa la lógica de cierre de sesión aquí y utiliza 'logout_user' para cerrar la sesión del usuario.
    # Luego, redirige al usuario a la página de inicio de sesión o a donde desees.

@servidorWeb.route("/perfil")
@login_required
def perfil():
      return 0
    # Esta ruta solo estará disponible para usuarios autenticados.
    # Puedes acceder a los datos del usuario actual a través de 'current_user'.



if __name__ == '__main__':
	servidorWeb.run(debug=False,host='0.0.0.0',port='8080')

