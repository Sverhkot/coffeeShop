import { Box, Text } from "@chakra-ui/react"

function Heder() {
  const url = "url('/coffee_header.png')"
  const header = "Great Coffee Delivered"
  
  return <>
    <Box 
      w="full" 
      h="400px"  
      bgImage={url}
      bgSize="cover"
      marginY={10}
      bgRepeat="no-repeat" 
    >
    </Box>
    <Text 
      fontSize="8xl" 
      color="#422512"
      fontFamily="Limelight" 
    >
      {header}
    </Text>
  </>
}
  
export default Heder
  