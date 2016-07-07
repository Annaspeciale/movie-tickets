//business logic
function Ticketprice(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age =age;
}

Ticketprice.prototype.fullCalc = function() {
  // return this.movie + " " + this.time +" "+ this.age;
  if (this.age<=18 && this.time==="18:00 pm"){
    return this.age*2
  }else if (this.age<=18 && this.time==="21:00 pm"){
    return this.age*3
  }else if (this.age>18 && this.time==="18:00 pm"){
    return this.age*4
  }else if (this.age>18 && this.time==="21:00 pm"){
    return this.age*5
};
};
// user interface logic
$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();

    var selectedMovie = $("select#new-movie").val();
    var selectedTime = $("select#new-time").val();
    var inputtedAge= parseInt($("input#new-age").val());

    var newTicketprice = new Ticketprice(selectedMovie, selectedTime,inputtedAge );

        $("ul#Ticketprice").html("<li><span class='prices'>" + newTicketprice.fullCalc() + "</span></li>");

    $(".ticketprice").last().click(function() {
      $("#show-Ticketprice").show();


    });

    $("select#new-movie").val("");
    $("select#new-time").val("");
    $("input#new-age").val("");

  });
});
