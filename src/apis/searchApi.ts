import axios from "axios";

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward?q=',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiY2FtaWxvZGV2OTciLCJhIjoiY20wM2FneWpoMDc3MDJscHg1NTU2OTBnaSJ9.AUks0qxEh3JMdvVx-GtPkA'
    }
})