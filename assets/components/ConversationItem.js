import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import { UserListContext, ConversationContext } from "../../src/context";

export const ConversationItem = ({ navigation, item}) => {

    const onPressItem = (setConverstionId, currentUser) => {
        setConverstionId(item.id);
        navigation.navigate("Messages",{
            name: currentUser[0].name,
            avatar: currentUser[0].url,
        });
    };

    return (
        <ConversationContext.Consumer>
            {({ setConverstionId}) => (
                <UserListContext.Consumer>
                    {({ userList}) => {
                        const currentUser = userList.filter(
                            (user) => user.id === item.userId
                        );
                        return (
                            <Pressable
                                onPress={() => onPressItem(setConverstionId, currentUser)}
                                style={{
                                    height: 103,
                                    backgroundColor: "rgba(255,255,255,0.6",
                                    borderRadius: 33,
                                    marginBottom: 16,
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    flexDirection: "row",                                
                                }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                width: 67,
                                                height: 67,
                                                borderRadius: 35,
                                                borderColor: "#000000",
                                                borderWidth: 1,
                                                marginHorizontal: 17,
                                            }}
                                            >
                                                <Image 
                                                    style={{
                                                        width: 61,
                                                        height: 61,
                                                        borderRadius: 35,
                                                        marginTop: 2,
                                                        marginLeft: 2,
                                                    }}
                                                    source={{
                                                        uri: currentUser[0].url,
                                                    }}
                                                />
                                            </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, paddingBottom: 9 }}>
                                            {currentUser[0].name}
                                        </Text>
                                        <Text style={{ color: "#656565", width: "65%"}}>
                                            {item.text}
                                        </Text>
                                    </View>
                                </Pressable>
                        );
                    }}
                </UserListContext.Consumer>
            )}
        </ConversationContext.Consumer>
    )
}