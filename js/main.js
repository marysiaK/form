jQuery(document).ready( function() {


    jQuery( '.user-form form' ).validate({

        rules: {

            'first-name': { 
                required: true, 
                minlength: 1, 
                maxlength: 40 
            },
            'last-name': { 
                required: true, 
                minlength: 1, 
                maxlength: 40 
            },
            'pesel': { 
                required: true, 
                pesel: true 
            }

        },

    });