import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import MoleculeInfoCard from "../components/MoleculeInfoCard";
import EmptyState from "../components/EmptyState";
import { getMolecule, getMolecules } from "../lib/apis";
import ligands from "../lib/ligands";

export default function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				for (let i = 0; i < ligands.length; i++)
				{
					if (i >= 10)
						break;
					if (data.filter((item) => item.rcsb_id === ligands[i]).length > 0)
						continue;
					const fetchedData = await getMolecule(ligands[i]);
					setData((prev) => [...prev, fetchedData]);
				}
			} catch (error) {
				Alert.alert("Error", error.message)
			} finally {
				setIsLoading(false);
			}
		}
		getData();
	}, []);
	
	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<FlatList
				data={data}
				keyExtractor={(molecule) => molecule.chem_comp.id}
				renderItem={({ item }) => (
					<MoleculeInfoCard item={item}/>
				)}
				ListHeaderComponent={() => (
					<View className="mb-6">
						<Text className="text-2xl font-pbold mb-3 -tracking-[1px]">Ligands</Text>
						<SearchInput placeholder="001" />
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No Molecules Found"
					/>
				)}
			/>

			<StatusBar backgroundColor="#ffffff" style="auto" />
		</SafeAreaView>
	);
}