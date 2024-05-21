import { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { Viro360Image, Viro3DObject, Viro3DSceneNavigator, ViroAmbientLight, ViroAnimations, ViroBox, ViroCamera, ViroController, ViroLightingEnvironment, ViroMaterials, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroPolyline, ViroScene, ViroSceneNavigator, ViroSkyBox, ViroSphere, ViroSpinner, ViroText } from "@viro-community/react-viro";
import Molecule from "../classes/Molecule";
import style from "../constants/style";
import "../constants/materials";
import icons from "../constants/icons";
import { useRotate } from "../utils/useRotate";

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	// const rotateX = props.sceneNavigator.viroAppProps.rotateX
	const [isLoading, setIsLoading] = useState(true);
	const [camPos, setCamPos] = useState([0, 0, 10]);

	useEffect(() => {
		if (molecule)
			setTimeout(() => setIsLoading(false), 1000);
	}, [molecule]);
	
	const atoms = molecule?.atoms.map((atom) => {
		return (<ViroSphere
					radius={.3}
					key={atom.id}
					materials={atom.element}
					position={atom.coordinates}
					onClick={(e) => {
						console.log(e)
						const x = e[0];
						const y = e[1];
						const z = e[2];
						onTouchStart(x)
						setCamPos([x, y, z + 3]);
					}}
				/>);
	});

	const bonds = molecule?.getBondsCoords().map((bond, id) => {
		return (<ViroPolyline
					key={id}
					points={[
						bond[0],
						bond[1],
					]}
					thickness={.2}
					materials={"bond"}
				/>);
	});

	// const { onTouchStart, onTouchEnd } = useRotate(onSwipeLeft, onSwipeRight, .5);

	// const onSwipeLeft = () => {
	// 	console.log("swipe left");
	// };

	// const onSwipeRight = () => {
	// 	console.log("swipe right");
	// };

	// const handlePressState = (state, position, source) => {
	// 	// console.log("position = ", position);
	// 	if (state == 1)
	// 		onTouchStart(position);
	// 	else if (state == 2)
	// 		onTouchEnd(position);
	// 	// else if (state == 3)
	// 	// 	console.log("both")
	// };

	return (
		<ViroScene
			onClick={(e) => console.log("test, ", e)}
			// onClickState={handlePressState}
		>
			<ViroSkyBox color={"#FFFFFF"} />
			{
				!isLoading && molecule ?
					<ViroNode
						animation={{ name: "test", run: true }}
					>
						{/* <ViroOrbitCamera
							position={[0, 0, 0]}
							focalPoint={camPos}
							active={true}
						/> */}
						<ViroCamera
							position={camPos}
							rotation={[0, 0, 0]} 
							active={true}
						/>

			
						<ViroOmniLight
							intensity={300}
							position={[-10, 10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30}
						/>
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
							attenuationEndDistance={30}
						/>
						<ViroOmniLight
							intensity={300}
							position={[10, -10, 1]}
							color={"#FFFFFF"}
							attenuationStartDistance={20}
							attenuationEndDistance={30} />
						{ atoms }
						{ bonds }
					</ViroNode>
				:
					<ViroSpinner
						type="dark"
						position={[0, 0, -5]}
					/>
			}
	  </ViroScene>
	);
}

const screen1 = "h-[70%]";
const screen2 = "absolute w-[99vw] h-[99vh] z-40 bottom-0 m-auto";

const MoleculeView = (props) => {
	const [fileData, setFileData] = useState("");
	const [molecule, setMolecule] = useState(null);

	const [screen, setScreen] = useState(screen1);

	useEffect(() => {
		const getFile = async () => {
			try {
				const file = await fetch(`https://files.rcsb.org/ligands/
											${props.moleculeId[0]}/${props.moleculeId}/
											${props.moleculeId}_ideal.pdb`);
				const res = await file.text();
				// console.log("RES", res)
				setFileData(res);
			} catch (error) {
				Alert.alert("Error", error.message);
			}
		}
		getFile();
	}, []);

	useEffect(() => {
		setMolecule(new Molecule(fileData));
	}, [fileData]);

	// console.log("here molecule: ", molecule)
	const { onTouchStart, onTouchEnd } = useRotate(onSwipeLeft, onSwipeRight, 2)
	const [rotateX, setRotateX] = useState(0);
    function onSwipeLeft(nb){
        console.log('SWIPE_LEFT')
		setRotateX(nb);
    }

    function onSwipeRight(nb){
        console.log('SWIPE_RIGHT')
		setRotateX(nb);
    }

	return (
		<TouchableOpacity
			className={`${screen} bg-white flex flex-column py-4 px-4`}
			style={style.boxShadow}
			activeOpacity={1}
			onPressIn={onTouchStart}
			onPressOut={onTouchEnd}
		>
			<TouchableOpacity
				className=" flex items-end w-8 h-8 ml-auto"
				onPress={() => setScreen(prev => prev === screen1 ? screen2 : screen1)}
			>
				<Image
					source={screen === screen1 ? icons.expand : icons.collapse}
					className={screen === screen1 ? "w-4 h-4" : "w-5 h-5"}
				/>
			</TouchableOpacity>
			<Viro3DSceneNavigator
				initialScene={{ scene: MoleculeScene }}
				viroAppProps={{ molecule: molecule }}
			/>
		</TouchableOpacity>
	);
};

export default MoleculeView;
