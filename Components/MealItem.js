import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealItem = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable
        style={{
          flex: 1,
          paddingHorizontal: 20,
          marginVertical: 15,
        }}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
