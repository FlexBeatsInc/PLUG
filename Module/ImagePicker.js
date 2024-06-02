export const IMAGEPICKER = (ELEMENT, ELEMENT1, callback) => { document.querySelector(ELEMENT).addEventListener('change', function () { var file = this.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function (event) { var image = new Image(); image.src = event.target.result; image.onload = function () { var maxWidth = 800; var maxHeight = 600; var canvas = document.createElement('canvas'); var ctx = canvas.getContext('2d'); var width = image.width; var height = image.height; if (width > height) { if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; } } else { if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; } } canvas.width = width; canvas.height = height; ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(image, 0, 0, width, height); var base64Data; if (file.type === 'image/png') { base64Data = canvas.toDataURL('image/png'); } else { var quality = 0.7; base64Data = canvas.toDataURL('image/jpeg', quality); while (base64Data.length > 49800 && quality > 0) { quality -= 0.1; base64Data = canvas.toDataURL('image/jpeg', quality); } } if (base64Data.length < 49800) { var outputDiv = document.querySelector(ELEMENT1); outputDiv.src = base64Data; callback(base64Data); } else { MESSAGE('Image Format Error'); } }; };reader.readAsDataURL(file);});};

//PLUGINS API
export const PLUGINSAPI='https://script.google.com/macros/s/AKfycbzIuCfv7Y66ZQyYrbV8OzZ44pyIO2rQ7rjwQ1X1An-bv7anQnkdNM3vjdcRh8uBz9Kf0g/exec';

//DAWS API
export const DAWSAPI='https://script.googleusercontent.com/macros/echo?user_content_key=AbQNVLe3Zshu3TdofV6uWdEDuhJQ468A_sFokqaJAjrruG_LjV4L13vSrt5O4DV2fMZ1ie8gtzsL3ZrJ7IpV5-LOJQcMnEVjm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHnyJhCSiPSvb3KSCRfreXk-CMVBMzt9a9otuGFS48VpujknbTEVmzrWB4mjRDNji-KvJ0sJ1iRHVHuzw7HPRpYA8Hz3n9n2Bg&lib=MuLaCU3_6rOFSAM5EUEIV9iP94nk-hx4l';

//SAMPLES API
export const SAMPLESAPI='https://script.googleusercontent.com/macros/echo?user_content_key=Y8IQ7GvT3tjaQ9utuUiaomK4MhU-08_gRMdc_XdgBQEkSCOGoakDqermV58b4Y6zM0CDTSJbxe6E1CRvLy8akSIQPe5sSDfmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDZnx7PiChuFo31e5efVPFmWyi71GHxvpcQx5btNefAdFiA3snoiUBEq1Lm_LgpQU7SIZVcuFiGol8Glfer96AILLno7UnJhjA&lib=MXF3HU9rZjTKMHehrua-hayP94nk-hx4l';

//USERS
export const USERSAPI='https://script.googleusercontent.com/macros/echo?user_content_key=wC8e7VP-F-xo2rUUAEofxn-1lF9JeTkwh8kDdfK06G5Exml-NIdNGYMkba8UFcOqa5sQ9DbwV4_26hrCPWWVezgmRllvUc3Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGL0896T1r6XAScszh4jUUM5lkFr8wOLJh3m6O1FdBYuMh33I_73WAzk5RqZn8OiIki7zzMBerkPbNh0JhEe-OfYqSHi8qaqhw&lib=MrJxf_1DPoJtyr7NFbJYboCP94nk-hx4l';
export const CREATEUSERAPI='https://script.google.com/macros/s/AKfycbyv2S1w-i_M6Jzw8vsjn_80n-N_77WIBeYETUYgyh-6WpdJzTWbvLmwEtX0Qw8w6_Wc/exec';
export const UPDATEUSERAPI='https://script.google.com/macros/s/AKfycbw_lZHS14bD8qk8PyWqf5gW4DHGLLooSeSbaH3Qy3jth3xiMeD_htt8N4eqtTL1aMd-/exec';
export const EMAILAPI='https://script.google.com/macros/s/AKfycbyOntAwDPdE8RgUgLYmL55_qRBh6Tlb_7Cqx214HnUCpSa6Kl8j2u5ZlXTYuUZkqtI/exec';