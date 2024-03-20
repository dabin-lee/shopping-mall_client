import { Product } from '../../types.ts'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, title, price, description, category, image, rating }: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <img src={image} className="product-item__image"></img>
        {/* <p className="product-item__description">{description}</p> */}
        <span className="product-item__price">{price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </li>
  )
}

export default ProductItem
