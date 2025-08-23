import "@expo/browser-polyfill";
import { Stack } from "expo-router";
import "./global.css";
import Theme from "@/components/theme";

export default function RootLayout() {
  return (
    <Theme colorScheme="light">
      <Stack
        screenOptions={{
          title: "Expo Starter",
          contentStyle: { backgroundColor: "white" },
        }}
      />
    </Theme>
  );
}
