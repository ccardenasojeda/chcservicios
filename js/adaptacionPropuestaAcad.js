jQuery(document).ready(function(){

  /*Oculta la barra de menu de la pagina principal*/

  jQuery(".content").hide();

    /**jQuery('.dropdown-button').dropdown({

        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        //alignment: 'center' // Displays dropdown with edge aligned to the left of button
      });**/

      jQuery(".dropdown-content").css("margin-top", -13);
      jQuery(".dropdown-content").css("margin-left", 50);
      jQuery(".dropdown-content").css("min-width", 250);

      jQuery(".dropdown-content li>a").css("color", "#ffffff");
      jQuery(".dropdown-content li>a").css("font-size", 12);
      jQuery(".dropdown-content li>a").hover(function(){
       jQuery(this).css("color", "#000000");
     },function(){
       jQuery(this).css("color", "#ffffff");
     });
      jQuery( "#btnIngenieria" ).hover(function(){
  	 //jQuery('html,body').animate({scrollTop: jQuery("#btnIngenieria").offset().top}, 2000);
  	 jQuery(".dropdown-content").css("background-color", "#361600");//Color de fondo
    });
      jQuery( "#btnInformatica" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnInformatica").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#910039");//Color de fondo
  });
      jQuery( "#btnRecursos" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnRecursos").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#2CA089");//Color de fondo
  });
      jQuery( "#btnCsBasicas" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnCsBasicas").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#A35000");//Color de fondo
  });
      jQuery( "#btnTurismo" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnTurismo").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#2d1650");//Color de fondo
  });
      jQuery( "#btnTsocial" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnTsocial").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#E33000");//Color de fondo
  });
      jQuery( "#btnHistoria" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnHistoria").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#FFB300");//Color de fondo
  });
      jQuery( "#btnComunicacion" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnComunicacion").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#FF7800");//Color de fondo
  });
      jQuery( "#btnPsicopedagogia" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnPsicopedagogia").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#FF00FF");//Color de fondo
  });
      jQuery( "#btnEducacion" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnEducacion").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#9E1FFF");//Color de fondo
  });
      jQuery( "#btnEnfermeria" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnEnfermeria").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#3F7800");//Color de fondo
  });
      jQuery( "#btnGeografia" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnGeografia").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#005544");//Color de fondo
  });
      jQuery( "#btnLetras" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnLetras").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#BAA500");//Color de fondo
  });
      jQuery( "#btnAdministracion" ).hover(function(){
  	//jQuery('html,body').animate({scrollTop: jQuery("#btnAdministracion").offset().top}, 2000);
    jQuery(".dropdown-content").css("background-color", "#0043FA");//Color de fondo
  });


      jQuery("#btnRecursos").css("background-image", "url(../img/recursos_naturales.png)");
      jQuery("#btnIngenieria").css("background-image", "url(../img/ingenieria.png)");
      jQuery("#btnInformatica").css("background-image", "url(../img/informatica.png)");
      jQuery("#btnCsBasicas").css("background-image", "url(../img/csbasicas.png)");
      jQuery("#btnTurismo").css("background-image", "url(../img/turismo.png)");
      jQuery("#btnTsocial").css("background-image", "url(../img/trabajo_social.png)");
      jQuery("#btnHistoria").css("background-image", "url(../img/historia.png)");
      jQuery("#btnComunicacion").css("background-image", "url(../img/comunicacion.png)");
      jQuery("#btnPsicopedagogia").css("background-image", "url(../img/psicopedagogia.png)");
      jQuery("#btnEducacion").css("background-image", "url(../img/educacion.png)");
      jQuery("#btnEnfermeria").css("background-image", "url(../img/esc_enfermeria.png)");
      jQuery("#btnGeografia").css("background-image", "url(../img/geografia.png)");
      jQuery("#btnLetras").css("background-image", "url(../img/letras.png)");
      jQuery("#btnAdministracion").css("background-image", "url(../img/administracion.png)");
      jQuery(".btn1").css("background-repeat", "no-repeat");
      jQuery(".btn1").css("background-color", "Transparent");
      jQuery(".btn1").css("height", 70);  
      jQuery(".btn1").css("width", 250);

      jQuery(".modal-trigger").click(function(){

        jQuery("#nombreCarreraModal").text(jQuery(this).text());//Pone el nombre de la carrera seleccionada

        /**Agrega la imagen del logo segun la escuela seleccionada**/
        if(jQuery(this).attr("class") == "modal-trigger ING"){
          jQuery("#logoModalEsc").attr('src','../img/ingenieria.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger INF"){
          jQuery("#logoModalEsc").attr('src','../img/informatica.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger CBE"){
          jQuery("#logoModalEsc").attr('src','../img/csbasicas.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger TUR"){
          jQuery("#logoModalEsc").attr('src','../img/turismo.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger TSO"){
          jQuery("#logoModalEsc").attr('src','../img/trabajo_social.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger HIS"){
          jQuery("#logoModalEsc").attr('src','../img/historia.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger COM"){
          jQuery("#logoModalEsc").attr('src','../img/comunicacion.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger PSI"){
          jQuery("#logoModalEsc").attr('src','../img/psicopedagogia.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger ENF"){
          jQuery("#logoModalEsc").attr('src','../img/esc_enfermeria.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger GEO"){
          jQuery("#logoModalEsc").attr('src','../img/geografia.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger LET"){
          jQuery("#logoModalEsc").attr('src','../img/letras.png'); 
        }
        if(jQuery(this).attr("class") == "modal-trigger ADM"){
          jQuery("#logoModalEsc").attr('src','../img/administracion.png');  
        }
        if(jQuery(this).attr("class") == "modal-trigger RNA"){
          jQuery("#logoModalEsc").attr('src','../img/recursos_naturales.png');
        }
        if(jQuery(this).attr("class") == "modal-trigger EDU"){
          jQuery("#logoModalEsc").attr('src','../img/educacion.png');
        }

        //Valida que id contenga un valor correcto y no id de botones de carreras 
        if(jQuery(this).attr("id")   !== undefined && jQuery(this).attr("class") !== undefined){
         /**Agrega la informacion segun el id de la carrera seleccionada**/
         console.log(jQuery(this).attr("id"));
         console.log(jQuery(this).attr("class"));

         $.ajax({
          data:  'opcion=infoCarrera&id='+jQuery(this).attr("id"),
          url:   '../controladores/controladorCarreras.php',
          type:  'GET',
          beforeSend: function () {
                        //$("#resultado").html("Procesando, espere por favor...");
                      },
                      success:  function (data) {
                        var datos = JSON.parse(data);
                        console.log(datos[0]);
                        if (datos[0] !== undefined) {
                        //GENERA EL LINK DE DESCARGA DEL PLAN DE LA CARRERA                    
                        jQuery("#descargaPlan").attr('href', '../controladores/descargarPlan.php?plan='+datos[0].pdf_plan+"&nombre="+datos[0].nombre_carrera);
                        console.log(datos[0].pdf_plan); 
                        jQuery("#infoTabla").DataTable().destroy();
                        var fila= '';
                        for (var i = 0; i < datos.length; i++) {
                         if(datos[i].es_a_distancia){
                           fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td>Modalidad Distancia</td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                         }else{
                          console.log(datos[i].id_ua);
                          console.log(datos[i].cod_carrera);
                          if(datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '912' || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '913'
                            || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '78' || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '84'){
                            fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td></td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                        }else
                        fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td>Modalidad Presencial</td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                      }
                    }
                    jQuery("#info_datos").html(fila);
                    jQuery("#infoTabla").DataTable({

                      destroy : true,
                      "bDeferRender": true,
                      responsive: true,
                      pageLength: 5,
                      lengthChange: false,
                      "searching": false,
                      "info":     false,
                      "paging":   false,
                      "ordering": false,
                      "columnDefs": [
                      {
                        "targets": 0,
                        "width"  : "20%"
                      },
                      {
                        "targets": 1,
                        "width"  : "20%"
                      },
                      {
                        "targets": 2,
                        "width"  : "20%"
                      },
                      {
                        "targets": 3,
                        "width"  : "40%"
                      }
                      ]
                      
                    });
                  }

                }
              });
       }


     });


/*REFRESCA LA TABLA*
*/
setInterval(function(){
  var ventana_ancho = $(window).width();
  var ventana_alto = $(window).height();
  //console.log(ventana_ancho+'x'+ventana_alto);
  if(ventana_ancho > 599)
  {
    jQuery("#infoTabla").DataTable().destroy();
    jQuery("#infoTabla").DataTable({

      destroy : true,
      "bDeferRender": true,
      responsive: true,
      pageLength: 5,
      lengthChange: false,
      "searching": false,
      "info":     false,
      "paging":   false,
      "ordering": false,
      "columnDefs": [
      {
        "targets": 0,
        "width"  : "20%"
      },
      {
        "targets": 1,
        "width"  : "20%"
      },
      {
        "targets": 2,
        "width"  : "20%"
      },
      {
        "targets": 3,
        "width"  : "40%"
      }
      ]
      
    });
  }
  
  //alert(ventana_ancho);
  //alert(ventana_alto);
//
}, 1000);
jQuery("#ingElecMec").click(function(){
  jQuery("#volver").hide();
        //jQuery("#btnIngenieria").css("background-image", "url(../img/ingenieria.png)");
      });
jQuery(".buscar").click(function(){
  jQuery(".escuelasFondo").empty();
  jQuery(".carreraSeleccionada").load("../vista/filtroCarrera.php");
        //jQuery(".carreraSeleccionada").load("../controladores/controladorCarreras.php");
        //jQuery("#volver").show();
        //jQuery("#btnIngenieria").css("background-image", "url(../img/ingenieria.png)");
      });
jQuery(".escuelas").click(function(){
  jQuery(".escuelasFondo").empty();
  jQuery(".carreraSeleccionada").load("../rvslider/starter-template.php");
        //jQuery(".carreraSeleccionada").load("../controladores/controladorCarreras.php");
        //jQuery("#volver").show();
        //jQuery("#btnIngenieria").css("background-image", "url(../img/ingenieria.png)");
      });
jQuery(".carrera").click(function(){
  jQuery(".escuelasFondo").empty();
  jQuery(".carreraSeleccionada").load("../vista/carrerasOpciones.php");
        //jQuery("#volver").show();
        //jQuery("#btnIngenieria").css("background-image", "url(../img/ingenieria.png)");
      });

jQuery(".pruebas").click(function(){
  jQuery(".escuelasFondo").empty();
  jQuery(".carreraSeleccionada").load("../vista/pruebas.php");
});

jQuery("#btnLimpiar").click(function () {

  jQuery("#selectUnidad").val("VACIO");
  jQuery("#selectEscuela").val("VACIO");
  jQuery("#selectTipo").val("VACIO");
  jQuery('select').material_select();

});

jQuery("#btnBuscar").click(function(){
  var 
  unidad        = $("#selectUnidad").val(),
  escuela       = $("#selectEscuela").val(),
  tipo          = $("#selectTipo").val(),
  modalidad     = $("#selectModalidad").val();
  var where     = [];
  if(unidad    != "VACIO"){where.push("cua.id_ua          ='"+unidad+"'");}
  if(escuela   != "VACIO"){where.push("c.sigla_escuela    ='"+escuela+"'");}
  if(tipo      != "VACIO"){where.push("c.nivel_academico  ='"+tipo+"'");}
  if(modalidad != "VACIO"){where.push("cua.es_a_distancia ="+modalidad);}

  console.log(where.length);
  if(where.length > 0){
      //filtroTablaActividad(where.toString().split(",").join(" AND "));
      console.log(where.toString().split(",").join(" AND "));
      filtroTablaCarreras(where.toString().split(",").join(" AND "));
    }
    //jQuery(".filtroBuscar").hide();
    //jQuery("#tablaFiltro").show();
    
    
  });
function filtroTablaCarreras(where) {

 jQuery(".filtroBuscar").hide();
 jQuery("#tablaFiltro").show();
 jQuery('#cdrCarreras').DataTable().clear().draw();
 jQuery('#cdrCarreras').DataTable( {
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
    "url" : "../controladores/controladorCarreras.php?opcion=filtroCarreras&datosSql="+where,
    "type": "POST"
  },      
  "columns": [
                { "data": "id" },//0
                { "data": "nombre" },//1
                { "data": "nivel_academico" },//2
                { "data": "nivel_academico_descrip" },//3
                { "data": "area" },//4
                { "data": "escuela" },//5
                { "data": "sigla_escuela"},//6
                { "data": "id_ua" }//7
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
                  "sEmptyTable":     "Ningún dato disponible en esta tabla",
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
                          "targets": [ 2 ],
                          "visible": false,
                          "searchable": false
                        },
                        {
                          "targets": [ 4 ],
                          "visible": false
                        },
                        {
                          "targets": [ 6 ],
                          "visible": false
                        },
                        {
                          // The `data` parameter refers to the data for the cell (defined by the
                          // `data` option, which defaults to the column being worked with, in
                          // this case `data: 0`.
                          "render": function ( data, type, row ) {

                            if(row.id.length == 1){
                              return '(00'+data+')'
                            }else
                            if(row.id.length == 2)
                            {
                              return '(0'+data+')'
                            }else
                            {
                              return '('+data+')'
                            }
                          },
                          "width": "7%",
                          "targets": 0
                        },
                        {
                          "targets": 7,
                          "width"  : "10%"
                        },
                        {
                          "targets": 3,
                          "width"  : "10%"
                        },
                        {
                          "targets": 1,
                          "width"  : "30%"
                        },
                        {
                          // The `data` parameter refers to the data for the cell (defined by the
                          // `data` option, which defaults to the column being worked with, in
                          // this case `data: 0`.
                          "render": function ( data, type, row ) {
                            //console.log(row);
                            return '<a id="filtro" class="btn-floating red info" title="Ver Información de Carrera" onclick="$(this).btnMuestraInfo('+row.id+')"> <i class="material-icons" >pageview</i></a>';
                            /**if(row.id.length == 1){
                              return '(00'+data+')'
                            }else
                            if(row.id.length == 2)
                            {
                              return '(0'+data+')'
                            }else
                            {
                              return '('+data+')'
                            }**/

                          },
                          "width": "10%",
                          "targets": 8
                        }

              ]/*
                ,  
              buttons: [

              {
                text: '<a class="btn-floating btn-large waves-effect waves-light blue-grey darken-3" title="Ver Carrera"> <i class="material-icons" >pageview</i></a>',
                action: function () {
                  var count = jQuery('#cdrCarreras').DataTable().rows( { selected: true } ).count();
                  if(count > 0){
                    var fila = jQuery('#cdrCarreras').DataTable().row({ selected: true }).data();
                    console.log(fila);
                    muestraInfoCarrera(fila);  
                  }else
                  {
                    Materialize.toast('Debe seleccionar una Carrera para ver los detalles!', 6000, '#263238 blue-grey darken-4 rounded')
                  }
                }
              }
              ] 
              */

            } );
  /*
    $.ajax({
      type  : "GET",
      url   : "../controladores/controladorCarreras.php",
      data  : "opcion=filtroCarreras&datosSql="+where, 
      //Serializamos los datos del formulario para que sean tratados por el controller de las actividades a cargar
      success : function(data) {
        console.log(data);
        //listadoVinculaciones = data;
        //tamanioListado       = listadoVinculaciones.length;
        var td = '';
        var len = data.length;
       

      },
      error : function(xml, msg) {
        //$("#inferior").text("Error: "+msg);
      }
    });*/
     //Fin $.ajax
   }
   //testea click sobre opcion de acordeon para desplegar tabla
   $("#ordenAlf").click(function(){
     //limpia las tablas para no tener problemas con los botones renderisados.
     jQuery('#cdrTiposCarreras').DataTable().clear().draw();
     mostrarTablaOrdenAlf();
     $(".tablaOrdenAlf").show();
   });
   function mostrarTablaOrdenAlf(){

     jQuery('#cdrCarrerasAlf').DataTable( {
    //dom: 'Bfrtip',
    destroy: true,
    "bDeferRender": true,
    responsive: true,
    pageLength: 5,
    select: 'single',
    lengthChange: false,
    "order": [[1, "asc" ]],     
    "sPaginationType": "full_numbers",
    "ajax": {
      "url" : "../controladores/controladorCarreras.php?opcion=listado",
      "type": "POST"
    },          
    "columns": [
    { "data": "id" },
    { "data": "nombre" },
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
      "sEmptyTable":     "Ningún dato disponible en esta tabla",
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
   "columnDefs": [   

   {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {

                  if(row.id.length == 1){
                    return '(00'+data+')'
                  }else
                  if(row.id.length == 2)
                  {
                    return '(0'+data+')'
                  }else
                  {
                    return '('+data+')'
                  }
                },
                "width": "10%",
                "targets": 0
              },

              {
                          // The `data` parameter refers to the data for the cell (defined by the
                          // `data` option, which defaults to the column being worked with, in
                          // this case `data: 0`.
                          "render": function ( data, type, row ) {
                            return '<a id="alf" class="btn-floating red info" title="Ver Información de Carrera" onclick="$(this).btnMuestraInfo('+row.id+')"> <i class="material-icons" >pageview</i></a>';
                          },
                          "width": "5%",
                          "targets": 2
                        },
                        {
                          "width": "70%",
                          "targets": 1  
                        }
              ]/*
              ,
              buttons: [

              {
                text: '<a class="btn-floating btn-large waves-effect waves-light blue-grey darken-3" title="Ver Carrera"> <i class="material-icons" >pageview</i></a>',
                action: function () {
                  var count = jQuery('#cdrCarrerasAlf').DataTable().rows( { selected: true } ).count();
                  if(count > 0){
                    var fila = jQuery('#cdrCarrerasAlf').DataTable().row({ selected: true }).data();
                    console.log(fila);
                    muestraInfoCarrera(fila);  
                  }else
                  {
                    Materialize.toast('Debe seleccionar una Carrera para ver los detalles!', 6000, '#263238 blue-grey darken-4 rounded')
                  }
                }
              }
              ]  */   
            } ); 
}    

/**************         *BOTONES       *********************/

jQuery('#btnVolverTablaFiltro').click(function(){

  jQuery("#tablaFiltro").hide();
  jQuery(".filtroBuscar").show();

});

/************** BOTONES OPCIONES CARRERAS ************************/

jQuery("#btn_lic").click(function(){

  var tipo = " c.nombre LIKE 'Lic%'";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Lincenciaturas");
});

jQuery("#btn_ing").click(function(){

  var tipo = " c.nombre LIKE 'Ing%'";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Ingenierias");

});
jQuery("#btn_prof").click(function(){

  var tipo = " c.nombre LIKE 'Prof%'";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Profesorados");

}); 
jQuery("#btn_tec").click(function(){

  var tipo = " c.nombre LIKE 'Tec%'";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Tecnicaturas");
  jQuery("#mensajeUnidad").hide();

});
jQuery("#btn_gra").click(function(){

  var tipo = " c.nivel_academico = 'GRA' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras de Grado");
  jQuery("#mensajeUnidad").hide();
});
jQuery("#btn_pre").click(function(){

  var tipo = " c.nivel_academico = 'PRE' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras de Pregrado");
  jQuery("#mensajeUnidad").hide();
});
jQuery("#btn_pos").click(function(){

  var tipo = " c.nivel_academico = 'POS' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras de Postgrado");
  jQuery("#mensajeUnidad").hide();
});
/*************** BOTONES UNIDADES *******************/
jQuery("#btn_uaco").click(function(){

  var tipo = " cua.id_ua = 'UACO' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras en Caleta Olivia");
  jQuery("#mensajeUnidad").hide();
});
jQuery("#btn_uarg").click(function(){

  var tipo = " cua.id_ua = 'UARG' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras en Río Gallegos");
  jQuery("#mensajeUnidad").hide();
});
jQuery("#btn_uart").click(function(){

  var tipo = " cua.id_ua = 'UART' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras en Río Turbio");
  jQuery("#mensajeUnidad").hide();
});
jQuery("#btn_uasj").click(function(){

  var tipo = " cua.id_ua = 'UASJ' ";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras en San Julián");
  jQuery("#mensajeUnidad").html("<blockquote><b>NOTA: </b>"+
    "El cursado de las carreras, con modalidad presencial, contempla una fuerte interacción con el Entorno Virtual de Unpabimodal,"+
    "reduciendo así significativamente las actividades presenciales en la Unidad Académica.</blockquote>");
  jQuery("#mensajeUnidad").show();


});

jQuery("#btn_todas").click(function(){

  var tipo = "cua.estado_propuesta = TRUE";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Todas las Carreras");
  jQuery("#mensajeUnidad").hide();
});

jQuery("#btn_pres").click(function(){

  var tipo = "cua.es_a_distancia = FALSE";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras Presenciales");
  jQuery("#mensajeUnidad").hide();
});

jQuery("#btn_dist").click(function(){

  var tipo = "cua.es_a_distancia = TRUE";
  tablaTipoCarrera(tipo);
  jQuery("#tituloTablaTiposCarrera").text("Carreras a Distancia");
  jQuery("#mensajeUnidad").hide();
});


function tablaTipoCarrera(tipo){
  jQuery('#cdrTiposCarreras').DataTable( {
      //dom: 'Bfrtip',
      destroy: true,
      "bDeferRender": true,
      responsive: true,
      pageLength: 3,
      select: 'single',
      lengthChange: false,
      "order": [[1, "asc" ]],     
      "sPaginationType": "full_numbers",
      "ajax": {
        "url" : "../controladores/controladorCarreras.php?opcion=carrerasTipo&datosSql="+tipo,
        "type": "POST"
      },          
      "columns": [
      { "data"  : "id" },
      { "data"  : "nombre"}
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
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
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
     "columnDefs": [
            /*{
                "targets": [0],
                "visible": false,
                "searchable": false
              },*/
              {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {

                  if(row.id.length == 1){
                    return '(00'+data+')'
                  }else
                  if(row.id.length == 2)
                  {
                    return '(0'+data+')'
                  }else
                  {
                    return '('+data+')'
                  }
                },
                "targets": 0,
                "width": "10%"
              },
              {
                "width": "70%",
                "targets": 1  
              }
              ,

              {
                 // The `data` parameter refers to the data for the cell (defined by the
                 // `data` option, which defaults to the column being worked with, in
                 // this case `data: 0`.
                 "render": function ( data, type, row ) {
                   return '<a id="'+tipo+'" class="btn-floating red info" title="Ver Información de Carrera" onclick="$(this).btnMuestraInfo('+row.id+')"> <i class="material-icons" >pageview</i></a>';
                 },

                 "width": "10%",
                 "targets": 2          
               }


              ]/*
              ,
              buttons: [

              {
                text: '<a class="btn-floating btn-large waves-effect waves-light blue-grey darken-3" title="Ver Carrera"> <i class="material-icons" >pageview</i></a>',
                action: function () {
                  var count = jQuery('#cdrTiposCarreras').DataTable().rows( { selected: true } ).count();
                  if(count > 0){
                    var fila = jQuery('#cdrTiposCarreras').DataTable().row({ selected: true }).data();
                    console.log(fila);
                    muestraInfoCarrera(fila);  
                  }else
                  {
                    Materialize.toast('Debe seleccionar una Carrera para ver los detalles!', 6000, '#263238 blue-grey darken-4 rounded')
                  }
                }
              }
              ]*/   
            });
}

$.fn.btnMuestraInfo = function(id) {
  console.log("++++++++++++"+jQuery(".info").attr("id"));
  muestraInfoCarrera(id);
};
function muestraInfoCarrera(fila){
  var id;
  /**Agrega la informacion segun el id de la carrera seleccionada**/
  if(fila.id != undefined){
    id      = fila.id;
  }else
  {
    id = fila;
  }
  console.log("id: "+id);

  $.ajax({
    data:  'opcion=infoCarrera&id='+id,
    url:   '../controladores/controladorCarreras.php',
    type:  'GET',
    beforeSend: function () {
                        //$("#resultado").html("Procesando, espere por favor...");
                      },
                      success:  function (data) {
                        //$("#resultado").html(response);

                        var datos = JSON.parse(data);
                        var nombre  = datos[0].nombre_carrera,
                        escuela = datos[0].sigla_escuela;
                        $('.modal-trigger').leanModal();
                        $('#modal2').openModal();
                        console.log(datos);
                        jQuery("#nombreCarreraModal").text(nombre);//Pone el nombre de la carrera seleccionada
                        jQuery("#codigo").text(datos[0].cod_carrera);//Pone el codigo de la carrera seleccionada
                        //Agrega la imagen del logo segun la escuela seleccionada
                        if(escuela == "ING"){
                          jQuery("#logoModalEsc").attr('src','../img/ingenieria.png');  
                        }
                        if(escuela == "INF"){
                          jQuery("#logoModalEsc").attr('src','../img/informatica.png');  
                        }
                        if(escuela == "CBE"){
                          jQuery("#logoModalEsc").attr('src','../img/csbasicas.png');  
                        }
                        if(escuela == "TUR"){
                          jQuery("#logoModalEsc").attr('src','../img/turismo.png');  
                        }
                        if(escuela == "TSO"){
                          jQuery("#logoModalEsc").attr('src','../img/trabajo_social.png');  
                        }
                        if(escuela == "HIS"){
                          jQuery("#logoModalEsc").attr('src','../img/historia.png');  
                        }
                        if(jQuery(this).attr("class") == "modal-trigger COM"){
                          jQuery("#logoModalEsc").attr('src','../img/comunicacion.png');  
                        }
                        if(escuela == "PSI"){
                          jQuery("#logoModalEsc").attr('src','../img/psicopedagogia.png');  
                        }
                        if(escuela == "ENF"){
                          jQuery("#logoModalEsc").attr('src','../img/esc_enfermeria.png');  
                        }
                        if(escuela == "GEO"){
                          jQuery("#logoModalEsc").attr('src','../img/geografia.png');  
                        }
                        if(escuela == "LET"){
                          jQuery("#logoModalEsc").attr('src','../img/letras.png'); 
                        }
                        if(escuela == "ADM"){
                          jQuery("#logoModalEsc").attr('src','../img/administracion.png');  
                        }
                        if(escuela == "RNA"){
                          jQuery("#logoModalEsc").attr('src','../img/recursos_naturales.png');
                        }
                        console.log($(".info").attr("id"));
                        jQuery("#descargaPlan").attr('href', '../controladores/descargarPlan.php?plan='+datos[0].pdf_plan+"&nombre="+datos[0].nombre_carrera);
                        jQuery("#infoTabla").DataTable().destroy();
                        var fila= '';
                        for (var i = 0; i < datos.length; i++) {
                         if(datos[i].es_a_distancia){
                           fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td>Modalidad Distancia</td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                         }else
                         if($(".info").attr("id") !== "cua.es_a_distancia = TRUE")
                         {
                          if(datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '912' || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '913'
                            || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '78' || datos[i].id_ua == 'UASJ' && datos[i].cod_carrera == '84'){
                            fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td></td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                        }else
                        fila = fila + ' <tr><td> ' +datos[i].nombre_ua+'</td><td>Modalidad Presencial</td><td>'+datos[0].duracion_teorica+'</td><td>'+datos[i].observacion+'</td></tr>';
                      }
                    }
                    jQuery("#info_datos").html(fila);
                    jQuery("#infoTabla").DataTable({

                      destroy : true,
                      "bDeferRender": true,
                      responsive: true,
                      pageLength: 5,
                      lengthChange: false,
                      "searching": false,
                      "info":     false,
                      "paging":   false,
                      "ordering": false,
                      "columnDefs": [
                      {
                        "targets": 0,
                        "width"  : "20%"
                      },
                      {
                        "targets": 1,
                        "width"  : "20%"
                      },
                      {
                        "targets": 2,
                        "width"  : "20%"
                      },
                      {
                        "targets": 3,
                        "width"  : "40%"
                      }
                      ]
                      
                    });
                  }
                });
return false;

}




});
