import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    placeholder?: string;
};

export default function SearchBar({ placeholder = "Пошук..." }: Props) {
    const { colors } = useTheme();

    return (
        <View
            className="flex-row items-center gap-3 px-4 py-3 rounded-2xl border mb-6"
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
        >
            <Ionicons name="search-outline" size={18} color={colors.textMuted} />
            <Text style={{ color: colors.textMuted }} className="text-base">
                {placeholder}
            </Text>
        </View>
    );
}
