$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 80){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
     if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
	});
	
	    
});