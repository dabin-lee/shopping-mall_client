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
    <>
      <h2 className='page-tit'>상품목록</h2>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </>
  )
}

export default ProductList
