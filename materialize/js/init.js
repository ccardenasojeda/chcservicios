jQuery(document).ready(function () {
    
    $('select').material_select();
    
    $(".button-collapse").sideNav();
    
    $('.materialboxed').materialbox();
    
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

    $('.tooltipped').tooltip({delay: 50});

    $(".dropdown-trigger").dropdown();

    $('.collapsible').collapsible();

    //$('.dropdown-button').dropdown();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        hover: true, // Activate on hover
        belowOrigin: true // Displays dropdown below the button
    });
    jQuery(".dropdown-content").css("margin-top", -8);
    jQuery(".dropdown-content").css("margin-left", 5);
    jQuery(".dropdown-content").css("min-width", 250);
});

