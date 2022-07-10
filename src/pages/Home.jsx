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
   <Box w="100%" h="100vh">
    <Navbar />
   </Box>
  )
}

export default App


/*
      {!coins ? 
        (<Text>El arreglo no contiene nada</Text>) : 
        (<Box>
            {coins.map((coin) => (
                <TableCoins key={coin.id} coin={coin} />
            ))}
        </Box>)}
*/