import { Box, ChakraProvider } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import BG from "./components/layout/BG";
function App() {
  
  return (
      <ChakraProvider>
        <BG />

        <RouterProvider router={routes} />
      </ChakraProvider>
  );
}

export default App;
