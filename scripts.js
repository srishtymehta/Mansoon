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
        console.log(result.message);
    } else {
        //display success
        msgDiv.innerHTMl = `<div class="alert alert-danger alert-dismissiable roles="alert">\<button type="button" class="close" <span aria-hidden="true">&data-dismiss="alert" aria-label<strong>weather of</strong><h3 style="text-transform:uppercase">${locationSearch}<h3>\</div>`;
        $("#message").append(msgDiv);
        console.log("whht the hell");
        //clear contents
        div.innerHTML = "";
        const weather = result.consolidated_weather;
        console.log(weather);
        for (let i = 0; i < weather.length; i++) {
            console.log(weather[i].weather_state_name);
            //            var elemnts = `<div>${weather[i]}`;
            let hackedHTMLDiv = `<div class="jumbotron" id="id_${i}">\
<div class="row">
<h3> Date:<h5 style=""color:green;margin-left:20px">${weather[i].applicable_date}</h5></h3>
<div class"col-xs-12 col-sm-12 style="text-align:center">
<h3>Minimum Temperature:<h5 style="color:blue">${weather[i].min_temp}&deg;C</a></h5></h3>
<h3>Maximum Temperature:<h5 style="color:blue">${weather[i].max_temp}&deg;C</h5></h3>
<h3>Current Temperature:<h5 style="color:blue">${weather[i].the_temp}&deg;C</h5></h3>
<h3>Wind speed:<h5 style="color:blue">${weather[i].wind_speed}</h5></h3>
</div>
</div>
</div>`;
            //            $("#result").append(elemnts);
            $("#result").append(hackedHTMLDiv);
        }
        console.log(result);
    }
}
