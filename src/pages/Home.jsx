import { useState, useEffect } from 'react';

import { Box, Spinner } from '@chakra-ui/react';

import { Navbar } from '../components/navbar/Navbar';
import { TableCoins } from '../components/tablecoins/TableCoins';
import { getCoins } from '../services/getCoins';

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then(setCoins).catch(err => console.error(err));
  }, [])

  return (
   <Box w="100%" h="100vh" position="relative">
    <Navbar />
    {
     coins.length == 0 ? (
      <Spinner size="lg" color="blue" position="absolute" top="0" left="0" right="0" bottom="0" margin="auto" />
     ) : (
      <Box as="main">
        <TableCoins coins={coins} />
      </Box>
     )
    }
   </Box>
  )
}

export default App


