import ligands from "./ligands";

export const getMolecule = async (moleculeId) => {
	try {
		const moleculeData = await fetch(`https://data.rcsb.org/rest/v1/core/chemcomp/${moleculeId}`);
		const response = await moleculeData.json();
		return (response);
	} catch (error) {
		throw new Error(error);
	}
}

export const getMolecules = async () => {
	let data = [];
	try {
		console.log("HERE")
		for (let ligand of ligands)
		{
			const moleculeData = await fetch(`https://data.rcsb.org/rest/v1/core/chemcomp/${ligand}`);
			const response = await moleculeData.json();
			// console.log("RESPONSE", response);
			data.push(response);
		}
		// console.log("IN API", data)
		return (data);
	} catch (error) {
		throw new Error(error);
	}
}