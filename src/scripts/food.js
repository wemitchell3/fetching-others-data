const buildFoodHtml = foodObject => {
    const foodArticle = buildElement("article")
    foodArticle.classList.add("food")
    foodArticle.appendChild(buildElement("h3", undefined, foodObject.name))
    foodArticle.appendChild(buildElement("p", undefined, "Ethnicity: " + foodObject.ethnicity))
    foodArticle.appendChild(buildElement("p", undefined, "Category: " + foodObject.category))
    foodArticle.appendChild(buildElement("p", undefined, "Ingredients: " + foodObject.ingredients))
    foodArticle.appendChild(buildElement("p", undefined, "Origin Country:" + foodObject.country))
    foodArticle.appendChild(buildElement("p", undefined, "Calories: " + foodObject.calories))
    foodArticle.appendChild(buildElement("p", undefined, "Fat: " + foodObject.fat))
    foodArticle.appendChild(buildElement("p", undefined, "Sugar: " + foodObject.sugar))

    return foodArticle
}

// const listFoods = () => {
//     getAllFoods().then(foodsArray => {
//         console.table("foodsArray", foodsArray)
//         let allFoodsFragment = document.createDocumentFragment()

//         foodsArray.forEach(food => {
//             let foodHtml = buildFoodHtml(food)
//             allFoodsFragment.appendChild(foodHtml)
//         })
//         const allFoodsSection = document.querySelector("#food")
//         allFoodsSection.appendChild(allFoodsFragment)
//     })
// }

const listFoods = () => {
    fetch(`http://localhost:8088/food`)
        .then(food => food.json())
        .then(foodsArray => {
            let allFoodsFragment = document.createDocumentFragment()
            foodsArray.forEach(food => {
                fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                    .then(response => response.json())
                    .then(productInfo => {
                        food.ingredients = productInfo.product.ingredients_text;
                        food.country = productInfo.product.countries;
                        food.calories = Math.ceil((productInfo.product.nutriments.energy_serving) / 4.184);
                        food.fat = productInfo.product.nutriments.fat_serving;
                        food.sugar = productInfo.product.nutriments.sugars_serving;
                        let foodHtml = buildFoodHtml(food)
                        allFoodsFragment.appendChild(foodHtml)
                        const allFoodsSection = document.querySelector("#food")
                        allFoodsSection.appendChild(allFoodsFragment)
                    })
            })
        })
}