let currentNumberHeader = 4;
const minNumberHeader = 1;
const maxNumberHeader = 5;

function changeSlideHeader(direction) {
    if (direction === "forward") {
        currentNumberHeader = currentNumberHeader === maxNumberHeader ? minNumberHeader : currentNumberHeader + 1;
    } else if (direction === "backward") {
        currentNumberHeader = currentNumberHeader === minNumberHeader ? maxNumberHeader : currentNumberHeader - 1;
    }

    let previousNumber = currentNumberHeader === minNumberHeader ? maxNumberHeader : currentNumberHeader - 1;
    let nextNumber = currentNumberHeader === maxNumberHeader ? minNumberHeader : currentNumberHeader + 1;

    document.getElementById("prev-header").textContent = previousNumber.toString();
    document.getElementById("curr-header").textContent = currentNumberHeader.toString();
    document.getElementById("next-header").textContent = nextNumber.toString();
}

let currentNumberMountains = 1;
const minNumberMountains = 1;
const maxNumberMountains = 4;

function changeSlideMountains(direction) {
    if (direction === "forward") {
        currentNumberMountains = currentNumberMountains === maxNumberMountains ? minNumberMountains : currentNumberMountains + 1;
    } else if (direction === "backward") {
        currentNumberMountains = currentNumberMountains === minNumberMountains ? maxNumberMountains : currentNumberMountains - 1;
    }

    for (let i= 1; i <= maxNumberMountains; i++) {
        if (document.getElementById("circle-" + i).classList.contains("fa-regular")) {
            document.getElementById("circle-" + i).classList.remove("fa-regular");
        }
        if (document.getElementById("circle-" + i).classList.contains("fa-solid")) {
            document.getElementById("circle-" + i).classList.remove("fa-solid");
        }

        if (i === currentNumberMountains) {
            document.getElementById("circle-" + i).classList.add("fa-regular");
        } else {
            document.getElementById("circle-" + i).classList.add("fa-solid");
        }
    }
}