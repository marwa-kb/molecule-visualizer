import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import MoleculeInfoCard from "../components/MoleculeInfoCard";
import EmptyState from "../components/EmptyState";
import ligands from "../lib/ligands";
import { useCallback, useEffect, useState } from "react";

export default function App() {
	const [length, setLength] = useState(20);
	const [data, setData] = useState(ligands.slice(0, length));

	// const renderMoleculeItem = useCallback(({ item }) => {
	// 	return (<MoleculeInfoCard id={item} touchable={true} />);
	// }, []);

	useEffect(() => {
		setData(ligands.slice(0, length));
	}, [length]);

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<FlatList
				data={data}
				keyExtractor={(molecule) => molecule}
				renderItem={(({ item }) => {
					return (<MoleculeInfoCard id={item} touchable />);
				})}
				ListHeaderComponent={() => (
					<View className="pb-5 bg-primary">
						<Text className="text-2xl font-pbold mb-3 -tracking-[1px]">Ligands</Text>
						<SearchInput placeholder="search a ligand" />
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No Molecules Found"
					/>
				)}
				stickyHeaderIndices={[0]}
				onEndReachedThreshold={0.5}
				onEndReached={() => setLength(prev => prev + 20)}
			/>

			<StatusBar backgroundColor="#ffffff" style="dark" />
		</SafeAreaView>
	);
}