

	// uiConfig
	var uiConfig = ( function uiConfigIIFE()
	{
		var rows				= '';
		var cols				= '';
		var height				= null;
		var width				= null;
		var arrLayers			= [];
		
		function create() {
			
		}
		
	}());

	// gameHelper
	var gameHelper = ( function gameHelperIIFE()
	{
		var rows				= '';
		var cols				= '';
		
		// distance between two tiles
		function getDistance(aX, aY, bX, bY) {
			var diffX = abs( aX - bX ) - 1;
			var diffY = abs( aY - bY ) - 1;
			
			if ( diffX >= diffY ) {
				return diffX;
			} else {
				return diffY
			}
		}
	}());
	
	// game
	var game = ( function gameIIFE()
	{
		var uiConfig				= uiConfig;	// base game configuration
		var arrUiLayers				= [];		// layers available to game objects
		var arrUITiles 				= [];		// ui "tiles" for displaying layers
		var arrEnvironmentObjects	= [];		// game objects pertaining to the environment
		var arrPlayerObjects		= [];		// game objects controlled by the player
		var arrEnemyObjects			= [];		// game objects controlled by the app
		
		function init() {
			// do the pre-work in here
			
		}
		
		this.load = function() {
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
		
		init();
		
		return {
			load					: this.load,
			uiConfig				: uiConfig,
			arrUiLayers				: arrUiLayers,
			arrUITiles 				: arrUITiles,
			arrEnvironmentObjects	: arrEnvironmentObjects,
			arrPlayerObjects		: arrPlayerObjects,
			arrEnemyObjects			: arrEnemyObjects
		}
	}());

	// uiLayer - contains all graphics for reference by other objects
	var uiLayerBuilder = ( function uiLayerIIFE()
	{
		function create(props) {
			
			var uiLayer = (function () {
				
				// private properties
				var _id				= props['id'];
				var _name			= props['name'];
				var _description	= props['description'];
				var _type			= props['type'];
				var _html			= props['html'];
				var _css			= props['css'];
				
				// private methods
				function getId() { 
					return _id 
				};
				
				function getHTML() {
					// return html element
					var html = $('<div>')
								.attr('id', _id)
								.css(_css)
								.html(_html);
					return html;
				};
				
				// public
				return {
					getId	: getId,
					getHTML	: getHTML
				}
			}());
			
			return uiLayer;
		}
		
		return {
			create	: create
		}
	}());
	
	// uiTile
	var uiTileBuilder = ( function uiTileIIFE()
	{
		function create(props) {
			
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
			create	: create
		}
	}());

	// gameObject
	var gameObjectBuilder = ( function gameObjectIIFE()
	{
		function create(p_id) {
			
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
			create	: create
		}

	}());
	
	// gameObjectAction - 
	var gameObjectActionBuilder = ( function gameObjectActionIIFE()
	{
		function create(props) {
			
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
			create	: create
		}
	}());


	function loadLayers() {
		
		var myLayer = 
			uiLayerBuilder.create(
				{
					id				: 	"",
					name			: 	"",
					description		:	"",
					type			: 	"",
					html			:	"hi"
				}
			);
			game.arrUiLayers.push(myLayer);
	}
	
	loadLayers();