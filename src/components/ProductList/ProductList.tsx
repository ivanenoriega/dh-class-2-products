import { Product } from "@/types/products"
import { FC } from "react"

interface Props {
	products: Product[]
}

const ProductList: FC<Props> = ({ products }) => {
	return (
		<ul>
			{products.map((product: Product ) => (
				<li key={product.id}>
					<a href={`/products/${product.id}`}>{product.title}</a>
				</li>
			))}
		</ul>
	)
}

export default ProductList