from flask import Flask, render_template,request,jsonify
import numpy as np
from joblib import load
import os

#Cargar el modelo
dt=load('dt1.joblib')

#Generar el servidor(Back-End)
servidorWeb=Flask(__name__)

@servidorWeb.route("/holamundo",methods=['GET'])
def formulario():
	return render_template('pagina1.html')

#Envio de datos a traves de JSON
@servidorWeb.route('/modeloForm',methods=['POST'])
def modeloForm():
	#Procesar los datos de entrada
	contenido =request.json
	print(contenido)
	# datosEntrada=np.array([0.88,0,2.6,0.098,25,67,0.9968,1,0.4,
	# 	contenido['pH'],
	# 	contenido['sulphates'],
	# 	contenido['alcohol']
	# ])
	datosEntrada = np.array([
    contenido['TipoVivienda'],
    contenido['CalleConectadaEnPies'],
    contenido['AreaLote'],
    contenido['CalidadMateriales'],
    contenido['CondicionCasa'],
    contenido['AñoConstruccion'],
    contenido['AñoRemodelado'],
    contenido['AreaRevestimiento'],
    contenido['AreaSotano1'],
    contenido['AreaSotano2'],
    contenido['AreaSotanoSinTerminar'],
    contenido['AreaSotanoTotal'],
    contenido['AreaPrimerPiso'],
    contenido['AreaSegundoPiso'],
    contenido['AreaTerminadaBajaCalidad'],
    contenido['AreaViviendaSobreSuelo'],
    contenido['BañosCompletosSotano'],
    contenido['BañosMediosSotano'],
    contenido['BañosCompletosSobreSuelo'],
    contenido['BañosMediosSobreSuelo']
])
	#utilizar el modelo
	resultado = dt.predict(datosEntrada.reshape(1,-1))
	return jsonify({'resultado':str(resultado[0])})


if __name__ == '__main__':
	servidorWeb.run(debug=False,host='0.0.0.0',port='8080')