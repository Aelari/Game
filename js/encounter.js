function encLoad() {
    document.getElementById("tdName").innerText = localStorage.chNm;
    document.getElementById("tdRace").innerHTML = localStorage.Rce;
    document.getElementById("tdClass").innerHTML = localStorage.Cls;
    document.getElementById("tdHP").innerHTML = localStorage.HP;
    document.getElementById("tdLevel").innerHTML = localStorage.Lvl;
    document.getElementById("tdEXP").innerHTML = localStorage.EXP;
    document.getElementById("tdNxtLvl").innerHTML = localStorage.NXT;
    document.getElementById("tdAC").innerHTML = localStorage.AC;

    document.getElementById("print").innerHTML = chaNm + ' ' + localStorage.getItem("Rce") + ' ' + localStorage.getItem("Cls");

    fillSkill();
    updateSkill();
    encType();
}

var numTypes = 3;

var rnd1 = Math.ceil(Math.random() * numTypes);

var variety = 0;

encSubType();

var rnd2 = Math.ceil(Math.random() * variety);

var eClass = 0;

encClassType();

var rnd4 = Math.ceil(Math.random() * eClass);

var type = new BuildArray(numTypes);

var subtype = new BuildArray(variety);

var cHP = 0;

function encSubType() {
    if (rnd1 == 1) {
        variety = 4;
    }
    else if (rnd1 == 2) {
        variety = 6;
    }
    else if (rnd1 == 3) {
        variety = 7;
    }
    else if (rnd1 == 4) {
        variety = 7;
    }
    else if (rnd1 == 5) {
        variety = 7;
    }
    else if (rnd1 == 6) {
        variety = 7;
    }
}

function encClassType() {
    if (rnd1 == 1) {
        eClass = 3;
    }
    else if (rnd1 == 2) {
        eClass = 10;
    }
    else if (rnd1 == 3) {
        eClass = 6;
    }
}

function randEncType() {

    // Use the following variables to 
    // define your random type:
    type[1] = "Goblinoid"
    type[2] = "Dragonoid"
    type[3] = "Humanoid"
    type[4] = "Undead"
    type[5] = "Beast"
    type[6] = "Friendly"

    function BuildArray(size) {
        this.length = size
        for (var i = 1; i <= size; i++) {
            this[i] = null
        }
        return this
    }

    document.getElementById("print").innerHTML = rnd1 + " " + rnd2 + " " + rnd4;
    randEncSub();
}

function randEncSub() {

    if (rnd1 == 1) {
        subtype[1] = "Kobold"
        subtype[2] = "Goblin"
        subtype[3] = "Hobgoblin"
        subtype[4] = "Orc"
    }

    else if (rnd1 == 2) {
        subtype[1] = "Pseudodragon"
        subtype[2] = "Fairy Dragon"
        subtype[3] = "Wyrmling"
        subtype[4] = "Drake"
        subtype[5] = "Wyvern"
        subtype[6] = "Dragon"
    }

    else if (rnd1 == 3) {
        subtype[1] = "Gnome"
        subtype[2] = "Halfling"
        subtype[3] = "Half-Elf"
        subtype[4] = "Elf"
        subtype[5] = "Dwarf"
        subtype[6] = "Human"
        subtype[7] = "Drow"
    }

    function BuildArray(size) {
        this.length = size
        for (var i = 1; i <= size; i++) {
            this[i] = null
        }
        return this
    }
}

function encClass() {
    encClassType();
    if (rnd1 == 1) {
        crClass[1] = "Shaman"
        crClass[2] = "Fighter"
        crClass[3] = "Ranger"
    }

    else if (rnd1 == 2) {
        crClass[1] = "Black"
        crClass[2] = "Blue"
        crClass[3] = "Green"
        crClass[4] = "Red"
        crClass[5] = "White"
        crClass[6] = "Brass"
        crClass[7] = "Bronze"
        crClass[8] = "Copper"
        crClass[9] = "Gold"
        crClass[10] = "Silver"
    }

    else if (rnd1 == 3) {
        crClass[1] = "Barbarian"
        crClass[2] = "Cleric"
        crClass[3] = "Fighter"
        crClass[4] = "Ranger"
        crClass[5] = "Rogue"
        crClass[6] = "Wizard"
    }
}

function encType() {
    var minLvl = Math.max(Level - 5, 1);
    var maxLvl = parseInt(localStorage.Lvl) + 5;

    rnd1 = Math.ceil(Math.random() * numTypes);
    encSubType();
    rnd2 = Math.ceil(Math.random() * variety);
    randEncType();
    rnd4 = Math.ceil(Math.random() * eClass);
    encClass();

    document.getElementById("creature").innerHTML = subtype[rnd2];
    document.getElementById("type").innerHTML = type[rnd1];
    document.getElementById("cClass").innerHTML = crClass[rnd4];
    document.getElementById("level").innerHTML = Math.floor((Math.random() * maxLvl) + minLvl);
}