import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridTile';

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPresshandler = () => {
      navigation.navigate('MealsOverView', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    };
    return (
      <CategoryGridTile
        title={itemData?.item?.title}
        color={itemData?.item?.color}
        onPress={onPresshandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
});
export default CategoryScreen;
