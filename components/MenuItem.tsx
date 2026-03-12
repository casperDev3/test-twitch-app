import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    icon: string;
    label: string;
    /** Якщо передано — іконка і фон кола отримують цей колір. Інакше використовуються нейтральні кольори теми. */
    iconColor?: string;
    onPress?: () => void;
    separator?: boolean;
};

export default function MenuItem({
    icon,
    label,
    iconColor,
    onPress,
    separator = true,
}: Props) {
    const { colors } = useTheme();

    const bgColor = iconColor ? iconColor + "18" : colors.iconBg;
    const iColor = iconColor ?? colors.textSecondary;

    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center gap-4 px-5 py-4"
            style={{
                borderBottomWidth: separator ? 1 : 0,
                borderBottomColor: colors.separator,
            }}
        >
            <View
                className="w-9 h-9 rounded-full items-center justify-center"
                style={{ backgroundColor: bgColor }}
            >
                <Ionicons name={icon as any} size={18} color={iColor} />
            </View>
            <Text className="flex-1 text-base font-medium" style={{ color: colors.text }}>
                {label}
            </Text>
            <Ionicons name="chevron-forward-outline" size={16} color={colors.textMuted} />
        </TouchableOpacity>
    );
}
