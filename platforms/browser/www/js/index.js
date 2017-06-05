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
    $('#sub').bind('click', enviar);
    $('#registro').bind('click', registrar);
    $('#back').bind('click', back);
    $('#registrarcuenta').bind('click', registrocuenta);
    
}, false);

function registrocuenta(){
    var runP = $('#run').val();
    var nombres = $('#name').val();
    var apellidos = $('#apellidos').val();
    var email = $('#correo').val();
    var nick = $('#nick').val();
    var pass = $('#pass').val();
    
    
    if(runP.length > 0 && nombres.length > 0 && apellidos.length > 0 && email.length > 0 && nick.length > 0 && pass.length > 0){
      myApp.showPreloader('Registrando...');
      $.ajax({
          dataType: 'json',
          type: 'GET',
          data: {
              run: runP,
              nombres: nombres,
              apellidos: apellidos, 
              email: email,
              pass: pass,
              nickname: nick
              
          },
          url: 'http://servicioswebmoviles.hol.es/index.php/REGISTER_UBB',
          success: function (data, status, xhr) {
              if(data.resp){
                  myApp.hidePreloader();
                  window.location = "index.html";
              }else{
                  myApp.hidePreloader();
                  var msg = data.info;
                  myApp.alert(msg,'Error');
              }
          },
          error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Datos Incorrectos','Error');
          }
      });
    }else{
      myApp.alert('No ha enviado datos','Error');
    }
    
    
}

function back(){
  window.location = "index.html";  
}
function registrar(){
   window.location = "registro.html";

}

function enviar(){
    var user = $('#user').val();
    var pass = $('#pass').val();

    if(user.length > 0 && pass.length > 0){
      myApp.showPreloader('Iniciando sesión...');
      $.ajax({
          dataType: 'json',
          type: 'GET',
          data: {
              login: user,
              pass: pass,
              
          },
          url: 'http://servicioswebmoviles.hol.es/index.php/LOGIN_UBB',
          success: function (data, status, xhr) {
              if(data.resp === true){
                  localStorage.setItem('run',data.data.run);
                  localStorage.setItem('nombres',data.data.nombres);
                  localStorage.setItem('apellidos',data.data.apellidos);
                  localStorage.setItem('email',data.data.email);
                  localStorage.setItem('nick',data.data.nick);
                  myApp.hidePreloader();
                  window.location = "main.html";
              }else{
                  myApp.hidePreloader();var msg = data.info;
                  myApp.alert(msg,'Error');;
              }
          },
          error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Datos Incorrectos2','Error');
          }
      });
    }else{
      myApp.alert('No ha enviado datos','Error');
    }
}
