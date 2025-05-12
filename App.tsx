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
          translateX: doAnimate
            ? [
                { value: 10, type: "timing", duration: 100 },
                { value: 0, stiffness: 1000, damping: 10 },
              ]
            : undefined,
        }}
        onDidAnimate={() => {
          // error thrown after this
          setDoAnimate(false);
        }}
      />
      <Button title="shake" onPress={handlePress} />
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
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#b58df1",
  },
});
