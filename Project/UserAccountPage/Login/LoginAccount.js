import { USERSAPI } from "../../../Module/ImagePicker.js";
import { HOMEPAGE } from "../../HomePage/HomePage.js";
import { CREATEACCOUNT } from "../CreateAccount/CreateAccount.js";

export const LOGINPAGE=()=>{

    DECLARATION('.MainDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`

            <p>No Connected Account of Plug </p>

            <input type='email' class='UserEmail' placeholder='Enter Your Email' />

            <input type='password' class='UserPassword'  placeholder='Enter Your Password' />

            <h1 class='ForgotPassword'>Forgot Password?</h1>

            <button class='forestgreen'>Sign In</button>

            <button class='blue'>Create An Account</button>

        `);

        CLICKED('.blue',()=>{CREATEACCOUNT()})

        const UserEmail=document.querySelector('.UserEmail');

        const UserPassword=document.querySelector('.UserPassword');

        const forestgreen=document.querySelector('.forestgreen');

        CLICKED('.forestgreen',()=>{

            if (!UserEmail.value) {

                MESSAGE('Enter Your Email');

                return
                
            };

            if (!UserPassword.value) {

                
                MESSAGE('Enter Your Password');

                return
                
            };

            LOADER(forestgreen);

            GETPACKAGE(USERSAPI,'cors',(data)=>{

                FINDER(data,'UserEmail',UserEmail.value,(users)=>{

                    if (users.UserEmail === UserEmail.value ) {

                        PASSWORDDEHASH(users.UserPassword,UserPassword.value,(info)=>{

                            if (info === true ) {

                                STORE('local','User',users.UserEmail);

                                JSONIFICATION(users,(daar)=>{
        
                                    STORE('local','UserData',daar);
        
                                    HOMEPAGE()
        
                                })
                                
                            } else {

                                MESSAGE('Wrong User Password');

                                ORIGIN(forestgreen,'Sign In');
        
                                return;
                                
                            }

                        })

                        
                    } else {

                        MESSAGE('Wrong User Email');

                        ORIGIN(forestgreen,'Sign In');

                        return;
                        
                    }

                })

            })

        });

    });

}