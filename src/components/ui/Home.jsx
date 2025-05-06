import { Flex, SimpleGrid } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductCard from './ProductCard'
import products from '../../data/products.js'

function Home() {
  const navigate = useNavigate();

  const handleClick = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`);
  }
  
    return <>
      <Header/>
      <SimpleGrid 
        width="60%"
        columns={[1, 2, 3, 4]} 
        marginX='20%' 
        marginY={10} 
        minChildWidth="xs"
      >
        {products && products.map((product) => (
          <Flex 
            key={product.id}
            align="center" 
            justify="center" 
            cursor="pointer"
            onClick={() => handleClick(product)} 
          >
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </Flex>
        ))}
      </SimpleGrid>
      <Footer/>
    </>
  }
  
  export default Home
  