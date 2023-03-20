import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { about, contact, home, projects, skills } from "../../utils/routes";

import React from "react";

export function Links() {
  return (
    <>
    <Box as={NavLink} to={home} fontSize="15" fontWeight="bold">
        Home
      </Box>
      <Box as={NavLink} to={about} fontSize="15" fontWeight="bold">
        About
      </Box>
      <Box as={Link} to={skills} fontSize="15" fontWeight="bold">
        Skills
      </Box>
      <Box as={Link} to={projects} fontSize="15" fontWeight="bold">
        Projects
      </Box>
      <Box as={Link} to={contact} fontSize="15" fontWeight="bold">
        Contact
      </Box>
    </>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w='100%' bg={useColorModeValue("gray.400", "gray.900")} px={4} pos='sticky' top='0' left={'0'} zIndex='10000000'>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box
          as={Link}
          to={home}
          fontFamily="Finger Paint"
          letterSpacing={'1px'}
          fontSize={{ md: "35", sm: "15" }}
          fontWeight="700"
        >
          AM
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Links />
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Links />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
