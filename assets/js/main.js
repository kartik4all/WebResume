window.addEventListener("load",function init(){
bindEvents();
    checkScreen();
    
    getLocation();
 
scrollOnA();


});
var scrolledScreen;
function fixFooter(){
    var fixFooter = $("footer").offset().top;
   
     scrolledScreen = $(document).scrollTop();
   
    if(scrolledScreen>fixFooter){
       
        $("footer").addClass("fixFooter");
    }
   
    
}

function scrollDown(){
    var y = $(window).scrollTop();
     $("html, body").animate({ scrollTop: y + $(window).height() }, 800);
}
function scrollOnA(){
    $("a").click(function() {
      
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'linear');
    });
}



function bindEvents(){

    $('#menuButton').click(toggleSideMenu);
    $('#menuButton2').click(toggleSideMenu);
    $('#gotoLinked').click(() =>{location.href = 'https://www.linkedin.com/in/kartik-kehar-6aa036181/'});
    $('#gotoFb').click(() =>{location.href = 'https://www.facebook.com/kartik.kehar'});
    $('#gotoInsta').click(() =>{location.href = 'https://www.instagram.com/kartik_kehar'});
    $('#getInTouch').click(() =>{location.href = 'https://drive.google.com/file/d/1cNGZ96iiDGDOLd2fawkiq362lX2LyWM2/view?usp=sharing'});
    $('#scrollSomeDown').click(scrollDown);
    $(window).scroll(fixFooter);
     
        
    

}
var screenWidth=$(window).width();
function checkScreen(){
 if(screenWidth>992){
     $('#toggleSidebar').addClass('hide');
 }else{
     $('#sideBar').addClass('hide');
 }
}



var menuButtonClicked = true;
function toggleSideMenu(){
    if(menuButtonClicked){
   $(this).find('i').toggleClass('fas fa-times fas fa-align-left');
   $("#menuOnClick").animate({left: '400px', opacity: '1'}, "fast");
   jQuery('#menuOnClick').css('opacity', '1');
   menuButtonClicked = false;
   console.log("false");
    }
    else{
        $(this).find('i').toggleClass('fas fa-align-left fas fa-times');
        jQuery('#menuOnClick').css('opacity', '0');
        $("#menuOnClick").animate({left: '-400px', opacity: '0'}, "fast");
   menuButtonClicked = true;
   console.log("true");
    }
}






   
    function getLocation()
    {
          navigator.geolocation.getCurrentPosition(showPosition,showError);
       
    }
    function showPosition(position)
    {
        // lat=position.coords.latitude;
        // lon=position.coords.longitude;
        latlon=new google.maps.LatLng(28.711446, 77.108332)
        mapholder=document.getElementById('map')
        
        var myOptions={
            center:latlon,zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        };
        var map=new google.maps.Map(document.getElementById("map"),myOptions);
        var marker=new google.maps.Marker({position:latlon,map:map,title:"Your position"});
    }
    function showError(error)
    {
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                x.innerHTML="User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML="Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML="The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML="An unknown error occurred."
                break;
        }
    }

