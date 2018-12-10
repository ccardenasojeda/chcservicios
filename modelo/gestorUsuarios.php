<?php
require_once ('gestorBaseDatos.php');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of gestorUsuarios
 *
 * @author cristian
 */
class gestorUsuarios {
    //put your code here
    static function obtenerUsuario($usuario){
        $sql = "SELECT * FROM usuario WHERE usuario = '$usuario'";
        $conexion = new gestorBaseDatos();
        $result = $conexion->get_query($sql);
        return $result;
    }
}
