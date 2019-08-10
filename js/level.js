function chckLvl() {
    while (cXP >= nxtLvl) {
        Level++;
        nxtLvl = (Level * 100) * 1.5;
        document.getElementById("nxt").innerHTML = nxtLvl;
    }
    document.getElementById("lvl").innerHTML = Level;
}

function levelUp() {
    cXP = parseInt(cXP) + 100;

    document.getElementById("exp").innerHTML = cXP;
}