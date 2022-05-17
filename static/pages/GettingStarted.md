# Getting Started

# Hilbert Concepts

Hilbert uses electromagnetic fields to cool,  trap,  manipulate and measure individual cesium atoms to create a gate-based quantum computer. The nominal operating temperature of Hilbert’s qubits is less than 10μK, which is more than one thousand times colder than temperatures achieved by pulse tube dilution refrigerators. Hilbert achieves these temperatures without cryogenics, liquid nitrogen, helium isotopes or pumping.In 1967 the second was defined to be 9,192,631,770 cycles of the radiation produced by the transition between the two hyperfine ground states of cesium.  These two states are known  as  the  clock  states  of  cesium  and  are  the  computational  basis  states  for  each  ofHilbert’s qubits.Neutral cesium atoms experience no Coulomb repulsion. This neutrality permits Hilbert to pack atoms in a two dimensional grid with spacing of just a few microns between sites.It also allows a clear scaling path to a qubit register containing hundreds of thousands of qubits.The very small spacing between atoms enables use of the Rydberg mechanism, in which the valence electron of the cesium atom is excited to a large principal quantum number, to implement interactions between qubits.  The Rydberg mechanism allows for interactions over a distance which is large compared to the lattice spacing.  In future generations of Hilbert it will be possible to implement gates that entangle qubits which are not neighbors.This will allow for both a larger connectivity footprint for two-qubit gates and also the possibility of gates that entangle more than just two qubits at a time.

##  Laser Cooling and Trapping
Starting in the 1970’s atomic physicists began to explore the potential for cooling atoms with lasers. Atoms selectively absorb and emit light at particular frequencies corresponding to transitions between different atomic states.  Lasers tuned to these frequencies provide photons which are absorbed by atoms, imparting small amounts of momentum and energy to the atom.  Atoms which are moving with respect to a stationary laser see light whose frequency has been Doppler shifted from the frequency emitted in the laser’s rest frame.These  effects  allow  Hilbert  to  slow  and  cool  atoms  with  lasers.   This  slowing  is  called optical molasses.Once slowed,  atoms can be trapped within a configuration of magnetic fields which interact with the energy levels of the atom. This combination of magnetic fields and lasers can both cool and trap atoms in a magneto-optic trap or MOT. The first stage of Hilbert uses two stages of MOTs to trap and cool cesium atoms in preparation for loading them into an array.

##  Building the Atom Array
Atoms, ions and other sufficiently small particles can be manipulated by light fields in one of two ways. Radiation which is tuned to a slightly lower energy than a suitable transition1 in the particle forms an attractive potential.  This is called a red tweezer since light at the red end of the visual spectrum has lower energy. Particles can be confined in a volume near the maximum of the tweezer light field.  When the tweezer is moved, a particle trapped in the potential well of the tweezer moves with it.Alternatively,  light  of  slightly  higher  frequency  than  the  transition  frequency  repels particles. By forming a cage of several light beams, each of which is detuned to a slightly higher energy, one can trap particles in the interstitial space between beams.  This trap is called a blue bottle because the higher energy light is at the blue end of the visual spectrum.After loading the MOT with cesium atoms, Hilbert uses blue-detuned lasers to form a set of two dimensional grid cells, trapping the cesium atoms.  Collisions between multiple cesium atoms in each grid cell remove pairs of atoms until either zero or one atoms are left in each cell. Red tweezers then rearrange the atoms in the grid to fill empty cells. The result is a fully filled two dimensional grid of cesium atoms which has a spacing between grid cells of a few microns.

## Turning Atoms into Qubits
As simple as they are, atoms still have a large number of quantum states available to them.So that the cesium atoms can be thought of as qubits, additional work is required to  ensure that each cesium atom in each grid cell is in the same well-defined state.  This is accomplished via optical pumping.   The result of this pumping is that all atoms are in one of the two clock states of cesium, which we can identify with the computational basis state labelled|0〉. The other clock state is identified with the computational basis state|1〉.Hilbert implements single-qubit gates, global gates and two-qubit entangling gates via combinations of laser and microwave pulses.  Single-qubit gates perform rotations in theBloch sphere localized to a single qubit, and global gates do the same while addressing all qubits simultaneously.  Two-qubit entangling gates can be executed between any pair of  qubits  that  are  nearest  neighbors  in  either  of  the  two  dimensions  spanning  the  grid.Measuring the final state of the qubit array is accomplished by shining light on the qubits,collecting the scattered photons, and processing the resulting image.Coherence times for Hilbert are long compared to gate times.  Single qubit gates and global gates require microwave pulses and take around 25 $\mu$sec.  CZ gates are mediated entirely by lasers and are thus much faster,  operating in the sub-microsecond range.   In contrast, T1 times are around one second and T2* times are around 5 msec.

