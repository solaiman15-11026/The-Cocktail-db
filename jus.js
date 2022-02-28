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
    console.log(data)
    const newDiv = document.getElementById('give-me')
    if (!data) {
        alert('No-result')
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
                            <p class="card-text">${kabo.strInstructions.slice(0, 180)}</p>
                        </div>
                    </div>
            `
            newDiv.appendChild(div)
        }
    }
}