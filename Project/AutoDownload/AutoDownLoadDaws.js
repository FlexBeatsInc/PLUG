import { DAWSAPI, PLUGINSAPI } from "../../Module/ImagePicker.js"

export const AUTODOWNLOADDAWS=()=>{

    if (localStorage.getItem('NetWork')) {

        GETPACKAGE(DAWSAPI,'cors',(data)=>{

            const DATA={
                "Name":"Daws",
                "Posts":data
            }
    
            if (localStorage.getItem('Daws')) {
    
                UPDATEINDEXED('PLUGDAWS','Daws',DATA);
                
            } else {
    
                STOREINDEXED('PLUGDAWS','Daws',DATA); 
    
                STORE('local','Daws','On');
                
            };
    
        });
        
    } else {

       console.log('Using Stored Copy');
        
    };

}