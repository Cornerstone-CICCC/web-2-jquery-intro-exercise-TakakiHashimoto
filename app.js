$(function() {
  // YOUR CODE HERE
  $("#toggleButton").on("click", function(){
    $("#myParagraph").toggle()
  })
})

$(document).ready(function(){
  $("#colorButton").on("click", function() {
    $("#colorDiv").css({
      backgroundColor: "yellow"
    })
  })

  $("#addClassButton").on("click", function() {
    $("#classDiv").addClass("newClass")
  })
  
  $("#removeClassButton").on("click", function() {
    $("#classDiv").removeClass("newClass")
  })

  $("#fadeInButton").on("click", function() {
    $("#fadeDiv").fadeIn()
  })

  $("#fadeOutButton").on("click", function() {
    $("#fadeDiv").fadeOut()
  })

  $("#slideUpButton").on("click", function() {
    $("#slideDiv").slideUp();
  })

  $("#slideDownButton").on("click", function() {
    $("#slideDiv").slideDown();
  })

})
