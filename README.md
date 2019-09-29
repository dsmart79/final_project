# Rainfall Prediction Final Project
Dan Smart, Abiel Ogbe, Gabe Hernandez, Brandon Coleman, Suresh Sreerameneni, and Sasi Vutukuru

## Data Acquisition
-Data Set Link - https://www.kaggle.com/noaa/gsod

-Used BigQuery from Google Cloud Services to create a query to merge data on station ID(MBAN).

-Used name, state, lat, lon, year, mo, da, temp, max, min, rain_drizzle, snow_ice_pellets, hail, thunder, tornado_funnel_cloud. All other columns were dropeed.

-Only used 'CA', 'MO', 'NY', 'TX', 'FL', 'PA', 'IL', 'OH', 'GA', 'GA', 'NC', and 'MI' to limit the size of the data set to under 1 GB.

-Data was downloaded through Google Drive to a local flash drive.

## Backend
-SQLite for backend storage.

-Linear regression for temperature and classification for rain, snow, hail, thunder, and tornado.

## Frontend
-Created a webpage using HTML, CSS, and JavaScript

-Integrated Tableau into the webpage for data story and vizualizations.
