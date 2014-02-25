var Package = {  
 

  estimate:0,

  dimension : function() {
    var lwh = (this.length + this.width + this.height);
    if (lwh <= 25) {
      this.estimate += 5;
    } else if (lwh > 25 && lwh <= 75) {
      this.estimate += 6;
    } else if (lwh > 75) {
      this.estimate += 7;
    };
  }, 

  interstateFee : function() {
    var states = ["oregon", "Omicron Persei 8", "The Planet of the Moochers", "Tarantulon 6", "Amazonia", "Amphibios 9", "Aquarus 12", "Bogad", "Bottingham", "Chapek 9", "Colgate 8", "Cyclopia", "Eternium"];
    if (this.destination !== states[0]) {
      this.estimate += 5;
    }
  },

  weightFee : function() {
   this.estimate += parseFloat(Math.pow((this.weight * 0.25), 1.5).toFixed(2));
  },

  calculateEstimate : function() {
    this.weightFee();
    this.interstateFee();
    this.dimension();
    return this.estimate;
  }

}

var planets = ["oregon", "Omicron Persei 8", "The Planet of the Moochers", "Tarantulon 6", "Amazonia", "Amphibios 9", "Aquarus 12", "Bogad", "Bottingham", "Chapek 9", "Colgate 8", "Cyclopia", "Eternium"];

$(function() {
  
  event.preventDefault();
   // for (var i = 0; i < planets.length-1; i++) {
   //   $("form#planets").append('<option value="' + planets[i] + '">' + planets[i] +"</option>");
   // };
  
  $("form#new-package").submit(function(event) {
    event.preventDefault();

    var length = $("input#length").val();
    var width = $("input#width").val();
    var height = $("input#height").val();
    var destination = $("input#planets").val();
    console.log(destination);

    var newPackage = Object.create(Package);
    newPackage.length = parseInt(length);
    newPackage.height = parseInt(height);
    newPackage.width = parseInt(width);
    newPackage.destination = destination;

    $("#estimate").append("<h3> Your package to </h3><br><h1>" + newPackage.destination + "</h1><br><h3> will cost </h3><h1>" + newPackage.calculateEstimate().toString() + "</h1>");
  });
});
