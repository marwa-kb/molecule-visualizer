import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import MoleculeInfoCard from "../components/MoleculeInfoCard";
import ligands from "../constants/ligands";
import { useState } from "react";
import * as MediaLibrary from "expo-media-library";

export default function App() {
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const [length, setLength] = useState(20);
	const data = ligands.slice(0, length);

	// must be checked
	if (!status)
		requestPermission();

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<FlatList
				data={data}
				keyExtractor={(molecule) => molecule}
				renderItem={({ item }) => {
					return <MoleculeInfoCard id={item} touchable />;
				}}
				ListHeaderComponent={() => (
					<View className="pb-5 bg-primary">
						<Text className="text-2xl font-pbold mb-3 -tracking-[1px]">
							Ligands
						</Text>
						<SearchInput placeholder="search a ligand" />
					</View>
				)}
				ListEmptyComponent={() => <ActivityIndicator />}
				stickyHeaderIndices={[0]}
				onEndReachedThreshold={0.5}
				onEndReached={() => setLength((prev) => prev + 20)}
			/>

			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
}
