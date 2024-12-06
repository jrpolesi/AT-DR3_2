import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export function ImageDetails({
  href,
  title,
  description,
  keywords,
  photographer,
  secondaryCreator,
}) {
  const formattedKeywords = keywords.join(" / ");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Image source={{ uri: href }} style={styles.image} />
      <ScrollView style={styles.details}>
        <Text style={styles.description}>{description}</Text>
        {photographer && (
          <Text style={styles.photographer}>Photographer: {photographer}</Text>
        )}
        {secondaryCreator && (
          <Text style={styles.secondaryCreator}>
            Secondary Creator: {secondaryCreator}
          </Text>
        )}

        <Text style={styles.keywords}>{formattedKeywords}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  image: {
    width: "100%",
    maxWidth: 400,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  details: {
    gap: 10,
    flex: 1,
    marginBottom: 20,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
  },
  keywords: {
    fontSize: 14,
    color: "#004085",
    marginTop: 10,
  },
});
