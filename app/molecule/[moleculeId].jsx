import { useState, useEffect, useRef } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { Skeleton } from "moti/skeleton";
import { getMoleculeInfo, getMoleculeIdealStruct } from "../../lib/apis";
import { icons } from "../../constants";
import Molecule from "../../classes/Molecule";
import style from "../../constants/style";
import MoleculeBigInfoCard from "../../components/MoleculeBigInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

const MoleculeCard = () => {
	const { moleculeId } = useLocalSearchParams();
	const [moleculeInfo, setMoleculeInfo] = useState(null);
	const [moleculeStructure, setMoleculeStructure] = useState(null);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isCapturing, setIsCapturing] = useState(false);

	const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
	const imageRef = useRef();

	// fetching data: molecule info (name, formula) and molecule 3D structure
	useEffect(() => {
		const fetchMoleculeData = async () => {
			try {
				const fetchedMoleculeInfo = await getMoleculeInfo(moleculeId);
				setMoleculeInfo(fetchedMoleculeInfo);
			} catch (error) {
				Alert.alert("Error", error.message);
			}

			try {
				const fetchedMoleculeStruct = await getMoleculeIdealStruct(moleculeId);
				setMoleculeStructure(new Molecule(fetchedMoleculeStruct));
			} catch (error) {
				Alert.alert("Error", error.message);
				setError(true);
			}
		};

		fetchMoleculeData();

		return(() => setMoleculeStructure(null));
	}, []);

	// loading finished when all data is fetched
	useEffect(() => {
		if (error || (moleculeInfo && moleculeStructure))
			setTimeout(() => setIsLoading(false), 1500);
	}, [error, moleculeInfo, moleculeStructure]);

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
			if (permissionResponse.status !== "granted") {
				const permission = await requestPermission();
				if (permission.status !== "granted") {
					Alert.alert(
						"Error",
						"Please allow Molecule Visualizer to access your files in order to save this visualization into your gallery."
					);
					return;
				}
			}
			const localUri = await captureRef(imageRef, {
				handleGLSurfaceViewOnAndroid: true,
			});
			await MediaLibrary.saveToLibraryAsync(localUri);
			setIsCapturing(true);
		} catch (error) {
			Alert.alert("Error", error.message);
		} finally {
			setTimeout(() => setIsCapturing(false), 1000);
		}
	};

	return (
		<SafeAreaView className="h-full bg-primary justify-start relative">
			<Skeleton.Group show={isLoading}>
				<View className="flex flex-row justify-between p-6 pb-0">
					<GoBack
						containerStyles="bg-white"
						margin="mb-0"
						isLoading={isLoading}
					/>
					{isCapturing && (
						<Animated.View
							className={`py-1 px-12 bg-zinc-950/80 rounded-[70px]
									flex justify-center items-center`}
							entering={FadeInUp}
							exiting={FadeOutUp}
						>
							<Text className="text-white font-pregular text-xs">
								Saved into gallery
							</Text>
						</Animated.View>
					)}

					<TouchableOpacity
						className="w-10 h-10 justify-center"
						onPress={takeScreenshot}
						activeOpacity={0.95}
						disabled={isLoading}
					>
						<View
							className="w-10 h-10 rounded-full justify-center items-center bg-white"
							style={style.boxShadow}
						>
							<Image
								source={icons.save}
								className="w-[18px] h-[18px] absolute"
							/>
						</View>
					</TouchableOpacity>
				</View>

				<View
					ref={imageRef}
					collapsable={false}
					className="bg-primary px-6 pt-5"
				>
					<Skeleton
						height={isLoading ? 130 : 0}
						width={"100%"}
						{...skeletonProps}
					>
						<MoleculeBigInfoCard
							id={moleculeId}
							item={moleculeInfo}
						/>
					</Skeleton>

					{!isLoading && !error && (
						<View
							className="h-[30vh] w-[4px] bg-white self-center absolute mt-[100px] -z-[1]"
							style={style.boxShadow}
						/>
					)}
					{!error && 
						<Skeleton height={550} width={"100%"} {...skeletonProps}>
								<MoleculeView moleculeStructure={moleculeStructure} />
						</Skeleton>
					}
				</View>
			</Skeleton.Group>

			<StatusBar backgroundColor="#E6F5E0" style="dark" />
		</SafeAreaView>
	);
};

export default MoleculeCard;
