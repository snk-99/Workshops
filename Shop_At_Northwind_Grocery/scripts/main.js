const table = document.getElementById('tblBody');
const selectList = document.querySelector('#dropDown');
// const productDetails = document.getElementById('product-details');
const categoryDropdown = document.getElementById("category-dropdown");


function loadCategories() {
    tblBody.innerText = "";

    categoryDropdown.innerText = "";
    let option = new Option("categories...", "");
    categoryDropdown.appendChild(option);
    categoryDropdown.style.display = "none";

    fetch("http://localhost:8081/api/products")
        .then((response) => response.json())
        .then((products) => {
            // selectList.value == "viewAll" ? categories.forEach(category => {
            //     buildTable(category, tblBody)
            // }) :

            if (selectList.value == "viewAll") {
                products.forEach(product => {
                    buildTable(product, tblBody)
                });
            } else if (selectList.value == "searchByCategory") {
                products.forEach(product => {
                    categoryDropdown.style.display = "block";
                    let option = new Option(product.productName, product.productName);
                    categoryDropdown.appendChild(option);
                    buildTable(product, tblBody)
                });
            }
        })
}


function buildTable(product) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerText = product.productId;

    const anchor = document.createElement('a');
    anchor.innerText = product.productName;
    anchor.href = `./details.html?productId=${product.productId}`;
    anchor.target = ("_blank")
    cell2.appendChild(anchor);

    cell3.innerText = Number(product.unitPrice).toFixed(2);
}

window.onload = () => {
    selectList.onchange = loadCategories;
}