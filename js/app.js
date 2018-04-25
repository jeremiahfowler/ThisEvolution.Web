// JavaScript source code

var app = {

	arrInit: [],		// array of objects to cycle through on initialization
	arrFinish: [],		// array of objects to cycle through after initialization

    init: function () {

		// run anything in the Init array
		for( var i = 0; i < app.arrInit.length; i++ ) {
			app.arrInit[i].init();
		}
	
        console.log('init');

		ui.buildNav();
		
        $('.div-trinity').on( "click", "div div", function () {
            app.divCollapseAll(this);
			app.toggleAssociated(this, 'data-key');
        });
		
		app.finish();
    },

	finish: function () {
		
		// run anything in the finish array
		for( var i = 0; i < app.arrFinish.length; i++ ) {
			app.arrInit[i].finish();
		}
		
		// for slide-on-load - hide the children, then slide them down
		$('.slide-on-load')
			.children()
			.hide(0);

		$('.slide-on-load').show().children().slideDown("slow");
	
	},
	
	getHtml : function ( url, destDivId ) {
	
		$.get( url, function( data ) {
			$( destDivId ).html( data );
			console.log( url + ' data loaded to: ' + destDivId );
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

			console.log('visible' + $(this).is(":visible"));
			if ($(this).is(":visible")) {
				$(this).slideUp("slow");
			} else {
				$(this).slideDown("slow");
				$(this).siblings().slideUp("slow");
			}
		} );
			
	},

	divCollapseAll: function(div) {

	console.log('divCollapseAll');
	
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
	
	imgAnimate : function ($div) {

		var $current = $($div).find('img.animate-current').first();
		var isRewind = $current.hasClass('rewind');

		// you are no longer current
		$($current)	.removeClass('animate-current')
					.removeClass('rewind')
					.hide(0);
		
		console.log( 'imgAnimate ' + isRewind );
		
		if (!isRewind) {
			var $next = $($current).next();
			if ( $next.length == 0 ) {
				$current = $($current).prev();
				$current.addClass('rewind');
			} else {
				$current = $next;
			}
		} else {
			var $previous = $($current).prev();
			if ( $previous.length == 0 ) {
				$current = $($current).next();
			} else {
				$current = $previous;
				$current.addClass('rewind');
			}
		}
		
		$($current).addClass('animate-current').show(0);
		
		setTimeout( function() {
			app.imgAnimate($div);
		}, 200);
		
	}
	
}

// =========================================================

var ui = {
	
	arrNav : [
		{ name : "Home",	url: "index.html" },
		{ name : "World",	url: "world.html" },
		{ name : "Races",	url: "race.html" },
		{ name : "Classes",	url: "class.html" }
	],
	
	buildHeader : function () {
	
		// ignore for now
	},
	
	buildNav : function () {
	
	console.log('build nav');
	/*
		var divMain = $('<div>')	.attr('id', 'nav')
									.addClass('app-nav');
	*/
		var divNav = $('#nav')
		for( var i = 0; i < ui.arrNav.length; i++ ) {
			
			var div = $('<div>').addClass('app-nav-link');
			var a = $('<a>')	.attr( 'href', ui.arrNav[i].url )
								.html( ui.arrNav[i].name );

			if (window.location.href.indexOf(ui.arrNav[i].url) > -1) {
				$(a).addClass('selected');
			}
								
			$(div).append(a);
			$(divNav).append(div);
		}
		
		return divNav;
	}
	
}


$(document).ready(function () {
    console.log('ready to go');
    app.init();
});


// ==========================================

var util = {
	
	
}