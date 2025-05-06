import { Text } from "@chakra-ui/react"
import { useParams } from 'react-router-dom'

import Footer from "../components/ui/Footer.jsx"
import Header from '../components/ui/Header.jsx'
import ProductInfo from '../components/ui/ProductInfo.jsx'
import products from '../data/products.js'

function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
  
    if (!product) return <Text color="red">Product not found :/</Text>;
  
    return (
      <>
        <Header/>
        <ProductInfo product={product}/>
        <Footer/>
      </>
    );
}

export default ProductPage