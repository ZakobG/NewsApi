import {generateNewsBox} from "./components";

const axios = require("axios");

window.onload = function() {
    const ajemnot = axios.get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-29&sortBy=publishedAt&apiKey=7580fba4a03c41c1ac0a5c78a6981719")
        .then(function(res) {
        const articls = res.data.articles;

        let dunno;
        let idc;
        for(let i=0; i<articls.length; i++) {
            dunno = generateNewsBox(articls[i].title, articls[i].description, articls[i].author, articls[i].publishedAt, articls[i].source.name);
            idc = document.getElementById("a");
            idc.appendChild(dunno);
        }
    });
}