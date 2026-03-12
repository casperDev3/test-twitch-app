import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    onScrollToComponents: () => void;
};

export default function ScrollTestSection({ onScrollToComponents }: Props) {
    const { colors } = useTheme();

    return (
        <View className="px-6 mt-2 mb-6">
            <View
                className="rounded-3xl p-6 border"
                style={{ backgroundColor: colors.card, borderColor: colors.border }}
            >
                <View className="flex-row items-center gap-3 mb-3">
                    <View
                        className="w-9 h-9 rounded-full items-center justify-center"
                        style={{ backgroundColor: colors.accent + "18" }}
                    >
                        <Ionicons name="navigate-outline" size={18} color={colors.accent} />
                    </View>
                    <Text className="text-base font-bold" style={{ color: colors.text }}>
                        Тест скролу
                    </Text>
                </View>

                <Text className="text-sm mb-4 leading-5" style={{ color: colors.textSecondary }}>
                    Натисніть кнопку, щоб прокрутити до секції «Компоненти»
                </Text>

                <TouchableOpacity
                    className="flex-row items-center justify-between px-5 py-4 rounded-2xl"
                    style={{ backgroundColor: colors.accent }}
                    onPress={onScrollToComponents}
                >
                    <View className="flex-row items-center gap-3">
                        <View className="bg-white/20 w-9 h-9 rounded-full items-center justify-center">
                            <Ionicons name="arrow-up-outline" size={18} color="white" />
                        </View>
                        <Text className="text-white font-bold text-base">
                            Прокрутити до секції
                        </Text>
                    </View>
                    <Ionicons name="chevron-up-outline" size={18} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
