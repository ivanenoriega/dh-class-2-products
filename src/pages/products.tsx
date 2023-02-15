import ProductList from "@/components/ProductList"
import { useEffect, useState } from "react"

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(({ products }) => {
				setProducts(products)
			})
	}, [])

	return (
		<main>
			<h1>Products</h1>
			<ProductList products={products} />
		</main>
	)
}

export default Products