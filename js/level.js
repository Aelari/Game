var skl = 1;
var sklNxt;
var sklLvlN = parseInt(this["sklLvl" + skl]);
localStorage.setItem("skillLvl", this["sklLvl" + skl]);

var chLvl = parseInt(localStorage.Lvl);

var skill = new BuildArray(chLvl);

var sklLvl1 = 1; //Basic
var sklLvl2 = 1; //First
var sklLvl3 = 1; //Second
var sklLvl4 = 1; //Third
var sklLvl5 = 1; //Fourth
var sklLvl6 = 1; //Fifth
var sklLvl7 = 1; //Sixth
var sklLvl8 = 1; //Seventh
var sklLvl9 = 1;
var sklLvl10 = 1;

var sklPrg1 = 0;
var sklPrg2 = 0;
var sklPrg3 = 0;
var sklPrg4 = 0;
var sklPrg5 = 0;
var sklPrg6 = 0;
var sklPrg7 = 0;
var sklPrg8 = 0;
var sklPrg9 = 0;
var sklPrg10 = 0;

function saveSkill() {
    localStorage.setItem("sklL1", sklLvl1); //Basic
    localStorage.setItem("sklL2", sklLvl2); //First
    localStorage.setItem("sklL3", sklLvl3); //Second
    localStorage.setItem("sklL4", sklLvl4); //Third
    localStorage.setItem("sklL5", sklLvl5); //Fourth
    localStorage.setItem("sklL6", sklLvl6); //Fifth
    localStorage.setItem("sklL7", sklLvl7); //Sixth
    localStorage.setItem("sklL8", sklLvl8); //Seventh
    localStorage.setItem("sklL9", sklLvl9);
    localStorage.setItem("sklL10", sklLvl10);

    localStorage.setItem("sklP1", sklPrg1);
    localStorage.setItem("sklP2", sklPrg2);
    localStorage.setItem("sklP3", sklPrg3);
    localStorage.setItem("sklP4", sklPrg4);
    localStorage.setItem("sklP5", sklPrg5);
    localStorage.setItem("sklP6", sklPrg6);
    localStorage.setItem("sklP7", sklPrg7);
    localStorage.setItem("sklP8", sklPrg8);
    localStorage.setItem("sklP9", sklPrg9);
    localStorage.setItem("sklP10", sklPrg10);
}

function loadSkill() {
    sklLvl1 = parseInt(localStorage.sklL1);
    sklLvl2 = parseInt(localStorage.sklL2);
    sklLvl3 = parseInt(localStorage.sklL3);
    sklLvl4 = parseInt(localStorage.sklL4);
    sklLvl5 = parseInt(localStorage.sklL5);
    sklLvl6 = parseInt(localStorage.sklL6);
    sklLvl7 = parseInt(localStorage.sklL7);
    sklLvl8 = parseInt(localStorage.sklL8);
    sklLvl9 = parseInt(localStorage.sklL9);
    sklLvl10 = parseInt(localStorage.sklL10);

    sklPrg1 = parseInt(localStorage.sklP1);
    sklPrg2 = parseInt(localStorage.sklP2);
    sklPrg3 = parseInt(localStorage.sklP3);
    sklPrg4 = parseInt(localStorage.sklP4);
    sklPrg5 = parseInt(localStorage.sklP5);
    sklPrg6 = parseInt(localStorage.sklP6);
    sklPrg7 = parseInt(localStorage.sklP7);
    sklPrg8 = parseInt(localStorage.sklP8);
    sklPrg9 = parseInt(localStorage.sklP9);
    sklPrg10 = parseInt(localStorage.sklP10);

    var i = 1;
    while (i <= chLvl) {
        var cell2 = document.getElementById("tblSkills").rows[i].cells[1];
        var cell3 = document.getElementById("tblSkills").rows[i].cells[2];

        cell2.innerHTML = parseInt(this["sklLvl" + i]);
        sklNxt = parseInt(this["sklLvl" + i]) * 50;
        var sklXP = parseInt(this["sklPrg" + i]) / sklNxt * 100;
        cell3.innerHTML = sklXP.toFixed(0) + "%";
        i++;
    }
}

function chckLvl() {
    while (cXP >= nxtLvl) {
        Level++;
        nxtLvl = (Level * 100) * 1.5;
        document.getElementById("nxt").innerHTML = nxtLvl;
    }
    document.getElementById("lvl").innerHTML = Level;
}

function levelUp() {
    var cXPr = 0;
    cXP = parseInt(cXP) + 100;

    if (cXP >= nxtLvl) {
        cXPr = cXP - nxtLvl;
        cXP = cXPr;
        Level++;
        nxtLvl = Level * 100 * 1.5;
    }
    document.getElementById("lvl").innerHTML = Level;
    document.getElementById("exp").innerHTML = cXP;
    document.getElementById("nxt").innerHTML = nxtLvl;
}

