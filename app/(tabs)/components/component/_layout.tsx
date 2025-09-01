import { useTheme } from "@/lib/utils/theme";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { Fragment } from "react";
import { Platform } from "react-native";
import { FullWindowOverlay } from "react-native-screens";

export default function ComponentLayout() {
  const theme = useTheme();
  const WindowOverlay = Platform.OS === "ios" ? FullWindowOverlay : Fragment;
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.foreground },
        }}
      />
      <PortalHost />
    </>
  );
}
