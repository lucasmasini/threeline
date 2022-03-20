let searchItemsInput = document.querySelector(".searchInput");

const searchItemLive = (e) => {
    let input = e.target;
    let itemTitles = document.querySelectorAll(".card-title");
    itemTitles.forEach(itemTitle =>{ 
        if (itemTitle.textContent.toLowerCase().includes(input.value)){
            let itemCard = itemTitle.closest(".cardProduct");
            itemCard.classList.remove("searchFilter");
        }else {
            let itemCard = itemTitle.closest(".cardProduct");
            itemCard.classList.add("searchFilter");
        }
    });

}
searchItemsInput.addEventListener("keyup", searchItemLive);
    