const submit = () => {
    const seacrhs = document.getElementById('find-me')
    const search = seacrhs.value;
    if (search == '') {
        alert('Search somethings!')
    } else {
        seacrhs.value = '';
        //console.log(search)
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(response => response.json())
            .then(data => newFind(data.drinks))

    }
}

const newFind = data => {
    //console.log(data)
    const newDiv = document.getElementById('give-me')
    if (!data) {
        alert('out of service!')
    } else {
        newDiv.textContent = '';
        for (let kabo of data) {
            const div = document.createElement('div')
            div.innerHTML = `
                    <div class="col">
                    <div class="card h-100">
                        <img src="${kabo.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${kabo.strCategory}</h5>
                            <h6>${kabo.strDrink}</h6>
                            <p class="card-text">${kabo.strInstructions.slice(0, 140)}</p>
                            <button onclick="order()"  type="button" class="btn btn-primary">Order</button>
                             <button onclick="details(${kabo.idDrink})"  type="button" class="btn btn-success">Details</button>
                        </div>
                    </div>
            `
            newDiv.appendChild(div)
        }
    }
}

const order = () => {
    alert('Sorry! our online service not available now')
}

const details = (idFind) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idFind}`
    fetch(url)
        .then(response => response.json())
        .then(data => findLast(data.drinks[0]))

}
const findLast = data => {
    //console.log(data)
    const dinLast = document.getElementById('hint');
    dinLast.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = ` 
       <div class="col">
        <div class="card h-100">
            <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${data.idDrink}</h4>
    <h5 class="card-title">${data.strAlcoholic}</h5>
    <h6 class="card-title">${data.strGlass}</h6>
                <p class="card-text">${data.strInstructionsIT.slice(0, 130)}</p>
            </div>
        </div>
    </div>`
    dinLast.appendChild(div)
}