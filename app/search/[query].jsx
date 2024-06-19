import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import GoBack from "../../components/GoBack";
import { StatusBar } from "expo-status-bar";
import ligands from "../../constants/ligands";


const Search = () => {
	const { query } = useLocalSearchParams();
	const result = ligands.filter((item) => item.includes(query.toUpperCase()));

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<FlatList
				data={result}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<MoleculeInfoCard id={item} touchable />
				)}
				ListHeaderComponent={() => (
					<View className="pb-5 bg-primary">
						<GoBack containerStyles="border bg-primary"/>
						<SearchInput placeholder="Search for a ligand" initialQuery={query}/>
						<Text className="text-xl font-psemibold -tracking-[1px] pl-1 mt-6 ml-1">Search Results</Text>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No correspondance found"
					/>
				)}
				stickyHeaderIndices={[0]}
			/>

			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
}

export default Search;
