import CategoriesGrid from "@/components/CategoriesGrid";
import ScreenHeader from "@/components/ScreenHeader";
import SearchBar from "@/components/SearchBar";
import { ScrollView, View } from "react-native";
import { useTheme } from "../../utils/themeContext";

export default function Explore() {
    const { colors } = useTheme();

    return (
        <View className="flex-1" style={{ backgroundColor: colors.bg }}>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <ScreenHeader
                    subtitle="Досліджуй"
                    title="Огляд"
                    style={{ marginBottom: 24 }}
                />
                <View className="px-6">
                    <SearchBar />
                    <CategoriesGrid />
                </View>
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
