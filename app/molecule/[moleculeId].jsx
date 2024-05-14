import { useLocalSearchParams } from "expo-router";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getMolecule } from "../../lib/apis";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";

const MoleculeCard = () => {
	const { moleculeId } = useLocalSearchParams();
	const [molecule, setMolecule] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedData = await getMolecule(moleculeId);
				setMolecule(fetchedData);
			} catch(error) {
				Alert.alert("Error", error.message)
			}
		}
		fetchData();
	}, []);
	// console.log(molecule)

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start">
			<GoBack containerStyles="bg-white"/>

			<MoleculeInfoCard id={moleculeId} item={molecule} touchable={false} />

			<View className="h-[50vh] w-[3px] bg-white self-center absolute mt-[200px]"></View>

			<MoleculeView moleculeId={moleculeId}/>
		</SafeAreaView>
	);
};

export default MoleculeCard;