console.log ('JS is working!');
const draggables = document.querySelectorAll(".draggable");
const droppables = document.querySelectorAll(".droppable");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", draggable.id);
  });
});


droppables.forEach((droppable) => {
  droppable.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  droppable.addEventListener("drop", (e) => {
    e.preventDefault();
    const dragId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(dragId);
    const trackref = droppable.querySelector("audio").getAttribute("data-trackref");

    if (dragId === "drag1" && trackref === "Back In Black") {
      playAudio(droppable.querySelector("audio"));
      droppable.style.backgroundColor = "lightgreen";
    } else if (dragId === "drag2" && trackref === "Immigrant Song") {
      playAudio(droppable.querySelector("audio"));
      droppable.style.backgroundColor = "lightgreen";
    } else if (dragId === "drag3" && trackref === "Come And Get Your Love") {
      playAudio(droppable.querySelector("audio"));
      droppable.style.backgroundColor = "lightgreen";
    } else if (dragId === "drag4" && trackref === "Shoop") {
      playAudio(droppable.querySelector("audio"));
      droppable.style.backgroundColor = "lightgreen";
    } else {
      droppable.style.backgroundColor = "lightcoral";
    }

    draggedElement.style.opacity = "0.4";
  });
});


function playAudio(audio) {
  audio.currentTime = 0;
  audio.play();
}


function resetColorsAndOpacities() {
  droppables.forEach((droppable) => {
    droppable.style.backgroundColor = "white";
  });
  draggables.forEach((draggable) => {
    draggable.style.opacity = "1";
  });
}


const playButton = document.getElementById("play-pause");
playButton.addEventListener("click", () => {
  droppables.forEach((droppable) => {
    playAudio(droppable.querySelector("audio"));
    droppable.style.backgroundColor = "lightgreen";
  });
});


const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  droppables.forEach((droppable) => {
    droppable.querySelector("audio").pause();
    droppable.querySelector("audio").currentTime = 0;
    droppable.style.backgroundColor = "white";
  });
  resetColorsAndOpacities();
});

