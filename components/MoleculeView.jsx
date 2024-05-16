import { Viro360Image, Viro3DObject, Viro3DSceneNavigator, ViroAmbientLight, ViroAnimations, ViroBox, ViroLightingEnvironment, ViroMaterials, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroScene, ViroSceneNavigator, ViroSphere, ViroText } from "@viro-community/react-viro";
import { View, Text, Alert, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

ViroMaterials.createMaterials({
	hydrogen: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	carbon: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#909090"
	},
	nitrogen: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#3050F8"
	},
	oxygen: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FF0D0D"
	},
	fluoride: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#90E050"
	},
	phosphorus: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FF8000"
	},
	sphereA: {
		roughness: 0.0,
		metalness: 1.0,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	sphereB: {
		roughness: 0.2,
		metalness: 1.0,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	sphereC: {
		roughness: 0.5,
		metalness: 1.0,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	sphereD: {
		roughness: 0.0,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	sphereE: {
		roughness: 0.2,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
	sphereF: {
		roughness: 0.5,
		metalness: 0.3,
		lightingModel: "PBR",
		diffuseColor: "#FFFFFF"
	},
});

ViroAnimations.registerAnimations({
	loopRotate:{
		properties:{
			rotateY: "+=45"
		}, 
		duration:1000
		},
});

const TestScene = () => {
	return (
		<ViroScene>
			<Viro360Image
				source={require("../assets/white_bg.png")} 
			/>
			<ViroLightingEnvironment source={require('../assets/test.jpg')}/>
			<ViroOmniLight
				intensity={300}
				position={[-10, 10, 1]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30} />
			<ViroOmniLight
				intensity={300}
				position={[10, 10, 1]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30} />
			<ViroOmniLight
				intensity={300}
				position={[-10, -10, 1]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30} />
			<ViroOmniLight
				intensity={300}
				position={[10, -10, 1]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30} />
	
			<ViroSphere
				position={[-3, 6, -9]}
				radius={1}
				materials={"hydrogen"}
			/>
			<ViroSphere
				position={[0, 6, -9]}
				radius={1}
				materials={"carbon"}
			/>
			<ViroSphere
				position={[3, 6, -9]}
				radius={1}
				materials={"oxygen"}
			/>
			<ViroSphere
				position={[-3, 2, -9]}
				radius={1}
				materials={"nitrogen"}
			/>
			<ViroSphere
				position={[0, 2, -9]}
				radius={1}
				materials={"fluoride"}
			/>
			<ViroSphere
				position={[3, 2, -9]}
				radius={1}
				materials={"phosphorus"}
			/>
			<ViroSphere
				position={[-3, -2, -9]}
				radius={1}
				materials={"sphereA"}
			/>
			<ViroSphere
				position={[0, -2, -9]}
				radius={1}
				materials={"sphereB"}
			/>
			<ViroSphere
				position={[3, -2, -9]}
				radius={1}
				materials={"sphereC"}
			/>
			<ViroSphere
				position={[-3, -6, -9]}
				radius={1}
				materials={"sphereD"}
			/>
			<ViroSphere
				position={[0, -6, -9]}
				radius={1}
				materials={"sphereF"}
			/>
			<ViroSphere
				position={[3, -6, -9]}
				radius={1}
				materials={"sphereE"}
			/>
	  </ViroScene>
	);
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
			<Viro3DSceneNavigator initialScene={{scene :TestScene}} style={localStyles.arView}/>
		</View>
	);
};

const localStyles = StyleSheet.create({
	flex : {
	  flex : 1,
	},
	arView: {
	  flex:1,
	},
	listView: {
	  flex:1,
	  height : 72,
	  width : '100%',
	  position : 'absolute',
	  justifyContent: 'center',
	  alignItems: 'center',
	  bottom : 0,
	  backgroundColor: '#000000aa'
	},
	topPhotoBar: {
	  backgroundColor: '#000000aa',
	  height : 50,
	  width : '100%',
	  position : 'absolute',
	  top : 0,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	doneText: {
	  textAlign: 'right',
	  color: '#d6d6d6',
	  fontWeight: 'bold',
	  fontFamily: 'Helvetica Neue',
	  fontSize: 16,
	  marginRight:10,
	  backgroundColor: '#00000000',
	  flex:1,
	},
	photosText: {
	  textAlign: 'center',
	  color: '#d6d6d6',
	  fontFamily: 'Helvetica Neue',
	  fontSize: 16,
	  backgroundColor: '#00000000',
	  flex:1,
	},
	previewScreenButtons: {
	  height: 30,
	  width: 30,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	previewScreenButtonsAddPic: {
	  height: 32,
	  width: 37,
	},
	previewScreenButtonClose: {
	  position:'absolute',
	  height: 23,
	  width: 23,
	},
	previewScreenButtonShare: {
	  position:'absolute',
	  height: 35,
	  width: 35,
	},
	screenIcon: {
	  position : 'absolute',
	  height: 58,
	  width: 58,
	},
	  recordIcon: {
	  position : 'absolute',
	  height: 58,
	  width: 58,
	  top: 10,
	  left: 10,
	},
	cameraIcon: {
	  position: 'absolute',
	  height: 30,
	  width: 30,
	  top: 25,
	  left: 25,
	},
	recordingTimeText: {
	  textAlign: 'center',
	  color: '#d6d6d6',
	  fontFamily: 'Helvetica Neue',
	  fontSize:16,
	},
	previewPlayButtonContainer: {
	  position: 'absolute',
	  left:0,
	  right:0,
	  height:90,
	},
	previewPlayButton : {
	  position: 'absolute',
	  height : 90,
	  width : 90,
	  left:0,
	  alignSelf: 'center',
	},
	previewSavedSuccess : {
	  position: 'absolute',
	  height : 115,
	  width: 100,
	  alignSelf: 'center',
	},
	shareScreenContainerTransparent: {
	  position : 'absolute',
	  flex:1,
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0,
	  alignItems:'center',
	  backgroundColor : '#000000',
	},
	backgroundVideo: {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0,
	},
	backgroundImage: {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0,
	  resizeMode:'stretch',
	},
	photosSelectorStyle : {
	  position: 'absolute',
	  width: '100%',
	  height : '40%',
	  bottom : 0
	}
  });

export default MoleculeView;
