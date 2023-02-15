import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Product = () => {
	const [product, setProduct] = useState({
		title: "",
		description: ""
	})
	const router = useRouter()
	const { id } = router.query

	useEffect(() => {
		if (!id) return

		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data)
			})
	}, [id])

	return (<div>
		<h1>{product.title}</h1>
		<p>{product.description}</p>
	</div>)
}

export default Product