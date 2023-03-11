import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignedInStack from "./navigation";
import globalStyles from "./components/globalStyles";
import { SafeAreaView, View } from "react-native";

 
export default function App() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <SignedInStack />
    </SafeAreaView>
  );
}
