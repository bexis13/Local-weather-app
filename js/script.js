




$(document).ready(function(){
    	

    	
    		 $.getJSON("http://ip-api.com/json/", function(location){
    		 var cityinfo = location.city;
    		 
    		 fullurl = cityinfo;
    		 
    		 var fullurl;
 		var url = "http://api.openweathermap.org/data/2.5/weather?q=" +  fullurl + "&APPID=c957be495d2ceed1f2b72e431841adb8&type=accurate&mode=json&units=metric";
    		 

        $.getJSON(url, function(result){
            $('#degrees').html(JSON.stringify(result.main.temp) + "&deg;C");
            $('#region').html((result.name + ", " + result.sys.country));
            $('#description').html((result.weather[0].description) );
            $('.icon').append("<img src='http://openweathermap.org/img/w/"+ result.weather[0].icon + ".png'>" );
            weatherdata = (JSON.stringify(result));

	            if (result.weather[0].icon == '13d' || result.weather[0].icon == '13n') {
	            	$("body").addClass("snow");
            	
            }
            	else if(result.weather[0].icon == '9d' || result.weather[0].icon == '9n' ||
            			result.weather[0].icon == '10d' || result.weather[0].icon == '10n' ||
            			result.weather[0].icon == '11d' || result.weather[0].icon == '11n') {

            		$("body").addClass("rain");

            	}
            	else if(result.weather[0].icon == '50d' || result.weather[0].icon == '50n' ){
            		$("body").addClass("mist");
            	}
            		else {
            			$("body").addClass("general");
            		}
          

       
				var weatherdata;
				if (weatherdata) {
					console.log(weatherdata);
				}
				else{console.log("there is nothing here yet");}
				    });
				    		 	
				    		 });
    		 
       
    	
    	  
    

            });


