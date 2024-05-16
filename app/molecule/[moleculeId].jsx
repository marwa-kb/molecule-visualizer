import { useLocalSearchParams } from "expo-router";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getMolecule } from "../../lib/apis";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import { StatusBar } from "expo-status-bar";

const MoleculeCard = () => {
	const { moleculeId } = useLocalSearchParams();
	const [molecule, setMolecule] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const fetchedData = await getMolecule(moleculeId);
				setMolecule(fetchedData);
				setTimeout(() => setIsLoading(false), 200);
			} catch(error) {
				Alert.alert("Error", error.message)
			}
		}
		fetchData();
	}, []);

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<GoBack containerStyles="bg-white"/>

			<MoleculeInfoCard id={moleculeId} item={molecule} isLoading={isLoading} />

			<View className="h-[50vh] w-[3px] bg-white self-center absolute mt-[200px] z-0"></View>

			<MoleculeView moleculeId={moleculeId}/>

			<StatusBar backgroundColor="#ffffff" style="auto" />
		</SafeAreaView>
	);
};

export default MoleculeCard;