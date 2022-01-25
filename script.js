const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const pipButton = document.getElementById('pictureInPicture');
const pipContainer = document.getElementById('pipContainer');

// Prompt to select a media stream, pass to video element and play
async function selectMediaStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () => {
            videoElement.hidden = false;
            videoElement.play();
        }
    } catch (e) {
        console.error(e);
    }
}

button.addEventListener('click', async () => {
    selectMediaStream().then(() => {
        if (document.pictureInPictureEnabled){
            pipContainer.hidden = false;
        } else {
            pipContainer.hidden = true;
        }
    });
});

 pipButton.addEventListener('click', async () => {
     pipButton.disabled = true;
     await videoElement.requestPictureInPicture();
     pipButton.disabled = false;
 })

//onLoad
