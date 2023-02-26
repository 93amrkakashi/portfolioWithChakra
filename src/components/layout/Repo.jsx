import { Flex, Text, Icon, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCode, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Repo() {
  const [repos, setrepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/93amrkakashi/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.map((rep) => rep.name));

        setrepos(data);
      });
  }, []);

  return (
    <>
      {repos.map((repo) => {
        return (
          <Flex
            key={repo.id}
            border="4px"
            borderRadius="lg"
            align="center"
            justify="space-around"
            flexDir="column"
            maxW="290px"
            minH="350px"
            px="5"
            textAlign={"center"}
          >
            <Text fontSize="25px" fontWeight="500">
              {repo.name}
            </Text>
            <Text>{repo.description.slice(0, 120)}......</Text>
            <Flex w="100%" px="10" align="center" justify="space-around">
              <Link to={repo.homepage} target="_blank">
                <Icon as={FaEye} fontSize="35" />
              </Link>
              <Link to={repo.html_url} target="_blank">
                <Icon as={FaCode} fontSize="35" />
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Repo;

// export const pics = [
//   {
//     name: "azkar",
//     url: "https://repository-images.githubusercontent.com/548017951/31e7a6f8-b0cd-4c6f-ac55-18c141cf029f",
//   },
//   {
//     name: "azkar",
//     url: "https://repository-images.githubusercontent.com/586016879/e013ed70-81be-4c4e-be01-33bcb1bf1d3e",
//   },
//   {
//     name: "azkar",
//     url: "https://repository-images.githubusercontent.com/549742912/49c92ce5-ad74-40c0-9f8f-6063bf163390",
//   },
//   {
//     name: "azkar",
//     url: "https://repository-images.githubusercontent.com/549742912/49c92ce5-ad74-40c0-9f8f-6063bf163390",
//   },
// ];
// backgroundImage={pics.map((pic) => {return pic.url})}
// backgroundSize='cover'
// backgroundRepeat='no-repeat'
// backdropFilter='auto' backdropBlur='8888888888888px'
