import { MotiView } from "moti";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  const [doAnimate, setDoAnimate] = useState(false);
  const handlePress = () => setDoAnimate(true);

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.box}
        animate={{
          backgroundColor: "red",
          translateX: doAnimate ? 100 : undefined,
        }}
      />
      <Button title="move" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#b58df1",
  },
});
