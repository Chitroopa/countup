$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();

    var totalNumber = [];
    var num1Input = parseInt($("#num1").val());
    var num2Input = parseInt($("#num2").val());
    for (var index = num2Input; index <= num1Input; index += num2Input)
    {
      totalNumber.push(index);
    }
    $("p").text(totalNumber);

  });
});
