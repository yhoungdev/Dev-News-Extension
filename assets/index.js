

    //get form data and prevent default 
    let form=document.getElementById('form');
    form.onsubmit=function(e){ 
        e.preventDefault();

       
        //now perform other actions 
        
        performAction('.fab')

       


    }
    


    const performAction= (font, store_name ) => {
        //represents the icons
        let icon=document.querySelector(font);

    
        
        icon.onclick = e =>{
                
            
            localStorage.setItem('hi','obiabo')
            
            
        }
        
    
    }

    performAction('.fa-github')
    performAction('.fa-linkedin')

   


    
    
    
