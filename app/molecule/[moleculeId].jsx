import { useLocalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getMolecule } from "../../lib/apis";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import { StatusBar } from "expo-status-bar";
import style from "../../constants/style";
import Molecule from "../../classes/Molecule";

const MoleculeCard = () => {
	console.log("in molecule card")

	const { moleculeId } = useLocalSearchParams();
	const [moleculeInfo, setMoleculeInfo] = useState(null);
	const [moleculeStructure, setMoleculeStructure] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMoleculeData = async () => {
			try {
				const fetchedData = await getMolecule(moleculeId);
				setMoleculeInfo(fetchedData);
			} catch(error) {
				Alert.alert("Error", error.message)
			};

			try {
				const file = await fetch(`https://files.rcsb.org/ligands/
								${moleculeId[0]}/${moleculeId}/
								${moleculeId}_ideal.pdb`);
				const res = await file.text();
				setMoleculeStructure(new Molecule(res));
			} catch(error) {
				Alert.alert("Error", error.message)
			}
		}

		fetchMoleculeData();
	}, []);

	useEffect(() => {
		if (moleculeInfo && moleculeStructure)
			setTimeout(() => setIsLoading(false), 1000);
	}, [moleculeInfo, moleculeStructure]);

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start relative">
			<GoBack containerStyles="bg-white" />
			<View
				className="h-[50vh] w-[3px] bg-white self-center absolute mt-[200px] z-0"
				style={style.boxShadow}
			/>
			{
				isLoading ?
				(
					<View className="animate-bounce">
						<View
							className="mb-5 rounded-[20px] py-4 px-5 z-10 h-[120px] bg-gray-200 dark:bg-gray-700 animate-bounce"
							style={style.boxShadow}
						/>
						<View
							className="w-[100%] h-[70%] rounded-[20px] bg-white flex flex-column pt-4 pb-2 px-1"
							style={style.boxShadow}
						/>
					</View>
				)
				:
				(
					<>
						<MoleculeInfoCard id={moleculeId} item={moleculeInfo} isLoading={isLoading} />
						<MoleculeView moleculeStructure={moleculeStructure} />
					</>
				)
			}
			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
};

export default MoleculeCard;