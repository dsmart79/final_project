var button = d3.select("#filter-btn");

button.on("click", function(){

    var tbody = d3.select("tbody");
    tbody.html("")

    
    var inputElement = d3.select("#datetime");
    var inputElementstation = d3.select("#station");
    var inputElementtemp = d3.select("#temp");
    var inputElementmaxtemp = d3.select("#maxtemp");
    var inputElementmintemp = d3.select("#mintemp");

    var inputValue = inputElement.property("value");
    var inputValuestation = inputElementstation.property("value");
    var inputValuetemp = inputElementtemp.property("value");
    var inputValuemaxtemp = inputElementmaxtemp.property("value");
    var inputValuemintemp = inputElementmintemp.property("value");


    console.log(inputValue, inputValuestation, inputValuetemp, inputValuemaxtemp, inputValuemintemp )


})