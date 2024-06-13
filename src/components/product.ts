export type ProductType = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

export class Product implements ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	constructor(data: ProductType) {
		this.id = data.id;
		this.title = data.title;
		this.price = data.price;
		this.description = data.description;
		this.category = data.category;
		this.image = data.image;
	}
}
