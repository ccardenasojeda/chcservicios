<?php

require_once('../modelo/gestorStock.php');
require_once ('../modelo/gestorMarcas.php');


switch ($_GET['opcion'])
{
    case 'listado':
        # code...
        $filtro = $_GET['filtro'];
        //var_dump($filtro);
        $stock = gestorStock::listadoStock($filtro);
        if (empty($stock))
        {
            echo '{"draw": 0, "recordsTotal": 0, "recordsFiltered": 0, "data":[]}'; //genera json vacio para datatable
        }
        else
        {
            echo '{"data":' . json_encode($stock) . '}'; //genera json para completar la tabla de carreras	
        }
        //echo json_encode($servicios);
        break;
    
}