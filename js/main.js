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


        if( parseInt( digits[10] ) == checksum ) {

            var year = parseInt( pesel.substring( 0, 2 ), 10 );
            var month = parseInt( pesel.substring( 2, 4 ), 10 );
            var day = parseInt( pesel.substring( 4, 6 ), 10 );

            if( month > 80 ) {

                year += 1800;
                month = parseInt( month ) - 80;

            } else if( month >= 60 ) {

                year += 2200;
                month = parseInt( month ) - 60;

            } else if( month >= 40 ) {

                year += 2100;
                month = parseInt( month ) - 40;

            } else if( month >= 20 ) {

                year += 2000;
                month = parseInt( month ) - 20;

            } else {

                year += 1900;

            }

            var birthday = new Date( year, month, day );
            jQuery( 'input[name="birthday"]' ).val( day+'/'+month+'/'+year );

            return true;

        } else {

            return false;

        }

    }, 'Niepoprawny numer pesel' ); 


    jQuery.extend( jQuery.validator.messages, {

        required: 'To pole jest wymagane.',
        maxlength: jQuery.validator.format( 'Wprowadź nie więcej niż {0} znaków.' ),
        minlength: jQuery.validator.format( 'Prosimy wprowadzić przynajmniej {0} znaków.' )

    });
    
});