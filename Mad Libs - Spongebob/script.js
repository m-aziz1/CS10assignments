// Mad Lib

//Event Listener
document.getElementById("btn").addEventListener("click", buildMadLib);

//Event Function
function buildMadLib() {
    //input
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adj").value;
    let prpNoun = document.getElementById("prpnoun").value;
    let verb = document.getElementById("ptverb").value;

    //process
    let result = '"Who lives in a ' + noun + ' under the sea? SPONGEBOB SQUAREPANTS! ' + adjective + ' and yellow and porous is he, ' + prpNoun + '! If nautical nonsense be something you wish, SPONGEBOB SQUAREPANTS! Then drop on the deck and ' + verb + ' like a fish!"';

    //output
    document.getElementById("result").innerHTML = result;
}