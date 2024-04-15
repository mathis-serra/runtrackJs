function bisextile(annee) {
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
        return true;
    } else {
        return false;
    }
}


var anneeTest = 2023; 
var estBisextile = bisextile(anneeTest);

if (estBisextile) {
    console.log(anneeTest + " est une année bissextile.");
} else {
    console.log(anneeTest + " n'est pas une année bissextile.");
}