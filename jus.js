

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))