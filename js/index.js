function sheetLoad() {
    localStorage.setItem("chNm", chaNm);
    localStorage.setItem("Rce", Race);
    localStorage.setItem("Cls", Class);
    localStorage.setItem("Lvl", Level);

    localStorage.setItem("Str", Strength);
    localStorage.setItem("Dex", Dexterity);
    localStorage.setItem("Con", Constitution);
    localStorage.setItem("Int", Intelligence);
    localStorage.setItem("Cha", Charisma);
    localStorage.setItem("Wis", Wisdom);

    localStorage.setItem("EXP", cXP);
    localStorage.setItem("NXT", nxtLvl);
}

function update() {
    raceBonus();
    stats();
    saveChara();
}

function raceBonus() {
    if (document.getElementById("race").value == "Human") {
        document.getElementById("str").value = parseInt(document.getElementById("str").value) + 2;
        document.getElementById("cha").value = parseInt(document.getElementById("cha").value) + 1;
    }
    else if (document.getElementById("race").value == "Dwarf") {
        document.getElementById("str").value = parseInt(document.getElementById("str").value) + 1;
        document.getElementById("con").value = parseInt(document.getElementById("con").value) + 2;
    }
    else if (document.getElementById("race").value == "Elf") {
        document.getElementById("dex").value = parseInt(document.getElementById("dex").value) + 2;
        document.getElementById("wis").value = parseInt(document.getElementById("wis").value) + 1;
    }
    else if (document.getElementById("race").value == "Halfling") {
        document.getElementById("dex").value = parseInt(document.getElementById("dex").value) + 1;
        document.getElementById("cha").value = parseInt(document.getElementById("cha").value) + 2;
    }
    else if (document.getElementById("race").value == "Half-Elf") {
        document.getElementById("dex").value = parseInt(document.getElementById("dex").value) + 2;
        document.getElementById("cha").value = parseInt(document.getElementById("cha").value) + 1;
    }
    else if (document.getElementById("race").value == "Gnome") {
        document.getElementById("int").value = parseInt(document.getElementById("int").value) + 2;
        document.getElementById("wis").value = parseInt(document.getElementById("wis").value) + 1;
    }
}

function stats() {
    if (document.getElementById("class").value == "Fighter") {
        document.getElementById("str").value = 17;
        document.getElementById("dex").value = 15;
        document.getElementById("con").value = 16;
        document.getElementById("int").value = 11;
        document.getElementById("cha").value = 9;
        document.getElementById("wis").value = 14;
    }
    else if (document.getElementById("class").value == "Barbarian") {
        document.getElementById("str").value = 16;
        document.getElementById("dex").value = 14;
        document.getElementById("con").value = 17;
        document.getElementById("int").value = 9;
        document.getElementById("cha").value = 15;
        document.getElementById("wis").value = 11;
    }
    else if (document.getElementById("class").value == "Cleric") {
        document.getElementById("str").value = 15;
        document.getElementById("dex").value = 9;
        document.getElementById("con").value = 16;
        document.getElementById("int").value = 11;
        document.getElementById("cha").value = 14;
        document.getElementById("wis").value = 17;
    }
    else if (document.getElementById("class").value == "Rogue") {
        document.getElementById("str").value = 11;
        document.getElementById("dex").value = 17;
        document.getElementById("con").value = 9;
        document.getElementById("int").value = 15;
        document.getElementById("cha").value = 16;
        document.getElementById("wis").value = 14;
    }
    else if (document.getElementById("class").value == "Ranger") {
        document.getElementById("str").value = 14;
        document.getElementById("dex").value = 17;
        document.getElementById("con").value = 11;
        document.getElementById("int").value = 15;
        document.getElementById("cha").value = 9;
        document.getElementById("wis").value = 16;
    }
    else if (document.getElementById("class").value == "Wizard") {
        document.getElementById("str").value = 9;
        document.getElementById("dex").value = 11;
        document.getElementById("con").value = 14;
        document.getElementById("int").value = 17;
        document.getElementById("cha").value = 15;
        document.getElementById("wis").value = 16;
    }
}

function resetSheet() {
    document.getElementById("chaSheet").reset();

    document.getElementById("lvl").value = 1;
    document.getElementById("exp").value = 0;
    document.getElementById("nxt").value = 150;

    document.getElementById("str").value = 10;
    document.getElementById("dex").value = 10;
    document.getElementById("con").value = 10;
    document.getElementById("int").value = 10;
    document.getElementById("cha").value = 10;
    document.getElementById("wis").value = 10;
}

