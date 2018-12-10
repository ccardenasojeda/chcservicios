<?php

require_once('../modelo/gestorServicios.php');
require_once ('../modelo/gestorMarcas.php');


switch ($_GET['opcion'])
{
    case 'listado':
        # code...
        $filtro = $_GET['filtro'];
        //var_dump($filtro);
        $servicios = gestorServicios::listadoServicios($filtro);
        if (empty($servicios))
        {
            echo '{"draw": 0, "recordsTotal": 0, "recordsFiltered": 0, "data":[]}'; //genera json vacio para datatable
        }
        else
        {
            echo '{"data":' . json_encode($servicios) . '}'; //genera json para completar la tabla de carreras	
        }
        //echo json_encode($servicios);
        break;
    case 'prueba':
        $marcas = gestorMarcas::listadoMarcas(NULL);
        //echo json_encode($marcas);
        //var_dump($marcas);
        if (empty($marcas))
        {
            echo '{"draw": 0, "recordsTotal": 0, "recordsFiltered": 0, "data":[]}'; //genera json vacio para datatable
        }
        else
        {
            echo '{"data":' . json_encode($marcas) . '}'; //genera json para completar la tabla de carreras	
        }
        break;
}