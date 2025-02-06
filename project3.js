let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function randomexcuse() {
    const randomWho = Math.floor(Math.random() * who.length);
    const randomAction = Math.floor(Math.random() * action.length);
    const randomWhat = Math.floor(Math.random() * what.length);
    const randomWhen = Math.floor(Math.random() * when.length);

    return who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen];
}


function updateExcuse() {
  document.getElementById("excuse").innerText = randomexcuse();
}

