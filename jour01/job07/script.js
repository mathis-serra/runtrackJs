function jourTravaille(date) {
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let joursFeries = {
        "1-1": "Nouvel An",
        "1-5": "Fête du Travail",
        "12-25": "Noël"
    };
    
    let formattedDate = day + "-" + month;

    if (joursFeries[formattedDate]) {
        return "Le " + formattedDate + " est un jour férié : " + joursFeries[formattedDate];
    } else if (day === 0 || day === 6) {
        return "Non, " + jours[day] + " " + formattedDate + " est un week-end";
    } else {
        return "Oui, " + jours[day] + " " + formattedDate + " est un jour travaillé";
    }
}

let dateTest = new Date(2024, 0, 1); 
console.log(jourTravaille(dateTest));
