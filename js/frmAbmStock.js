jQuery(document).ready(function () {

    jQuery("#guardar").click(function () {


    });
    function altaArticulo(form) {
        console.log(form);
        // var ajax_res = .responseText;
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "../controlador/ci_stock.php",
            data: form,
            success: function (data) {
                console.log(data);
            },
            error: function (e) {
                console.log(e.message);
            }
        });
        // Materialize.toast(ajax_res, 6000, '#f57c00 orange darken-2 rounded');
    }
    $('#articuloFrm').submit(function () {

        var nombre_art = jQuery("#nombre_art").val(),
                precio = jQuery("#precio").val(),
                cantidad = jQuery("#cantidad").val(),
                select_tipo = jQuery("#select_tipo").val(),
                select_marca = jQuery("#select_marca").val(),
                detalle = jQuery("#detalle").val();

        if (nombre_art != '' && precio != '' && cantidad != '' && detalle != '' && select_marca != null && select_tipo != null) {

            if (cantidad <= 0) {
                Materialize.toast('La cantidad de articulos ingresada no es válida.!', 6000, '#f57c00 orange darken-2 rounded');
            } else {
                if (precio <= 0) {
                    Materialize.toast('El precio ingresado no es válido.!', 6000, '#f57c00 orange darken-2 rounded');
                } else {
                    form = "opcion=alta&nombre_art=" + nombre_art + "&precio=" + precio + "&cantidad=" + cantidad + "&tipo_art=" + select_tipo + "&marca=" + select_marca + "&detalle=" + detalle;
                    
                    $.get('../controlador/ci_stock.php?opcion=alta', form, function (data) {
                        // show the response
                        //$('#response').html(data);
                         Materialize.toast(data, 6000, '#00c853 green accent-4 rounded');
                         $("#articuloFrm")[0].reset();

                    }).fail(function () {

                        // just in case posting your form failed
                         Materialize.toast('No se pudieron guaradar los datos.!', 6000, '#f57c00 orange darken-2 rounded');

                    });
                }
            }

        } else {
            Materialize.toast('Todos los datos son Obligatorios.!', 6000, '#f57c00 orange darken-2 rounded');
        }


        // to prevent refreshing the whole page page
        return false;

    });
});