## Hilbert's Native Gates
The $\text{R}$ gate is specified by two angles $\varphi$ and $\theta$. $\varphi$ measures the angle from the x axis to the rotation axis in the x-y plane, and $\theta$ is the rotation about that axis.  The $\text{R}_x$ and $\text{R}_y$ are special cases of the general $\text{R}$ gate.  The $\text{R}$ gate can be applied in a site selective manner to rotate a single qubit or globally to rotate all qubits in the array in the same way simultaneously.  Note that a Hadamard gate can be created from Rx and Ry.  Using the global form of the $\text{R}$ gate to implement Rx and Ry, we can build a global Hadamard to be applied to all qubits via two global $\text{R}$ gates.
:::Figure (BlochSphere|xl|Row)

![](static/assets/img/GettingStarted/BlochSphere.png "Hilbert's native gates as actions to the Bloch Sphere"))

:::


A rotation on the block sphere about a vector $\vec{v}$ an angle $\theta$ can be represented as:
$$
\text{R}_{\vec{v}}(\theta) =e^{-\theta \vec{v}\cdot\vec{\sigma}/2}
$$
Where $\vec\sigma$ represents a vector of three Pauli matrices" 
$$
\vec \sigma = \hat x \sigma_x  + \hat y \sigma_y + \hat z \sigma_z
$$

For the $\text{R}$ gate the vector $\vec{v}$ is in the $xy-$ plane so we can parameterize it by an angle $\varphi$:
$$
\vec v= \hat x \cos \varphi+ \hat y \sin \varphi
$$

When substituted into the rotation relation and the dot product is applied between $\vec{v}$ and 



# Download and Install Programming Tools
The ColdQuanta software library supports all three major operating systems and Python 3.Jupyter notebooks are supported in all major HTML browsers.  We recommend following the instructions below which will establish a separate virtual environment and also install all needed dependencies. These dependencies include the correct version of IBM’s Qiskit,which is supported by our library, as well as packages needed to display graphical elements such as quantum circuits in a Jupyter notebook.If you already have an existing installation of Qiskit, we still recommend following the instructions below rather than attempting to install the ColdQuanta software library into your existing environment. This is because the requirements associated with ColdQuanta’s software package will cause a new environment to include a supported version of Qiskit.Download the zip file and unzip it to your desired directory destination.  Then follow the instructions below which are specific for your operating system.

## Linux
These instructions were created using an Ubuntu Linux installation; any Linux distribution should be very similar although with some, e.g., Red Hat, you may need to perform some prefatory sudo commands to enable installation and package distribution access. 

:::Instructions
1. Create a protected, virtual environment as follows (this ensures that this installation is separate from other Python environments you might have on your machine): 
`python3 -m venv coldquanta_toolkit`
2. Activate the new Python environment:
`source coldquanta_toolkit/bin/activate`

3. Update pip to the latest version available (the package installer for Python):
`pip install -U pip`
4. Install the ColdQuanta tools pip package.  
`pip install coldquanta_qiskit_tools-0.0.3-py3-none-any.whl`
:::Note ()
Note: This will automatically install the appropriate version of the Qiskit library that is compatible with our toolset.
:::

5. Install other dependencies needed to create Jupyter notebooks with plots:
`pip install notebook matplotlib`

6. To use the Jupyter notebook, you will also need to issue this command:
`pip install pylatexenc`

7. Copy  the  Jupyter  notebook  file  ending  with  suffix  .ipynb  into  your  current  working directory and then issue this command:
`jupyter notebook`

Your web browser should launch and show the contents of the current working directory. Click on the Jupyter notebook to display it and use shift-enter to execute cell contents and proceed to the next cell.

:::