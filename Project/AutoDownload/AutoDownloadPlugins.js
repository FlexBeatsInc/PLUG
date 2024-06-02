import { PLUGINSAPI } from "../../Module/ImagePicker.js"

export const AUTODOWNLOADPLUGINS=()=>{

    if (localStorage.getItem('NetWork')) {

        GETPACKAGE(PLUGINSAPI,'cors',(data)=>{

            const DATA={
                "Name":"Plugins",
                "Posts":data
            }
    
            if (localStorage.getItem('Updates')) {
    
                UPDATEINDEXED('PLUG','Plugins',DATA);
                
            } else {
    
                STOREINDEXED('PLUG','Plugins',DATA); 
    
                STORE('local','Updates','On');
                
            };
    
        });
        
    } else {

       console.log('Using Stored Copy');
        
    };

}