
	// game
	var game = ( function gameIIFE()
	{
		var uiConfig				= null;
		var arrUITiles 				= [];
		var arrEnvironmentObjects	= [];
		var arrPlayerObjects		= [];
		var arrEnemyObjects			= [];
		
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
			load	:	this.load
		}
	}());

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

	// uiLayer - contains all graphics for reference by other objects
	var uiLayerFactory = ( function uiLayerIIFE()
	{
		function create(props) {
			
			var uiLayer = (function () {
				
				// private properties
				var _id				= props['id'];
				var _name			= props['name'];
				var _type			= props['type'];
				var _html			= props['html'];
				
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
			
			return uiLayer;
		}
		
		return {
			create	: create
		}
	}());
	
	// uiTile
	var uiTileFactory = ( function uiTileIIFE()
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
	var gameObjectFactory = ( function gameObjectIIFE()
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

				// private methods
				function getId() { 
					return _id 
				};
				
				function getHTML() {
					// create a div composed of the layers
				};
				
				// public
				return {
					getId : getId
				}
			}());
			
			return gameObject;
		}
		
		return {
			create	: create
		}

	}());