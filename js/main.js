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
        onkeyup: function(element) { 

            jQuery(element).valid();

        }

    });

    jQuery.validator.addMethod( 'pesel', function() {
        
        var pesel = jQuery( 'input[name="pesel"]' ).val();
        var digits = pesel.split( '' );


        var checksum = ( 1*parseInt( digits[0] ) + 3*parseInt( digits[1] ) + 7*parseInt( digits[2] ) + 9*parseInt( digits[3] ) + 1*parseInt( digits[4] ) + 3*parseInt( digits[5] ) + 7*parseInt( digits[6] ) + 9*parseInt( digits[7] ) + 1*parseInt( digits[8] ) + 3*parseInt( digits[9] ) )%10;

        if( checksum == 0 ) { checksum = 10 }

        checksum = 10 - checksum;
    });

});