import { useTheme } from "@/lib/utils/theme";
import { Stack } from "expo-router";

export default function ComponentLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background },
        headerStyle: { backgroundColor: theme.background },
        headerTitleStyle: { color: theme.foreground },
      }}
    />
  );
}
