import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import { useSelector } from "react-redux";
// import AppLoading from "expo-app-loading";
// import { requestBase } from "../utils/constants";
import Loading from "./Loading";

export const ListOfFavorites = () => {
    // const [ cardList, setCardList] = useState(null);
    const { likedImages } = useSelector((state) => state.likedImages);
    const [imageList, setImageList] = useState([]);

    if (!imageList) {
        return <Loading message="loading image list"/>
    }

    useEffect(() => {
        const reversedImages = [...likedImages].reverse();
        setImageList(reversedImages);
    }, [likedImages]);

    const renderItem = ({ item }) => {
        return <Card item={item} navigation={navigation} />;
    };

    return (
        <View
            style={{
                paddingHorizontal: 20,
            }}
        >
            <FlatList
                data={imageList}
                renderItem={renderItem}
                keyExtractor={(item) => item.itemId}
                showsVerticalScrollIndicator={false}
                snapToInterval={312}
                decelerationRate='fast'
            />
        </View>
    );

    // async function fetchCardData() {
    //     const response = await fetch(requestBase + "/home.json");
    //     setCardList(await response.json());
    // }

    // useEffect(() => {
    //     fetchCardData();
    // },[]);

    // if(!cardList) {
    //     return <AppLoading />;
    // }
    // const renderItem = ({ item }) => {
    //     return <Card item={item} />;
    // };
    return (
        <View
            style={{
                paddingHorizontal: 20,
            }}
        >
            <FlatList
                data={cardList.reverse()}
                renderItem={renderItem}
                keyExtractor={(item) => item.itemId}
                showsVerticalScrollIndicator={false}
                snapToInterval={312}
                decelerationRate='fast'
            />
        </View>
    );
};