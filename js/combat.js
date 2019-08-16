var dmg = Math.ceil(primStat / 10 * (parseInt(localStorage.Lvl + localStorage.skillLvl)))
var dmgR = parseInt(localStorage.AC) * (Math.ceil(parseInt(localStorage.Lvl) / 2))
var mobHealth = 0;
var playHealth = 0;
var sklUse = "";
var sklDmg = 0;

function combat() {
    if (sklUse == "Strike" || sklUse == "Shoot" || sklUse == "Stab" || sklUse == "Zap") {
        sklDmg = 5;
    }
    else if (sklUse == "") {

    }
}