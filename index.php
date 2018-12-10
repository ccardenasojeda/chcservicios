<!DOCTYPE html>
<html lang="en">
    <head>
        <title>CHCServicios</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="img/logo_circulo.png" type="image/png" />

        <!-- Compiled and minified CSS -->
        <link href="materialize/material-design-icons/iconfont/material-icons.css" rel="stylesheet">
        <link rel="stylesheet" href="materialize/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <link type = "text/css" rel="stylesheet"  href="css/style.css" media="all">
        <!-- Responsive Video Slider CSS -->
    </head> 
    <body>
     <div class="row center-align"><a href="#!"><img width="300px;" src="img/logo_circulo.png"/></a></div>
     <div class="container" >
            <div class="row">
                
                <main>
                    <center>
                        <div class="container">
                            <div  class="grey-text lighten-4 row" 
                                  style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px; margin-top: 1px; solid #EEE;">
                                <h5>INICIAR SESIÓN</h5>
                                <div class="section"><i class="mdi-alert-error red-text"></i></div>
                                
                                <form action="modelo/login.php" method="post"> 
                                     <div class='row'>
                                    <div class='input-field'>
                                        <input class='validate' type="text" name='username' id='email' required />
                                        <label for='email'>Usuario</label>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='input-field'>
                                        <input class='validate' type='password' name='password' id='password' required />
                                        <label for='password'>Clave</label>
                                    </div>
                                    
                                </div>
                                <br/>
                                <center>
                                    <div class='row'>
                                        <button type='submit' name='btn_login' class='btn btn waves-effect z-depth-1 y-depth-1'>ingresar</button>
                                    </div>
                                </form>
                                </center>

                            </div>
                        </div>
                    </center>
                </main>
            </div>
        </div>


        <footer class="page-footer grey darken-2">
            <div class="footer-copyright">
                <div class="container">by <a class="brown-text text-lighten-3" href="#!">CST Sistemas</a>
                </div>
            </div>
        </footer>
    </body>
</html>