import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    name: string;
    email: string;
};

export default function ProfileAvatar({ name, email }: Props) {
    const { colors } = useTheme();

    return (
        <View className="items-center mb-8 px-6">
            <View className="bg-indigo-100 w-24 h-24 rounded-full items-center justify-center border-4 border-indigo-200 mb-4">
                <Ionicons name="person-outline" size={44} color="#6366f1" />
            </View>
            <Text className="text-2xl font-bold" style={{ color: colors.text }}>
                {name}
            </Text>
            <Text className="text-sm mt-1" style={{ color: colors.textSecondary }}>
                {email}
            </Text>
            <TouchableOpacity className="mt-4 bg-indigo-500 px-6 py-2 rounded-full flex-row items-center gap-2">
                <Ionicons name="pencil-outline" size={14} color="white" />
                <Text className="text-white text-sm font-semibold">Редагувати</Text>
            </TouchableOpacity>
        </View>
    );
}
