addEvent(window,'load',function(){
	var oTe = document.querySelector('Tallme')
	var oTch = document.querySelector('.Tallme_ch');
	
	if(oTe.offsetTop - document.documentElement.clentHeight < 300){
		
		 oTch.style.WebkitAnimationNname = 'demo';
		 oTch.style.WebkitAnimationDuration = '2s';
		 oTch.style.WebkitAnimationTimingFunction = 'ease'; 
		 oTch.style.WebkitAnimationDirection = 'alternate';
		 oTch.style.WebkitAnimationDelay = '5s';
		 oTch.style.WebkitAnimationPlayState = 'running';
		
		}else{
			false;
			}
	
	
	
	
	
	
	
	
	
	   
	
	
	
	
	
	
	})