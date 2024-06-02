import { USERSAPI } from "../../Module/ImagePicker.js"
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const AUTODOWNLOADUSER=()=>{

    GETPACKAGE(USERSAPI,'cors',(data)=>{

        FINDER(data,'UserEmail',localStorage.getItem('User'),(user)=>{

            if (user.UserEmail === localStorage.getItem('User') ) {

                JSONIFICATION(user,(daa)=>{

                    STORE('local','UserData',daa)

                })

              
            } else {

                localStorage.clear();

                HOMEPAGE();
                
            }

        });

    })

}