import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import { Flex, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import Repo from "../layout/Repo";

function Projects() {
  return (
    <>
      <Navbar />
      <Flex
        align="center"
        justify="center"
        wrap="wrap"
        p="8"
        w='100%'
        gap='5'
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Repo />
      </Flex>
    </>
  );
}

export default Projects;
