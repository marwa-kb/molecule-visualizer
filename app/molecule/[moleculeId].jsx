import { useLocalSearchParams } from "expo-router";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getMolecule } from "../../lib/apis";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import { StatusBar } from "expo-status-bar";
import style from "../../constants/style";
import Molecule from "../../classes/Molecule";
import { Skeleton } from "moti/skeleton";

const MoleculeCard = () => {
	console.log("in molecule card");

	const { moleculeId } = useLocalSearchParams();
	const [moleculeInfo, setMoleculeInfo] = useState(null);
	const [moleculeStructure, setMoleculeStructure] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMoleculeData = async () => {
			try {
				const fetchedData = await getMolecule(moleculeId);
				setMoleculeInfo(fetchedData);
			} catch (error) {
				Alert.alert("Error", error.message);
			}

			try {
				let file = await fetch(`https://files.rcsb.org/ligands/
								${moleculeId[0]}/${moleculeId}/
								${moleculeId}_ideal.pdb`);
				let res = await file.text();
				if (res.length === 0) {
					let file = await fetch(`https://files.rcsb.org/ligands/
						${moleculeId[0]}/${moleculeId}/
						${moleculeId}_model.pdb`);
					res = await file.text();
				}
				setMoleculeStructure(new Molecule(res));
			} catch (error) {
				Alert.alert("Error", error.message);
			}
		};

		fetchMoleculeData();
	}, []);

	useEffect(() => {
		if (moleculeInfo && moleculeStructure)
			setTimeout(() => setIsLoading(false), 1500);
	}, [moleculeInfo, moleculeStructure]);

	const skeletonProps = {
		radius: 20,
		colorMode: "light",
		backgroundColor: "#e4e4e7",
		transition: {
			type: "timing",
			duration: 1000,
		},
	};

	return (
		<SafeAreaView className="h-full bg-primary p-6 justify-start relative">
			<GoBack containerStyles="bg-white" />

			<Skeleton.Group show={isLoading}>
				<Skeleton
					height={isLoading ? 120 : 0}
					width={"100%"}
					{...skeletonProps}
				>
					<MoleculeInfoCard
						id={moleculeId}
						item={moleculeInfo}
						isLoading={isLoading}
					/>
				</Skeleton>

				{!isLoading && (
					<View
						className="h-[30vh] w-[3px] bg-white self-center absolute mt-[150px] -z-[1]"
						style={style.boxShadow}
					/>
				)}
				<Skeleton height={isLoading ? 550 : 0} {...skeletonProps}>
					<MoleculeView moleculeStructure={moleculeStructure} />
				</Skeleton>
			</Skeleton.Group>

			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
};

export default MoleculeCard;
