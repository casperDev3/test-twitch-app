import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function InfoBanner() {
    return (
        <View className="bg-amber-50 rounded-2xl p-5 mb-6 border-2 border-amber-200">
            <View className="flex-row items-start gap-3">
                <View className="bg-amber-400 w-10 h-10 rounded-full items-center justify-center">
                    <Ionicons name="information-outline" size={20} color="white" />
                </View>
                <View className="flex-1">
                    <Text className="text-amber-900 text-base font-bold mb-1">
                        Приклади стилізації
                    </Text>
                    <Text className="text-amber-800 text-sm leading-5">
                        Нижче показано два підходи: класичний StyleSheet та сучасний Tailwind CSS
                    </Text>
                </View>
            </View>
        </View>
    );
}
