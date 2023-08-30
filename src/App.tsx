import { MantineProvider, Text } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </MantineProvider>
  );
}
