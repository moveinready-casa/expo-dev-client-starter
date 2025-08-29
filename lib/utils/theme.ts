import { useColorScheme } from "react-native";

export const theme = {
  light: {
    radius: "0.625rem",
    background: "#ffffff",
    foreground: "#252525",
    card: "#ffffff",
    cardForeground: "#252525",
    popover: "#ffffff",
    popoverForeground: "#252525",
    primary: "#343434",
    primaryForeground: "#fbfbfb",
    secondary: "#f7f7f7",
    secondaryForeground: "#343434",
    success: "#22c55e",
    warning: "#eab308",
    muted: "#f7f7f7",
    mutedForeground: "#8e8e8e",
    accent: "#f7f7f7",
    accentForeground: "#343434",
    destructive: "#ef4444",
    border: "#ebebeb",
    input: "#ebebeb",
    ring: "#b5b5b5",
    chart1: "#f97316",
    chart2: "#06b6d4",
    chart3: "#3b82f6",
    chart4: "#84cc16",
    chart5: "#f59e0b",
    sidebar: "#fbfbfb",
    sidebarForeground: "#252525",
    sidebarPrimary: "#343434",
    sidebarPrimaryForeground: "#fbfbfb",
    sidebarAccent: "#f7f7f7",
    sidebarAccentForeground: "#343434",
    sidebarBorder: "#ebebeb",
    sidebarRing: "#b5b5b5",
  },
  dark: {
    radius: "0.625rem",
    background: "#252525",
    foreground: "#fbfbfb",
    card: "#343434",
    cardForeground: "#fbfbfb",
    popover: "#444444",
    popoverForeground: "#fbfbfb",
    primary: "#ebebeb",
    primaryForeground: "#343434",
    secondary: "#444444",
    secondaryForeground: "#fbfbfb",
    muted: "#444444",
    mutedForeground: "#b5b5b5",
    accent: "#5f5f5f",
    accentForeground: "#fbfbfb",
    destructive: "#dc2626",
    success: "#16a34a",
    warning: "#ca8a04",
    border: "rgba(255, 255, 255, 0.1)",
    input: "rgba(255, 255, 255, 0.15)",
    ring: "#8e8e8e",
    chart1: "#8b5cf6",
    chart2: "#10b981",
    chart3: "#f59e0b",
    chart4: "#ec4899",
    chart5: "#dc2626",
    sidebar: "#343434",
    sidebarForeground: "#fbfbfb",
    sidebarPrimary: "#8b5cf6",
    sidebarPrimaryForeground: "#fbfbfb",
    sidebarAccent: "#444444",
    sidebarAccentForeground: "#fbfbfb",
    sidebarBorder: "rgba(255, 255, 255, 0.1)",
    sidebarRing: "#707070",
  },
};

export const useTheme = () => {
  const colorScheme = useColorScheme();

  return theme[colorScheme || "light"];
};

// Suppress SVGElement error
class SVGElement {}

// @ts-ignore
globalThis.SVGElement = SVGElement;
