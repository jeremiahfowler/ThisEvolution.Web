// JavaScript source code

var app = {

	arrUIEffects: [],

    init: function () {

        console.log('init');

        $('.div-trinity div div').click(function () {
            app.divCollapseAll(this);
			app.toggleAssociated(this, 'data-key');
        });
    },

    hideSiblings: function (obj) {
        $(obj).siblings().fadeOut();
    },

	toggleAssociated( obj, attr ) {

		var val = $(obj).attr( attr );

		console.log( 'show associated ' + val + ' / ' + attr );

		$('[' + attr + '="' + val + '"]')
			.not(obj).each( function() {

			if ($(this).is(":visible")) {
				$(this).slideUp("slow");
			} else {
				$(this).slideDown("slow");
				$(this).siblings().slideUp("slow");
			}
		} );
			
	},

	divCollapseAll: function(div) {

	    var isFocused = $(div).attr('toggleShowHideAll');
        var isHide = false;
		var divParent = $(div).parent();

        // flip the status
        if (isFocused == undefined || isFocused == 'false') {
            isHide = true;
        } else {
            isHide = false;
        }

		// set the toggle status
        $(div).attr('toggleShowHideAll', isHide);

		// toggle collapse of the non-focussed rows
		$(div).parent().siblings().each( function() {
			if (isHide) {
				$(this).slideUp("slow");
			} else {
				$(this).slideDown("slow");
			}
		} );

		// toggle underline for the focussed element
		if (isHide) {
			$(div).siblings()
				.css('border-top', '' )
				.css('border-bottom', '' );
			$(div)	.css('border-bottom', '4px solid white' )
					.css('border-top', '4px solid white' );
		} else {
			$(div)	.css('border-bottom', '' )
					.css('border-top', '' );
		}

		// set toggle status of siblings to false
		$(div).siblings().attr('toggleShowHideAll', false);
	},
	
    tableShowHideAll: function (td) {
        
        var isFocused = $(td).attr('toggleShowHideAll');
        var isHide = false;
        var $tr = $(td).closest('tr');
        var $table = $(td).closest('table');
        var rowIndex = $($tr).index();
        var colIndex = $(td).index();
        var rowLen = $($table).find('tr').length;
        var colLen = $($tr).find('td').length;

        // flip the status
        if (isFocused != undefined && isFocused == 'true') {
            isHide = false;
        } else {
            isHide = true;
        }

        $(td).attr('toggleShowHideAll', isHide);

	// when hiding, remove the border for a better fade effect
                if (isHide) {
                    $($table).find('td').css( 'border','0px solid black' );
                    $($table).find('th').css( 'border','0px solid black' );
               }

        // show/hide rows
        for (var i = 0; i < rowLen; i++) {
            if (i != rowIndex) {
                if (isHide) {
                    $($table).find('tr:eq(' + i + ')').slideUp("slow");
                } else {
                    $($table).find('tr:eq(' + i + ')').fadeIn();
                }
            }
        }

        // show/hide cols
        for (var i = 0; i < colLen; i++) {
            if (i != colIndex) {
		var $indexTd = $($tr).find('td:eq(' + i + ')');
                if (isHide) {
                	$($indexTd).fadeOut();
                } else {
                	$($indexTd).fadeIn();
                }
            }
        }

		// when showing, put the border back
                if (!isHide) {
                    $($table).find('td').css( 'border','4px solid white' );
                    $($table).find('th').css( 'border','4px solid white' );
                }

        console.log('tableShowHideAll ' + rowIndex + ' - ' + colIndex);
    }
}




$(document).ready(function () {
    console.log('ready to go');
    app.init();
});