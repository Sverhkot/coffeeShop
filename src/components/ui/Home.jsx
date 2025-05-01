import { Flex, SimpleGrid } from "@chakra-ui/react"

import Header from './Header'
import Footer from './Footer'
import ProductCard from './ProductCard'
import products from '../../data/products.js'

function Home() {
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
          >
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </Flex>
        ))}
      </SimpleGrid>
      <Footer/>
    </>
  }
  
  export default Home
  