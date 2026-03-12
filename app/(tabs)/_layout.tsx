import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useTheme } from "../../utils/themeContext";

export default function TabsLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.tabBar,
                    borderTopColor: colors.tabBarBorder,
                    borderTopWidth: 1,
                    height: 80,
                    paddingBottom: 20,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Головна",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Огляд",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="compass-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="news"
                options={{
                    title: "Новини",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Профіль",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
