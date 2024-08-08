import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListOfCards = () => {
    const renderItem = ({ item }) => {
        return (
            <Image 
                style={{
                    width: "100%",
                    height: 288,
                    borderRadius: 20,
                    marginBottom: 32,
                }}
                source={{
                    uri: item.url,
                }}
            />
        );
    };

    const arrayOfImages = [
        {
            "itemId": 101,
            "authorId": 11,
            "timeStamp": "2 hrs ago",
            "url": "https://images.unsplash.com/photo-1653546226145-91aa8ce0cc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
            "likes": "28",
            "conversations": "12"
        },
    ]

    return (
        <View style={{ paddingVertical: 30}}>
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator= {false}
            />
        </View>
    );
};