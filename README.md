# Molecule Visualizer
For this project, I am coding a React Native application that allows visualizing molecules in 3D (_inspired from a 42 project called Swifty Protein_).

#### _[in progress]_
>✅ Search and retrieve PDB files from [ RCSB ](https://www.rcsb.org/)  
✅ Parse PDB file to get coordinates of each atom  
✅ Modelize atoms in 3D and the bonds connecting them together  
🔲 Manage touch gestures to rotate the molecule and zoom in/out  


### Tech
- React Native - _after trying to learn other mobile development languages, and as a ReactJS lover, I can say I am extremely happy that React Native exists_
- Expo - _an open-source framework for apps that run natively on Android, iOS, and the web_
- ViroReact - _a platform for developers to rapidly build native cross platform AR/VR applications using React Native (-> 3D rendering engine)_
- NativeWind - _a super practical and easy way to style your app_


### Explanation
We start from a very large list of 3-letter codes (001, 38D, C7J, ...) that represents ligands (= ions or neutral molecules that bond to a central metal atom or ion).  
After loading these into our app, the user can select or search one of them, and when selecting one we use the RCSB database to retrieve the corresponding PDB file. This file contains all the data needed for modelizing our ligand. We can find the X, Y and Z coordinates of each atom, and the bonds connecting them together. Thanks to that we can create a 3D visualization of the molecule!  
For this, I had to learn how to use the ViroReact library that allows 3D modelisation. Each atom is represented by a "ViroSphere" component, and the bonds are "ViroPolyline" components. These are loaded into a "ViroScene".
> <img src="https://github.com/marwa-kb/molecule-visualizer/assets/68017133/c2b68c01-cfec-4eb4-90bd-3ce0b9b97e2f" width="220"/>  
> <img src="https://github.com/marwa-kb/molecule-visualizer/assets/68017133/bad5bbe3-2a0e-4976-a567-91448e29fcc1" width="220"/>  
> <img src="https://github.com/marwa-kb/molecule-visualizer/assets/68017133/883b6f69-812d-431c-8206-706b7ee33252" width="220"/>  
> <img src="https://github.com/marwa-kb/molecule-visualizer/assets/68017133/559c170d-123f-48ce-a1ce-73fb1f4ea1e7" width="220"/>  
