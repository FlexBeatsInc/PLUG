import { AUTODOWNLOADPLUGINS } from "../Project/AutoDownload/AutoDownloadPlugins.js";
import { AUTODOWNLOADUSER } from "../Project/AutoDownload/AutoDownloadUserdata.js";
import { HOMEPAGE } from "../Project/HomePage/HomePage.js"

export const CONNECTION=()=>{

    AUTODOWNLOADPLUGINS();

    AUTODOWNLOADUSER()

    HOMEPAGE();
}