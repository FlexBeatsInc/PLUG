import { UPDATEUSERAPI, USERSAPI } from "../../../Module/ImagePicker.js";
import { AUTODOWNLOADUSER } from "../../AutoDownload/AutoDownloadUserdata.js";
import { MYACCOUNTPAGE } from "../MyAccountPage/MyAccountPage.js";

export const EMAILVERIFICATION=()=>{

    DECLARATION('.MainDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <p>Verification Code Sent to Email </p>

            <input type='text' class='code' placeholder='Enter Your Verificaton Code' />

            <p>Email Verification Enable A User to Update Profile and Shop on Plug</p>

            <button class='forestgreen'>Verify</button>

            <button class='brown'>Not Now</button>

        `);

        const UserPassword=document.querySelector('.code');

        const forestgreen=document.querySelector('.forestgreen');

        CLICKED('.forestgreen',()=>{

            DEJSON('local','UserData',(data)=>{

                if (!UserPassword.value) {
                
                    MESSAGE('Enter Code');
    
                    return
                    
                }

                if (UserPassword.value === JSON.stringify(data.UserID)) {
                    const USERDATA={
                        "UserID":data.UserID,
                        "EmailVerified":"Verified"
                    }
    
                    LOADER(forestgreen)
    
                    POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
    
                        DELETESTORAGE('local','VerificationAuto')
    
                        GETPACKAGE(USERSAPI,'cors',(data)=>{

                            FINDER(data,'UserEmail',localStorage.getItem('User'),(user)=>{
                    
                                if (user.UserEmail === localStorage.getItem('User') ) {
                    
                                    JSONIFICATION(user,(daa)=>{
                    
                                        STORE('local','UserData',daa)

                                        MYACCOUNTPAGE();
                    
                                    })
                    
                                  
                                } else {
                    
                                    localStorage.clear();
                    
                                    HOMEPAGE();
                                    
                                }
                    
                            });
                    
                        })
    
                    });

                    
                }else{

                    MESSAGE('Wrong Code');
    
                    return

                }


            })

        });

        CLICKED('.brown',()=>{

            DELETESTORAGE('local','VerificationAuto')

            MYACCOUNTPAGE();
            
        })


    });

}