import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ModalSelector from "react-native-modal-selector";
import { Gallery } from "../components/Gallery.jsx";

const OPTIONS = [
  {
    key: "earth",
    label: "Terra",
  },
  {
    key: "mars",
    label: "Marte",
  },
  {
    key: "jupiter",
    label: "Jupiter",
  },
  {
    key: "neptune",
    label: "Netuno",
  },
  {
    key: "saturn",
    label: "Saturno",
  },
  {
    key: "venus",
    label: "Vênus",
  },
  {
    key: "uranus",
    label: "Urano",
  },
  {
    key: "mercury",
    label: "Mercúrio",
  },
  {
    key: "sun",
    label: "Sol",
  },
  {
    key: "moon",
    label: "Lua",
  },
  {
    key: "pluto",
    label: "Plutão",
  },
  {
    key: "asteroid",
    label: "Asteróide",
  },
];

export function GalleryScreen({ navigation }) {
  const [query, setQuery] = useState("");

  function handleClick(item) {
    navigation.navigate("ImageDetails", { item });
  }

  return (
    <View style={styles.container}>
      <ModalSelector
        data={OPTIONS}
        initValue="Selecione um planeta"
        onChange={(option) => setQuery(option.key)}
      />

      {query && (
        <Gallery key={query} query={query} onImageClick={handleClick} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
