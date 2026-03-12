import AppearanceSidebar from "@/components/AppearanceSidebar";
import BackHeader from "@/components/BackHeader";
import SettingsList from "@/components/SettingsList";
import { useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";
import { useTheme } from "../utils/themeContext";

export default function Settings() {
    const { colors } = useTheme();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(320)).current;
    const backdropAnim = useRef(new Animated.Value(0)).current;

    const openSidebar = () => {
        setSidebarVisible(true);
        Animated.parallel([
            Animated.spring(slideAnim, {
                toValue: 0,
                useNativeDriver: true,
                bounciness: 0,
                speed: 20,
            }),
            Animated.timing(backdropAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeSidebar = () => {
        Animated.parallel([
            Animated.spring(slideAnim, {
                toValue: 320,
                useNativeDriver: true,
                bounciness: 0,
                speed: 20,
            }),
            Animated.timing(backdropAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => setSidebarVisible(false));
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
            <BackHeader title="Налаштування" />
            <SettingsList onAppearancePress={openSidebar} />

            {sidebarVisible && (
                <>
                    <Animated.View
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "#000",
                            opacity: backdropAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.4],
                            }),
                        }}
                    >
                        <Pressable style={{ flex: 1 }} onPress={closeSidebar} />
                    </Animated.View>

                    <Animated.View
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 300,
                            backgroundColor: colors.card,
                            transform: [{ translateX: slideAnim }],
                            shadowColor: "#000",
                            shadowOffset: { width: -4, height: 0 },
                            shadowOpacity: 0.15,
                            shadowRadius: 16,
                            elevation: 10,
                        }}
                    >
                        <AppearanceSidebar onClose={closeSidebar} />
                    </Animated.View>
                </>
            )}
        </View>
    );
}
