import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Toggle = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();

  // const bg = useColorModeValue('white', 'black');
  // const color = useColorModeValue('black', 'white');
  
  return (
    <Flex as="section" alignItems="center" >
      <Button variant="outline" as={motion.button} fontWeight="semibold" fontSize={ {base:'18px', lg:'20px'} } whileHover={ {scale:0.8} } transition=".1s ease" onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} {" "}
        Mode
      </Button>
    </Flex>
  )
}