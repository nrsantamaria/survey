$(document).ready(function() {
  $("form#programs").submit(function(event) {

    var name = $("input#name").val();
    var favactivity = parseInt($("input:radio[name=favactivity]:checked").val());
    var style = parseInt($("input:radio[name=style]:checked").val());
    var vacay = parseInt($("input:radio[name=vacay]:checked").val());
    var hotel = parseInt($("input:radio[name=hotel]:checked").val());
    var computer = parseInt($("input:radio[name=computer]:checked").val());
    var idol = parseInt($("input:radio[name=idol]:checked").val());
    var work = parseInt($("input:radio[name=work]:checked").val());
    var color = $("input:radio[name=color]:checked").val();

    $(".programs").hide();

    if (color) {
      var results = parseFloat((favactivity + style + vacay + hotel + computer + idol + work) / 7);
      if (results >= 2.85) {
        $("#c-sharp").show();
      } else if (results >= 1.71) {
        $("#php").show();
      } else {
        $("#ruby").show();
      }
    } else {
      $(".radio").addClass("has-error");
    }

    $(".name").empty().append(name);

    event.preventDefault();
  });
});
