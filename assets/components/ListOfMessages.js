import { View, FlatList, Text, StyleSheet } from "react-native";

export const ListOfMessages = () => {
    const message = {

    }

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    styles.text,
                    item.type === "from" ? styles.textTo : styles.textFrom,
                }}
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