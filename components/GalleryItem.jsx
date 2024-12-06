import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

export function GalleryItem({ item, onImageClick }) {
  const [loading, setLoading] = useState(false);

  if (!item.href) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onImageClick(item)}>
        <Image
          source={{ uri: item.href }}
          style={styles.image}
          onLoadEnd={() => setLoading(false)}
          onLoadStart={() => setLoading(true)}
        />
      </Pressable>
      {loading && <ActivityIndicator style={styles.loadingStatus} size={50} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "50%",
    backgroundColor: "#f0f0f0",
    height: 100,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadingStatus: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
