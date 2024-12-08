import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useNASAImages } from "../hooks/useNASAImages.jsx";
import { GalleryItem } from "./GalleryItem.jsx";
import { ProgressBar } from "./ProgressBar.jsx";

export function Gallery({ query, onImageClick }) {
  const {
    data,
    isLoading,
    isRefreshing,
    pagination: {
      resetPagination,
      fetchNextPage,
      hasNextPage,
      page,
      totalPages,
    },
  } = useNASAImages({ query });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <GalleryItem item={item} onImageClick={onImageClick} />
        )}
        keyExtractor={({ nasaId }) => nasaId}
        ListFooterComponent={isLoading && ActivityIndicator}
        refreshing={!!isRefreshing}
        onRefresh={resetPagination}
        onEndReached={() => hasNextPage && fetchNextPage()}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListFooterComponentStyle={styles.listFooter}
      />
      {!!totalPages && <ProgressBar current={page} total={totalPages} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 16,
  },
  contentContainer: {
    gap: 10,
    margin: 0,
  },
  columnWrapper: {
    gap: 10,
  },
  listFooter: {
    marginTop: 20,
  },
});
