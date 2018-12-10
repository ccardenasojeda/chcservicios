jQuery(document).ready(function(){

    tablaServicios('nada');
function tablaServicios(where) {

 //jQuery(".filtroBuscar").hide();
 //jQuery("#tablaFiltro").show();
 var datos = $.get('../controlador/ci_servicios.php?opcion=listado&filtro=0');
 console.log(datos);
 jQuery('#cdrServicios').DataTable().clear().draw();
 jQuery('#cdrServicios').DataTable( {
  //dom: 'Bfrtip',
  destroy : true,
  "bDeferRender": true,
  responsive: true,
  pageLength: 5,
  select: 'single',
  lengthChange: false,
  "order": [[ 1, "asc" ]],     
  "sPaginationType": "full_numbers",
  "ajax": {
    "url" : "../controlador/ci_servicios.php?opcion=listado&filtro=0",
    "type": "GET"
  },      
  "columns": [
                { "data": "nombre" },//0
                { "data": "inicio" },//1
                { "data": "fin" },//2
                { "data": "detalle" },//3
                { "data": "id_servicio" }//4
                ],
                "oLanguage": {
                  "sProcessing":     "Procesando...",
                  "sLengthMenu": 'Mostrar <select>'+
                  '<option value="10">10</option>'+
                  '<option value="20">20</option>'+
                  '<option value="30">30</option>'+
                  '<option value="40">40</option>'+
                  '<option value="50">50</option>'+
                  '<option value="-1">All</option>'+
                  '</select> registros',    
                  "sZeroRecords":    "No se encontraron resultados",
                  "sEmptyTable":     "Ningún Servicio pendiente que mostrar",
                  "sInfo":           "Mostrando del (_START_ al _END_) de un total de _TOTAL_ registros",
                  "sInfoEmpty":      "Mostrando del 0 al 0 de un total de 0 registros",
                  "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                  "sInfoPostFix":    "",
                  "sSearch":         "Filtrar:",
                  "sUrl":            "",
                  "sInfoThousands":  ",",
                  "sLoadingRecords": "Por favor espere - cargando...",
                  "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                  },
                  "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  },
                  select: {
                    rows: {
                      _: "%d Fila Seleccionada",
                      0: "Click en una fila para seleccionar",
                      1: "1 Fila Seleccionada"
                    }
                  }
                },
                "columnDefs": 
                [
                      /**
                      {
                          "targets": [ 0 ],
                          "visible": false,
                          "searchable": false
                        },**/

                        {
                          "targets": [ 4 ],
                          "visible": false,
                          "searchable": false
                        },
                        {
                          // The `data` parameter refers to the data for the cell (defined by the
                          // `data` option, which defaults to the column being worked with, in
                          // this case `data: 0`.
                          "render": function ( data, type, row ) {
                            //console.log(row);
                            return '<a id="ver" class="btn-floating red info" title="Ver Información de Servicio" onclick="$(this).btnMuestraInfo('+row.id+')"> <i class="material-icons" >pageview</i></a>';
                            

                          },
                          "width": "10%",
                          "targets": 5
                        }

              ]

            } );
  
   }
$.fn.btnMuestraInfo = function(id) {
  console.log("++++++++++++"+jQuery(".info").attr("id"));
  //muestraInfoCarrera(id);
};
});