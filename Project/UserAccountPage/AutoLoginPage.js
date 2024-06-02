import { EMAILVERIFICATION } from "./CreateAccount/EmailVerification.js";
import { LOGINPAGE } from "./Login/LoginAccount.js"
import { MYACCOUNTPAGE } from "./MyAccountPage/MyAccountPage.js"

export const AUTOLOGINPAGE=()=>{

    if (localStorage.getItem('User')) {

        if (localStorage.getItem('VerificationAuto')) {

            EMAILVERIFICATION()
            
        } else {
            
            MYACCOUNTPAGE();

        }
  
    } else {
        
        LOGINPAGE();

    }

}