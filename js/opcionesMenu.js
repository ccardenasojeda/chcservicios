/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function () {
    jQuery(".stock").click(function () {
    jQuery(".centro").empty();
    jQuery(".centro").load("../vista/tablaStock.php");
    
    });
    
});