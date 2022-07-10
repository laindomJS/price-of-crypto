import { Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Toggle } from './Toggle';

export const Navbar = () => {
  return (
    <Flex
      as={motion.nav}
      w="100%"
      padding="1rem"
      alignItems="center"
      justifyContent="space-around"
      borderBottom="2px solid"
      initial={ {opacity: 0} }
      whileInView={ {opacity: 1} }
      viewport={ {once: true} }>

      <Heading
        as="h1"
        fontWeight="bold"
        _hover={ {cursor:'default'} }>
        Price of Crypto!
      </Heading>
      
      <Toggle />

    </Flex>
  );
}