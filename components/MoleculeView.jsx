import { Viro3DObject, Viro3DSceneNavigator, ViroBox, ViroScene, ViroSceneNavigator, ViroSphere, ViroText } from "@viro-community/react-viro";
import { View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";

const styles = {
container: {
	width: "100px",
	height: "100px",
	backgroundColor: "red"

}
}

const TestScene = () => {
	return (
		<ViroScene
			onCPress={console.log("pressed")}
			style={styles.container}
		>
		<ViroText
			text="Hello World"
			textAlign="left"
			textAlignVertical="top"
			textLineBreakMode="justify"
			style={{
				fontSize: 20,
				color: "#ffffff",
			}}
			position={[0, 0, -1]}
		/>
	</ViroScene>
	)
}

const MoleculeView = (props) => {
	const [fileData, setFileData] = useState("");

	useEffect(() => {
		const getFile = async () => {
			try {
				const file = await fetch(`https://files.wwpdb.org/pub/pdb/data/monomers/${props.moleculeId}`);
				console.log("FILE", file)				
				const res = await file.text();
				console.log("RES", res)
				setFileData(res);
			} catch (error) {
				Alert.alert("Error", error.message);
			}
		}
		getFile()
	}, []);

	return (
		<View className="h-[70%] bg-white py-4 px-5">
			<Text>MoleculeView: {props.moleculeId}</Text>
			<Viro3DSceneNavigator initialScene={{scene :TestScene}}/>
		</View>
	);
};

export default MoleculeView;
