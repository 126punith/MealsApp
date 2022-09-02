import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMealIds((currId) => [...currId, id]);
  }

  function removeFavorite(id) {
    setFavoritesMealIds((currId) => currId.filter((mealId) => mealId !== id));
  }

  const value = {
    id: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
