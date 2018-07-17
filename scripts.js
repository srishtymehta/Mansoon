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
        msgDiv.innerHTML = "";
        var ms = `<div class="alert alert-danger alert-dismissiable role="alert" style="padding-top:20px;padding-bottom:150px;margin-top:10px;background-color:transparent;border:none">\<button type="button" class="close" data-dismiss="alert" aria-label="close" style="text-align:center;float:left;color:white;opacity:8"><strong style="color:burlywood;font-family:sans-serif;font-size:26px">I Guess you might think its a Place but no one else does,No one Knows Wht r u Talking About..!!</strong><q style="font-size:30px;margin-left:4px;color:cornsilk;font-family:'Love Ya Like A Sister'">${result.message} :( </q>\</div>`;
        $("#message").append(ms);
        console.log(msgDiv);
    } else {
        //display success
        div.innerHTML = "";
        msgDiv.innerHTML = "";
        var ms = `<div class="alert alert-danger alert-dismissiable roles="alert" style="padding-top:20px;padding-bottom:40px;margin-top:10px;background-color:rgba(11,83, 69, 0.2);">\<button type="button" class="close" aria-hidden="true" data-dismiss="alert" aria-label="close" style="float:left;color:white;opacity:10"><strong>Weather Of ~ </strong><q style="text-align:center;text-transform:uppercase;margin-left:16px;font-family:'montez'">${locationSearch}</q>\</div>`;
        $("#message").append(ms);
        console.log(msgDiv);
        //clear contents

        const weather = result.consolidated_weather;
        console.log(weather);
        for (let i = 0; i < weather.length; i++) { //            console.log(weather[i].weather_state_name);
            //            var elemnts = `<div>${weather[i]}`;
            let hackedHTMLDiv = ` <div class="col-xs-3"><div class="card" style="width:92%;max-width:300px;background-color: rgba(11,83, 69, 0.2); margin-top:20px;">\
<div class="container" style="overflow:hidden">
<h3 style="color:#daf7a6">Date:<h5 style="color:#edf43c;font-size:16px">${weather[i].applicable_date}</h5></h3>
<h3 style="color:azure"><h5 style="color:#edf43c;font-size:16px">${weather[i].the_temp=weather[i].the_temp.toFixed(2)}&deg;C</h5></h3>
<h3 style="color:azure"><h5 style="color:#e8ee37;font-size:16px">${weather[i].weather_state_name}</h5></h3></div>
 <img src="http://www.transparentpng.com/download/lightning/cloud-air-rain-thunder-smoke-lightning-png-20.png" alt="Avatar" style="width:100%;opacity:0.85;border-radius:5px 5px 0 0">

<div class="container" style="@media (min-width: 768px)
.container {
    /* width: 750px; */
}">
<h3 style="color:azure">Min-Temp:<h5 style="color:#e8ee37;font-size:16px">${weather[i].min_temp=weather[i].min_temp.toFixed(2)}&deg;C</a></h5></h3>
<h3 style="color:azure">Max-Temp:<h5 style="color:#e8ee37;font-size:16px">${weather[i].max_temp=weather[i].max_temp.toFixed(2)}&deg;C</h5></h3>


</div>
</div></div>`;
            //            $("#result").append(elemnts);

            $("#result").append(hackedHTMLDiv);
        }
        console.log(result);
    }
}
//<div class"col-xs-12 col-sm-12 style="text-align:center">
//http://www.transparentpng.com/download/lightning/lightning-transparent-png-pictures-29.png
