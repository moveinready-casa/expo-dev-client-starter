import { useTheme } from "@/lib/utils/theme";
import { Tabs } from "expo-router";
import { BookIcon, HomeIcon } from "lucide-react-native";

export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarStyle: { backgroundColor: theme.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: "Components",
          headerShown: false,
          tabBarIcon: ({ color }) => <BookIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="components/component"
        options={{
          title: "Component",
          href: null,
        }}
      />
    </Tabs>
  );
}
