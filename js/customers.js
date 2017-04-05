   
	// portfolio filter
	$(window).load(function(){'use strict';
	debugger;
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			debugger;
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
		var str = getQueryVariable("value");
		
		switch(str) {
			case "0":
				{
					$portfolio_selectors.removeClass('active');
					$("#all_cust").addClass('active');
					$portfolio.isotope({ filter: "*" });
				}
				break;
			case "1":
				{
					$portfolio_selectors.removeClass('active');
					$("#telecom").addClass('active');
					$portfolio.isotope({ filter: ".telecom" });
				}
				break;
			
			
			case "2":
				{
					$portfolio_selectors.removeClass('active');
					$("#enterprise").addClass('active');
					$portfolio.isotope({ filter: ".enterprise" });
				}
				break;
			default:
				{
					$portfolio_selectors.removeClass('active');
					$("#all_cust").addClass('active');
					$portfolio.isotope({ filter: "*" });
				}
		}
		
	});
	
	function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
	
	function portfolio_selectors_Dynamic(id , fillter){
		debugger;
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio_selectors.removeClass('active');
			$('#'+id).addClass('active');
		$portfolio.isotope({ filter: fillter });
		
	}