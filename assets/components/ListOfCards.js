import { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { Card } from "../components/Card";
import { FlatList } from "react-native-gesture-handler";
import { requestBase } from "../utils/constants";

export const ListOfCards = () => {
    const [cardList, setCardList] = useState(null);
    async function fetchCardData() {
        try {
            console.log(`requestBase ${requestBase}`)
            const response = await fetch(requestBase + "/home.json");
            const data = await response.json()
            console.log(`data json ok => ${JSON.stringify(data)}`)
            setCardList(data);
        } catch (error) {
            console.log(`listcard fecth error ${error.message}`)
        }
    }
    useEffect(() => {
        fetchCardData();
    }, []);

    if(!cardList) {
        return (
            <View>
                <Text>Loading cardList ...</Text>
            </View>
        )
    }


    const renderItem = ({ item }) => {
        return <Card item={item} navigation={navigation} />
    };

    // const arrayOfImages = [
    //     {
    //         "itemId": 101,
    //         "authorId": 11,
    //         "timeStamp": "2 hrs ago",
    //         "url": "https://images.unsplash.com/photo-1653546226145-91aa8ce0cc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
    //         "likes": "28",
    //         "conversations": "12"
    //     },
    // ]

    return (
        <View
            style={{
                marginTop: -200,
                paddingHorizontal: 20,
                marginBottom: 160,
            }}
        >
            <FlatList
                data={cardList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};