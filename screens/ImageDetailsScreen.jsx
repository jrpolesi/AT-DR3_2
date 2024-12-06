import { ImageDetails } from "../components/ImageDetails";

export function ImageDetailsScreen({ route }) {
  const { item } = route.params;

  return <ImageDetails {...item} />;
}
