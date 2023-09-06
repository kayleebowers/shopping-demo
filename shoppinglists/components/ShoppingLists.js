import { View, FlatList, StyleSheet, Text } from "react-native";
import { useState } from "react";

const ShoppingLists = ({ db }) => {
  const [lists, setLists] = useState([]);

  return (
    <View>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <Text>
            {item.name}: {item.items.join(", ")}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShoppingLists;
