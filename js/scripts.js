$(document).ready(function() {
  $("form#programs").submit(function(event) {

    var favactivity = parseFloat($("select#favactivity").val());
    var style = parseFloat($("select#style").val());
    var vacay = parseFloat($("select#vacay").val());
    var hotel = parseFloat($("select#hotel").val());
    var computer = parseFloat($("select#computer").val());
    var idol = parseFloat($("select#idol").val());
    var work = parseFloat($("select#work").val());
    var results = (favactivity + style + vacay + hotel + computer + idol + work) / 7;

    $(".programs").hide();

    if (results >= 3.14) {
      $("#c-sharp").show();
    } else if (results <= 2.85) {
      $("#php").show();
    } else if (results <= 1.71){
      $("#ruby").show();
    }

    event.preventDefault();
  });
});
