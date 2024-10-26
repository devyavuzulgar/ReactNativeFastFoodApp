import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/outline";
import * as Animateble from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function FoodDetailScreen(props) {
  const navigation = useNavigation();
  let item = props.route.params;
  return (
    <View className="flex-1 bg-white">
      <Image
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        source={require("../assets/images/background.jpg")}
        blurRadius={40}
        className="h-96 w-full absolute"
      />
      <SafeAreaView>
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            className="bg-white rounded-2xl p-3 shadow"
            onPress={() => navigation.navigate("Home")}
          >
            <ChevronLeftIcon size="23" stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-2xl p-3 shadow">
            <HeartIcon size="23" color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center">
          <Image className="h-48 w-48" source={item.image} />
          <Text className="text-white text-3xl">{item.name}</Text>
        </View>

        <View className="flex-row justify-center items-center mt-3">
          <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl">
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3 mr-1">
              <MinusIcon size="20" strokeWidth={"1.8"} color="black" />
            </TouchableOpacity>
            <Text className="text-xl mx-1">10</Text>
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3 ml-1">
              <PlusIcon size="20" strokeWidth={"1.8"} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center mx-4 mt-2 h-20 overflow-hidden">
          <Animateble.View
            delay={180}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/images/calory.png")}
              className="h-8 w-8"
            />
            <Text className="font-semibold">130 cal</Text>
          </Animateble.View>

          <Animateble.View
            delay={280}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/images/calory.png")}
              className="h-8 w-8"
            />
            <Text className="font-semibold">15-20 min</Text>
          </Animateble.View>

          <Animateble.View
            delay={380}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/images/calory.png")}
              className="h-8 w-8"
            />
            <Text className="font-semibold">4.6 vote</Text>
          </Animateble.View>

          <Animateble.View
            delay={480}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/images/calory.png")}
              className="h-8 w-8"
            />
            <Text className="font-semibold">350 g</Text>
          </Animateble.View>
        </View>

        <View className="mx-4 mt-6 h-60">
          <Animateble.Text
            animation="slideInUp"
            className="text-3xl font-semibold text-gray-800 mb-3"
          >
            Description
          </Animateble.Text>
          <Animateble.Text
            delay={100}
            animation="slideInUp"
            className="text-gray-600 tracking-wider"
          >
            {item.desc}
          </Animateble.Text>
        </View>

        <View className="flex-row mx-4 justify-between items-center">
          <Animateble.Text
            delay={100}
            animation="slideInLeft"
            className="text-3xl font-semibold"
          >
            ${item.price}
          </Animateble.Text>

          <Animateble.View delay={100} animation="slideInRight">
            <TouchableOpacity className="bg-gray-800 p-4 px-4 rounded-2xl">
              <Text className="text-white text-xl font-semibold">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </Animateble.View>
        </View>
      </SafeAreaView>
    </View>
  );
}
