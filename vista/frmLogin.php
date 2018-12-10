 
     <div class="container" >
            <div class="row">
                
                <main>
                    <center>
                        <div class="container">
                            <div  class="white-text lighten-4 row" 
                                  style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px; margin-top: 1px; ">
                                <h5 style="color: white;">INICIAR SESIÓN</h5>
                                <div class="section"><i class="mdi-alert-error white-text"> <?php echo $_SESSION['msje_error'];$_SESSION['msje_error'] = ""; ?></i></div>
                                
                                <form action="../modelo/login.php" method="post"> 
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