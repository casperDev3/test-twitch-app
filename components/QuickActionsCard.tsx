import { Ionicons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

export default function QuickActionsCard() {
    const { colors } = useTheme();

    const handleHello = () => {
        Alert.alert("Привіт!", "Ви натиснули кнопку Hello", [
            { text: "Скасувати", style: "cancel" },
            { text: "OK" },
        ]);
    };

    const handlePapa = () => {
        Alert.alert("Papa!", "Це друга кнопка");
    };

    return (
        <View
            className="rounded-3xl p-6 mb-6 border shadow-lg shadow-black/5"
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
        >
            <Text className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                Швидкі дії
            </Text>

            <View className="gap-3">
                <TouchableOpacity
                    className="bg-blue-500 px-6 py-4 rounded-2xl flex-row items-center justify-between shadow-sm shadow-blue-500/20"
                    onPress={handleHello}
                >
                    <View className="flex-row items-center gap-3">
                        <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center border-2 border-white/30">
                            <Ionicons name="hand-left-outline" size={20} color="white" />
                        </View>
                        <View>
                            <Text className="text-white text-base font-bold">Say Hello</Text>
                            <Text className="text-blue-100 text-xs">Натисніть для привітання</Text>
                        </View>
                    </View>
                    <Ionicons name="arrow-forward-outline" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-purple-500 px-6 py-4 rounded-2xl flex-row items-center justify-between shadow-sm shadow-purple-500/20"
                    onPress={handlePapa}
                >
                    <View className="flex-row items-center gap-3">
                        <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center border-2 border-white/30">
                            <Ionicons name="star-outline" size={20} color="white" />
                        </View>
                        <View>
                            <Text className="text-white text-base font-bold">Say Papa</Text>
                            <Text className="text-purple-100 text-xs">Друга дія для тесту</Text>
                        </View>
                    </View>
                    <Ionicons name="arrow-forward-outline" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
