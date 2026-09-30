import { AppShell, Anchor, Flex, Group, Text, Image } from "@mantine/core";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <AppShell header={{ height: 60, offset: false }} padding="md">
      <AppShell.Header>
        <Group align="center" w="100%" h="100%">
          <Text size="lg" pl="8%" fw={900}>
            Hexlet Chat
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Flex
          w="100%"
          h="calc(100vh - 60px)"
          direction="column"
          align="center"
          justify="center"
          gap="md"
        >
          <Image
            radius="xl"
            w="34%"
            miw="250px"
            fit="contain"
            src="/notFound.jpeg"
            alt="not foun page"
          />
          <Text c="dimmed" size="lg" fw={700} ta="center">
            Страница не найдена
          </Text>
          <Text c="dimmed" ta="center">
            Но вы можете перейти{" "}
            <Anchor component={Link} to="/">
              на главную страницу
            </Anchor>
          </Text>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};

export default NotFoundPage;
