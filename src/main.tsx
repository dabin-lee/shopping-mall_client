import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'
import '@/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Reset />
    <App />
  </BrowserRouter>
)
