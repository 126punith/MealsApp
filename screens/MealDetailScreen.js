import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../Store/context/FavoritesContex';
import { addFavorite, removeFavorite } from '../Store/redux/favorites';
function MealDetailScreen({ route, navigation }) {
  // const favoritesMealsCtx = useContext(FavoritesContext);
  // console.log(favoritesMealsCtx, 'favoritesMealsCtx');

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const mealId = route.params.mealId;
  const dispatch = useDispatch();
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorites = favoritesMealsCtx.id.includes(mealId);
  const mealIsFavorites = favoriteMealsIds.includes(mealId);

  function changeFavoritesHandler() {
    if (mealIsFavorites) {
      // favoritesMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritesMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorites ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavoritesHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