function lvlSkl(what) {
    var row = 1;
    var cell1 = document.getElementById("tblSkills").rows[row].cells[0];
    var cell2 = document.getElementById("tblSkills").rows[row].cells[1];
    var cell3 = document.getElementById("tblSkills").rows[row].cells[2];

    while (cell1.innerHTML != what.value) {
        row++;
        cell1 = document.getElementById("tblSkills").rows[row].cells[0];
        cell2 = document.getElementById("tblSkills").rows[row].cells[1];
        cell3 = document.getElementById("tblSkills").rows[row].cells[2];
    }

    sklLvlN = parseInt(this["sklLvl" + row]);
    sklNxt = sklLvlN * 50;
    var sklPrgE = Math.ceil(parseInt(this["sklPrg" + row]) + sklLvlN * 2.5);
    var sklPrgP = sklPrgE / sklNxt * 100;
    var sklPrgR = 0;

    cell3.innerHTML = sklPrgP;

    if (sklPrgP >= 100) {
        sklLvlN++;
        sklPrgR = sklPrgE - sklNxt;
        sklNxt = sklLvlN * 50;
        sklPrgE = sklPrgR;
        sklPrgP = sklPrgE / sklNxt * 100;
    }

    cell2.innerHTML = sklLvlN;
    cell3.innerHTML = sklPrgP.toFixed(0) + "%";

    this["sklLvl" + row] = sklLvlN;
    this["sklPrg" + row] = sklPrgE;

    combat();
}

// Skills by Level per Class

if (localStorage.Cls == "Barbarian") {
    skill[1] = "Strike"
    skill[2] = "Rage"
    skill[3] = "Cleave"
    skill[4] = "Primal Strike"
    skill[5] = "Roar"
    skill[6] = "Batter"
    skill[7] = "Stomp"
    skill[8] = "Execute"
    skill[9] = "Reckless Assault"
    skill[10] = "Great Cleave"
}
else if (localStorage.Cls == "Cleric") {
    skill[1] = "Bless"
    skill[2] = "Smite"
    skill[3] = "Divine Strike"
    skill[4] = "Cure"
}
else if (localStorage.Cls == "Fighter") {
    skill[1] = "Slash"
    skill[2] = "Parry"
    skill[3] = "Thrust"
    skill[4] = "Defend"
}
else if (localStorage.Cls == "Ranger") {
    skill[1] = "Shoot"
    skill[2] = "Disengage"
    skill[3] = "Call Beast"
    skill[4] = "Multi-Shot"
}
else if (localStorage.Cls == "Rogue") {
    skill[1] = "Sneak"
    skill[2] = "Backstab"
    skill[3] = "Poison Strike"
    skill[4] = "Steal"
}
else if (localStorage.Cls == "Wizard") {
    skill[1] = "Magic Missile"
    skill[2] = "Shield"
    skill[3] = "Firebolt"
    skill[4] = "Lightning"
}

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function fillSkill() {
    skl = 1;
    while (skl <= chLvl) {
        var tbl = document.getElementById("tblSkills");

        var row = tbl.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = skill[skl];

        sklNxt = parseInt(this["sklLvl" + skl]) * 50;

        if (parseInt(this["sklPrg" + skl]) == sklNxt) {
            parseInt(this["sklLvl" + skl]++);
            this["sklPrg" + skl] = 0;
            sklNxt = skl * 50;
        }

        cell2.innerHTML = this["sklLvl" + skl];

        cell3.innerHTML = (parseInt(this["sklPrg" + skl]) / sklNxt) * 100 + "%";

        skl++;
    }
    skl = 1;
}

/*function updateSkill() {
    skl = 1;
    var row = 1;
    var text = "";

    sklNxt = sklLvlN * 50;
    var sklPrgE = parseInt(this["sklPrg" + skl]);
    var sklPrgP = sklPrgE / sklNxt * 100;
    var sklPrgR = 0;

    var cell1 = document.getElementById("tblSkills").rows[row].cells[0];
    var cell2 = document.getElementById("tblSkills").rows[row].cells[1];
    var cell3 = document.getElementById("tblSkills").rows[row].cells[2];

    cell1.innerHTML = skill[skl];
    cell2.innerHTML = sklLvlN;
    cell3.innerHTML = sklPrgP;
    while (skl <= chLvl) {
        sklLvlN = parseInt(this["sklLvl" + skl]);
        sklPrgE = parseInt(this["sklPrg" + skl]);
        sklNxt = sklLvlN * 50;
        sklPrgP = sklPrgE / sklNxt * 100;

        cell1 = document.getElementById("tblSkills").rows[row].cells[0];
        cell2 = document.getElementById("tblSkills").rows[row].cells[1];
        cell3 = document.getElementById("tblSkills").rows[row].cells[2];

        if (sklPrgP >= 100) {
            sklLvlN++;
            sklPrgR = sklPrgE - sklNxt;
            sklNxt = sklLvlN * 50;
            sklPrgE = sklPrgR;
            sklPrgP = sklPrgE / sklNxt * 100;
        }

        text += chLvl + ' ' + skl + ' ' + skill[skl] + ' ' + this["sklPrg" + skl] + "<br>";

        cell1.innerHTML = skill[skl];
        cell2.innerHTML = sklLvlN;
        cell3.innerHTML = sklPrgP.toFixed(0) + "%";

        this["sklLvl" + skl] = sklLvlN;
        this["sklPrg" + skl] = sklPrgE;
        row++;
        skl++;
    }
    document.getElementById("print").innerHTML = text;
    skl = 1;
    row = 1;
}*/

function sklBtnFill() {
    var x = 0;
    var y = 1;
    var z = 1;
    while (x < parseInt(localStorage.Lvl)) {
        document.getElementById("sklBtn" + z).style.opacity = 1;
        document.getElementById("sklBtn" + z).style.pointerEvents = "auto";
        document.getElementById("sklBtn" + z).value = skill[y];
        x++;
        y++;
        z++;
    }
}