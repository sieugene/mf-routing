import * as React from "react";
export * from "./Button";
import {
  AppShell as MantineAppShell,
  ColorScheme,
  Header,
  MantineProvider,
  Title,
} from "@mantine/core";
export const AppShell: React.FC<{
  title: string;
  colorScheme?: ColorScheme;
}> = ({ title, colorScheme }) => {
  return (
    <MantineProvider
      theme={{ fontFamily: "Open Sans", colorScheme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <MantineAppShell
        padding="md"
        header={
          <Header
            height={60}
            p="xs"
            sx={{
              display: "flex",
            }}
          >
            <Title>{title}</Title>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <div>mantine appshell</div>
      </MantineAppShell>
    </MantineProvider>
  );
};
