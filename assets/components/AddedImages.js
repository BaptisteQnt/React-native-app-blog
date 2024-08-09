import React from "react";
import {
    View,
    FlatList,
    Pressable,
    Image,
    useWindowDimensions,
} from "react-native";

const arrayOfImages = [

]

export const AddedImages = () => {
    const imageWidht = useWindowDimensions().width * 0.4;

    const renderItem = ({ item }) => {
        return (
            <Image
                style={{
                    width: imageWidht,
                    height: 220,
                    borderRadius: 20,
                    marginBottom: 32,
                    borderColor: "#000000",
                }}
                source={{
                    uri: item.url,
                }}
            />
        );
    };
    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingTop: 20,
            }}
        >
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                snapToInterval={240}
                decelerationRate="fast"
            />
        </View>
    );
};