import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import GoBack from "../../components/GoBack";

const Search = () => {
	const { query } = useLocalSearchParams();
	const result = ligands.filter((item) => item.includes(query));

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<FlatList
				data={result}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<MoleculeInfoCard id={item} touchable={true} />
				)}
				ListHeaderComponent={() => (
					<View className="mb-4">
						<GoBack containerStyles="border"/>
						<SearchInput placeholder="Search for a molecule" initialQuery={query}/>
						<Text className="text-xl font-psemibold -tracking-[1px] pl-1 mt-6 ml-1">Search Results</Text>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No Correspondance Found"
					/>
				)}
			/>
		</SafeAreaView>
	);
}

export default Search;
