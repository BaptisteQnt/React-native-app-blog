import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { requestBase } from "../utils/constants";
import Loading from "./Loading";

export const ListOfMessages = ({ conversationId }) => {
    const [messages, setMessages] = useState(null);
    // const message = {
    //     "id": 2,
    //     "message": [
    //         {
    //             "id": 1,
    //             "type": "to",
    //             "text": "After let me start by saying, for those of you who might be confused."
    //         },
    //         {
    //             "id": 2,
    //             "type": "from",
    //             "text": "After the 2000 census, reprsentative Davis meneuvered"
    //         },
    //         {
    //             "id": 3,
    //             "type": "from",
    //             "text": "Genitacally advanced agriculuture, for those of you who might be confused."
    //         },
    //         {
    //             "id": 4,
    //             "type": "to",
    //             "text": "Did should'nt be suprising"
    //         },
    //     ]
    // }

    async function fetchMessages() {
        const response = await fetch(
            requestBase + "/messages/" + conversationId + ".json"
        );
        setMessages(await response.json());
    }

    useEffect(() => {
        fetchMessages();
    },[]);
    if (!messages) {
        return <Loading message="loading message"/>
    }

    const renderItem = ({ item }) => {
        return (
            <View
                style={[
                    styles.text,
                    item.type === "from" ? styles.textTo : styles.textFrom,
                ]}
            >
                <Text style={{}}>{item.text}</Text>
            </View>
        );
    };

    return (
        <View
            style={{
                paddingHorizontal: 20,
            }}
        >
            <FlatList
                data={messages.messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                inverted
            />
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        backgroundColor: "#FAFAFA",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        fontSize: 14,
        padding: 10,
        maxWidth: "65%",
        marginVertical: 14,
    },
    textForm: {
        borderTopLeftRadius: 20,
        alignSelf: "flex-end",
    },
    textTo: {
        borderTopRightRadius: 20,
        alignSelf: "flex-start",
    },
});

// Slide 119 fin jeudi soir