import { Box, Link, SimpleGrid } from "@chakra-ui/react"

function Footer() {
    return <>
      <Box
        bgColor="#422512"
        w="full"
      >
        <SimpleGrid 
          width="60%"
          columns={[1, 2, 3, 4]} 
          marginX='20%' 
          marginY={10} 
          paddingY={6}
          placeItems="center"
        >
          <Link>INSTAGRAM</Link>
          <Link>TELEGRAM</Link>
          <Link>+38(090)000-00-00</Link>
          <Link>1, SOMEWHERE ST.</Link>
        </SimpleGrid>
      </Box>
    </>
}

export default Footer