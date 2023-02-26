// import { Container } from '@chakra-ui/react'
// import React from 'react'
// import Navbar from '../layout/Navbar'

// function About() {
//   return (
//     <>
//       <Navbar />
//       <Container maxW={"7xl"}>

//       </Container>
//     </>
//   )
// }

// export default About

import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import Navbar from "../layout/Navbar";
import {
  Avatar,
  Center,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import roboHero from "../New folder/robo-hero.svg";

export default function StatsGridWithImage() {
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"} my="5">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 18 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "40", sm: "40", lg: "30" }}
            >
              <Text as={"span"} color={"blue.400"}>
                Let me introducing myself !
              </Text>
              <br />
              <Text as={"span"} color={"blue.400"}>
                My name is {"  "}
              </Text>
              <Text as={"span"} position={"relative"}>
                Amr Ali
              </Text>
              <Text as={"span"} color={"blue.400"}>
                , a front end developer, based in Egypt.{"  "}
              </Text>
            </Heading>
            <Text color={"black.400"}>
              The part that might be funny, That in fact I have a bachelor's
              degree in social work! <br /> Social work is awesome but I did't
              find my passion there.
              <br />
              <br />
              There where the development path began. <br /> I started as a
              frontend developer through self-education, <br /> Through online
              courses and bootcamps, in addition to reading in several
              documents.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            ></Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={{ base: "90%", md: "90", sm: "50%" }}
          >
            <Image
              className=""
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"80%"}
              h={"100%"}
              src={roboHero}
            />
          </Flex>
        </Stack>

        <Flex justify="center" gap={"5"} wrap="wrap" align={"center"}>
          {studies.map((study) => (
            <Flex
              key={study.name}
              alignItems="center"
              flexDirection={"column"}
              textAlign="center"
              width={"300px"}
              minHeight="300px"
              border="1px"
              borderRadius={"lg"}
              p="5"
            >
              <Box
                as={"i"}
                className={study.icon}
                color={study.col}
                fontSize="40"
              ></Box>
              <Heading as="h3" size="lg" color={study.col}>
                {study.name}
              </Heading>
              <Text>{study.p}</Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </>
  );
}

export const studies = [
  {
    name: "HTML",
    col: "orange.400",
    icon: "fa-brands fa-html5",
    p: "The first thing I started with was HTML. it didnt take much time to learn the basics but diving into the language took some time.",
  },
  {
    col: "blue.400",
    name: "CSS",
    icon: "fa-brands fa-css3",
    p: "Then, the CSS, it isn't really that hard. but it's pretty big, in the end you find that what you can do with it is really great.",
  },
  {
    col: "yellow.400",
    name: "JS",
    icon: "fa-brands fa-js",
    p: "Then, the JavaScript, It may be difficult. Variables, functions, loops and many other things that seem really hard , but in the end it's all worth it",
  },
  {
    col: "blue.400",
    name: "REACT",
    icon: "fa-brands fa-react",
    p: `After that comes the framework and some other technologies such as React,
     It is the stage of transition beyond the basic language where there is a new world of development`,
  },
];

// const StatsText = ({ children }) => (

//   <Text as={'span'} fontWeight={700} color={'white'}>
//     {children}
//   </Text>
// );

// const stats = [
//   {
//     title: '10+',
//     content: (
//       <>
//         <StatsText>Software modules</StatsText> for detailed monitoring and
//         real-time analytics
//       </>
//     ),
//   },
//   {
//     title: '24/7',
//     content: (
//       <>
//         <StatsText>Analytics</StatsText> enabled right in your dashboard without
//         history limitations
//       </>
//     ),
//   },
//   {
//     title: '13%',
//     content: (
//       <>
//         <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
//         their management solution
//       </>
//     ),
//   },
//   {
//     title: '250M+',
//     content: (
//       <>
//         <StatsText>Plants</StatsText> currently connected and monitored by the
//         NewLife™ software
//       </>
//     ),
//   },
// ];

// export function SocialProfileSimple() {
//   return (
//     <Flex
//       maxW={"320px"}
//       w={"full"}
//       bg={useColorModeValue("white", "gray.900")}
//       boxShadow={"2xl"}
//       rounded={"lg"}
//       p={6}
//       textAlign={"center"}
//       flexDir="column"
//       align="center"
//     >
//       <Image
//         // borderRadius='full'
//         boxSize="90px"
//         src={"https://cdn-icons-png.flaticon.com/512/174/174854.png"}
//         mb={1}
//         pos={"relative"}
//       />
//       <Heading fontSize={"2xl"} fontFamily={"body"}>
//         HTML5
//       </Heading>

//       <Text
//         textAlign={"center"}
//         color={useColorModeValue("gray.700", "gray.400")}
//         px={3}
//       >
//         The first thing I started with was HTML. it didn't take much time to
//         learn the basics, but diving into the language more took some time.
//       </Text>
//     </Flex>
//   );
// }
