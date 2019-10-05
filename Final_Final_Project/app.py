import os

import pandas as pd
import numpy as np
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Database Setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///final_weather_db.sqlite"

db = SQLAlchemy(app)

# reflect an existing database into a new modelapp
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

# # Save references to each table

WeatherData = Base.classes.weather

@app.route("/")
def home():
     """Return the home page."""
     return render_template("index.html")

@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        month = request.form["month1"]
        day = request.form["day1"]
        lat = request.form["Lat1"]
        lng = request.form["Long1"]
        year = request.form["year1"]
        data = [[lat, lng, month, day]]
        
        df = pd.DataFrame(data, columns = ['lat', 'lon', 'mo', 'da'])

        # Load the model
        from tensorflow.keras.models import load_model
        from sklearn.externals import joblib

        rain_model = joblib.load("stormchaser.sav")

        predictions = rain_model.predict(df)
        
        return jsonify( {'Month': str(df.mo[0]),'Day': str(df.da[0]), 'Year': str(year), 'Prediction': str(predictions[0]) } )

@app.route("/missouri")
def mo_weather():
    return render_template("missouridata.html")

@app.route("/tableau")
def tableau():
    return render_template("tableau_v2.html")

if __name__ == "__main__":
    app.run(debug=True)