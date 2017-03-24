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

    if () {
      $("#ruby").show();
    } else if () {
      $("#c-sharp").show();
    } else () {

    }

    event.preventDefault();
  });
});
