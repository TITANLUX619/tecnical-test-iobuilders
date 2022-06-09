import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import AppContextProvider from "context/Context.provider";
import React from "react";
import MainRouter from "./MainRouter";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="1p00vh" p={3}>
        <AppContextProvider>
          <MainRouter />
        </AppContextProvider>
      </Grid>
    </Box>
  </ChakraProvider>
);
