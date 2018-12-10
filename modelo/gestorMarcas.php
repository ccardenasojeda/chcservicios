<?php
require_once ('gestorBaseDatos.php');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of gestorMarcas
 *
 * @author cristian
 */
class gestorMarcas {
    //put your code here
    static function listadoMarcas($filtro){
        if($filtro ==  NULL){
            $sql = "SELECT * FROM marcas";  
        }else{
            $sql = "SELECT * FROM marcas";  
        }
        //var_dump($sql);
        $conexion = new gestorBaseDatos();
        $resultado = $conexion->get_query($sql);
        return $resultado;
    }
}
