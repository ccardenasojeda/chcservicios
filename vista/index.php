<?php 
session_start();
$login =$_SESSION['loggedin'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>CHCServicios</title>
	<?php include 'head.php';?>
</head>
<body>
    <!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
    <li><a class="stock" href="#!">ABM Artículos</a></li>
    <li><a href="#!">Ver Artículos</a></li>
    <!--<li class="divider"></li>
    <li><a href="#!"></a></li>-->
</ul>
	<?php include 'header.php';?>
	<div class="centro">
        <?php 
        //var_dump($_SESSION['usuario']);
        if($login){
        include 'tablaServicios.php';
        }else{
            //var_dump($login);
            include 'frmLogin.php';
        }

        ?>
        </div>
	<?php include 'footer.php';?>
</body>
</html>
