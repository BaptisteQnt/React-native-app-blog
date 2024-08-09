import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import { LikeImage, UnlikeImage } from "../../Reducers/LikedImages";

const ImageDetailsModal = ({ navigation, route }) => {
  const likedImages = useSelector((state) => state.likedImages);
  const [isCurrentImageLiked, setIsCurrentImageLiked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfLiked =
      likedImages?.filter(
        (favoritedImg) => favoritedImg.itemId === route.params.imageId
      ).length > 0;
    setIsCurrentImageLiked(checkIfLiked);
  }, [likedImages]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EFE2E2",
          position: "absolute",
          bottom: -260,
          left: -140,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EFE2E2",
          position: "absolute",
          bottom: -290,
          left: -140,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#E1F6F4",
          position: "absolute",
          bottom: -330,
          left: -140,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ flexDirection: "row" }}
    >
        <Ionicons name='chevron-back-outline' size={30} color='#000000'/>
        <Text
            style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                marginTop: 3,
            }}
        >
            Go Back
        </Text>
    </Pressable>
    <View style={{ paddingTop: 30}}>
        <Image
            style={{
                width: "100%",
                height: 288,
                marginBottom: 32,
            }}
            source={{
                uri: route.params.imageItem.url,
            }}
        />
    </View>
    </SafeAreaView>
  );
};

