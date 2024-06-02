export const HOMESAMPLES=()=>{

    const HOMEDIV=document.querySelector('.MainDiv');

    GETINDEXED('PLUG','Plugins',(data)=>{

        CLEAR(HOMEDIV);
        
        REDUX(data,(info)=>{

            SHUFFLE(info.Posts,(element)=>{

                REDUX(element,(Element)=>{

                    const DIVS=document.createElement('div');

                    DIVS.classList.add('PluginsDivs');

                    DISPLAY(DIVS,`

                        <img class='ImgUpload' src='${Element.Img}'/>
                    
                        <h1 class='PlugInName'>${Element.Name}</h1>

                        <button class='Download'>Download</button>

                    `);

                    ADD(HOMEDIV,DIVS);

                    EVENT(DIVS,'click',()=>{

                        const DOWNLOADDIV=document.createElement('div');

                        DOWNLOADDIV.classList.add('DOWNLOADDIV')

                        STYLED(DOWNLOADDIV,'display','block');

                        ADD(HOMEDIV,DOWNLOADDIV);

                        const ClosePluginDiv=document.createElement('div');

                        ClosePluginDiv.classList.add('ClosePluginDiv')

                        ADD(DOWNLOADDIV,ClosePluginDiv);

                        const APPIMAGE=document.createElement('div');

                        APPIMAGE.classList.add('APPIMAGE')

                        DISPLAY(APPIMAGE,
                            `
                            <div class='ImageHolder'>

                                <img class='ImgUpload' src='${Element.Img}'/>
                            
                            </div>

                            <h1 class='AppNameAlone'>${Element.Name}</h1>

                            <div class='AppDetailsHolder'>
                                
                                <p class='Details'>${Element.Details}<br><br>Version ${Element.Version}</p>
                            
                            </div>
                            
                            `
                        );

                        ADD(DOWNLOADDIV,APPIMAGE);

                        const CLOSEICON=document.createElement('img');

                        CLOSEICON.src=WHITEICONS+'close.png';

                        ADD(ClosePluginDiv,CLOSEICON);

                        EVENT(CLOSEICON,'click',()=>{

                            STYLED(DOWNLOADDIV,'display','none');

                        })

                        const BUYBUTTON=document.createElement('button');

                        BUYBUTTON.innerHTML=Element.Price||'Download';

                        BUYBUTTON.classList.add('BUYBUTTON')

                        ADD(DOWNLOADDIV,BUYBUTTON);

                        EVENT(BUYBUTTON,'click',()=>{

                            if (Element.Price) {

                                alert('Not Free');
                                
                            } else {
                            
                                alert('Free');
                                
                            }

                        });

                    });

                });

            });
            
        });

    });
    
}
