import { Text, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

export default function ProfileStats() {
    const { colors } = useTheme();

    return (
        <View
            className="flex-row mx-6 mb-6 rounded-2xl border overflow-hidden"
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
        >
            <View
                className="flex-1 items-center py-4 border-r"
                style={{ borderRightColor: colors.border }}
            >
                <Text className="text-indigo-600 text-2xl font-bold">12</Text>
                <Text className="text-xs mt-1" style={{ color: colors.textSecondary }}>
                    Проектів
                </Text>
            </View>
            <View
                className="flex-1 items-center py-4 border-r"
                style={{ borderRightColor: colors.border }}
            >
                <Text className="text-purple-600 text-2xl font-bold">48</Text>
                <Text className="text-xs mt-1" style={{ color: colors.textSecondary }}>
                    Завдань
                </Text>
            </View>
            <View className="flex-1 items-center py-4">
                <Text className="text-pink-600 text-2xl font-bold">32</Text>
                <Text className="text-xs mt-1" style={{ color: colors.textSecondary }}>
                    Готово
                </Text>
            </View>
        </View>
    );
}
