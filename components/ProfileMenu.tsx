import MenuItem from "@/components/MenuItem";
import { useTheme } from "@/utils/themeContext";
import { View } from "react-native";

const MENU_ITEMS = [
    { icon: "bookmark-outline", label: "Збережене", color: "#6366f1" },
    { icon: "heart-outline", label: "Уподобання", color: "#ef4444" },
    { icon: "notifications-outline", label: "Сповіщення", color: "#f59e0b" },
    { icon: "shield-checkmark-outline", label: "Конфіденційність", color: "#10b981" },
    { icon: "help-circle-outline", label: "Допомога", color: "#0ea5e9" },
    { icon: "log-out-outline", label: "Вийти", color: "#94a3b8" },
];

export default function ProfileMenu() {
    const { colors } = useTheme();

    return (
        <View
            className="mx-6 rounded-2xl border overflow-hidden"
            style={{ backgroundColor: colors.card, borderColor: colors.border }}
        >
            {MENU_ITEMS.map((item, index) => (
                <MenuItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    iconColor={item.color}
                    separator={index < MENU_ITEMS.length - 1}
                />
            ))}
        </View>
    );
}
