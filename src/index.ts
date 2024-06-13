import './sass/styles.sass';
import './components/api'
import { getProducts } from './components/api';

async function displayProducts() {
	const products = await getProducts();
	console.log(products);
}

displayProducts();
