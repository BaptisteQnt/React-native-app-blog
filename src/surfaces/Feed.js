import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { ListOfAvatars } from "../components/ListOfAvatars";
import { ListOfCards } from "../components/ListOfCards";

export const Feed = () => {
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 20, paddingHorizontal: 20 }}>
            <View>
                <ListOfAvatars />
                <ListOfCards />
            </View>
        </SafeAreaView>
    )
}