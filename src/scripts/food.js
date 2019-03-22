const buildFoodHtml = foodObject => {
    const foodArticle = buildElement("article")
    foodArticle.classList.add("food")
    foodArticle.appendChild(buildElement("h3", undefined, foodObject.name))
    foodArticle.appendChild(buildElement("p", undefined, foodObject.ethnicity))
    foodArticle.appendChild(buildElement("p", undefined, foodObject.category))

    return foodArticle
}

const listFoods = () => {
    getAllFoods().then(foodsArray => {
        console.table("foodsArray", foodsArray)
        let allFoodsFragment = document.createDocumentFragment()

        foodsArray.forEach(food => {
            let foodHtml = buildFoodHtml(food)
            allFoodsFragment.appendChild(foodHtml)
        })
        const allFoodsSection = document.querySelector("#food")
        allFoodsSection.appendChild(allFoodsFragment)
    })

}


