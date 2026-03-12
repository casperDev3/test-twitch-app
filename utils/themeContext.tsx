import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeMode = "light" | "dark" | "system";

export const lightColors = {
    bg: "#f8fafc",
    card: "#ffffff",
    text: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#94a3b8",
    border: "#e2e8f0",
    iconBg: "#f1f5f9",
    accent: "#6366f1",
    tabBar: "#ffffff",
    tabBarBorder: "#e2e8f0",
    separator: "#f1f5f9",
};

export const darkColors = {
    bg: "#0f172a",
    card: "#1e293b",
    text: "#f8fafc",
    textSecondary: "#cbd5e1",
    textMuted: "#64748b",
    border: "#334155",
    iconBg: "#334155",
    accent: "#818cf8",
    tabBar: "#1e293b",
    tabBarBorder: "#334155",
    separator: "#334155",
};

export type Colors = typeof lightColors;

interface ThemeContextType {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    isDark: boolean;
    colors: Colors;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "system",
    setTheme: () => {},
    isDark: false,
    colors: lightColors,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeMode>("system");

    const isDark =
        theme === "dark" || (theme === "system" && systemScheme === "dark");
    const colors = isDark ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark, colors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
