$(document).ready(function() {
    $('select').material_select();
     $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });
     $('.slider').slider({
      indicators: true,
      interval: 5000,
      height: 250
     });
      // Initialize collapse button
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();
   $('.carousel').carousel({
            dist:0,
            shift:0,
            padding:20,

      });

  });

