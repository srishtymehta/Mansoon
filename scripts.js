var locationSearch = "";

function checkweather() {
    let location = document.querySelector("#location").value;
    //    if (location) {
    //        return;
    //    }

    locationSearch = location;

    let queryURL = "http://localhost:3000/" + location;


    fetch(queryURL)
        .then(function (response) {
            //return response;
            return response.json();
        })
        .then(function (result) {
            displayLocationResult(result);
        })
        .catch(function (error) {
            console.log('error during fetch: ' + error.message);
        });
}

function displayLocationResult(result) {
    let msgDiv = document.querySelector("#message");
    let div = document.querySelector("#result");

    //    console.log(result)
    //    console.log(result.message);
    if (result.message) {
        div.innerHTML = "";
        msgDiv.innerHTMl = `<div class="alert alert-danger alert-dismissiable roles="alert">\<button type="button" class="close" data-dismiss="alert" aria-label="close"><strong>oops</strong>${result.message}\</div>`;
        $("#message").append(msgDiv);
        console.log(msgDiv);
    } else {
        //display success
        msgDiv.innerHTMl = `<div class="alert alert-danger alert-dismissiable roles="alert">\<button type="button" class="close" <span aria-hidden="true">&data-dismiss="alert" aria-label<strong>weather of</strong><h3 style="text-transform:uppercase">${locationSearch}<h3>\</div>`;
        $("#message").append(msgDiv);
        console.log(msgDiv);
        //clear contents
        div.innerHTML = "";
        const weather = result.consolidated_weather;
        console.log(weather);
        for (let i = 0; i < weather.length; i++) {
            //            var n = max_temp;
            //            var num = n.toFixed(2);
            //            console.log(weather[i].weather_state_name);
            //            var elemnts = `<div>${weather[i]}`;
            let hackedHTMLDiv = ` <div class="col-xs-3"><div class="card" style="width:92%;max-width:300px;background-color: rgba(94, 64, 35, 0.4); margin-top:20px;">\
<div class="container">
<h3 style="color:azure"> Date:<h5 style=""color:azure;margin-left:20px">${weather[i].applicable_date}</h5></h3>
<h3 style="color:azure">State:<h5 style="color:white">${weather[i].weather_state_name}</h5></h3></div>
 <img src="http://www.infographiccity.com/wp-content/plugins/RSSPoster_PRO/cache/641c0_cloudy-weather-icons.jpg" alt="Avatar" style="width:100%;opacity:0.85;border-radius:5px 5px 0 0">
<div class="container">
<h3 style="color:azure">Min-Temp:<h5 style="color:white">${weather[i].min_temp=weather[i].min_temp.toFixed(2)}&deg;C</a></h5></h3>
<h3 style="color:azure">Max-Temp:<h5 style="color:white">${weather[i].max_temp=weather[i].max_temp.toFixed(2)}&deg;C</h5></h3>
<h3 style="color:azure">Current Temp:<h5 style="color:white">${weather[i].the_temp=weather[i].the_temp.toFixed(2)}&deg;C</h5></h3>

</div>
</div></div>`;
            //            $("#result").append(elemnts);

            $("#result").append(hackedHTMLDiv);
        }
        console.log(result);
    }
}
//<div class"col-xs-12 col-sm-12 style="text-align:center">
