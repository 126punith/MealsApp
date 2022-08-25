import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealItem from '../Components/MealItem';

const MealsOverViewScreen = ({ navigation, route }) => {
  console.log(route.params, 'params');
  const { categoryId, categoryTitle } = route.params;
  const catId = categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  };
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({});
