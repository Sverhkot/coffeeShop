import { Routes, Route } from 'react-router-dom'
import { Provider } from "./components/ui/provider"
import Home from './components/ui/Home'
import Menu from './pages/Menu'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Provider>
  )
}

export default App