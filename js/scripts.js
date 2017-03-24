$(document).ready(function() {
  $("form#programs").submit(function(event) {

    var favactivity = parseInt($("select#favactivity").val());
    var style = parseInt($("select#style").val());
    var vacay = parseInt($("select#vacay").val());
    var hotel = parseInt($("select#hotel").val());
    var computer = parseInt($("select#computer").val());
    var idol = parseInt($("select#idol").val());
    var work = parseInt($("select#work").val());
    var results = (favactivity + style + vacay + hotel + computer + idol + work)

    $(".programs").hide();

    if (results >= 8) {
      $("#ruby").show();
    } else if (results <=6) {
      $("#c-sharp").show();
    } else {
      $("#php").show();
    }

    event.preventDefault();
  });
});
