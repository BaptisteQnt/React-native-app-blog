import React from "react";
import {
    View, 
    FlatList,
    Pressable,
    Image,
    useWindowDimensions,
} from "react-native";

const arrayOfImages = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1654512799227-94e56fbed599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDBBMHxwaG96bylwYWdLfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

export const FavoritedImages = () => {
    const imageWidht = useWindowDimensions().width * 0.4;

    const renderItem = ({ item }) => {
        return (
            <Image 
                style={{
                    width: imageWidht,
                    height: 130,
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
            style= {{
                paddingHorizontal: 20,
                paddingTop: 20,
            }}
        >
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};