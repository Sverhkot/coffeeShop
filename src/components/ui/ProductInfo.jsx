import { Stack, VStack, HStack, Text, Image} from "@chakra-ui/react"

import coffeeCardImg from "../../assets/images/coffee_card_img.png"

function ProductInfo({product}) {
    return(
        <Stack>
          <HStack w="full">
            <Image src={coffeeCardImg} />
          <VStack textAlign="left">
            <Text> Country: {product.country}</Text>
            <Text> Processing: {product.processing}</Text>
            <Text> Acidity: {product.acidity}</Text>
            <Text> Sweetness: {product.sweetness}</Text>
            <Text> Bitterness: {product.bitterness}</Text>
            <Text> Flavor profile: {product.flavor}</Text>
          </VStack>
          </HStack>
        </Stack>
    )
}

export default ProductInfo
