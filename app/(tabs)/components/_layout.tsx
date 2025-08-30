import { useTheme } from "@/lib/utils/theme";
import { Stack } from "expo-router";

export default function ComponentsLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Components",
        contentStyle: { backgroundColor: theme.background },
        headerStyle: { backgroundColor: theme.background },
        headerTitleStyle: { color: theme.foreground },
      }}
    />
  );
}
