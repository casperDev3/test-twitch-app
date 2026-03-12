import ClassicCard from "@/components/ClassicCard";
import HomeStats from "@/components/HomeStats";
import InfoBanner from "@/components/InfoBanner";
import QuickActionsCard from "@/components/QuickActionsCard";
import ScreenHeader from "@/components/ScreenHeader";
import ScrollTestSection from "@/components/ScrollTestSection";
import WindCard from "@/components/WindCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../utils/themeContext";

export default function Index() {
    const router = useRouter();
    const { colors } = useTheme();
    const scrollRef = useRef<ScrollView>(null);
    const [componentsY, setComponentsY] = useState(0);

    const scrollToComponents = () => {
        scrollRef.current?.scrollTo({ y: componentsY, animated: true });
    };

    return (
        <View className="flex-1" style={{ backgroundColor: colors.bg }}>
            <ScrollView ref={scrollRef} className="flex-1" showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: colors.card, paddingBottom: 32 }}>
                    <ScreenHeader
                        subtitle="Доброго дня"
                        title="Головна"
                        style={{ marginBottom: 32 }}
                        right={
                            <TouchableOpacity
                                className="w-12 h-12 rounded-full items-center justify-center border-2"
                                style={{
                                    backgroundColor: colors.iconBg,
                                    borderColor: colors.border,
                                }}
                                onPress={() => router.push("/settings")}
                            >
                                <Ionicons
                                    name="settings-outline"
                                    size={22}
                                    color={colors.textSecondary}
                                />
                            </TouchableOpacity>
                        }
                    />
                    <HomeStats />
                </View>

                <View className="px-6 -mt-4">
                    <QuickActionsCard />
                    <InfoBanner />
                    <View onLayout={(e) => setComponentsY(e.nativeEvent.layout.y)}>
                        <Text className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                            Компоненти
                        </Text>
                    </View>
                </View>

                <ClassicCard />
                <WindCard />

                <ScrollTestSection onScrollToComponents={scrollToComponents} />
            </ScrollView>
        </View>
    );
}
