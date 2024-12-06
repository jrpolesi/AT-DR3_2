import { SafeAreaView, StyleSheet } from "react-native";
import { Navigation } from "./components/Navigation";
import { ToastErrorProvider } from "./contexts/ToastError";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToastErrorProvider>
        <Navigation />
      </ToastErrorProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
