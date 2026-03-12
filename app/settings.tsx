import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Animated,
    Platform,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ThemeMode, useTheme } from "../utils/themeContext";

export default function Settings() {
    const router = useRouter();
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
            <View
                style={{
                    paddingHorizontal: 24,
                    paddingTop: Platform.OS === "ios" ? 64 : 48,
                }}
            >
                {/* Header */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 32,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={{
                            backgroundColor: colors.card,
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: colors.border,
                        }}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            size={20}
                            color={colors.textSecondary}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: 28,
                            fontWeight: "700",
                        }}
                    >
                        Налаштування
                    </Text>
                </View>

                {/* Settings Items */}
                <View
                    style={{
                        backgroundColor: colors.card,
                        borderRadius: 24,
                        borderWidth: 1,
                        borderColor: colors.border,
                        overflow: "hidden",
                    }}
                >
                    <SettingRow icon="person-outline" label="Профіль" colors={colors} />
                    <SettingRow
                        icon="notifications-outline"
                        label="Сповіщення"
                        colors={colors}
                    />
                    <SettingRow
                        icon="lock-closed-outline"
                        label="Конфіденційність"
                        colors={colors}
                    />
                    <SettingRow
                        icon="color-palette-outline"
                        label="Вигляд"
                        colors={colors}
                        onPress={openSidebar}
                    />
                    <SettingRow
                        icon="information-circle-outline"
                        label="Про додаток"
                        colors={colors}
                        last
                    />
                </View>
            </View>

            {/* Sidebar overlay */}
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
                        <AppearanceSidebar onClose={closeSidebar} colors={colors} />
                    </Animated.View>
                </>
            )}
        </View>
    );
}

function AppearanceSidebar({
    onClose,
    colors,
}: {
    onClose: () => void;
    colors: ReturnType<typeof useTheme>["colors"];
}) {
    const { theme, setTheme } = useTheme();

    const options: { value: ThemeMode; label: string; icon: any; desc: string }[] =
        [
            {
                value: "light",
                label: "Світла",
                icon: "sunny-outline",
                desc: "Завжди світла тема",
            },
            {
                value: "dark",
                label: "Темна",
                icon: "moon-outline",
                desc: "Завжди темна тема",
            },
            {
                value: "system",
                label: "Системна",
                icon: "phone-portrait-outline",
                desc: "Слідує налаштуванням пристрою",
            },
        ];

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 64 : 48,
                paddingHorizontal: 20,
            }}
        >
            {/* Sidebar header */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 32,
                }}
            >
                <Text style={{ color: colors.text, fontSize: 20, fontWeight: "700" }}>
                    Вигляд
                </Text>
                <TouchableOpacity
                    onPress={onClose}
                    style={{
                        backgroundColor: colors.iconBg,
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons name="close" size={18} color={colors.textSecondary} />
                </TouchableOpacity>
            </View>

            {/* Theme options */}
            <Text
                style={{
                    color: colors.textMuted,
                    fontSize: 12,
                    fontWeight: "600",
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    marginBottom: 12,
                }}
            >
                Тема оформлення
            </Text>

            <View
                style={{
                    gap: 8,
                }}
            >
                {options.map((opt) => {
                    const isSelected = theme === opt.value;
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            onPress={() => setTheme(opt.value)}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 14,
                                padding: 14,
                                borderRadius: 16,
                                borderWidth: 2,
                                borderColor: isSelected ? colors.accent : colors.border,
                                backgroundColor: isSelected
                                    ? colors.accent + "15"
                                    : colors.bg,
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 12,
                                    backgroundColor: isSelected
                                        ? colors.accent + "25"
                                        : colors.iconBg,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons
                                    name={opt.icon}
                                    size={20}
                                    color={isSelected ? colors.accent : colors.textSecondary}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        color: isSelected ? colors.accent : colors.text,
                                        fontSize: 15,
                                        fontWeight: "600",
                                    }}
                                >
                                    {opt.label}
                                </Text>
                                <Text
                                    style={{
                                        color: colors.textMuted,
                                        fontSize: 12,
                                        marginTop: 2,
                                    }}
                                >
                                    {opt.desc}
                                </Text>
                            </View>
                            {isSelected && (
                                <Ionicons
                                    name="checkmark-circle"
                                    size={22}
                                    color={colors.accent}
                                />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

function SettingRow({
    icon,
    label,
    last = false,
    onPress,
    colors,
}: {
    icon: any;
    label: string;
    last?: boolean;
    onPress?: () => void;
    colors: ReturnType<typeof useTheme>["colors"];
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                paddingHorizontal: 20,
                paddingVertical: 16,
                borderBottomWidth: last ? 0 : 1,
                borderBottomColor: colors.separator,
            }}
        >
            <View
                style={{
                    backgroundColor: colors.iconBg,
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Ionicons name={icon} size={18} color={colors.textSecondary} />
            </View>
            <Text
                style={{
                    flex: 1,
                    color: colors.text,
                    fontSize: 16,
                    fontWeight: "500",
                }}
            >
                {label}
            </Text>
            <Ionicons name="chevron-forward-outline" size={16} color={colors.textMuted} />
        </TouchableOpacity>
    );
}
