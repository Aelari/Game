var skl = 1;
var sklNxt;
var lvlUpSkll;
var sklLvlN = parseInt(this["sklLvl" + skl]);

var chLvl = parseInt(localStorage.Lvl);

var skill = new BuildArray(chLvl)

var skl1 = skill[1];
var skl2 = skill[2];
var skl3 = skill[3];
var skl4 = skill[4];

var sklLvl1 = 1;
var sklLvl2 = 1;
var sklLvl3 = 1;
var sklLvl4 = 1;
var sklLvl5 = 1;
var sklLvl6 = 1;
var sklLvl7 = 1;
var sklLvl8 = 1;
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

function lvlSkl() {
    while (skl <= chLvl) {
        this["sklPrg" + skl] = parseInt(this["sklPrg" + skl]) + 8;
        skl++;
    }
    updateSkill();
}

// Skills by Level per Class

if (localStorage.Cls == "Barbarian") {
    skill[1] = "Rage"
    skill[2] = "Cleave"
    skill[3] = "Primal Strike"
    skill[4] = "Roar"
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

        if (parseInt(this["sklPrg" + skl]) == 50) {
            parseInt(this["sklLvl" + skl]++);
            this["sklPrg" + skl] = 0;
            sklNxt = skl * 50;
        }

        cell2.innerHTML = this["sklLvl" + skl];

        cell3.innerHTML = (parseInt(this["sklPrg" + skl]) / sklNxt) * 100 + "%";

        document.getElementById("print").innerHTML = chLvl + ' ' + skl + ' ' + skill[skl];

        skl++;
    }
    skl = 1;
}

function updateSkill() {
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
}