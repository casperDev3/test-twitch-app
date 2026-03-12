import { Text, View } from "react-native";

type Props = {
    label: string;
    bgColor: string;
    textColor: string;
    bold?: boolean;
};

export default function Badge({ label, bgColor, textColor, bold }: Props) {
    return (
        <View className="px-3 py-1 rounded-full" style={{ backgroundColor: bgColor }}>
            <Text
                className={`text-xs ${bold ? "font-bold" : "font-semibold"}`}
                style={{ color: textColor }}
            >
                {label}
            </Text>
        </View>
    );
}
