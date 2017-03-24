$(document).ready(function() {
  $("form#programs").submit(function(event) {
    var name = $("input#name").val();
    var favactivity = parseInt($("select#favactivity").val());
    var style = parseInt($("select#style").val());
    var vacay = parseInt($("select#vacay").val());
    var hotel = parseInt($("select#hotel").val());
    var computer = parseInt($("select#computer").val());
    var idol = parseInt($("select#idol").val());
    var work = parseInt($("select#work").val());
    var results = parseFloat((favactivity + style + vacay + hotel + computer + idol + work) / 7);

    $(".programs").hide();

    if (results >= 2.85) {
      $("#c-sharp").show();
    } else if (results >= 1.71) {
      $("#php").show();
    } else {
      $("#ruby").show();
    }
    $(".name").empty().append(name)
    event.preventDefault();
  });
});
