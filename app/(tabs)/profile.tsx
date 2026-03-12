import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileMenu from "@/components/ProfileMenu";
import ProfileStats from "@/components/ProfileStats";
import ScreenHeader from "@/components/ScreenHeader";
import { ScrollView, View } from "react-native";
import { useTheme } from "../../utils/themeContext";

export default function Profile() {
    const { colors } = useTheme();

    return (
        <View className="flex-1" style={{ backgroundColor: colors.bg }}>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <ScreenHeader
                    subtitle="Мій акаунт"
                    title="Профіль"
                    style={{ marginBottom: 24 }}
                />
                <ProfileAvatar name="Користувач" email="user@example.com" />
                <ProfileStats />
                <ProfileMenu />
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
