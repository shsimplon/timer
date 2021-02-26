var btn = document.querySelector('button')
var secondes = 10;
let interval;


btn.addEventListener('click', start);

function start() {

    interval = setInterval(decompte, 1000);
    console.log(interval)
        //fonction start créer un intervalle sur la fonction decompte() toutes les secondes, pendant 10 secondes.
        // setInterval(function, milliseconds, param1, param2, ...)=synthaxe
}

function stop() {
    clearInterval(interval);
    // Utilisation de clearInterval () pour arrêter l'interval

    document.body.innerHTML += 'stop!';
    // += montre qu'on rajoute a notre page un contenu
}

function decompte() {

    secondes--;
    if (secondes == 0) {
        stop();

    } else {
        document.body.innerHTML += secondes + '<br>';
        // on rajoute les scondes a notre body

    }
}