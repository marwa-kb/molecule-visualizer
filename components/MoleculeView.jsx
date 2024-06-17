import { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity, Image, Text } from "react-native";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import MoleculeScene from "./MoleculeScene";
import Molecule from "../classes/Molecule";
import icons from "../constants/icons";
import style from "../constants/style";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

const viewSize1 = "w-[100%] min-h-[550px] h-[70%] rounded-[20px]";
const viewSize2 = "absolute w-[100vw] h-[100vh] z-40 bottom-0 rounded-0";

const MoleculeView = (props) => {
	console.log("in molecule view")
	const molecule = props.moleculeStructure;
	const [viewSize, setViewSize] = useState(viewSize1);
	const [showAtomDetails, setShowAtomDetails] = useState({
		show: false,
		atom: null
	});

	useEffect(() => {
		return (() => NavigationBar.setBackgroundColorAsync("#E6F5E0"));
	}, []);

	const handleViewSizeChange = () => {
		const currentSize = viewSize;
		if (currentSize === viewSize1)
		{
			setViewSize(viewSize2);
			setStatusBarBackgroundColor("#FFFFFF", true);
			setTimeout(() => NavigationBar.setBackgroundColorAsync("#FFFFFF"), 100);
		}
		else
		{
			setViewSize(viewSize1);
			setStatusBarBackgroundColor("#E6F5E0", true);
			setTimeout(() => NavigationBar.setBackgroundColorAsync("#E6F5E0"), 100);
		}
	}

	return (
		<View
			className={`${viewSize} bg-white flex flex-column pt-4 pb-2 px-1`}
			style={style.boxShadow}
		>
			<View className="flex flex-row justify-between ml-4">
				{
					showAtomDetails.show &&
					<Text>Selected atom: {showAtomDetails.atom}</Text>
				}
				<TouchableOpacity
					className=" flex items-end w-8 h-8 ml-auto mr-4"
					onPress={handleViewSizeChange}
				>
					<Image
						source={viewSize === viewSize1 ? icons.expand : icons.collapse}
						className={viewSize === viewSize1 ? "w-4 h-4" : "w-5 h-5"}
					/>
				</TouchableOpacity>
			</View>
			<ViroARSceneNavigator
				initialScene={{ scene: MoleculeScene }}
				viroAppProps={{
					molecule: molecule,
					showAtomDetails: showAtomDetails,
					setShowAtomDetails: setShowAtomDetails
				}}
			/>
		</View>
	);
};

export default MoleculeView;
