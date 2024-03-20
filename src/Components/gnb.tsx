import { Link } from 'react-router-dom'

const Gnb = () => (
  <nav>
    <ul>
      <li>
        <Link to="/products">상품목록</Link>
      </li>
      <li>
        <Link to="/cart">장바구니</Link>
      </li>
    </ul>
  </nav>
)

export default Gnb
