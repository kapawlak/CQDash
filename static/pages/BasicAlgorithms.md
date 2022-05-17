# Basic Algorithms

:::Intro (Algorithmic Building Blocks on Hilbert)
A great place to start learning about Quantum Computing is through the implementation of the basic algorithmic building blocks build through the last few decades
:::

---
# Quantum Teleportation

Quantum teleportation is a technique for transferring quantum information from a sender at one location to a receiver some distance away. While teleportation is commonly portrayed in science fiction as a means to transfer physical objects from one location to the next, quantum teleportation only transfers quantum information. The sender does not have to know the particular quantum state being transferred. Moreover, the location of the recipient can be unknown, but classical information needs to be sent from sender to receiver to complete the teleportation. Because classical information needs to be sent, teleportation can not occur faster than the speed of light.

One of the first scientific articles to investigate quantum teleportation is "Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels"[1] published by C. H. Bennett, G. Brassard, C. Crépeau, R. Jozsa, A. Peres, and W. K. Wootters in 1993, in which they used dual communication methods to send/receive quantum information. It was experimentally realized in 1997 by two research groups, led by Sandu Popescu and Anton Zeilinger, respectively.[2][3]

Experimental determinations[4][5] of quantum teleportation have been made in information content - including photons, atoms, electrons, and superconducting circuits - as well as distance with 1,400 km (870 mi) being the longest distance of successful teleportation by the group of Jian-Wei Pan using the Micius satellite for space-based quantum teleportation.

## The Algorithm 
In matters relating to quantum information theory, it is convenient to work with the simplest possible unit of information: the two-state system of the qubit. The qubit functions as the quantum analog of the classic computational part, the bit, as it can have a measurement value of both a 0 and a 1, whereas the classical bit can only be measured as a 0 or a 1. The quantum two-state system seeks to transfer quantum information from one location to another location without losing the information and preserving the quality of this information. This process involves moving the information between carriers and not movement of the actual carriers, similar to the traditional process of communications, as two parties remain stationary while the information (digital media, voice, text, etc.) is being transferred, contrary to the implications of the word "teleport." The main components needed for teleportation include a sender, the information (a qubit), a traditional channel, a quantum channel, and a receiver. An interesting fact is that the sender does not need to know the exact contents of the information that is being sent. The measurement postulate of quantum mechanics—when a measurement is made upon a quantum state, any subsequent measurements will "collapse" or that the observed state will be lost—creates an imposition within teleportation: if a sender makes a measurement on their information, the state could collapse when the receiver obtains the information since the state has changed from when the sender made the initial measurement.


# The Deutsch-Jozsa Algorithm

The Deutsch-Jozsa algorithm, first introduced in Reference [1], was the first example of a quantum algorithm that performs better than the best classical algorithm. It showed that there can be advantages to using a quantum computer as a computational tool for a specific problem.



# Hamiltonian Simulation



# Phase Estimation

You probably recall that the time rate of change in (linear) velocity is *acceleration*. Similarly, the time rate of change in *angular velocity* is, of course, **angular acceleration**. This is denoted ($\rm\frac{\Delta\omega}{\Delta t}$). It has the units $\rm rad/ s^2$.

:::Definition (Angular Acceleration)
**Angular Acceleration** is the time rate of change of angular velocity. It is typically represented with the Greek symbol $\vec \alpha$.
:::


Note that in the text above, the arrows over the symbols indicate that the quantities they represent are *vectors* &ndash; that is, $\vec\theta$, $\vec\omega$ and $\vec\alpha$ have both magnitude and direction. (It is also common to denote that these quantities are vectors by setting their symbols in **boldface**, as ***&theta;***, ***&omega;*** and ***&alpha;***.) The direction is along the axis of rotation, and the orientation is in the direction in which your right thumb points when you curl the fingers of your right hand in the direction of the rotation. Since it is only the orientation that changes, and since we are not so much concerned with direction, for convenience we will use the scalar forms of the equations in which all these symbols appear.


