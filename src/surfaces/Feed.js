import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements"
export const Feed = () => {
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight}}>
            <View>
                <Text>This will be the feed screen</Text>
            </View>
        </SafeAreaView>
    )
}