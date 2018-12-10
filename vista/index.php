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
	<?php include 'header.php';?>
	<div class="centro"></div>
        <?php 
        //var_dump($_SESSION['usuario']);
        if($login){
        include 'tablaServicios.php';
        }else{
            //var_dump($login);
            include 'frmLogin.php';
        }
        ?>
	<?php include 'footer.php';?>
</body>
</html>
