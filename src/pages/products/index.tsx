import { useQuery } from '@tanstack/react-query'
import { fetcher, QueryKeys } from '../../queryClient'
import ProductItem from '@/Components/product/item'
import { Product } from '../../types.ts'

const ProductList = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () =>
      fetcher({
        method: 'GET',
        path: '/products',
      }),
  })

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
