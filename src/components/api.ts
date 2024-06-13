import { Product, ProductType } from './product';

const api :string = 'https://fakestoreapi.com/products';

export async function getProducts () :Promise<Product[]> {
	try {
		const response = await fetch(api);
		const data: ProductType[] = await response.json();
		return data.map(productData => new Product(productData));
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
}
