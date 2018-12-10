<?php

session_start();

require_once './gestorUsuarios.php';
$_SESSION['msje_error'] = "";

$conexion = new gestorBaseDatos();
$username = $_POST['username'];
$password = $_POST['password'];
$result = gestorUsuarios::obtenerUsuario($username);

if (!empty($result))
{
    if (md5($password) == $result[0]['clave'])
    {
        echo 'paso';
        $_SESSION['loggedin'] = true;
        $_SESSION['usuario'] = $username;
        $_SESSION['tipo_usuario'] = $result[0]['tipo_usuario'];
        $_SESSION['start'] = time();
        $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);
        header('location: ../vista/index.php');
    }
    else
    {
        $_SESSION['msje_error'] = "Los datos ingresados no son correctos, por favor vuelva a intentarlo!";
        header('location: ../vista/index.php');
    }
}
else
{
    $_SESSION['msje_error'] = "Los datos ingresados no son correctos, por favor vuelva a intentarlo!";
    header('location: ../vista/index.php');
}
//header('location: ../vista/index.php');
//validacion de usuario segun base de datos seleccionada.

