let bagArr;
onload();
function onload(){
    let bagItemStr = localStorage.getItem('bagItem');
    bagArr = bagItemStr?JSON.parse(bagItemStr):[];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag (itemId){
    bagArr.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagArr));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagArr.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagArr.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
        <div class="item-container">
            <img class = "images" src="${item.image}" alt="item image">
            <div class="rating"> ${item.rating.stars} ⭐| ${item.rating.count}</div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage} % Off)</span>
            </div>
            <button class="add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
    }

