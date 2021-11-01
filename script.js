
//Inserting Video Function
const videoElement = document.getElementById("videoElement");

// Autoplay the video if application is visible
if (document.visibilityState === "visible") {
  videoElement.play();
}

// Handle page visibility change events
function visibilityListener() {
  switch(document.visibilityState) {
    case "hidden":
      videoElement.pause();
      break;
    case "visible":
      videoElement.play();
      break;
  }
}