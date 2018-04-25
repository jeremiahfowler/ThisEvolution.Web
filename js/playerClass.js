
var playerClass = {
	
	init : function () {

		console.log('player class init');
	
		var playerClassDiv = $('#playerClass');
		var specializationDiv = $('#specialization');
		
		// add each class type to the ui
		for( var i = 0; i < playerClass.arrClass.length; i++) {
			
			var classType = playerClass.arrClass[i];
			var div = $('<div>')	.html( classType.name )
									.attr( 'data-key',	classType.name)
									.addClass('color-black');
			
			$(playerClassDiv).append( div );

			// create a div for the Class Type Specializations
			var classSpecDiv = $('<div>')	
								.attr('id', classType.name + '_specialization')
								.attr( 'data-key', classType.name )
								.addClass('div-trinity')
								.css('display', 'none');
								
			// we will place items 3 per row, so create the initial row
			var rowDiv = $('<div>');
			$(classSpecDiv).append( rowDiv );
			
			// add the specializations for the current class type
			for( var ii = 0; ii < classType.specialization.length; ii++ ) {
				
				// create a new row for every 3 items
				if ( ii > 0 && ii % 3 == 0 ) {
					rowDiv = $('<div>');
					$(classSpecDiv).append( rowDiv );
				}
				
				var sDiv = $('<div>')	.html( classType.specialization[ii].name )
										.addClass( playerClass.arrColor[ii % 9] )
										.attr( 'data-key', classType.specialization[ii].name );

				$(rowDiv).append( sDiv );
			}
			
			// add the last row
			
			$(specializationDiv).append( classSpecDiv );
		}
	},
	
	finish: function() {
		console.log('player class finish');
	},
	
	// Brawler / Maverick / Adept [ Teknik / Plane Walker / Simbiant ]
	
	arrColor : [
		'color-blue',	'color-orange',	'color-pink',
		'color-cyan',	'color-green',	'color-yellow',
		'color-purple',	'color-pinky',	'color-red'		
	],
	
	arrFocus : [
		{ name: "Offense",	description: "" },
		{ name: "Balance", 	description: "" },
		{ name: "Defense", 	description: "" }
	],
	
	arrRole : [ 
		{ name: "Front Line",	description: "" },
		{ name: "Support", 		description: "" },
		{ name: "Damage", 		description: "" }
	],
	
	arrClass : [ 
		{
			name:		"Brawler",
			subClass:	[],
			specialization: [
				{ subClass : "",	name: "Sentinel", 	description:	"" },
				{ subClass : "",	name: "Citadel", 	description:	"" },
				{ subClass : "",	name: "Bulwark", 	description:	"" },
				{ subClass : "",	name: "Cleric", 	description:	"" },
				{ subClass : "",	name: "Paladin", 	description:	"" },
				{ subClass : "",	name: "Vanguard", 	description:	"" },
				{ subClass : "",	name: "Knight", 	description:	"" },
				{ subClass : "",	name: "Barbarian",	description:	"" },
				{ subClass : "",	name: "Berserker", 	description:	"" }
			]
		},
		{
			name:		"Maverick",
			subClass:	[],
			specialization: [
				{ subClass : "",	name: "Captain" },
				{ subClass : "",	name: "Buccaneer" },
				{ subClass : "",	name: "Scallywag" },
				{ subClass : "",	name: "Shaman" },
				{ subClass : "",	name: "Witch Doctor" },
				{ subClass : "",	name: "Plague Doctor" },
				{ subClass : "",	name: "Mercenary" },
				{ subClass : "",	name: "Duelist" },
				{ subClass : "",	name: "Executioner" }
			]
		},
		{
			name:		"Adept",
			subClass:	[ "Teknik", "Plane Walker", "Simbiant" ],
			specialization: [
				{ subClass : "Teknik",	name: "Ironclad" },
				{ subClass : "Teknik",	name: "Armorsmith" },
				{ subClass : "Teknik",	name: "Breaker" },
				{ subClass : "Teknik",	name: "Doc" },
				{ subClass : "Teknik",	name: "Alchemist" },
				{ subClass : "Teknik",	name: "Toxicologist" },
				{ subClass : "Teknik",	name: "Gadgetier" },
				{ subClass : "Teknik",	name: "Pyro" },
				{ subClass : "Teknik",	name: "Bombadier" },
				
				{ subClass : "Plane Walker",	name: "Ghost" },
				{ subClass : "Plane Walker",	name: "Phantom" },
				{ subClass : "Plane Walker",	name: "Wraith" },
				{ subClass : "Plane Walker",	name: "Conduit" },
				{ subClass : "Plane Walker",	name: "Gatekeeper" },
				{ subClass : "Plane Walker",	name: "Illusionist" },
				{ subClass : "Plane Walker",	name: "Banisher" },
				{ subClass : "Plane Walker",	name: "Ningata" },
				{ subClass : "Plane Walker",	name: "Stalker" },
				
				{ subClass : "Simbiant",	name: "Exoderm" },
				{ subClass : "Simbiant",	name: "Striker" },
				{ subClass : "Simbiant",	name: "Impaler" },
				{ subClass : "Simbiant",	name: "Mender" },
				{ subClass : "Simbiant",	name: "Leech" },
				{ subClass : "Simbiant",	name: "Parasite" },
				{ subClass : "Simbiant",	name: "Swarm" },
				{ subClass : "Simbiant",	name: "Electocite" },
				{ subClass : "Simbiant",	name: "Alpha" }
			]
		} 
	],
	
	
	
	kvp : [
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" },
	{ key: "",		name : "" }
	]
	
}

// ===========================================================
// add to the app's init array to launch on initialization
app.arrInit.push(playerClass);

/*
$(document).ready(function () {
    console.log('playerClass ready to go');
    playerClass.init();
});
*/
