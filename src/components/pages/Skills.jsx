import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../layout/Navbar";
import html from "../New folder/html.svg";
import css from "../New folder/css.svg";
import js from "../New folder/js.svg";
import sass from "../New folder/sass.svg";
import react from "../New folder/react.svg";
import ts from "../New folder/ts.svg";
import git from "../New folder/git.svg";
import redux from "../New folder/redux.svg";
import github from "../New folder/github.svg";
import fire from "../New folder/fire.svg";
import gulp from "../New folder/gulp.svg";
import vscode from "../New folder/vscode.svg";
import yarn from "../New folder/yarn.svg";
import npm from "../New folder/npm.svg";
import mat from "../New folder/mat.svg";
import chakra from "../New folder/chakra.svg";
import node from "../New folder/node-js.svg";
import roboGood from "../New folder/robo-good.svg";
import roboGear from "../New folder/robo-gear.svg";
import roboStudy from "../New folder/robo-study.svg";
import ui from "../New folder/ui.svg";
import next from "../New folder/next.svg";
import express from "../New folder/express.svg";
import boot from "../New folder/boot.svg";
import word from "../New folder/word.svg";
import pug from "../New folder/pug.svg";
import { roboAnimation } from "../../utils/animation";

export function Skill({ label, src }) {
  return (
    <Tooltip hasArrow label={label} placement="top">
      <Image loading="lazy" w="120px" objectFit="cover" src={src} />
    </Tooltip>
  );
}

function Skills() {
  const [isSmallerThn300px] = useMediaQuery("min-width: 1280px");

  return (
    <div>
      <Navbar />
      <Stack bg={useColorModeValue("gray.200", "gray.700")} >
        <Box w="100%" minH="90vh" p="8" marginBottom="20px">
          <Text
            fontSize={{ sm: "30" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            MY SKILLS
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <Image w="250px" objectFit="cover" src={roboGood} scaleX={"-1"} animation={roboAnimation} />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w="70%"
            >
              <Skill label="HTML5" src={html} />
              <Skill label="CSS3" src={css} />
              <Skill label="JAVA SCRIPT" src={js} />
              <Skill label="SASS" src={sass} />
              <Skill label="REACT JS" src={react} />
              <Skill label="NEXT JS" src={next} />
              <Skill label="REDUX & REDUX TOOLKIT" src={redux} />

            </Flex>
          </Flex>
        </Box>
        <br />
        {/* /////////////////////////// */}
        <Box w="100%" minH="90vh" p="8" marginBottom="20px">
          <Text
            fontSize={{ sm: "35" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            TOOLS I USE
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <Image
                w="250px"
                objectFit="cover"
                src={roboGear}
                animation={roboAnimation}
              />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w={'70%'}
            >
              <Skill label="VISUAL STUDIO CODE" src={vscode} />
              <Skill label="NODE PACKAGE MANAGER" src={npm} />
              <Skill label="YARN" src={yarn} />
              <Skill label="GIT" src={git} />
              <Skill label="GIT HUB" src={github} />
              <Skill label="FIREBASE" src={fire} />
              <Skill label="GULP JS" src={gulp} />
              <Skill label="PUG JS" src={pug} />
              <Skill label="CHAKRA UI" src={chakra} />
              <Skill label="MATERIAL UI" src={mat} />
              <Skill label="BOOTSTRAP 5" src={boot} />
            </Flex>
          </Flex>
        </Box>
        <br />
        {/* /////////////////////////// */}

        <Box w="100%" minH="90vh" p="8">
          <Text
            marginTop="15px"
            fontSize={{ sm: "30" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            STUDYING CURRENTLY
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <Image
                className="robo"
                w="250px"
                objectFit="cover"
                src={roboStudy}
                scaleX={"-1"}
                animation={roboAnimation}
              />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w={{
                base: "70%",
                md: "70%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
            >
              <Skill label="TYPE SCRIPT" src={ts} />
              <Skill label="NODE JS" src={node} />
              <Skill label="EXPRESS JS" src={express} />
              <Skill label="WORDPRESS" src={word} />
              <Skill label="UI UX" src={ui} />
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
}

export default Skills;
