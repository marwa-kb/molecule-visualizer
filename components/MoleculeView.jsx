import { memo, useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import MoleculeScene from "./MoleculeScene";
import icons from "../constants/icons";
import style from "../constants/style";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import Constants from "expo-constants";

const MoleculeView = (props) => {
	console.log("== VIEW")
	const molecule = props.moleculeStructure;

	const [selectedAtom, setSelectedAtom] = useState(null);
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const viewRef = useRef();
	const viewSize1 = "w-[100%] min-h-[550px] h-[70%] rounded-[20px]";
	const viewSize2 = "absolute w-[100vw] h-[101vh] rounded-0 z-10 m-auto";
	const [viewSize, setViewSize] = useState(viewSize1);

	useEffect(() => {
		return (() => NavigationBar.setBackgroundColorAsync("#E6F5E0"));
	}, []);

	const handleViewSizeChange = () => {
		viewRef.current.measure((x, y, width, height, pageX, pageY) => {
			setPosition({ x: parseInt(pageX), y: parseInt(pageY) });
		});
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
	};

	return (
		<View
			className={`${viewSize} bg-white flex flex-column pt-4 pb-2 px-1`}
			style={{
				...style.boxShadow,
				top: viewSize === viewSize1 ? 0 : -position.y + Constants.statusBarHeight,
				bottom: viewSize === viewSize1 ? 0 : -position.y + Constants.statusBarHeight,
				left: viewSize === viewSize1 ? 0 : -position.x,
			}}
			ref={viewRef}
		>
			<View className="flex flex-row justify-between ml-4">
				{selectedAtom && (
					<Text className="font-pregular text-sm">Selected atom: {selectedAtom.element}</Text>
				)}
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
					selectedAtom: selectedAtom,
					setSelectedAtom: setSelectedAtom,
				}}
			/>
		</View>
	);
};

export default memo(MoleculeView);
