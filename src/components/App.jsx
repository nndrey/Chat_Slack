import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import ChatPage from "./ ChatPage";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const theme = createTheme({
  components: {
    Anchor: {
      defaultProps: {
        underline: "never",
        c: "cyan",
      },
    },
  },
});

const App = () => (
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <Notifications position="bottom-right" />
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MantineProvider>
  </BrowserRouter>
);

export default App;
