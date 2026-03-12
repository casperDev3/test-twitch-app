import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "../utils/themeContext";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="settings" options={{ headerShown: false }} />
                <Stack.Screen name="news/[slug]" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
