import { AppShell, Anchor, Flex, Group, Text, Image, Center, Box, Divider } from "@mantine/core";
import Form from "./Form";

const LoginPage = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group align="center" w="100%" h="100%">
          <Text size="lg" pl="8%" fw={900}>
            Hexlet Chat
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Center p="md">
          <Box
            w={{ base: "100%", sm: "700px" }}
            bg="white"
            mt="6%"
            p="lg"
            style={{
              borderRadius: "var(--mantine-radius-lg)",
              boxShadow: "var(--mantine-shadow-md)",
              border: "1px solid var(--mantine-color-gray-3)",
            }}
          >
            <Flex direction={{ base: "column", sm: "row" }} align="flex-start" gap="lg">
              <Box mt="6%" w={{ base: "100%", sm: "300px" }}>
                <Image src="./login.jpeg" alt="login page" radius="lg" />
              </Box>
              <Box w={{ base: "100%", sm: "350px" }}>
                <Form />
              </Box>
            </Flex>
            <Divider my="md" />
            <Box mt="md" ta="center">
              <Text>
                Нет аккаунта? <Anchor href="#">Регистрация</Anchor>
              </Text>
            </Box>
          </Box>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};
export default LoginPage;
