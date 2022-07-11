import { useState, useEffect } from 'react';

import { Box, Spinner, Input, FormControl } from '@chakra-ui/react';

import { Navbar } from '../components/navbar/Navbar';
import { TableCoins } from '../components/tablecoins/TableCoins';
import { getCoins } from '../services/getCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoins().then(setCoins).catch(err => console.error(err));
  }, [])

  return (
   <Box w="100%" h="100vh" position="relative">
    <Navbar />
    <FormControl as="form">
      <Input m="2rem" w="40%" type="text" placeholder="Search coin..." size="md" variant="filled" onChange={e => setSearch(e.target.value)} autoComplete="off" /> 
    </FormControl>
    {
     coins.length == 0 ? (
      <Spinner size="lg" color="blue" position="absolute" top="0" left="0" right="0" bottom="0" margin="auto" />
     ) : (
      <Box as="main">
        <TableCoins coins={coins} search={search} />
      </Box>
     )
    }
   </Box>
  )
}

export default App


