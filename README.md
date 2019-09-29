# Rainfall Prediction Final Project
Dan Smart, Abiel Ogbe, Gabe Hernandez, Brandon Coleman, Suresh Sreerameneni, and Sasi Vutukuru

## Data Acquisition
-Data Set Link - https://www.kaggle.com/noaa/gsod

-Used BigQuery from Google Cloud Services to create a query to merge data on station ID(MBAN).

-Data was downloaded through Google Drive to a local flash drive.

-Drop stn, wban, count_temp, count_dewp, count_slp, count_stp, visib, count_visib, count_wdsp, flag_max, flag_min, and flag_prcp

## Backend
-SQLite for backend storage.

-Linear regression for temperature and classification for rain, snow, hail, thunder, and tornado.

## Frontend
-Created a webpage using HTML, CSS, and JavaScript

-Integrated Tableau into the webpage for data story and vizualizations.
