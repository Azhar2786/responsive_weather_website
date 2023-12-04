
'use strict';

const api_key = "use your own api key";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback){
    fetch(`${URL}&appid=${api_key}`)
       .then(res =>res.json())
       .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    }
    ,airPollution(lat, lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&limit=5`
    }
    ,reverseGeo(lat, lon){
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}`
    },
    /**
     * @param {string} query Search query e.g. : "Chandigarh" , "New Delhi"
     */
    geo(query){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}