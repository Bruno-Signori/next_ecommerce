import React from  'react';

import {Box, Link, Image, Button, Flex} from '@chakra-ui/core';
import {motion} from "framer-motion";


// First, create an alias for breakpoints
const breakpoints = ["30em", "48em", "62em", "80em"];

const MyHeader: React.FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.1 }}
    >
    <Flex paddingRight={80} justifyContent="space-between" w="100%" p={6} >
     <Box  >
     <Image src="/rocketseat.svg" alt='rock' />
     </Box>
  
     
     <motion.div 
     initial={{ opacity: 1 }}
     animate={{ opacity: 0.9 }}
     transition={{ duration: 2.2 }}
     >
    
    <Box >
                <Link 
                display={{ md: "block", sm: 'hidden' }}
                href="/" 
                textDecor="none"
                paddingBottom={4}
                border="none" 
                fontWeight="bold"
                borderBottom="3px solid"
                _focus={{border: "none" , color:"gray.900"}}
                _hover={{color: 'blue.400'}}
                color="blue.300" marginRight={10}>Home</Link>
                
                <Link href="/products/allproducts" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                borderColor="gray.800"
                paddingBottom={10}
                _focus={{border: "none" , color:"gray.900"}}
                marginRight={10}>Products</Link>

                <Link href="/services/repositories" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                marginRight={10}>Services</Link>
                
                <Link href="/" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                marginRight={10}>Members</Link>
                
                <Link href="/" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                  marginRight={10}>Contact</Link>

       <Button  variant="ghost"   borderColor="blue.300" border="1px solid #19B5FE">Sign in </Button>
      
      </Box>

      </motion.div>
    
      </Flex>
  </motion.div>
    
   
  );
}
export default MyHeader;