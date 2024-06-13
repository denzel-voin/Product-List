import './sass/styles.sass';
import './components/api';
import { getProducts } from './components/api';
import { Product } from './components/product';

let cart: Product[] = [];
let total = 0;

function updateCartUI() {
	const cartItemsElement = document.getElementById('cart-items');
	const cartTotalElement = document.getElementById('cart-total');

	cartItemsElement.innerHTML = '';

	cart.forEach((item) => {
		const li = document.createElement('li');
		li.textContent = `${item.title} - $${item.price}`;
		cartItemsElement.appendChild(li);
	});

	cartTotalElement.textContent = total.toFixed(2);
}

function addToCart(product: Product) {
	cart.push(product);
	total += product.price;
	updateCartUI();
}

function clearCart() {
	cart = [];
	total = 0;
	updateCartUI();
}

async function displayProducts() {
	const products = await getProducts();
	const productListElement = document.getElementById('product-list');

	if (productListElement) {
		productListElement.innerHTML = ''; // Очищаем контейнер перед добавлением продуктов

		products.forEach((product) => {
			const productElement = document.createElement('div');
			productElement.className = 'product';

			productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.price} USD</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;

			productListElement.appendChild(productElement);

			const addToCartButton = productElement.querySelector('.add-to-cart');
			addToCartButton.addEventListener('click', () => {
				addToCart(product);
			});
		});
	}
}

const clearCartButton = document.getElementById('clear-cart');
if (clearCartButton) {
	clearCartButton.addEventListener('click', clearCart);
}

displayProducts();
