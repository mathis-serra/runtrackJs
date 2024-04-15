
function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("L'ordre de tri doit être 'asc' ou 'desc'.");
        return null;
    }
}


let numbers = [4, 2, 7, 1, 5];
console.log("Tri ascendant:", tri(numbers, "asc"));
console.log("Tri descendant:", tri(numbers, "desc")); 

