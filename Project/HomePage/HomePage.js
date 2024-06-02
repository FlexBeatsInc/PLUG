import { HOMESIDEPDIVPAGE } from "../HomeSideDiv/HomeSideDIv.js";
import { AUTOLOGINPAGE } from "../UserAccountPage/AutoLoginPage.js";
import { HOMEPAGES } from "./HomePages.js";

export const HOMEPAGE=()=>{

    let USERIMAGE;

    if (localStorage.getItem('User')) {

        DEJSON('local','UserData',(data)=>{

            USERIMAGE=data.UserPhoto||WHITEICONS+'user.png';

        })

    };
    
    HEADERWIDGET(
        `
            <h1 class='AppLogo'>Plug</h1>

            <img src='${IMAGEPATH}app_icon.png'/>

            <input class='PluginSearch' type='Search' placeholder='Search For Plugin'/>

            <img src='${WHITEICONS}saved.png'/>

            <img src='${WHITEICONS}music.png'/>

            <img class='MyAccount' src='${USERIMAGE||WHITEICONS+'user.png'}'/>

        `,
        `

            <div class='SideDiv'></div>

            <div class='MainDiv'></div>


        `,''
    );

    HOMESIDEPDIVPAGE();

    HOMEPAGES();

    CLICKED('.MyAccount',()=>{AUTOLOGINPAGE()});

};