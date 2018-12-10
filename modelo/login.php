<?php

session_start();
/**
 * 
 */
require_once './gestorBaseDatos.php';
$_SESSION['msje_error'] = "";

$conexion = new gestorBaseDatos();
$username = $_POST['username'];
$password = $_POST['password'];
header('location: ../vista/index.php');
//validacion de usuario segun base de datos seleccionada.
//AccesoSistema::validarusUario($conexion, $username, $password);

class AccesoSistema {

    static function validarusUario($conexion, $base_datos, $username, $password) {
        
        /**$conexion->conectar($base_datos);
        $sql = "SELECT * FROM usuario WHERE username = '$username'";
        $result = $conexion->get;
        if (mysql_num_rows($result) > 0) {
            $row = mysql_fetch_row($result);
            if (md5($password) == $row[2]) {

                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $username;
                $_SESSION['tipo_usuario'] = $row[3];
                $_SESSION['uuaa'] = $row[4];
                $_SESSION['start'] = time();
                $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);


                header('location: ../Vistas/listarReportes.php');
            } else {
                $_SESSION['msje_error'] = "Los datos ingresados no son correctos, por favor vuelva a intentarlo!";
                header('location: ../Vistas/index.php');
            }
        } else {
            $_SESSION['msje_error'] = "Los datos ingresados no son correctos, por favor vuelva a intentarlo!";
            
        }**/
    }

}
