import { Button, Group, TextInput, Text, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Form = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      password: "",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text fz={30} ta="center" mt="lg" pb="md" fw={900}>
        Войти
      </Text>
      <TextInput label="Ваш ник" key={form.key("name")} {...form.getInputProps("name")} />
      <PasswordInput
        label="Пароль"
        key={form.key("password")}
        {...form.getInputProps("password")}
      />

      <Group mt="md">
        <Button
          type="submit"
          fullWidth
          variant="subtle"
          color="cyan"
          c="cyan"
          styles={{
            root: {
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
        >
          Войти
        </Button>
      </Group>
    </form>
  );
};

export default Form;
