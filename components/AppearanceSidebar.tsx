import { Ionicons } from "@expo/vector-icons";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ThemeMode, useTheme } from "@/utils/themeContext";

type Props = {
    onClose: () => void;
};

const OPTIONS: { value: ThemeMode; label: string; icon: any; desc: string }[] = [
    { value: "light", label: "Світла", icon: "sunny-outline", desc: "Завжди світла тема" },
    { value: "dark", label: "Темна", icon: "moon-outline", desc: "Завжди темна тема" },
    {
        value: "system",
        label: "Системна",
        icon: "phone-portrait-outline",
        desc: "Слідує налаштуванням пристрою",
    },
];

export default function AppearanceSidebar({ onClose }: Props) {
    const { colors, theme, setTheme } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 64 : 48,
                paddingHorizontal: 20,
            }}
        >
            {/* Header */}
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

            {/* Label */}
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

            {/* Options */}
            <View style={{ gap: 8 }}>
                {OPTIONS.map((opt) => {
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
                                backgroundColor: isSelected ? colors.accent + "15" : colors.bg,
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 12,
                                    backgroundColor: isSelected ? colors.accent + "25" : colors.iconBg,
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
                                    style={{ color: colors.textMuted, fontSize: 12, marginTop: 2 }}
                                >
                                    {opt.desc}
                                </Text>
                            </View>
                            {isSelected && (
                                <Ionicons name="checkmark-circle" size={22} color={colors.accent} />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
