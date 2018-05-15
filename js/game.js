

	// uiConfig
	var uiConfig = ( function uiConfigIIFE()
	{
		// private properties
		var _rows				= '';
		var _cols				= '';
		var _height				= null;
		var _width				= null;
		
		// public
		return {
			rows		: _rows,
			cols		: _cols,
			height		: _height,
			width		: _width
		}
		
	}());

	// gameHelper
	var gameHelper = ( function gameHelperIIFE()
	{
		
		// distance between two tiles
		function _getDistance(aX, aY, bX, bY) {
			var diffX = abs( aX - bX ) - 1;
			var diffY = abs( aY - bY ) - 1;
			
			if ( diffX >= diffY ) {
				return diffX;
			} else {
				return diffY
			}
		}
		
		return {
			getDistance : _getDistance
		}
	}());
	
	// game
	var game = ( function gameIIFE()
	{
		var _uiConfig				= uiConfig;	// base game configuration
		var _arrUiLayers			= [];		// layers available to game objects
		var _arrUITiles 			= [];		// ui "tiles" for displaying layers
		var _arrEnvironmentObjects	= [];		// game objects pertaining to the environment
		var _arrPlayerObjects		= [];		// game objects controlled by the player
		var _arrEnemyObjects		= [];		// game objects controlled by the app
		
		function _init() {
			// do the pre-work in here
			
		}
		
		function _load() {
			var $divContent = $('#content');
			var $divGrid = $('<div>')
							.attr('id', 'gameGrid')
							.addClass('gameGrid');

			for ( var rowId = 0; rowId < 4; rowId++ ) {
				
				var $rowContainer = $('<div>').attr( 'id', 'gridRow_' + rowId );
								
				for ( var colId = 0; colId < 4; colId++ ) {

					var $div = $('<div>')
							.attr('id', 'cell_' + rowId + '_' + colId)
							.attr('data-row', rowId)
							.attr('data-col', colId);
					$($rowContainer).append($div);
				}

				$($divGrid).append($rowContainer);
			}
			
			$divContent.append($divGrid);
		}
		
		_init();
		
		return {
			load					: _load,
			uiConfig				: _uiConfig,
			arrUiLayers				: _arrUiLayers,
			arrUITiles 				: _arrUITiles,
			arrEnvironmentObjects	: _arrEnvironmentObjects,
			arrPlayerObjects		: _arrPlayerObjects,
			arrEnemyObjects			: _arrEnemyObjects
		}
	}());

	// uiLayer - contains all graphics for reference by other objects
	var uiLayerBuilder = ( function uiLayerIIFE()
	{
		function build(props) {
			
			var uiLayer = (function () {
				
				// private properties
				var _id				= props['id'];
				var _name			= props['name'];
				var _description	= props['description'];
				var _type			= props['type'];
				var _html			= props['html'];
				var _css			= props['css'];
				var _tags			= props['tags'];
				
				// private methods
				function getId() { 
					return _id 
				};
				
				function getHTML() {
					
					console.log('_id: ' + _id + ' / _css: ' + JSON.stringify(_css) + ' / _html: ' + _html);
					// return html element
					var html = $('<div>')
								.attr('id', _id)
								.css(_css)
								.html(_html);
					return html;
				};
				
				// public
				return {
					id		: _id,
					getHTML	: getHTML,
					tags	: _tags
				}
			}());
			
			return uiLayer;
		}
		
		return {
			build	: build
		}
	}());
	
	// uiTile
	var uiTileBuilder = ( function uiTileIIFE()
	{
		function build(props) {
			
			var uiTile = (function () {
				
				// private properties
				var _id				= props['id'];
				var _x				= props['x'];
				var _y				= props['y'];
				var _arrLayers		= props['arrLayers'];
				
				// private methods
				function getId() { 
					return _id 
				};
				
				function getHTML() {
					// draw to the screen
				};
				
				// public
				return {
					getId	: getId,
					getHTML	: getHTML
				}
			}());
			
			return uiTile;
		}
		
		return {
			build	: build
		}
	}());

	// gameObject
	var gameObjectBuilder = ( function gameObjectIIFE()
	{
		function build(p_id) {
			
			var gameObject = (function (props) {
				
				// private properties
				var _id				= props['id'];
				var _name			= props['name'];
				var _description	= props['description'];
				var _type			= props['type'];
				
				// attributes
				var _life			= props['life'];
				var _energy			= props['energy'];
				var _morale			= props['morale'];
				
				// ui tile - or row col?
				var _row			= props['row'];
				var _col			= props['col'];
				
				var _arrLayers		= props['arrLayers'];
				var _arrActions		= props['arrActions'];

				// private methods

				// public properties
				var currentState	= {
					life			: null,
					energy			: null,
					morale			: null,
					direction		: null,		// up, down, left or right
					action			: null,		// current action depicts the image 
					arrEffects		: []		// hots, dots, buff and debuffs ( also associated layers )
				}

				// public methods
				function getId() { 
					return _id 
				};

				function getHTML() {
					// create a div composed of the layers
				};
				
				// public
				return {
					getId			: getId,
					getHTML			: getHTML,
					currentState	: currentState
				}
			}());
			
			return gameObject;
		}
		
		return {
			build	: build
		}

	}());
	
	// gameObjectAction - 
	var gameObjectActionBuilder = ( function gameObjectActionIIFE()
	{
		function build(props) {
			
			var gameObjectAction = (function () {
				
				// private properties
				var _id				= props['id'];
				var _name			= props['name'];
				var _description	= props['description'];
				var _type			= props['type'];
				var _range			= props['html'];
				var _arrLayers		= props['arrLayers'];
				
				// private methods
				function getId() { 
					return _id 
				};
				
				function getHTML() {
					// draw to the screen
				};
				
				// public
				return {
					getId	: getId,
					getHTML	: getHTML
				}
			}());
			
			return gameObjectAction;
		}
		
		return {
			build	: build
		}
	}());

		// uiLayerLoader
	var gameObjectLoader = ( function gameObjectLoaderIIFE()
	{
		// private properties

		function _cssImage(imgPath) {
			return {  
				"display"			: "inline-block",
				"background-image"	: "url(" + imgPath + ")",
				"background-repeat" : "no-repeat",
				"background-size"	: "contain"
			};
		}
		// load the layers
		function _load() {

			var arrGameItems = [];
			var arrActions = [];
			var arrGameObjects = [];
			var tags = { "class" : "berserker" };

			//					name			description	type	life	energy	morale
			arrGameItems.push( [ "berserker",	"",			"",		100,	100,	100 ] );
			arrGameItems.push( [ "orc",			"",			"",		100,	100,	100 ] );
			//arrGameItems.push( [ "",		"",			"",		100,	100,	100 ] );
			//arrGameItems.push( [ "",		"",			"",		100,	100,	100 ] );
			//arrGameItems.push( [ "",		"",			"",		100,	100,	100 ] );
			//arrGameItems.push( [ "",		"",			"",		100,	100,	100 ] );

			// Range - 0 = Melee
			//					name		description	type	range	arrLayers
			arrActions.push( [	"Attack",	"",			"",		0,		"" ] );
			arrActions.push( [	"Defend",	"",			"",		0,		"" ] );
			arrActions.push( [	"Move",		"",			"",		3,		"" ] );
			//arrActions.push( [	"",		"",			"",		0,		"" ] );
			//arrActions.push( [	"",		"",			"",		0,		"" ] );
			
			
			for ( var i = 0; i < arrGameItems.length; i++ ) {
				console.log(JSON.stringify(arrGameItems[i]));
				var iGameObj = arrGameItems[i];
				arrGameObjects.push( 
					iGameObj.build( { 
						id			: i, 
						name		: iGameObj[0], 
						description	: iGameObj[1],
						type		: iGameObj[2],
						life		: iGameObj[3],
						energy		: iGameObj[4],
						morale		: iGameObj[5]
					} )
				);
			}
			
			return arrUiLayers;
		}

		return {
			load : _load
		}
	}());
	
	// uiLayerLoader
	var uiLayerLoader = ( function gameHelperIIFE()
	{
		// private properties

		function _cssImage(imgPath) {
			return {  
				"display"			: "inline-block",
				"background-image"	: "url(" + imgPath + ")",
				"background-repeat" : "no-repeat",
				"background-size"	: "contain"
			};
		}
		// load the layers
		function _load() {

			var arrLayers = [];
			var arrUiLayers = [];
			var imgDir = "img/demo/";
			var tags = { "class" : "berserker" };

			//					name	description	type	tags					html	css
			arrLayers.push( [	"",		"",			"",		"berserker|ready",		"",		_cssImage(imgDir + "battle.berserker_ready") ] );
			arrLayers.push( [	"",		"",			"",		"berserker|run",		"",		_cssImage(imgDir + "berserker_run.gif") ] );
			arrLayers.push( [	"",		"",			"",		"berserker|rage",		"",		_cssImage(imgDir + "berserker_rage.png") ] );
			arrLayers.push( [	"",		"",			"",		"troll|ready",			"",		_cssImage(imgDir + "Troll_ready.gif") ] );
			arrLayers.push( [	"",		"",			"",		"troll|rage",			"",		_cssImage(imgDir + "Troll_Scared.gif") ] );
			arrLayers.push( [	"",		"",			"",		"troll|damaged|high",	"",		_cssImage(imgDir + "Troll_DamagedHigh.gif") ] );

			for ( var i = 0; i < arrLayers.length; i++ ) {
				console.log(JSON.stringify(arrLayers[i]));
				var iLayer = arrLayers[i];
				arrUiLayers.push( 
					uiLayerBuilder.build( { 
						id			: i, 
						name		: iLayer[0], 
						description	: iLayer[1],
						type		: iLayer[2],
						tags		: iLayer[3],
						html		: iLayer[4],
						css			: iLayer[5]
					} )
				);
			}
			
			return arrUiLayers;
		}

		return {
			load : _load
		}
	}());

	uiLayerLoader.load();