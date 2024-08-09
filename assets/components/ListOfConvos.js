import React, { useState, useEffect } from "react";
import { View, FlatList} from "react-native";
import { ConversationItem } from ".ConversationItem";
import { requestBase } from "../utils/constants";
import Loading from "Loading";

export const ListOfConvos = ({ navigation }) => {

    const [conversationsList, setConversationList] = useState(null);
    
    async function fetchConversationData() {
        const responce = await fetxh(requestBase + "/conversation.json");
        setConversationList(await responce.json());
    }

    useEffect(() => {
        fetchConversationData();
    }, []);

    if (!conversationsList) {
        return <Loading message="Loading conx list"/>
    };

    // const userList = [
    //     {
    //         "id": 1,
    //         "name": "Malena Tudi",
    //         "url": "https://raw.githubusercontent.com/PacktPublishing/Simplifying-State-Management-in-React-Native/cd04c474053275d4e22a8173695a2b972d012567/chapter-4/assets/avatars/1.png"
    //     }
    // ]

    // const conversationsList = [
    //     {
    //         "id": 1,
    //         "userId": 2,
    //         "text": "Hey, how's it going ?"
    //     },
    // ]

    const renderItem = ({ item }) => {
        return <ConversationItem navigation={navigation} item={item} />;
    };

    return (
        <View
            style={{
                paddingTop: 30,
                marginTop: -30,
                marginBottom: 50,
            }}
        >
            <FlatList
                data={conversationsList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                snapToInterval={119}
                decelerationRate='fast'
                ListHeaderComponent={<View style={{ height:30 }} />}
            />
        </View>
    );
};