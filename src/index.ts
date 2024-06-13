import './sass/styles.sass';
import './components/api'
import { getProducts } from './components/api';
import { Product } from './components/product';

async function displayProducts() {
	const products :Product[] = await getProducts();
	const productListElement :HTMLElement = document.getElementById('product-list');

	if (productListElement) {
		productListElement.innerHTML = '';

		products.forEach(product => {
			const productElement :HTMLDivElement = document.createElement('div');
			productElement.className = 'product';

			productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.price} USD</p>
            `;

			productListElement.appendChild(productElement);
		});
	}
}

displayProducts();
