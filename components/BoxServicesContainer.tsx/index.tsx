import React from  'react';

import {Box, Button, Flex, Grid, Heading, Input, Link, Text, Icon, Image, SimpleGrid} from '@chakra-ui/core'
import { motion } from 'framer-motion'
import { FcAbout, FcEnteringHeavenAlive, FcGrid, FcMindMap, FcPhoneAndroid, FcSurvey } from "react-icons/fc";


export const BoxServicesContainer: React.FC = () => {
  return (
    <Flex width="1200px" align="center" justify="center" justifyContent="center"
    >
    <SimpleGrid justifyContent="center" columns={2} spacing={10}>
      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between"
        
      >
        <Box as={FcAbout} position="relative" top="-40px" float="left" size="150px" width="30%" >

        </Box>
        <Box >
        <Text textAlign="left" marginBottom="12px" marginTop="14px" fontSize="2xl" fontWeight="600" >LifeTime Garantee</Text>
          <Text textAlign="left" marginRight="6px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>

          <Text></Text>
          </Box>

      </Box>
      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between"
        
      >
        <Box as={FcGrid} position="relative" top="-40px" float="left" size="150px" width="30%" >

        </Box>
        <Box >
        <Text textAlign="left" marginBottom="12px" marginTop="14px" fontSize="2xl" fontWeight="600" >Good Price</Text>
          <Text textAlign="left" marginRight="6px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>

          <Text></Text>
          </Box>

      </Box>
      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between"
        
        >
          <Box as={FcMindMap} position="relative" top="-40px" float="left" size="150px" width="30%" >

          </Box>
          <Box >
          <Text textAlign="left" marginBottom="12px" marginTop="14px" fontSize="2xl" fontWeight="600" >Free Software Updates</Text>
            <Text textAlign="left" marginRight="6px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>

            <Text></Text>
            </Box>

        </Box>
        <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between"
        
        >
          <Box as={FcEnteringHeavenAlive} position="relative" top="-40px" float="left" size="150px" width="30%" >

          </Box>
          <Box >
          <Text textAlign="left" marginBottom="12px" marginTop="14px" fontSize="2xl" fontWeight="600" >24 / 7 Support</Text>
            <Text textAlign="left" marginRight="6px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>

            <Text></Text>
            </Box>

        </Box>

</SimpleGrid>
</Flex>

  )
}
export default BoxServicesContainer;