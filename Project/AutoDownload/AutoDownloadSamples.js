import {  SAMPLESAPI } from "../../Module/ImagePicker.js"

export const AUTODOWNLOADSAMPLES=()=>{

    if (localStorage.getItem('NetWork')) {

        GETPACKAGE(SAMPLESAPI,'cors',(data)=>{

            const DATA={
                "Name":"Plugins",
                "Posts":data
            }
    
            if (localStorage.getItem('Samples')) {
    
                UPDATEINDEXED('PLUGSAMPLES','Samples',DATA);
                
            } else {
    
                STOREINDEXED('PLUGSAMPLES','Samples',DATA); 
    
                STORE('local','Updates','On');
                
            };
    
        });
        
    } else {

       console.log('Using Stored Copy');
        
    };

}