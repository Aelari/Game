function encLoad() {
    document.getElementById("tdName").innerText = localStorage.chNm;
    document.getElementById("tdClass").innerHTML = localStorage.Cls;
    document.getElementById("tdRace").innerHTML = localStorage.Rce;
    document.getElementById("tdLevel").innerHTML = localStorage.Lvl;
    document.getElementById("tdEXP").innerHTML = localStorage.EXP;
    document.getElementById("tdNxtLvl").innerHTML = localStorage.NXT;
    
    document.getElementById("print").innerHTML = chaNm + ' ' + localStorage.getItem("Cls") + ' ' + localStorage.getItem("Rce");
}