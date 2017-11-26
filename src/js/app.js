/// This creates a Toggle Menu.

// 1. We save our selected classes in some variables.
var navigation = document.querySelector(".navigation"),
    navToggle = document.querySelector(".navigation-toggle"),
    hamburger = document.querySelector(".hamburger");
// 2. We add an event listener to our clickable menu for Mobile.
  navToggle.addEventListener("click",
  function(e) {
// 3. We check if both hamburger and menu have the class "is-open", 
// which contains the css to manipulate their positions.
  if (  navigation.classList.contains('is-open') && hamburger.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    hamburger.classList.remove('is-open');
  } else {
    navigation.classList.add("is-open");
    hamburger.classList.add('is-open');
  }
  e.preventDefault();
  }, false);


/* Any click outside of the nav element will close the menu if it's open */
document.addEventListener('click', function(event) {

  //this saves in a variable the event target (the element that was clicked initially,
  // which is the navigation-toggle div)
  var isClickInside = navToggle.contains(event.target);
  console.log(event.target);
  // if when the user clicks again, he doesn't click on that specific div, AND
  // the navigation bar still has the class 'open' then it will be removed so it closes the nav.
  if (!isClickInside && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
  } 
});