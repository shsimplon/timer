var button = document.querySelector('button');
let div = document.querySelector('div')


var hidden = true;
// cacher le message
div.style.display = 'none';


button.addEventListener('click', function() {


    if (hidden) {
        div.style.display = 'block';

        button.textContent = ' cacher';
        hidden = false;


    } else {

        div.style.display = 'none';
        button.textContent = 'afficher'
        hidden = true;

    }


})



// 2 eme methode
// var button = document.querySelector('button');
// let newDiv = document.createElement('div')

// var hidden = true;


// button.addEventListener('click', function() {


//     if (hidden) {

//         newDiv.textContent = 'le text cacher';
//         document.body.append(newDiv);
//         button.textContent = ' cacher';
//         hidden = false;
//     } else {


//         newDiv.style.display = 'none';
//         button.textContent = 'afficher'
//         hidden = true;

//     }


// })