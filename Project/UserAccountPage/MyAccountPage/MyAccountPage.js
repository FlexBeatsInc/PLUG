import { EMAILAPI } from "../../../Module/ImagePicker.js";
import { HOMEPAGE } from "../../HomePage/HomePage.js";
import { EMAILVERIFICATION } from "../CreateAccount/EmailVerification.js";

export const MYACCOUNTPAGE=()=>{

    DECLARATION('.MainDiv',(ELEMENT)=>{

        DEJSON('local','UserData',(data)=>{

            DISPLAY(ELEMENT,

                `

                <img class='USerImage' src='${data.UserPhoto||WHITEICONS+'user.png'}'/>

                <div class='UserDetails'>

                    <h1 class='UserName'>${data.UserName}</h1>

                    <h1 class='UserName'>${data.UserEmail}</h1>

                    <p class='Verify'><p>

                    <div class='OptinHolder'>

                        <button class='OptButton'>Edit Profile</button>

                        <button class='OptButton' >Pay Premium</button>
                    
                    </div>


                    <div class='UserOptions'>

                        <img src='${WHITEICONS}share.png'/>

                        <img src='${WHITEICONS}setting.png'/>

                        <img class='Logout' src='${WHITEICONS}logout.png'/>
                    
                    </div>
                
                </div>
                
                `
            );

            const Verify=document.querySelector('.Verify');

            if (data.EmailVerified) {

                STORE('local','EmailVerified','Verified')

                Verify.innerHTML='Your Email Is Verified You Can now Shop'

                
            } else {

                DELETESTORAGE('local','EmailVerified')

                Verify.innerHTML='Your  Email Is Not Verified You Cannot Shop <br><br> <span id="VerifyNow">Verify Now</span>'

                CLICKED('#VerifyNow',()=>{

                    const VerifyNow=document.querySelector('#VerifyNow');

                    LOADER(VerifyNow);

                    STORE('local','VerificationAuto','On');

                    var EMAILDATA = {
                        recipientEmail:data.UserEmail,
                        subject: "Plug Email Verification Registration",
                        body: `Dear ${data.UserName},\n\nThank you for using Plug. To complete your registration, please use the following verification code:\n\nVerification Code: ${data.UserID}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, PLUG`
                    }; 
                    
                    POSTPACKAGE(EMAILAPI,'no-cors',EMAILDATA,(data)=>{

                        EMAILVERIFICATION();
                         
                    })

                })
                
            }

            
            CLICKED('.Logout',()=>{

                localStorage.clear();

                HOMEPAGE();

            });

        });

    });

}