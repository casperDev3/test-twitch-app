import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    visible: boolean;
    onPress: () => void;
};

export default function ScrollToTopButton({ visible, onPress }: Props) {
    const { colors } = useTheme();
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(anim, {
            toValue: visible ? 1 : 0,
            useNativeDriver: true,
            bounciness: 6,
            speed: 20,
        }).start();
    }, [visible]);

    return (
        <Animated.View
            style={{
                position: "absolute",
                bottom: 32,
                right: 20,
                opacity: anim,
                transform: [{ scale: anim }],
                pointerEvents: visible ? "auto" : "none",
            }}
        >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.85}
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: colors.accent,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: colors.accent,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.35,
                    shadowRadius: 8,
                    elevation: 6,
                }}
            >
                <Ionicons name="arrow-up" size={22} color="white" />
            </TouchableOpacity>
        </Animated.View>
    );
}
