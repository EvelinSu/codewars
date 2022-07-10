let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1500, sugar: 1200, eggs: 3, milk: 200 };

function cakes(recipe, available) {
    let result = [];
    for (let key of Object.keys(recipe)) {
        result.push(available[key] / recipe[key]);
        if (!available[key]) {
            return 0;
        }
    }
    return Math.floor(Math.min.apply(null, result));
}
console.log(cakes(recipe, available)); // 3;
