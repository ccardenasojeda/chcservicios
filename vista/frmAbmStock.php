<?php
include_once '../modelo/gestorTipoProducto.php';
include_once '../modelo/gestorMarcas.php';
?>
<div class="container">
    <div class="row card-panel">

        <h5>Alta de Artículos</h5>
        <blockquote>
            <b>NOTA: </b>
            <br>
            Todos los Campos con (*) Son OBLIGATORIOS.
        </blockquote>
        <form class="col s12" id="articuloFrm">
            <div class="row">
                <div class="input-field col l6">
                    <input id="nombre_art" type="text" maxlength="100" class="validate">
                    <label for="nombre_art">Nombre Artículo(*)</label>
                </div>
                <div class="input-field col l2">
                    <input id="precio" step="0.01" min="1" type="number" class="validate">
                    <label for="precio">Precio $ (*)</label>
                </div>
                <div class="input-field col l2">
                    <input id="cantidad"  type="number" min="1" class="validate">
                    <label for="cantidad">Cantidad (*)</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col l6">
                    <select id="select_tipo">
                        <option value="" disabled selected>Seleccionar Opción</option>
                        <?php gestorTipoProducto::listadoSelect() ?>
                    </select>
                    <label>Tipo de Artículo (*)</label>
                </div>
                <div class="input-field col l4">
                    <select id="select_marca">
                        <option value="" disabled selected>Seleccionar Opción</option>
                        <?php gestorMarcas::listadoSelect() ?>
                    </select>
                    <label>Marca (*)</label>
                </div>

            </div>

            <div class="row">
                <div class="input-field col l6">
                    <textarea maxlength="300" id="detalle" class="materialize-textarea"></textarea>
                    <label for="detalle">Descripción(*)</label>

                </div>
                <div class="col l6">
                    
                    <br><br><br>
                    <button  class="btn waves-effect waves-light" type="submit" name="action">Guardar
                        <i class="material-icons right">send</i>
                    </button>
                </div>

            </div>

        </form>

        </form>

    </div>
</div>
<script src="../materialize/js/init.js"></script> 
<script src="../js/frmAbmStock.js"></script> 