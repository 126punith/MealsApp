import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MelasList';
// import { FavoritesContext } from '../Store/context/FavoritesContex';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  // const favoritesMealCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoritesMeals = MEALS.filter((meal) =>
    // favoritesMealCtx.id.includes(meal.id)
    favoriteMealsIds.includes(meal.id)
  );

  if (favoritesMeals.length == 0) {
    return (
      <View styles={styles.container}>
        <Text style={styles.noMealsText}>There are no meals added </Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMealsText: { fontSize: 20, color: 'white' },
});
