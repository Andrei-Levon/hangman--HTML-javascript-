let word;
let win_counter;
const list = document.getElementById("guess");
let images = document.getElementsByTagName("img");

function removeCharAt(index) {
    word = word.substring(0,index) + '*' + word.substring(index+1);
}

function start_game() {
    word = document.getElementById("game_word").value;
    document.getElementById("game_word").value = '';
    if (word != '') {
        win_counter = word.length;
        document.getElementById("word").style.display = "none";
        document.getElementById("game").style.visibility = "visible";
        for (let i = 0; i < word.length; ++i) {
            let li = document.createElement('li');
            li.textContent = word[i];
            list.appendChild(li);
        }
        for (let i = 0; i < images.length; ++i) {
            if (i == 0) {
                images[i].style.visibility = "visible";
            } else {
                images[i].style.visibility = "hidden";
            }
        }
    } else {
        document.getElementById("warning").style.visibility = "visible";
    }
}

function submit_letter() {
    letter = document.getElementById("letter").value;
    document.getElementById("letter").value = "a";
    if (word.includes(letter) && letter != '*') {
        for (let i = 0; i < word.length; ++i) {
            if (word[i] == letter) {
                document.getElementsByTagName("li")[i].style.color = "black";
                --win_counter;
                removeCharAt(i);
            }
            if (win_counter == 0) {
                document.getElementById("win").innerHTML = "YOU WON!";
            }
        }
    } else {
        for (let i = 0; i < images.length; ++i) {
            if (images[i].style.visibility == "hidden") {
                images[i].style.visibility = "visible";
                if (images[images.length - 1].style.visibility == "visible") {
                    document.getElementById("win").innerHTML = "YOU LOST";
                }
                break;
            }
        }
    }
}

function retry() {
    document.getElementById("win").innerHTML = "";
    document.getElementById("word").style.display = "flex";
    document.getElementById("game").style.visibility = "hidden";
    list.innerHTML = "";
    word.length = 0;
    for (let i = 0; i < images.length; ++i) {
        images[i].style.visibility = "hidden";
    }
}