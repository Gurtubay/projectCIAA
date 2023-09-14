from flask import Flask, render_template,request,jsonify
import numpy as np
from joblib import load
from flask_cors import CORS
import os

#Cargar el modelo
dt=load('modeloNN4.joblib')

#Generar el servidor(Back-End)
servidorWeb=Flask(__name__)
CORS(servidorWeb)

@servidorWeb.route("/holamundo",methods=['GET'])
def formulario():
	return render_template('pagina1.html')

#Envio de datos a traves de JSON
@servidorWeb.route('/modeloForm',methods=['POST'])
def modeloForm():
	#Procesar los datos de entrada
	#contenido =request.json
    #contenido=request.form
	# print(contenido)
	# datosEntrada=np.array([0.88,0,2.6,0.098,25,67,0.9968,1,0.4,
	# 	contenido['pH'],
	# 	contenido['sulphates'],
	# 	contenido['alcohol']
	# ])
    contenido=request.json
    print(contenido)
    datosEntrada = np.array([
        (contenido['TipoVivienda']-56.897)/(42.300),
        (contenido['CalleConectadaEnPies']-57.623)/(34.6643),
        (contenido['AreaLote']-10516.828)/( 9981.26),
        (contenido['CalidadMateriales']-6.0993)/(1.3829),
        (contenido['CondicionCasa']- 5.575)/(1.112),
        (contenido['AñoConstruccion']-1971.267)/( 30.202),
        (contenido['AñoRemodelado']- 1984.865)/(20.645),
        (contenido['AreaRevestimiento']-103.117)/( 180.731),
        (contenido['AreaSotano1']- 443.639)/( 456.098),
        (contenido['AreaSotano2']- 46.549)/(161.3192),
        (contenido['AreaSotanoSinTerminar']-567.2404)/( 441.866),
        (contenido['AreaSotanoTotal']-1057.429)/( 438.7053),
        (contenido['AreaPrimerPiso']-1162.626)/(386.587),
        (contenido['AreaSegundoPiso']-346.992)/( 436.5284),
        (contenido['AreaTerminadaBajaCalidad']-5.84452)/(48.6230),
        (contenido['AreaViviendaSobreSuelo']-1515.463)/( 525.480),
        (contenido['BañosCompletosSotano']-0.4253)/(0.5189),
        (contenido['BañosMediosSotano']-0.05753)/( 0.2387),
        (contenido['BañosCompletosSobreSuelo']- 1.565)/( 0.55091),
        (contenido['BañosMediosSobreSuelo']-0.3828)/( 0.5028)
	])
	
	#utilizar el modelo
    resultado = dt.predict(datosEntrada.reshape(1,-1))
    return jsonify({'resultado':str((resultado[0]*79442.5028)+180921.19589)})
    #return jsonify({'resultado':'hola'})

if __name__ == '__main__':
	servidorWeb.run(debug=False,host='0.0.0.0',port='8080')