<?php

require_once ('gestorBaseDatos.php');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of gestorStock
 *
 * @author cristian
 */
class gestorStock {

    //put your code here
    static function listadoStock($filtro)
    {
        if ($filtro == NULL)
        {
            $sql = "   SELECT  pr.*, DATE_FORMAT(`fecha_alta`, '%d/%m/%Y %H:%i') as fecha_alta_form, tp.descripcion as tipo_producto_desc , m.descripcion as marca_desc
                    FROM productos pr
                    INNER JOIN tipo_producto tp ON pr.id_productos = tp.id_tipo_producto
                    INNER JOIN marcas m ON pr.id_marcas = m.id_marcas
                    WHERE 1";
        }
        else
        {
            $sql = " SELECT  pr.*, DATE_FORMAT(`fecha_alta`, '%d/%m/%Y %H:%i') as fecha_alta_form, tp.descripcion as tipo_producto_desc , m.descripcion as marca_desc
                    FROM productos pr
                    INNER JOIN tipo_producto tp ON pr.id_productos = tp.id_tipo_producto
                    INNER JOIN marcas m ON pr.id_marcas = m.id_marcas
                    WHERE 1";
        }
        $conexion = new gestorBaseDatos();
        $resultado = $conexion->get_query($sql);
        return $resultado;
    }

    static function altaArticulo($datos)
    {
        $sql = "INSERT INTO
                `productos`(`nombre`, `detalle`,`precio`,`id_tipo_producto`,`id_marcas`,`cantidad`)
                 VALUES('".$datos['nombre_art']."','".$datos['detalle']."', ".$datos['precio'].", ".$datos['tipo_art'].", ".$datos['marca'].", ".$datos['cantidad'].")";
        $conexion = new gestorBaseDatos();
        $resultado = $conexion->set_query($sql);
        $sql = "UPDATE `productos` SET `codigo`= CONCAT(id_productos,DATE_FORMAT(`fecha_alta`, '%Y')) WHERE `id_productos` IN (SELECT LAST_INSERT_ID())";
        $conexion->set_query($sql);
        return $resultado;
        
    }

}
