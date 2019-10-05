$(function() {
    $('#PredictBtn').click(function() {
        var ul_list = d3.select("#predictions_list");

        console.log("BUTTON CLICKED")
        $.ajax({
            url: '/send',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                const mo = response.Month;
                const day = response.Day;
                const prd = response.Prediction;
                const yr = response.Year;
                console.log(yr);
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                const sunny_or_rain = ["Prediction: 0, Sunny", "Prediction: 1, Rainy"];
                const mo_name = monthNames[mo - 1];
                const forecast = sunny_or_rain[prd];
                document.getElementById('id1').style.maxHeight = "200px";
                var images = document.querySelectorAll("#id1 img");
                var prediction = response.Prediction
                if (prediction == 0) {
                    console.log("SUNNY");
                    images[0].src = images[0].getAttribute('data-src');
                    images[1].src = "";

                } else if (prediction == 1) {
                    console.log("RAINY");
                    images[1].src = images[1].getAttribute('data-src');
                    images[0].src = "";
                }
                var listitem = ul_list.append("li");
                listitem.text(`${mo_name} ${day}, ${yr} : ${forecast}`);


            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

/* function show() {
    console.log("CALLED SHOW")
    document.getElementById('id1').style.maxHeight = "200px";
    var images = document.querySelectorAll("#id1 img");
    for (var i = 0; i < images.length; i++) {
        images[i].src = images[i].getAttribute('data-src');
    }
}

//var button = d3.select("#submit-btn");
button.on("click", function() {
    setTimeout(show(), 800000)
        // var weathercard = d3.select("#icon");
        // weathercard.remove();
}); */