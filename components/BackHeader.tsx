import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/utils/themeContext";

type Props = {
    title: string;
};

export default function BackHeader({ title }: Props) {
    const router = useRouter();
    const { colors } = useTheme();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                paddingHorizontal: 24,
                paddingTop: Platform.OS === "ios" ? 64 : 48,
                marginBottom: 32,
            }}
        >
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    backgroundColor: colors.card,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: colors.border,
                }}
            >
                <Ionicons name="arrow-back-outline" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
            <Text style={{ color: colors.text, fontSize: 28, fontWeight: "700" }}>
                {title}
            </Text>
        </View>
    );
}
