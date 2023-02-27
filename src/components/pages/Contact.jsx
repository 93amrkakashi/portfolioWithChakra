import React from "react";
import Navbar from "../layout/Navbar";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Icon,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import roboLove from "../New folder/robo-love.svg";
import {
  FaFacebookF,
  FaGithub,
  FaGooglePlusSquare,
  FaLinkedin,
  FaWhatsapp,
  MdSettings,
} from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/react";
import { roboAnimation } from "../../utils/animation";
function Contact() {
  const [isSmallerThn300px] = useMediaQuery("(max-width: 300px)");
  return (
    <>
      <Navbar />
      <Stack
        w="100%"
        minH="100vh"
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Box w="100%" pos={"relative"}>
          <Center
            className="text"
            fontSize="90"
            fontWeight="700"
            textAlign="center"
            h="90px"
            pos={"absolute"}
            top="50%"
            w="100%"
            zIndex="0"
            color={useColorModeValue("gray.300", "gray.800")}
            letterSpacing="1.5"
          >
            CONTACT ME
          </Center>
          <Flex
            className="contact"
            align="center"
            justify="center"
            wrap="wrap"
            my="5"
            flexDir={{ md: "row", sm: "column" }} // dont forget to make extra small
          >
            <Flex w={{  md: "40%", sm: "100%" }} justify="center">
              <Image
                className="robo"
                w={"85%"}
                objectFit="cover"
                zIndex="5"
                src={roboLove}
                animation={roboAnimation}
              />
            </Flex>

            <Flex
              justify="center"
              align="center"
              wrap="wrap"
              w={{  md: "60%", sm: "100%" }}
              // gap="8"
              zIndex="5"
            >
              {socials.map((social) => (
                <Box
                  as={Link}
                  to={social.link}
                  target="_blank"
                  key={social.id}
                  border="1px"
                  borderRadius="lg"
                  display="flex"
                  align="center"
                  justify="space-around"
                  flexDir="column"
                  boxShadow="xl"
                  p="5"
                  w="210px"
                  minH="220px"
                  m="3"
                >
                  <Box fontSize="35" color={"blue.400"}>
                    {social.icon}
                  </Box>
                  {/* <Icon as={MdSettings} /> */}
                  <Text>{social.name}</Text>
                  <Text py="5">{social.p}</Text>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}

export default Contact;

export const socials = [
  {
    id: Math.random(),
    name: "Whatsapp",
    link: "https://wa.me/0201029404662",
    icon: <Icon as={FaWhatsapp} />,
    p: `Text me via WhatsApp`,
    color: `Text me via WhatsApp`,
  },
  {
    id: Math.random(),
    name: "Facebook",
    link: "https://www.facebook.com/93amr.kakashi/",
    icon: <Icon as={FaFacebookF} />,
    p: `Visit me on Facebook and lets talk`,
  },
  {
    id: Math.random(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amr-ali-mohamed-88192b241/",
    icon: <Icon as={FaLinkedin} />,
    p: `Visit me on LinkedIn if you have a job for me`,
  },
  {
    id: Math.random(),
    name: "Gmail",
    link: "mailto:93amr.kakashi@gmail.com",
    icon: <Icon as={FaGooglePlusSquare} />,
    p: `Email me via Gmail`,
  },
  {
    id: Math.random(),
    name: "GitHub",
    link: "https://github.com/93amrkakashi",
    icon: <Icon as={FaGithub} />,
    p: `Visit my GitHub account to see more`,
  },
];
