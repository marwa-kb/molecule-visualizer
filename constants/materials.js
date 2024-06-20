import { ViroAnimations, ViroMaterials } from "@viro-community/react-viro";

const roughness = 0.6;
const metalness = 0.5;
const lightingModel = "PBR";

ViroAnimations.registerAnimations({
	test: {
		properties: {
			rotateX: -10,
			rotateY: -10,
			// rotateZ: -50,
		},
		easing: "EaseInEaseOut",
		duration: 2000,
	}
});

ViroMaterials.createMaterials({
	bond: {
		roughness: 1.0,
		metalness: 1.0,
		lightingModel: "Constant",
		diffuseColor: "#777777"
	},
	H: {
		roughness: 0.1,
		metalness: 0.1,
		lightingModel: "Lambert",
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
	},
	TR_bond: {
		roughness: 1.0,
		metalness: 1.0,
		lightingModel: "Constant",
		diffuseColor: "#7777771A"
	},
	TR_H: {
		roughness: 0.1,
		metalness: 0.1,
		lightingModel: "Lambert",
		diffuseColor: "#FFFFFF4D"
	},
	TR_D: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFC04D"
	},
	TR_T: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFA04D"
	},
	TR_HE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D9FFFF4D"
	},
	TR_LI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#CC80FF4D"
	},
	TR_BE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C2FF004D"
	},
	TR_B: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFB5B54D"
	},
	TR_C: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3030304D"
	},
	TR_C13: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#5050504D"
	},
	TR_C14: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4040404D"
	},
	TR_N: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3050F84D"
	},
	TR_N15: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1050504D"
	},
	TR_O: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FF0D0D4D"
	},
	TR_F: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#90E0504D"
	},
	TR_NE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B3E3F54D"
	},
	TR_NA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#AB5CF24D"
	},
	TR_MG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8AFF004D"
	},
	TR_AL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BFA6A64D"
	},
	TR_SI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#F0C8A04D"
	},
	TR_P: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FF80004D"
	},
	TR_S: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFF304D"
	},
	TR_CL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1FF01F4D"
	},
	TR_AR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#80D1E34D"
	},
	TR_K: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8F40D44D"
	},
	TR_CA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3DFF004D"
	},
	TR_SC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E6E6E64D"
	},
	TR_TI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BFC2C74D"
	},
	TR_V: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A6A6AB4D"
	},
	TR_CR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8A99C74D"
	},
	TR_MN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9C7AC74D"
	},
	TR_FE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E066334D"
	},
	TR_CO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#F090A04D"
	},
	TR_NI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#50D0504D"
	},
	TR_CU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C880334D"
	},
	TR_ZN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#7D80B04D"
	},
	TR_GA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C28F8F4D"
	},
	TR_GE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#668F8F4D"
	},
	TR_AS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BD80E34D"
	},
	TR_SE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFA1004D"
	},
	TR_BR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A629294D"
	},
	TR_KR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#5CB8D14D"
	},
	TR_RB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#702EB04D"
	},
	TR_SR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00FF004D"
	},
	TR_Y: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#94FFFF4D"
	},
	TR_ZR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#94E0E04D"
	},
	TR_NB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#73C2C94D"
	},
	TR_MO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#54B5B54D"
	},
	TR_TC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#3B9E9E4D"
	},
	TR_RU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#248F8F4D"
	},
	TR_RH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#0A7D8C4D"
	},
	TR_PD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#0069854D"
	},
	TR_AG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C0C0C04D"
	},
	TR_CD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFD98F4D"
	},
	TR_IN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A675734D"
	},
	TR_SN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#6680804D"
	},
	TR_SB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9E63B54D"
	},
	TR_TE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D47A004D"
	},
	TR_I: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9400944D"
	},
	TR_XE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#429EB04D"
	},
	TR_CS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#57178F4D"
	},
	TR_BA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00C9004D"
	},
	TR_LA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#70D4FF4D"
	},
	TR_CE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFFFC74D"
	},
	TR_PR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D9FFC74D"
	},
	TR_ND: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C7FFC74D"
	},
	TR_PM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A3FFC74D"
	},
	TR_SM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8FFFC74D"
	},
	TR_EU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#61FFC74D"
	},
	TR_GD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#45FFC74D"
	},
	TR_TB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#30FFC74D"
	},
	TR_DY: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1FFFC74D"
	},
	TR_HO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00FF9C4D"
	},
	TR_ER: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00E6754D"
	},
	TR_TM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00D4524D"
	},
	TR_YB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00BF384D"
	},
	TR_LU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00AB244D"
	},
	TR_HF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4DC2FF4D"
	},
	TR_TA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4DA6FF4D"
	},
	TR_W: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#2194D64D"
	},
	TR_RE: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#267DAB4D"
	},
	TR_OS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#2666964D"
	},
	TR_IR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#1754874D"
	},
	TR_PT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D0D0E04D"
	},
	TR_AU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#FFD1234D"
	},
	TR_HG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B8B8D04D"
	},
	TR_TL: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A6544D4D"
	},
	TR_PB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#5759614D"
	},
	TR_BI: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#9E4FB54D"
	},
	TR_PO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#AB5C004D"
	},
	TR_AT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#754F454D"
	},
	TR_RN: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4282964D"
	},
	TR_FR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#4200664D"
	},
	TR_RA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#007D004D"
	},
	TR_AC: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#70ABFA4D"
	},
	TR_TH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00BAFF4D"
	},
	TR_PA: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#00A1FF4D"
	},
	TR_U: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#008FFF4D"
	},
	TR_NP: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#0080FF4D"
	},
	TR_PU: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#006BFF4D"
	},
	TR_AM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#545CF24D"
	},
	TR_CM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#785CE34D"
	},
	TR_BK: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#8A4FE34D"
	},
	TR_CF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#A136D44D"
	},
	TR_ES: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B31FD44D"
	},
	TR_FM: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B31FBA4D"
	},
	TR_MD: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#B30DA64D"
	},
	TR_NO: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#BD0D874D"
	},
	TR_LR: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#C700664D"
	},
	TR_RF: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#CC00594D"
	},
	TR_DB: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D1004F4D"
	},
	TR_SG: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#D900454D"
	},
	TR_BH: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E000384D"
	},
	TR_HS: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#E6002E4D"
	},
	TR_MT: {
		roughness: roughness,
		metalness: metalness,
		lightingModel: lightingModel,
		diffuseColor: "#EB00264D"
	}
});