import { GetServerSideProps } from "next";
import {useRouter} from 'next/router';
import Link from 'next/link';
import SEO from "../../components/SEO";
import { client } from "../../lib/prismic";
import Prismic from 'prismic-javascript';
import {Document} from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import { Box, Flex, Image, List, SimpleGrid, Text, Icon, Divider, Button } from "@chakra-ui/core";
import { motion } from "framer-motion";
import {FiStar} from 'react-icons/fi';


interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: Document[];
}


export default function Home({recommendedProducts}: HomeProps) {
  const router = useRouter()
  
  if (router.isFallback) {
    return <p>carregando</p>
  }
  return (
    <div>
      <SEO 
      title="Products logitech" shouldExcludeTitleSuffix
      />
    <Box justifyContent="center" textAlign="center" marginTop="56px" marginBottom="100px" >
    <SimpleGrid  justifyContent="center" textAlign="center" >
      <Box h="100%" >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.2, duration: 1.4 }}
        
      >
      <Text flex="1" fontSize="6xl" fontWeight="bold" justifyContent="center" color="blue.300"  >PRODUCTS</Text>
      </motion.div>
      </Box>
      <Text size="1xl"  position="relative" justifyContent="center"   top="-34px">Some ways for you to contact us</Text>

      </SimpleGrid>
      </Box>

      

      <Flex w="100%" h="100%"  align="center" justify="center">      
           <Box paddingLeft="20px" justifyContent="center"  >
             {recommendedProducts.map(recommendedProducts =>{
               return (
                <Flex maxW="sm"  float="left" bg="gray.900"  justifyContent="center" justifySelf="center" h="500px"  marginRight="30px" marginBottom="24px" rounded="lg" overflow="hidden">

                 <Flex  justifyItems="center"
                 >
                 <Box margin="8px"  key={recommendedProducts.id}>
                   <Link href={`/catalog/products/${recommendedProducts.uid}`}>
                     <Flex  justifyItems="center" align="center" justify="center"  alignSelf="center">
                  <Image  w='200px'  src={recommendedProducts.data.thumbnail.url}  alt='mouse g502'/>
                  </Flex>
                   </Link>
                   <Flex align="center" color="blue.300" justify="center" marginTop="6px">
                   <Link href={`/catalog/products/${recommendedProducts.uid}`}>
                     
                       {PrismicDOM.RichText.asText(recommendedProducts.data.title)}
                      
                   </Link>
                   </Flex>

                   <Flex  align="center" justify="center" >
                   <Box mt="1" justifyItems="center"  alignSelf="center">
                    <Text fontSize="12px"  textAlign="center"  color="blue.300">Game</Text>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.game) ? "blue.300" : "gray.600"}
                        />
                      ))}
                    </Box>
                    <Divider backgroundColor="gray.900" paddingTop="20px" orientation="vertical" />
                    <Box mt="1" textAlign="center" alignItems="center">
                    <Text fontSize="12px" color="blue.300">Work</Text>

                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.work) ? "blue.300" : "gray.600"}
                        />
                      ))}
                    </Box>
                    <Divider backgroundColor="gray.900" paddingTop="20px" orientation="vertical" />
                    
                    
                    <Box mt="1" alignItems="center">
                    <Text fontSize="12px" textAlign="center" color="blue.300">Graphic desing</Text>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.design) ? "blue.300" : "gray.600"}
                        />
                      ))}
                  </Box>
                  </Flex>
                   

                   <Text marginTop="8px" >{PrismicDOM.RichText.asText(recommendedProducts.data.description)}</Text>
                   <Flex alignItems="center" padding={10}   justifyContent="space-between" w="100%">
                   <Text  >Price: $ {recommendedProducts.data.price}</Text>
                   <Button float="right" leftIcon="check" variant="solid"   backgroundColor="blue.300" borderColor="blue.300" border="1px solid #19B5FE">
         Add To Cart
          </Button>
                   </Flex>
                  
                   
                   

                   </Box>
                   </Flex>
                   </Flex>

                
               )
             })}
            
           </Box>
           </Flex>
           <Divider/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'products')
  ]);
  
  //const response = await fetch('http://localhost:3333/recommended');
    // const recommendedProducts = await response.json();

     return {
      props:{
        recommendedProducts: recommendedProducts.results,
      }
     }
    }
