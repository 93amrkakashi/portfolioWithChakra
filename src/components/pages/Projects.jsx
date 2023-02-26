import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import { Flex, Image, Stack } from "@chakra-ui/react";
import Repo from '../layout/Repo';


function Projects() {

  return (
    <div>
      <Navbar />
      <Flex align='center' justify='center' gap='5' wrap='wrap' margin='8'>
        <Repo />
      </Flex>
    </div>
  )
}

export default Projects

