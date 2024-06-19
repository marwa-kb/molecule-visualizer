import { useLocalSearchParams } from "expo-router";
import { Alert, Dimensions, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef } from "react";
import { getMolecule } from "../../lib/apis";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import { StatusBar } from "expo-status-bar";
import style from "../../constants/style";
import Molecule from "../../classes/Molecule";
import { Skeleton } from "moti/skeleton";
import { captureRef, captureScreen } from "react-native-view-shot";
import { icons } from "../../constants";
import * as MediaLibrary from "expo-media-library";

const MoleculeCard = () => {
	console.log("in molecule card");

	const { moleculeId } = useLocalSearchParams();
	const [moleculeInfo, setMoleculeInfo] = useState(null);
	const [moleculeStructure, setMoleculeStructure] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [permissionResponse, requestPermission] =
		MediaLibrary.usePermissions();
	const imageRef = useRef();

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

	const takeScreenshot = async () => {
		try {
			if (permissionResponse.status !== "granted")
				await requestPermission();
			const localUri = await captureRef(imageRef, {handleGLSurfaceViewOnAndroid:true});
			await MediaLibrary.saveToLibraryAsync(localUri);
			if (localUri)
				alert("Saved!");
		} catch (error) {
			Alert.alert("Error", error.message);
		}
	};

	return (
		<SafeAreaView className="h-full bg-primary justify-start relative">
			<Skeleton.Group show={isLoading}>
				<View className="flex flex-row justify-between p-6 pb-0">
					<Skeleton height={40} {...skeletonProps}>
						<GoBack containerStyles="bg-white" margin="mb-0" />
					</Skeleton>

					<Skeleton height={40} {...skeletonProps}>
						<TouchableOpacity
							className="w-10 h-10 justify-center"
							onPress={takeScreenshot}
							activeOpacity={0.95}
						>
							<View
								className="w-10 h-10 rounded-full justify-center items-center bg-white"
								style={style.boxShadow}
							>
								<Image
									source={icons.save}
									className="w-[20px] h-[20px] absolute"
								/>
							</View>
						</TouchableOpacity>
					</Skeleton>
				</View>

				<View ref={imageRef} collapsable={false} className="bg-primary px-6 pt-5">
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
							className="h-[30vh] w-[4px] bg-white self-center absolute mt-[100px] -z-[1]"
							style={style.boxShadow}
						/>
					)}
					<Skeleton height={isLoading ? 550 : 0} {...skeletonProps}>
						<MoleculeView moleculeStructure={moleculeStructure} />
					</Skeleton>
				</View>
			</Skeleton.Group>

			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
};

export default MoleculeCard;
