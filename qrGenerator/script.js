// Get DOM elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");
let popup = document.getElementById("popup");

/**
 * Shows a popup message for 3 seconds
 * Workflow:
 * 1. Add 'show' class to make popup visible
 * 2. Remove 'show' class after 3 seconds to hide popup
 */
function showPopup() {
    popup.classList.add("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

/**
 * Generates QR code based on input text
 * Workflow:
 * 1. Check if input text exists
 * 2. If yes:
 *    - Generate QR code using API
 *    - Show QR code image
 *    - Display download button
 * 3. If no:
 *    - Show error state on input
 *    - Display error popup
 *    - Remove error state after 1 second
 */
function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";
    }
    else{
        qrText.classList.add("error");
        showPopup();
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

/**
 * Downloads generated QR code as PNG file
 * Workflow:
 * 1. Fetch QR code image from source
 * 2. Convert response to blob
 * 3. Create temporary download link
 * 4. Set link attributes (href and download filename)
 * 5. Programmatically click link to trigger download
 * 6. Clean up by removing link and revoking object URL
 * 7. Handle any errors during download process
 */
function downloadQR() {
    fetch(qrImage.src)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        })
        .catch(error => {
            console.error('Error downloading QR code:', error);
        });
}
