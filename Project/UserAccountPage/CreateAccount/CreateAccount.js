import { CREATEUSERAPI, IMAGEPICKER, USERSAPI } from "../../../Module/ImagePicker.js";
import { HOMEPAGE } from "../../HomePage/HomePage.js";
import { LOGINPAGE } from "../Login/LoginAccount.js";

export const CREATEACCOUNT=()=>{

    DECLARATION('.MainDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <p>No Connected Account of Plug </p>

            <input type='text' class='UserName' placeholder='Enter Your UserName' />

            <input type='email' class='UserEmail' placeholder='Enter Your Email' />

            <input type='password' class='UserPassword' placeholder='Enter Your Password' />

            <p>Add User Photo</p>

            <input class='images' type='file'/>

            <img class='ImageHolde' src='${BLACKICONS}image.png'/>

            <button class='forestgreen'>Sign Up</button>

            <button class='blue'>Login Account</button>

        `);

        let IMAGES;

        CLICKED('.blue',()=>{LOGINPAGE()});

        IMAGEPICKER('.images','.ImageHolde',(data)=>{

            IMAGES=data;

        });

        const UserName=document.querySelector('.UserName');

        const UserEmail=document.querySelector('.UserEmail');

        const UserPassword=document.querySelector('.UserPassword');

        CLICKED('.forestgreen',()=>{

            if (!UserName.value) {

                MESSAGE('Enter User Name');

                return;
                
            };

            if (!UserEmail.value) {

                MESSAGE('Enter User Email');

                return;
                
            };

            if (!UserPassword.value) {

                MESSAGE('Enter User Password');

                return;
                
            };

            PASSWORDHASH(UserPassword.value,(data)=>{

                const USERDATA={
                    "UserName":UserName.value,
                    "UserPassword":data,
                    "UserEmail":UserEmail.value,
                    "UserID":Date.now(),
                    "UserPhoto":IMAGES,
                    "CreatedOn":new Date(),
                    "UserCode":UserPassword.value
                };

                const forestgreen=document.querySelector('.forestgreen');

                LOADER(forestgreen);

                GETPACKAGE(USERSAPI,'cors',(data)=>{

                    FINDER(data,'UserEmail',UserEmail.value,(users)=>{

                        if (users.UserEmail === UserEmail.value ) {

                            MESSAGE('Email taken');

                            ORIGIN(forestgreen,'Sign Up');

                            return
                            
                        } else {

                            POSTPACKAGE(CREATEUSERAPI,'no-cors',USERDATA,(info)=>{

                                STORE('local','User',UserEmail.value);

                                JSONIFICATION(USERDATA,(daar)=>{

                                    STORE('local','UserData',daar);

                                    HOMEPAGE();

                                })
            
                            });
                            
                        }

                    })

                })

            });

        });
        
    });

}