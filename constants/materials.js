import { ViroAnimations, ViroMaterials } from "@viro-community/react-viro";

const roughness = 0.6;
const metalness = 0.5;
const lightingModel = "PBR";

ViroAnimations.registerAnimations({
	test: {
		properties: {
			rotateX: -5,
			rotateY: -5,
		},
		easing: "EaseInEaseOut",
		duration: 2000,
	}
});

ViroMaterials.createMaterials({
	sphereA: {
		roughness: 0.0,
		metalness: 1.0,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	sphereB: {
		roughness: 0.2,
		metalness: 1.0,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	sphereC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	sphereD: {
		roughness: 0.0,
		metalness: 0.3,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	sphereE: {
		roughness: 0.2,
		metalness: 0.3,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	sphereF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	bond: {
		roughness: 1.0,
		metalness: 1.0,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	H: {
		roughness: 0.6,
		metalness: 0.1,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFFF"
	},
	D: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFC0"
	},
	T: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFA0"
	},
	HE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D9FFFF"
	},
	LI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#CC80FF"
	},
	BE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C2FF00"
	},
	B: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFB5B5"
	},
	C: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#303030"
	},
	C13: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#505050"
	},
	C14: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#404040"
	},
	N: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3050F8"
	},
	N15: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#105050"
	},
	O: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FF0D0D"
	},
	F: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#90E050"
	},
	NE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B3E3F5"
	},
	NA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#AB5CF2"
	},
	MG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8AFF00"
	},
	AL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BFA6A6"
	},
	SI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#F0C8A0"
	},
	P: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FF8000"
	},
	S: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFF30"
	},
	CL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1FF01F"
	},
	AR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#80D1E3"
	},
	K: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8F40D4"
	},
	CA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3DFF00"
	},
	SC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E6E6E6"
	},
	TI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BFC2C7"
	},
	V: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A6A6AB"
	},
	CR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8A99C7"
	},
	MN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9C7AC7"
	},
	FE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E06633"
	},
	CO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#F090A0"
	},
	NI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#50D050"
	},
	CU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C88033"
	},
	ZN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#7D80B0"
	},
	GA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C28F8F"
	},
	GE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#668F8F"
	},
	AS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BD80E3"
	},
	SE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFA100"
	},
	BR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A62929"
	},
	KR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#5CB8D1"
	},
	RB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#702EB0"
	},
	SR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00FF00"
	},
	Y: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#94FFFF"
	},
	ZR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#94E0E0"
	},
	NB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#73C2C9"
	},
	MO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#54B5B5"
	},
	TC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3B9E9E"
	},
	RU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#248F8F"
	},
	RH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#0A7D8C"
	},
	PD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#006985"
	},
	AG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C0C0C0"
	},
	CD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFD98F"
	},
	IN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A67573"
	},
	SN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#668080"
	},
	SB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9E63B5"
	},
	TE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D47A00"
	},
	I: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#940094"
	},
	XE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#429EB0"
	},
	CS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#57178F"
	},
	BA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00C900"
	},
	LA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#70D4FF"
	},
	CE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFC7"
	},
	PR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D9FFC7"
	},
	ND: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C7FFC7"
	},
	PM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A3FFC7"
	},
	SM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8FFFC7"
	},
	EU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#61FFC7"
	},
	GD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#45FFC7"
	},
	TB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#30FFC7"
	},
	DY: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1FFFC7"
	},
	HO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00FF9C"
	},
	ER: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00E675"
	},
	TM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00D452"
	},
	YB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00BF38"
	},
	LU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00AB24"
	},
	HF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4DC2FF"
	},
	TA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4DA6FF"
	},
	W: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#2194D6"
	},
	RE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#267DAB"
	},
	OS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#266696"
	},
	IR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#175487"
	},
	PT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D0D0E0"
	},
	AU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFD123"
	},
	HG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B8B8D0"
	},
	TL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A6544D"
	},
	PB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#575961"
	},
	BI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9E4FB5"
	},
	PO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#AB5C00"
	},
	AT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#754F45"
	},
	RN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#428296"
	},
	FR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#420066"
	},
	RA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#007D00"
	},
	AC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#70ABFA"
	},
	TH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00BAFF"
	},
	PA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00A1FF"
	},
	U: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#008FFF"
	},
	NP: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#0080FF"
	},
	PU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#006BFF"
	},
	AM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#545CF2"
	},
	CM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#785CE3"
	},
	BK: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8A4FE3"
	},
	CF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A136D4"
	},
	ES: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B31FD4"
	},
	FM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B31FBA"
	},
	MD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B30DA6"
	},
	NO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BD0D87"
	},
	LR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C70066"
	},
	RF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#CC0059"
	},
	DB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D1004F"
	},
	SG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D90045"
	},
	BH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E00038"
	},
	HS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E6002E"
	},
	MT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#EB0026"
	}
});