import { Platform, Text, View, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { useTheme } from "@/utils/themeContext";

type Props = {
    subtitle: string;
    title: string;
    right?: ReactNode;
    style?: ViewStyle;
};

export default function ScreenHeader({ subtitle, title, right, style }: Props) {
    const { colors } = useTheme();

    return (
        <View
            className={`px-6 flex-row justify-between items-center ${
                Platform.OS === "ios" ? "pt-16" : "pt-12"
            }`}
            style={style}
        >
            <View>
                <Text
                    className="text-sm font-medium mb-1"
                    style={{ color: colors.textMuted }}
                >
                    {subtitle}
                </Text>
                <Text className="text-3xl font-bold" style={{ color: colors.text }}>
                    {title}
                </Text>
            </View>
            {right}
        </View>
    );
}
