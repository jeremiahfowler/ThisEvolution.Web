
	// game
	var game = ( function gameIIFE()
	{
		var uiConfig				= null;
		var arrUITiles 				= [];
		var arrEnvironmentObjects	= [];
		var arrPlayerObjects		= [];
		var arrEnemyObjects			= [];
		
		function init() {
			
			console.log('game init');
			
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

	// uiTile
	var uiTile = ( function uiTileIIFE()
	{
		var id			= '';
		var x			= '';
		var y			= '';
		
		var arrLayers		= [];
	}());

	// gameObject
	var gameObject = ( function gameObjectIIFE()
	{
		var id			=	'';
		var name		=	'';
		var description	=	'';
		var type		=	'';
		
		// attributes
		var life		= null;
		var energy		= null;
		var morale		= null;
		
		// ui tile - or row col?
		var row			= null;
		var col			= null;
		
		var arrLayers		= [];
	}());