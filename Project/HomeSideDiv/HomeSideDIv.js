import { HOMEDAWS } from "../HomeDaws/HomeDaws.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { HOMEPLUGINS } from "../HomePlugins/HomePlugins.js";
import { HOMESAMPLES } from "../HomeSamples/HomeSamples.js";

export const HOMESIDEPDIVPAGE=()=>{

    DECLARATION('.SideDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,
            `
            <button id='Home' class='Button'>

                <h1 class='Btntitles'>Home</h1>

                <img class='SideIcons' src='${WHITEICONS}home.png'/>
            
            </button>

            <button id='PLUGINS' class='Button'>

                <h1 class='Btntitles'>Plugins</h1>

                <img class='SideIcons' src='${WHITEICONS}plugin.png'/>
            
            </button>

            <button class='Button'>

                <h1 class='Btntitles'>Producers</h1>

                <img class='SideIcons' src='${WHITEICONS}profile.png'/>
            
            </button>

            <button class='Button'>

                <h1 class='Btntitles'>Sellers</h1>

                <img class='SideIcons' src='${WHITEICONS}subscription.png'/>
            
            </button>

            <button  id='Samples' class='Button'>

                <h1 class='Btntitles'>Samples</h1>

                <img class='SideIcons' src='${WHITEICONS}subscription.png'/>
            
            </button>

            <button id='Daws' class='Button'>

                <h1 class='Btntitles'>Daws</h1>

                <img class='SideIcons' src='${WHITEICONS}star.png'/>
            
            </button>

            <button class='Button'>
    
                <h1 class='Btntitles'>News</h1>

                <img class='SideIcons' src='${WHITEICONS}trending-topic.png'/>
            
            </button>


            <button class='Button'>

                <h1 class='Btntitles'>Cart</h1>

                <img class='SideIcons' src='${WHITEICONS}cart.png'/>
            
            </button>

            <div class='PolicyDiv'>

                <h1 class='Policy'>Sellers Policy</h1>

                <h1 class='Policy'>Terms And Conditions</h1>
            
            </div>


            `
        );

        CLICKED('#PLUGINS',()=>{
            HOMEPLUGINS();
        });

        CLICKED('#Home',()=>{
            HOMEPAGE();
        });

        CLICKED('#Daws',()=>{
            HOMEDAWS();
        })

        CLICKED('#Samples',()=>{
            HOMESAMPLES();
        })

    })

}