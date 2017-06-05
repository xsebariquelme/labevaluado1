// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
    $('#nombres').html('<b>' + localStorage.getItem('nombres') + '</b>');
    $('#email').html('<b>' + localStorage.getItem('email') + '</b>');
    $('#apellidos').html('<b>' + localStorage.getItem('apellidos') + '</b>');
    $('#run').html('<b>' + localStorage.getItem('run') + '</b>');
    $('#nick').html('<b>' + localStorage.getItem('nick') + '</b>');
    $('#back').bind('click', back);

}, false);

function back(){
  window.location = "index.html";  
}
