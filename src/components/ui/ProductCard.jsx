import { Box, Text, Image, Stack, VStack, HStack } from "@chakra-ui/react"
import { MdAddShoppingCart } from "react-icons/md";

import coffeeCardImg from "../../assets/images/coffee_card_img.png"

function ProductCard({name, description, price}) {
  return <>
    <Box 
      pb={4}
      mb={10}
      w="276px" 
      h="408px"
      shadow="1px 1px 12px 4px rgba(172, 151, 144, 0.52)"
      bgColor="#F9EDDC"
    >
      <Image src={coffeeCardImg}/>
      <Stack 
        p={4} 
        gap={8}
        justifyContent="space-between" 
      >
        <VStack alignItems="start">
          <Text 
            fontSize="xl" 
            color="#422512"
            fontWeight="600"
            fontFamily="Montserrat" 
          >
            {name}
          </Text>
          <Text 
              color="#422512"
              fontSize="xs" 
              textAlign="justify"
              lineClamp="1"
              fontWeight="400"
              fontFamily="Montserrat" 
          >
            {description}
          </Text>
        </VStack>
        <VStack>
          <HStack  
              w='full' 
              color="#422512"
              fontSize="xl"
              fontWeight="600" 
              justifyContent="space-between" 
          >
            <Text 
              textAlign="left"
              fontFamily="Montserrat" 
            >
              {price}$
            </Text>
            <MdAddShoppingCart size={28}/>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  </>
}
  
export default ProductCard
  