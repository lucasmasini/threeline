let searchItemsInput = document.querySelector(".searchInput");

const searchItemLive = (e) => {
    let input = e.target;
    let results = JSON.parse(productsJSON);
    console.log(results)
    results.forEach(e => {
        (input.value == e.keyname? console.log("coincidencia") :  console.log(undefined));
    });
}

searchItemsInput.addEventListener("click", searchItemLive);
    