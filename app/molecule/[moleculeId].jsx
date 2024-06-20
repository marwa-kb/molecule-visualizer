import { useState, useEffect, useRef } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { Skeleton } from "moti/skeleton";
import { getMoleculeInfo, getMoleculeIdealStruct, getMoleculeModelStruct } from "../../lib/apis";
import { icons } from "../../constants";
import Molecule from "../../classes/Molecule";
import style from "../../constants/style";
import MoleculeInfoCard from "../../components/MoleculeInfoCard";
import MoleculeView from "../../components/MoleculeView";
import GoBack from "../../components/GoBack";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

const MoleculeCard = () => {
	const { moleculeId } = useLocalSearchParams();
	const [moleculeInfo, setMoleculeInfo] = useState(null);
	const [moleculeStructure, setMoleculeStructure] = useState(null);
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
				let fetchedMoleculeStruct = await getMoleculeIdealStruct(moleculeId);
				if (fetchedMoleculeStruct.length === 0)
					fetchedMoleculeStruct = await getMoleculeModelStruct(moleculeId);
				setMoleculeStructure(new Molecule(fetchedMoleculeStruct));
			} catch (error) {
				Alert.alert("Error", error.message);
			}
		};

		fetchMoleculeData();
	}, []);

	// loading finished when all data is fetched
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
			setIsCapturing(true);
			if (permissionResponse.status !== "granted")
				await requestPermission();
			const localUri = await captureRef(imageRef, {handleGLSurfaceViewOnAndroid:true});
			await MediaLibrary.saveToLibraryAsync(localUri);
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
					<Skeleton height={40} {...skeletonProps}>
						<GoBack containerStyles="bg-white" margin="mb-0" />
					</Skeleton>

					{
						isCapturing &&
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
					}

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
									className="w-[18px] h-[18px] absolute"
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
