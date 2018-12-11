<?php
require_once 'gestorBaseDatos.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of gestorTipoProducto
 *
 * @author cristian
 */
class gestorTipoProducto {
    //put your code here
    static function listadoSelect(){
        $sql       = "SELECT * FROM tipo_producto";
        $conexion  = new gestorBaseDatos();
        $resultado = $conexion->get_query($sql);
        foreach ($resultado as $key => $value)
        {
             echo '<option value="'.$value['id_tipo_producto'].'">'.$value['descripcion'].'</option>'; 
        }
    }
}
