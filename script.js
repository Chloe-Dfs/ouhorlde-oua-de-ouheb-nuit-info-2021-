var id = 0;
var langue = 0;

// Is this the real life?
// Is this just fantasy?

var questions = [["You go to the bakery, you ask :", "What do you have for breakfast ?", "What causes the end of the dinosaurs ?", "What is your favorite word (except Queen) ?", "You are alone on a desert island, you think of :", "I have 4 arms, 5 legs, 3 heads and 12 fingers, who am I ?", "What is the difference between an English and a French ?", "Who do you think are the best ?"],
                ["Vous allez à la boulangerie, vous demandez :", "Que prenez-vous au petit déjeuner", "Qu'est-ce qui a causé la fin des dinosaures", "Quel est votre mot préféré ?", "Vous êtes seul sur une île déserte, vous pensez à :", "J'ai 4, 5 jambes, 3 têtes et 12 doigts. Qui suis-je ?", "Qu'est-ce qui différencie un anglais d'un français ?", "Pour vous, qui sont les meilleurs ?"]];

var rep = [[["A baguette", "A slice of semi-salted butter accompanied by its wild berry jam", "They drank gallons of tea", "Baguette","A crispy baguette", "A liar","His relationship to royalty","Queens"],
            ["A well-cooked baguette", "A butter croissant", "They didn't have baguette", "Deja Vu","Well caramelized French toast", "An English","The amount of beer drunk each year","Baguette eaters"],
            ["An undercooked baguette", "A fried egg lying around in the fridge for a long time", "Joan of Arc was not born", "Rendez Vous","A pancake", "An American","When they are old they go to each other's country","The European Rugby Champions 2020"],
            ["Scones (seriously ?)", "What is breakfast?", "The three", "France","Answer D", "The three","Self-mockery","Everything except England"]], 
            [["Une baguette","Une tartine de beurre demi-sel accompagnée de sa confiture au baies sauvages", "Ils buvaient des litres de thé", "Déja vu", "Une baguette croustillante", "Un menteur", "Sa relation à la royauté", "Les mangeurs de croissant"], 
            ["Une baguette bien cuite", "Un croissant au beurre", "Ils n'avaient pas de baguette", "Rendez-vous", "Du pain perdu bien caramélisé", "Un anglais", "La quantité de bière bu", "Les mangeurs de baguette"], 
            ["Une baguette pas trop cuite", "Un oeuf au plat trainant au fond du frigo depuis des lustres", "Jeanne d'Arc n'était pas encore née...", "Baguette", "Un Pancake", "Un américain", "Quand ils sont vieux, ils vont dans le pays de l'autre", "Les champions européen de Rugby 2020"], 
            ["Des scones (Sérieusement ..?)", "C'est quoi un petit déjeuner ?", "Les trois", "France", "La réponse d", "Les trois", "L'auto-dérision", "Tout sauf l'Angleterre"]]];

    var resultat = [["A magnificent traditional baguette! Congratulations !", "A magnificent flute! Congratulations !", "A simple baguette......", "A magnificent Sarmentine ! Congratulations !"], 
                    [" Une magnifique baguette traditionnel ! Félicitations !", "Une magnifique flûte ! Félicitations !", "Une simple baguette.....", "Une magnifique Sarmentine ! Félicitations !"]];

    var musique = ["Bohemian Rhapsody / God save the Queen / I want to break free", "God save the Queen / Don't Stop Me Now / Seven Seas Of Rhye", "Don't Stop Me Now, Bohemian Rhapsody", "Seven Seas Of Rhye, Bohemian Rhapsody, I want to break free"];
    var images = ["https://administration.crystalium.eu/images/queen1.jpg", "https://administration.crystalium.eu/images/queen2.jpg", "https://administration.crystalium.eu/images/queen3.jpg", "https://administration.crystalium.eu/images/queen4.jpg"];

var titre = document.getElementById("titre");
var question = document.getElementById("question");
var checkbox = [document.getElementById("checkbox1"), document.getElementById("checkbox2"), document.getElementById("checkbox3"), document.getElementById("checkbox4")];
var label = [document.getElementById("label1"), document.getElementById("label2"), document.getElementById("label3"), document.getElementById("label4")];
var btn = document.getElementById('btn');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    } 

var r = getRandomInt(0,musique.length);
var r2 = getRandomInt(0,images.length);

var actualiser = function(incr) {
    if(langue == 0)
        titre.innerHTML = "WHAT BAGUETTE ARE YOU ?";
    else
        titre.innerHTML = "QUELLE BAGUETTE ES-TU ?";
    if(btn.innerHTML == "Send" || btn.innerHTML == "Envoyer") {
        document.getElementById("btn-hide").hidden = true;
        document.getElementById("img-hide").hidden = false;
        document.getElementById("photo-finish").src = images[r2];

        for (let i = 0; i<4;i++){
            checkbox[i].hidden = true;
            label[i].innerHTML = "";
        }

        label1.innerHTML = resultat[langue][r];
        if(langue == 0) {
            question.innerHTML = "You are :";
            label2.innerHTML = "Here are some Queen music that you might like : \n";
        }
        else {
            question.innerHTML = "Tu es :";
            label2.innerHTML = "Voici quelques musiques de Queen qui pourraient vous plaire : \n";
        }
        label3.innerHTML = musique[r];
    }
    else {
        //Don't stop me, don't stop me
        //Don't stop me, hey, hey, hey
        if(incr)
            id+=1;
        if(id == questions[langue].length-1) {
            if(langue == 0)
                btn.innerHTML="Send";
            else
                btn.innerHTML="Envoyer";
        }
        else {
            if(langue == 0)
                btn.innerHTML="Next question";
            else
                btn.innerHTML="Question suivante";
        }
        question.innerHTML=questions[langue][id];
        for (let i = 0; i < 4; i++) {
            const e = label[i];
            if(rep[langue][i][id].length > 0) {
                e.innerHTML=rep[langue][i][id];
                checkbox[i].hidden = false;
                checkbox[i].checked = false;
                e.hidden = false;
            }
            else {
                checkbox[i].hidden = true;
                console.log(checkbox[i]);
                e.hidden = true;
            }
        }
        label2.innerHTML=rep[langue][1][id];
        label3.innerHTML=rep[langue][2][id];
        label4.innerHTML=rep[langue][3][id];  
    }
}

var change = function() {
    actualiser(true);
}

//English to English Pirate
var pirate = document.getElementsByClassName("pirate");

function httpGet(url)
{
fetch(url)
.then(function (response) {
    switch (response.status) {
        // status "OK"
        case 200:
            return response.text();
        // status "Not Found"
        case 404:
            throw response;
    }
})
.then(function (template) {
    console.log(template);
})
.catch(function (response) {
    // "Not Found"
    console.log(response.statusText);
});  
}

for (var i = 0; i < pirate.length; i++) {
pirate[i].addEventListener('click', function(e) {
    var url = "pirate.php?english="+encodeURI(e.target.innerHTML);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        e.target.innerHTML = xhr.responseText;
    }};

        xhr.send();
});
}

//English to French

var changeLang = function() {
    var lang = document.getElementById("langue");
    if(langue==0) {
        langue=1;
        actualiser(false);
        lang.src = "https://administration.crystalium.eu/images/uk_flag.png";
    }
    else {
        langue=0;
        actualiser(false);
        lang.src = "https://administration.crystalium.eu/images/fr_flag.png";
    }
}