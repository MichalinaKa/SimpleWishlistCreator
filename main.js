//1. przycisk wydrukuj
let btnPrint = document.getElementById('btnPrint');
btnPrint.addEventListener('click', printView);

//2. przycisk dodaj życzenie
let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', addElement);

//3. moja lista życzeń ;)
let myWishlist = [];

//4. mój obszar listy życzeń 
let myWishlistArea = document.getElementById('wishlist');

//5. dodaj element listy
function addElement() {
    let addWish = document.getElementById('wish');
    addToTheList(addWish);
    clearWishInput(addWish);
}

//6. funkcja pokaż listę życzeń 
function printView() {
    let viewWithList = document.getElementById("siteWithWishlist");
    let formArea = document.getElementById("wishListForm");
    formArea.style.display = "none";
    viewWithList.className = "print";
    myWishlistArea.innerHTML = "";
    myWishlist.sort();
    for (let i = 0; i < myWishlist.length; i++) {
        myWishlistArea.innerHTML += `<li> ${myWishlist[i]} </li>`
    };

    btnPrint.style.display = "none";
    window.print();
}

//7. dodaj do listy
function addToTheList(wishToAdd) {
    myWishlist.push(wishToAdd.value);
    let newWish = document.createElement('li');
    newWish.innerHTML = myWishlist[myWishlist.length - 1];
    myWishlistArea.appendChild(newWish);

}

//8. wyczyść pole wejściowe
function clearWishInput(inputToClear) {
    inputToClear.value = "";
}