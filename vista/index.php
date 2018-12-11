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
        <?php include 'scripts.php';?>
</body>
</html>
