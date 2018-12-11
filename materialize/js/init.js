$(document).ready(function() {
    $('select').material_select();
    //$(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({delay: 50});
    
    $(".dropdown-trigger").dropdown();
    
  $('.collapsible').collapsible();
   

  });

