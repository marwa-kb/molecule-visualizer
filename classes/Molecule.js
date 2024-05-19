class Atom {
	constructor(line) {
		const data = line.split(/\s+/);
		this.element = data[data.length - 1];
		this.snb = Number(data[1]);
		this.id = data[2];
		this.coordinates = [Number(data[6]), Number(data[7]), Number(data[8])];
		// console.log("atom, " , data);
		// console.log("atom, " , this.snb, " " , this.id, " ", this.element, " ", this.coordinates);
	}
}

class Conect {
	constructor(line) {
		const data = line.split(/\s+/);
		this.snb = Number(data[1]);
		this.bonds = [...data.slice(2).map((nb) => Number(nb))];
		// console.log("conects, " , this.snb, " ", this.bonds);
	}

	// setBond(bond)
	// {
	// 	this.bond = bond;
	// }
}

export default class Molecule {
	constructor(fileContent) {
		// console.log("here in class", this.fileContent)
		this.fileContent = fileContent;
		this.lines = fileContent.split('\n');
		this.atoms = this.setAtoms();
		this.conects = this.setConects();
		// console.log("lines:", this.lines)
	}

	setAtoms() {
		let atoms = [];
		for (let line of this.lines) {
			if (line.startsWith("ATOM"))
				atoms.push(new Atom(line));
			else
				break;
		}
		return (atoms);
	}

	setConects() {
		let conects = [];
		for (let line of this.lines) {
			if (line.startsWith("CONECT"))
				conects.push(new Conect(line));
		}
		// for (let conect of conects)
		// {
		// 	if (conect.bond.length > 2)
		// 	{
		// 		let newArr = [];
		// 		let i = conect.bond.length;
		// 		while (i > 2)
		// 		{
		// 			const newBond
		// 			const newConect = new Conect(snb, conect.bond);

		// 		}
		// 	}
		// }
		return (conects);
	}

	getAtomCoords(main, others) {
		// console.log("atoms = ", atoms , " main = ", main, ", others = ", others)
		let mainAtom;
		let otherAtoms = [];
		for (let atom of this.atoms)
		{
			if (atom.snb === main)
				mainAtom = atom.coordinates;
			else
			{
				for (let item of others)
				{
					if (atom.snb === item)
						otherAtoms.push(atom.coordinates);
				}
			}
		}
		return ({ mainAtom, otherAtoms });
	}

	getBondsCoords() {
		let bonds = [];
		for (let conect of this.conects)
		{
			const coords = this.getAtomCoords(conect.snb, conect.bonds);
			for (let other of coords.otherAtoms)
			{
				const data = [coords.mainAtom, other];
				bonds.push(data);
			}
		}
		return (bonds);
	}
}