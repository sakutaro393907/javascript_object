// JavaScript

console.log('Hello world!');
const products = [
    { name: '商品1', price: 1800, image: 'images/img01.png', inStock: true },
    { name: '商品2', price: 3500, image: 'images/img02.png', inStock: false },
    { name: '商品3', price: 1200, image: 'images/img03.png', inStock: true },
    { name: '商品4', price: 2100, image: 'images/img04.png', inStock: true },
    { name: '商品5', price: 3600, image: 'images/img05.png', inStock: true },
    { name: '商品6', price: 3000, image: 'images/img06.png', inStock: false },
    { name: '商品7', price: 850, image: 'images/img07.png', inStock: true },
    { name: '商品8', price: 2600, image: 'images/img08.png', inStock: true },
     { name: '商品9', price: 1200, image: 'images/img09.png', inStock: true },
    { name: '商品10', price: 2800, image: 'images/img10.png', inStock: false },
    { name: '商品11', price: 1600, image: 'images/img11.png', inStock: true },
    { name: '商品12', price: 1500, image: 'images/img12.png', inStock: false },
];

console.log('商品配列:', products);
console.log('商品数:', products.length);
console.log('1番目の商品:', products[0]);
console.log('1番目の商品名:', products[0].name);

const productContainer = document.querySelector('#product-container');
const showAllBtn = document.querySelector('#show-all');
const filterPriceBtn = document.querySelector('#filter-price');
const filterStockBtn = document.querySelector('#filter-stock');

// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '在庫あり' : '在庫なし';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

//←ここにイベントを追加

displayProducts(products); // 初期表示
