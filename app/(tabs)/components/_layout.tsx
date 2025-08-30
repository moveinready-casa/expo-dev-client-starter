import { Stack } from "expo-router";

export default function ComponentsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Components",
      }}
    />
  );
}