function saveChara() {
    saveFile();

    chaNm = document.getElementById("chaName").value;
    Race = document.getElementById("race").value;
    Class = document.getElementById("class").value;
    Level = document.getElementById("lvl").value;

    Strength = document.getElementById("str").value;
    Dexterity = document.getElementById("dex").value;
    Constitution = document.getElementById("con").value;
    Intelligence = document.getElementById("int").value;
    Charisma = document.getElementById("cha").value;
    Wisdom = document.getElementById("wis").value;

    cXP = document.getElementById("exp").value;

    nxtLvl = document.getElementById(lvl).value * 100 * 1.5;
}

function saveFile() {
    localStorage.chNm = document.getElementById("chaName").value;
    localStorage.Rce = document.getElementById("race").value;
    localStorage.Cls = document.getElementById("class").value;
    localStorage.Lvl = document.getElementById("lvl").value;

    localStorage.Str = document.getElementById("str").value;
    localStorage.Dex = document.getElementById("dex").value;
    localStorage.Con = document.getElementById("con").value;
    localStorage.Int = document.getElementById("int").value;
    localStorage.Cha = document.getElementById("cha").value;
    localStorage.Wis = document.getElementById("wis").value;

    localStorage.EXP = document.getElementById("exp").value;
    localStorage.NXT = document.getElementById("nxt").value;

    chaNm = document.getElementById("chaName").value;
    Race = document.getElementById("race").value;
    Class = document.getElementById("class").value;
    Level = document.getElementById("lvl").value;

    Strength = document.getElementById("str").value;
    Dexterity = document.getElementById("dex").value;
    Constitution = document.getElementById("con").value;
    Intelligence = document.getElementById("int").value;
    Charisma = document.getElementById("cha").value;
    Wisdom = document.getElementById("wis").value;

    cXP = document.getElementById("exp").value;

    nxtLvl = Level * 100 * 1.5;
    document.getElementById("nxt").value = nxtLvl;
    
    document.getElementById("print").innerHTML = localStorage.getItem("chNm") + ' ' + localStorage.getItem("Cls") + ' ' + localStorage.Rce;
}

function loadFile() {
    if (localStorage.chNm != null) {
        document.getElementById("chaName").value = localStorage.chNm;
        document.getElementById("race").value = localStorage.Rce;
        document.getElementById("class").value = localStorage.Cls;
        document.getElementById("lvl").value = localStorage.Lvl;

        document.getElementById("str").value = localStorage.Str;
        document.getElementById("dex").value = localStorage.Dex;
        document.getElementById("con").value = localStorage.Con;
        document.getElementById("int").value = localStorage.Int;
        document.getElementById("cha").value = localStorage.Cha;
        document.getElementById("wis").value = localStorage.Wis;

        document.getElementById("exp").value = localStorage.EXP;

        chaNm = document.getElementById("chaName").value;
        Race = document.getElementById("race").value;
        Class = document.getElementById("class").value;
        Level = document.getElementById("lvl").value;

        Strength = document.getElementById("str").value;
        Dexterity = document.getElementById("dex").value;
        Constitution = document.getElementById("con").value;
        Intelligence = document.getElementById("int").value;
        Charisma = document.getElementById("cha").value;
        Wisdom = document.getElementById("wis").value;

        cXP = document.getElementById("exp").value;

        nxtLvl = Level * 100 * 1.5;
        document.getElementById("nxt").value = nxtLvl;
    }
    else {
        alert("Please create a character.")
    }
}

function clrData() {
    confirm("Are you sure? This will erase all saved data. You will have to start from scratch."); {
        localStorage.clear();
    }
}

function validateForm() {
    var errorMess = "";
    var x = document.forms["chaSheet"]["chaName"].value;
    var y = document.forms["chaSheet"]["class"].value;
    var z = document.forms["chaSheet"]["race"].value;
    if (x == "") {
        errorMess = "You must enter a name";
    }
    if (y == "") {
        errorMess += "\nYou must pick a class";
    }
    if (z == "") {
        errorMess += "\nYou must pick a race";
    }
    if (errorMess != "") {
        alert(errorMess);
        return false
    }
}