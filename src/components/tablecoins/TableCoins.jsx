import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const TableCoins = ({ coins, search }) => {
  
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())) 

  return(
    <>
      <Box as="header" display="flex" flexDir="column" justifyContent="center" alignItems="center" w="100%">
        <Heading as="h2" my="2rem" letterSpacing="2px" borderBottom="2px solid" borderColor="blue.300">Prices</Heading>
      </Box>
      <TableContainer as="section">
        <Table variant="simple" size="sm">
        
          <Thead>
            <Tr>
              <Th>Popularity</Th>
              <Th>Name</Th>
              <Th>Current Price '$'</Th>
              <Th>Change Price</Th>
            </Tr>
          </Thead>

          <Tbody>
            {
            filteredCoins.map((coin) => (
              <Tr key={coin.id} 
              as={motion.tr} 
              initial={ {opacity: 0} } 
              whileInView={ {opacity: 1} }>

                <Td>{coin.market_cap_rank}</Td>
                <Td display="flex" alignItems="center"> 
                  <Image src={coin.image} w="30px" mr="1rem" alt={coin.id} />
                  <Text mr="2rem" fontWeight="semibold">{coin.name}</Text>
                  <Text color="gray.400">{coin.symbol.toUpperCase()}</Text>
                </Td>
                <Td>{coin.current_price.toLocaleString()}$</Td>
                <Td>
                  <Text color={coin.price_change_percentage_24h > 0 ? 'green.400' : 'red.500'}>
                    {coin.price_change_percentage_24h}
                  </Text>
                </Td>
              
              </Tr>
            ))
            }
          </Tbody>

        </Table>
      </TableContainer>
    </>
  )
}