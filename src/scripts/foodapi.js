const apiUrl = "http://localhost:8088"

const getAllFoods = () => fetch(`${apiUrl}/food`)
    .then(foods => foods.json())




    // .then(parsedFoods => {
    //     console.table(parsedFoods)
    //     parsedFoods.forEach(food => {
    //         const foodAsHTML = foodFactory(food)
    //         addFoodToDom(foodAsHTML)
    //     })
    // })


