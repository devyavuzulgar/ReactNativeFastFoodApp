import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import { categoriesFood, foodItems } from "../constants";
import * as Animateble from "react-native-animatable";
import FoodCard from "../components/FoodCard";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={40}
        source={require("../assets/images/background.jpg")}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex-1">
        {/* top buttons */}
        <View className="flex-row justify-between items-center mx-4">
          <View className="bg-white shadow-md rounded-2xl p-3">
            <Bars3CenterLeftIcon size="25" color="black" stroke={100} />
          </View>

          <View className="rounded-2xl bg-white p-1">
            <Image
              className="h-12 w-12 rounded-2xl"
              source={require("../assets/images/avatar.jpg")}
            />
          </View>
        </View>
        {/* punch line */}
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-yellow-50">
            Fast and
          </Text>

          <Text className="mx-4 text-5xl font-medium text-yellow-50">
            <Text className="font-extrabold">Deliciouse</Text> Food
          </Text>
        </View>
        {/* search */}
        <View className="flex-row mx-4 justify-between items-center">
          <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
            <MagnifyingGlassIcon stroke={40} color="gray" />
            <TextInput
              placeholder="Food"
              value="Search"
              className="ml-2 text-gray-800"
            />
          </View>

          <View className="bg-white rounded-2xl p-4 ml-3">
            <AdjustmentsHorizontalIcon size="25" stroke={40} color="black" />
          </View>
        </View>
        {/* categories scrollbar */}
        <ScrollView
          className="mt-6 pt-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categoriesFood.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = isActive ? "font-bold" : "";
            return (
              <Animateble.View
                delay={index * 120}
                animation="slideInDown"
                key={index}
              >
                <TouchableOpacity
                  className="mr-9"
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    className={
                      "text-white text-base tracking-widest " + textClass
                    }
                  >
                    {category}
                  </Text>
                  {isActive ? (
                    <View className="flex-row justify-center">
                      <View className="flex-1 rounded bg-white p-1"></View>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </Animateble.View>
            );
          })}
        </ScrollView>
        {/* food cards */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {foodItems.map((item, index) => (
            <FoodCard item={item} index={index} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
