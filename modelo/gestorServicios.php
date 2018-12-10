<?php
require_once ('gestorBaseDatos.php');
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class gestorServicios{
    
    
    
    static function listadoServicios($filtro){
        if($filtro == NULL ){
            $sql = "SELECT * FROM servicios";
        }else{
            $sql = "SELECT * FROM servicios";
        }
        $conexion = new gestorBaseDatos();
        $resultado = $conexion->get_query($sql);
        return $resultado;
    }
}