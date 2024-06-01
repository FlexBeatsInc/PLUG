import { HOMESIDEPDIVPAGE } from "../HomeSideDiv/HomeSideDIv.js";
import { HOMEPAGES } from "./HomePages.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(
        `
            <h1 class='AppLogo'>Plug</h1>

            <img src='${IMAGEPATH}app_icon.png'/>

            <input class='PluginSearch' type='Search' placeholder='Search For Plugin'/>

            <img src='${WHITEICONS}saved.png'/>

            <img src='${WHITEICONS}music.png'/>

            <img src='${WHITEICONS}user.png'/>

        `,
        `

            <div class='SideDiv'></div>

            <div class='MainDiv'></div>


        `,''
    );

    HOMESIDEPDIVPAGE();

    HOMEPAGES()

};