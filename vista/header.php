<div class="header">
    <div class="">
        <div>
            <div class="row">

                <div class="col l12 m12 s12">
                    <div class="row"><a href="#!"><img id="logoHeader" src="../img/logo.png"/></a></div>
                </div>
             
            </div>
        
                <?php
                session_start();
                
                if($_SESSION['tipo_usuario'] == NULL){
                
                    include 'navBarCliente.php'; 
                }else
                {
                    if($_SESSION['tipo_usuario'] == 1){
                        include 'navBarCliente.php';   
                    }else{
                     if($_SESSION['tipo_usuario'] == 0){
                        include 'navBar.php';   
                    }   
                    }
                }
                ?>
        </div>
    </div>
</div>
