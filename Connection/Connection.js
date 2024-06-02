import { AUTODOWNLOADDAWS } from "../Project/AutoDownload/AutoDownLoadDaws.js";
import { AUTODOWNLOADPLUGINS } from "../Project/AutoDownload/AutoDownloadPlugins.js";
import { AUTODOWNLOADSAMPLES } from "../Project/AutoDownload/AutoDownloadSamples.js";
import { AUTODOWNLOADUSER } from "../Project/AutoDownload/AutoDownloadUserdata.js";
import { HOMEPAGE } from "../Project/HomePage/HomePage.js"

export const CONNECTION=()=>{

    AUTODOWNLOADSAMPLES()

    AUTODOWNLOADDAWS();

    AUTODOWNLOADPLUGINS();

    AUTODOWNLOADUSER()

    HOMEPAGE();
}