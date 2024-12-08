import { ImageDetails } from "../components/ImageDetails.jsx";

export function ImageDetailsScreen({ route }) {
  const { item } = route.params;

  return <ImageDetails {...item} />;
}
