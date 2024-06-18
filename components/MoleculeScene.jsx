import { useEffect, useState } from "react";
import { ViroSkyBox, ViroNode, ViroOmniLight, ViroOrbitCamera, ViroSphere, ViroPolyline, ViroARScene } from "@viro-community/react-viro";
import "../constants/materials";

const MoleculeScene = (props) => {
	const molecule = props.sceneNavigator.viroAppProps.molecule;
	const setShowAtomDetails = props.sceneNavigator.viroAppProps.setShowAtomDetails;
	const [isLoading, setIsLoading] = useState(true);
	const [camPos, setCamPos] = useState([0, 0, 0]);
	const [focalPoint, setFocalPoint] = useState([0, 0, 0]);
	const [moleculeScale, setMoleculeScale] = useState([1, 1, 1]);

	useEffect(() => {
		if (molecule)
		{
			const data = molecule.getExtremums();
			setCamPos([0, 0, data.extremums[5] + data.extremums[1] * 3 + 1]);
			setFocalPoint(data.focalPoint);
			setTimeout(() => setIsLoading(false), 1000);
		}
	}, [molecule]);
	
	const atoms = molecule?.atoms.map((atom) => {
		return (<ViroSphere
					radius={0.3}
					key={atom.id}
					materials={atom.element}
					position={atom.coordinates}
					onClick={(e) => {
						console.log("ATOM: ", e)
						setShowAtomDetails({ show: true, atom: atom.element });
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
					thickness={moleculeScale[0] * 0.2}
					materials={"bond"}
				/>);
	});

	const scaleMolecule = (pinchState, scaleFactor) => {
		console.log("pinching: pinchState = ", pinchState, ", scaleFactor = ", scaleFactor)
		if (pinchState === 2)
		{
			const newScale = [
				moleculeScale[0] * scaleFactor,
				moleculeScale[1] * scaleFactor,
				moleculeScale[2] * scaleFactor
			];
			if (newScale[0] > 0.5 && newScale[0] < 5)
				setMoleculeScale(newScale);
		}
	};

	return (
		<ViroARScene
			onClick={() => setShowAtomDetails({ show: false, atom: null })}
		>
			<ViroSkyBox color={"#FFFFFF"} />
			{
				!isLoading && molecule &&
					<>
						<ViroOrbitCamera
							position={camPos}
							focalPoint={focalPoint}
							active={true}
						/>
						<Lights />
						<ViroNode
							scale={moleculeScale}
							onDrag={() => setShowAtomDetails({ show: false, atom: null })}
							onPinch={scaleMolecule}
						>
							{ atoms }
							{ bonds }
						</ViroNode>
					</>
			}
	  </ViroARScene>
	);
};

const Lights = () => {
	return (
		<>
			<ViroOmniLight
				intensity={300}
				position={[10, 10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, -10, -10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, 10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[-10, -10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[10, -10, 10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
			<ViroOmniLight
				intensity={300}
				position={[10, -10, -10]}
				color={"#FFFFFF"}
				attenuationStartDistance={20}
				attenuationEndDistance={30}
			/>
		</>
	);
};

export default MoleculeScene;