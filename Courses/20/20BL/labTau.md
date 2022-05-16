# Time Constants, Inductors, and Capacitors

## Introduction: Time varying currents and voltages

Alternating current and voltage plays a large role in our daily lives. The standard US wall socket provides a sinusoidally varying voltage which oscillates 60 times per second. Electronic communication devices - cellphones, radios, routers and satellites - all encode information in some form of time varying electrical signals.

The same analysis used to understand how circuitry responds to alternating currents and voltages is often used in the analysis of other physical systems. Experimenting with capacitors and inductors, and understanding their effects on time-varying signals lays a foundation from which you can approach acoustics, vibrations, electro-magnetism, seismology and a number of other disciplines.
<!-- 
# Part 1: Sinusoidal Waves

:::::::::Activity (sinfunc|Sine waves in the function generator)
1. The most basic form of time varying oscillation is the sine or cosine wave. Set your function generator to “Sine” with a frequency multiplier of $1000$. Set the frequency to $1.5$ kHz. Using the provided BNC cable rout the function generator to channel 1 of the oscilloscope and adjust the time and amplitude reading until you can clearly see a few cycles of the wave.

Measure the time needed for one complete cycle of the wave. This is called one period of the wave and is denoted by the upper case $T$.

:::Equation (fp)
$$
\text{Frequency} = \frac{1}{\text{Period}} = \frac{1}{T}
$$
:::

2. The above equation ([](#Equation-fp)) relates the frequency to the period. Measure the period of this wave on the scope, then compute the frequency.

:::Exercise (pd|1 Point)
What is the percent difference between this frequency value with respect to the value read from the function generator?
:::

3. Varying the frequency makes the alternations happen either more quickly or more slowly. Keep the oscilloscope at the same settings and lower the frequency to $1.2$ $\text{kHz}.

:::Exercise (Tw|1 Point)
What is the period of the wave? What is the corresponding frequency as calculated from the measured period?
:::

4. Varying the amplitude makes the alternations either larger or smaller.

:::Exercise (ppv|1 Point)
What is the peak to peak voltage of the sine wave currently on your scope?
:::

Varying the phase moves the wave forwards or backwards in time while maintaining the frequency and amplitude. It can be thought of as a time offset, however it is usually expressed in degrees or radians. A given time offset represents a different phase offset for sine waves of different frequencies. A positive phase moves the wave to the left, we say that the waveform leads its original position. A negative phase moves it to the right, the waveform now lags its original position.

:::::::::

:::::::::Activity (sinmath|Mathematical Description of Sine Waves)
Frequency, Amplitude, and Phase are succinctly described in the sine wave equation:

:::Equation (sine)
$$
v(t) = V_{max}\sin(2\pi ft+\phi)
$$
:::

where
- $v(t)$ is the time varying voltage,
- $V_{max}$ is the maximum peak voltage,
- $f$ is the frequency in Hertz,
- $t$ is time, and
- $\phi$ is the phase angle in radians.

Increasing the frequency will cause the argument (the expression within the parenthesis) of the sine function to grow more quickly. There will be more oscillations in a set amount of time. Conversely, a lower frequency will cause the argument to grow slowly resulting in fewer alternations in the same time period of time.

The constant multiplier $2 \pi$ is always used to translate between the units of the sine function and real frequency. We express the angular frequency as:

:::Equation (af)
$$
\omega = 2 \pi f,
$$
:::

which has units of radians/sec.

Thus, substituting [](#Equation-af) into [](#Equation-sine) gives

:::Equation (sine_w)
$$
v(t) = V_{max}\sin(\omega t + \phi).
$$
:::

The phase of a sine wave is almost always a point of confusion. If the phase term is positive, the waveform moves to the left on a graph &mdash; it now "leads." If the phase term is negative, it moves to the right &mdash; it now "lags"

:::Exercise (math_sine|1 Point)
Mathematically describe the observed sine wave using your answers from and . Assume the phase to be zero.
:::

:::Exercise (math_sine_phase|1 Point)
Describe the same sine wave if it were shifted $3/5^{\text{ths}}$ of a cycle to the right. 

Hint: $\phi$ must be in radians and $\omega$ in radians/sec (rad/sec). There are 2$\pi$ radians in a cycle.
:::

### Other common waveforms

In addition to sine and cosine waves there are many other common waveforms. Your function generator can also produce square waves and triangle waves. In your higher level courses you will learn to analyze these waveforms as a superposition (simple summation) of sine and cosine waves. These techniques are called Fourier Analysis and are of central importance to many scientific and engineering disciplines.

::::::::: -->

# Capacitors and Time Constants

## Step and Natural Response

Before analyzing how a circuit will respond to a periodic sinusoidal signal it is fruitful to consider how individual circuit elements will respond to large, abrupt changes in applied voltage.

:::::::::Figure (stepUp|xl|Row)
::::::row
:::col 
![](imgs/LabTau/pos_step_func.png "A step function (solid, green) and the typical step response of a capacitor (dashed, blue)")
:::
::::::
:::::::::


The <b>step response</b> of a circuit is the behavior when a step of voltage is suddenly applied ([](#Figure-stepUp)). This response is not instantaneous; the difference between the imposed voltage and the actual voltage across a capacitor decays exponentially to a final value ([](#Equation-step_response)).
:::Equation (step_response)
$$
V(t) = V_0(1-e^{-t/\tau_\mathrm{step}})
$$
:::

:::::::::Figure (stepDown|xl|Row)
:::col 
![](imgs/LabTau/neg_step_func.png "A negative step function (solid, green) and the typical step response of a capacitor (dashed, blue)")
:::
::::::
:::::::::
Capacitors store energy in electric fields.  When there is no other source of energy in the circuit, as when an external source of energy is abruptly disconnected, the stored energy dissipates ([](#Figure-stepDown)). Again, this response is not instantaneous; the the voltage in the circuit decays exponentially to zero ([](#Equation-natural_response)). This is called the <b>natural response</b> of the circuit.
:::Equation (natural_response)
$$
V(t) = V_0 e^{-t/\tau_\mathrm{nat}}
$$
:::
The characteristic times of these exponential decays, $\tau_\mathrm{step}$ and $\tau_\mathrm{nat}$, are known as the <b>response times</b> or <b>time constants</b> of the circuit. You can observe both the natural response and the step response of a circuit by feeding it a square wave with a period that is much longer than its time constants. 


<!-- :::Exercise (sq_wv|1 Point)
What is the period of a one $100\text{Hz}$ square wave? Assuming that the "high" and "low" portions are equal length, how long is the "high" portion of a $60\text{Hz}$ square wave?
::: -->

## Capacitors
A capacitor consists of a pair of conducting plates separated by an insulating material (or vacuum). Positive charges accumulate on one plate, negative charges accumulate on the other ([](#Figure-capac)). 
<!-- Their mutual attraction pulls them towards each other, but the insulating material holds them both in place, the result is energy stored as an electrostatic field. -->

:::::::::Figure (capac|xl|Row)
::::::row
:::col 
![](imgs/LabTau/cross_sec_capac.png "Schematic cross section of a capacitor")
:::
::::::
:::::::::
<!-- :::::::::Figure (components|xl|Row)
::::::row
:::col 
![](imgs/LabTau/basic_components.png "(b) Basic component symbols")
:::
::::::
::::::::: -->

The voltage across a capacitor is directly related to the amount of charge on its plates. When there is a large amount of charge on the plates, there is a large potential difference across the capacitor (*i.e.*, a large voltage). A smaller amount of charge would result in a smaller voltage.

This is neatly summarized in the equation

:::Equation (capac_Q)
$$
Q = CV,
$$
:::
<br>where $Q$ is the charge in Coulombs and $V$ is the voltage in volts.  The constant of proportionality, $C$, is called the capacitance because it reflects how much charge the capacitor can hold for a given amount of potential difference across the plates.  The unit of capacitance, Coulomb/Volt, is called the Farad. Because one Coulomb is a very large amount of charge ($\approx 6 \times 10^{18}$ esu), typical capacitors have capacitances that range from nanoFarads ($10^{-9}$F = nF) to microFarads ($10^{-6}$F = $\mu$F).   

You can understand the exponential nature of the step response and natural response of a capacitor by taking the time-derivative of [](#Equation-capac_Q).

:::Equation (capac_Q)
$$
\frac{dQ}{dt} \equiv I(t) = C \frac{dV}{dt}
$$
:::
<br>and re-writing $I(t)$ in terms of $V$ using Ohm's law, $I = V/R$:
:::Equation (capac_V)
$$
V(t) = RC \frac{dV}{dt}
$$
:::  
<!-- :::Exercise (capac_charge|1 Point)
A $0.1 \mu F$ capacitor has $16$ $\text{volts}$ across is terminals. How much charge does it hold?
::: -->

<!-- :::Exercise (capac_current|1 Point)
What is the current flowing into a $0.01\mu F$ capacitor if the voltage across its leads changes at a constant linear rate of $2\text{mV}$ per second?
::: -->

:::Intro (Notetaking Tip)
Review the logic above in your notes and <b>show</b> how solving this differential equation for different boundary conditions results in [](#Equation-step_response) and [](#Equation-natural_response) above.  Note especially how the time constants, $\tau$, are related to the circuit parameters, $R$ and $C$.
:::

<!-- A basic measurement of the time constant an RC circuit can be determined by observing the voltages across the resis
:::Figure (rc_diagram)
![A circuit diagram for a resistor and capacitor in series with a battery, along with graphs of the voltage across the resistor, capacitor, and the current in the circuit.](imgs/LabTau/rc.png "The switch is initially open, at time $t=0$ it is closed")
:::

To analyze the Step response of a capacitor, we assume the initial charge $Q$ to be zero. We consider three points in time.
1. At the instant the step voltage is applied: There is no charge on the plates of the capacitor and no voltage across the leads. Because there is no charge on the plates it is easy to “push” a great deal of charge - there is no opposing charge to stand in the way. Thus the greatest amount of current (charge per second) flows at this first instant.
::: Note (initial_current|10)
Note: This initial amount of current is only limited by the resistance of the circuit. Initially, all of the external voltage is dropped across this resistance.
:::
2. A short time after the voltage step has been applied: Some charge has now accumulated on the plates and there is a voltage across the leads of the capacitor. Because of this charge accumulation the external voltage cannot push as much current due to mutual repulsion of charges. Less current is flowing into the capacitor.
3. A long time after the voltage step has been applied: the external voltage has pushed as much charge as it can into the capacitor and the voltage across the leads equals the externally applied voltage. Because the external voltage is in balance with the charge on the plates there is nothing to push current into the capacitor.

:::Exercise (capac_flow|1 Point)
When does the greatest amount of current flow initially? Why does it decrease as time passes?
:::

:::Exercise (capac_v_resist|1 Point)
Why does the voltage across the resistor decrease to $0V$?
:::

This is an exponential behavior. We'll skip the derivation. The capacitor voltage, $V_c$, caused by the application of a step voltage, $V_0$, for an initially discharged capacitor is:

:::Equation (capac_V)
$$
V_c=V_0(1-\exp^{-t/\tau}),
$$
:::
where:
- $V_c(t)$ is the time varying voltage across the capacitor,
- $V_0$ is the source voltage,
- $t$ is time, and
- $\tau$ is the fundamental circuit metric called the time constant.

For a series RC circuit, that is, a circuit made up of a resistance and capacitance in series, the time constant is

:::Equation (tau_rc)
$$
\tau = RC,
$$
:::
where $R$ is resistance and $C$ is capacitance.

There are a few things to note here. We see that the voltage gradually rises at a rate determined by the constant $\tau$. A greater time constant increases the amount of time it takes for the capacitor to reach its final voltage value.

$\tau$ is a unit of time. The common rule of thumb states that after one time constant the voltage has risen to approximately 63% of its final value. We will be verifying this in the procedure.

The Natural response is the opposite scenario, the voltage has been applied for a length of time great enough that the capacitor is completely charged. If we remove the voltage source and instantaneously replace it with a short circuit, the energy stored in the capacitor will cause a current to flow which eventually depletes the charge buildup on the plates. The voltage decreases exponentially as current leaves the capacitor, this is mathematically described by:
:::Equation (capac_V)
$$
V_c=V_0(1-\exp^{-t/\tau}),
$$
:::
where $V_c(t)$ is the time varying voltage across the capacitor, $V_0$ is the initial voltage across the capacitor, and $\tau$ is the time constant in [](#Equation-tau_rc). Note: $\tau$ is the same for both the step and natural responses.

:::Exercise (tau_rc_in|1 Point)
What is the time constant of an RC circuit whose voltage step response takes $0.2$ seconds to reach 63% of its final value? Hint: This problem can be solved by inspection.
:::

:::Exercise (rc_decay_more|1 Point)
How long does this circuit's natural response take to decay to 15% of its original voltage? Assume the time constant you found in the previous question.
:::

:::Exercise (tau_v|1 Point)
What happens to the time constant if we double the value of the capacitor?
:::

:::Exercise (tau_res|1 Point)
What happens to the time constant if we reduce the value of the resistance by a factor of five?
::: -->


You can check whether this idealized equation corresponds to reality by building a simple RC circuit, observing the voltage drop across the capacitor in response to a an imposed square wave, and measuring the time constant.  You can refer to the figure and steps below for guidance, or define your own approach. 

:::Intro (Notetaking Tip)
Do not simply copy the steps below into your notes.  Describe what you do in your own words.  Include any decisions you find you have to make, and any questions that arise for you.
:::

:::Figure (rc_circuit)
![A circuit diagram showing a resistor and capacitor in series and driven by a signal generator next to a plot of the voltage as a function of time showing an exponential increase and decay for the RC circuit.](imgs/LabTau/rc_circuit_step_nat.png "a. an $RC$ circuit. $\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad$    b. Step and natural responses of the RC circuit as viewed on the oscilloscope.")
:::

1. Wire the circuit shown in [](#Figure-rc_circuit)a. Put the positive lead of your  channel 1 probe between the capacitor and the resistor and the negative lead at the bottom of the circuit (on the common ground). 
2. To change the resistance of your circuit you can use a fixed resistor that you exchange for resistors of different resistance, or a variable resistor the resistance of which you adjust with a tool.
3. Use a capacitor of $0.01 \mu F$ to start.
4. Calculate the expected time constant of your circuit (see the first Note-taking tip above) and adjust the function generator to output a square wave with a period $T \geq 6\tau$. 
5. Connect the $50\Omega$ output on the function generator to your circuit.
6. Adjust the oscilloscope trace until you see something that looks like the step response in [](#Figure-rc_circuit)b above.
::: Note (scope_range|10)
NOTE: If the amplitude of the signal is much larger than the voltage range set on the oscilloscope, you may have trouble seeing any signal.  Start looking for your signal with the oscilloscope set to display large voltages and zoom in as needed.
:::
<br>Each rounded edge represents either the step or natural response of a capacitor. The signal you see is the voltage across the capacitor. When the wavelength is longer than five or six $\tau$ the capacitor has time to fully charge and discharge.
<!-- ::: Note (scope|10)
Note: You can invert the slope that the scope triggers on by toggling the SLOPE button in the TRIGGER MENU, under SLOPE/COUPLING. It may be necessary to toggle this to get just one waveform on the screen.
::: -->
7. Adjust the scope to display just one step response.
8. Measure the peak-to-peak voltage. Calculate 63% of this value.
9. Measure the time it takes to reach the 63% value. This is an approximately the time constant of the circuit.
10. Repeat for the Natural response. 
11. Compare the time constant you measure to the one expected based on the $R$ and $C$ of the circuit elements. 
12. Repeat for different resistances and capacitances.

:::Intro (Notetaking Tip)
Organize your measurements into a well-formatted table.  Make sure it is clear which measurements correspond to which circuits and how the measured value compares to the expected value for a given circuit.
:::

:::Intro (Notetaking Tip)
Consider sources of uncertainty in your measurement and describe what you do to characterize and/or minimize them.
:::

 
# Inductors and Time Constants

Inductors are the counterpart to capacitors in circuit theory – they have reciprocal behavior with respect to current and voltage. 

- A capacitor permits nearly instantaneous current that decays as the voltage across it builds up. 
- An inductor permits nearly instantaneous voltage that decays as the current through it builds up.
<p></p>

- Capacitors store energy in the electric field between two conducting plates.  
- Inductors store energy in the magnetic field inside a coil of wire. 
<p></p>

- When the energy source to a capacitor is cut off, the voltage across the capacitor gradually dissipates.  
- When the energy source to an inductor is cut off, the current through the capacitor gradually dissipates.  

<!-- :::Figure (induct)
![A diagram of a single current carrying loop with its induced magnetic field (left) and a coil of N loops with its induced magnetic field (right).](imgs/LabTau/inductors.png "A single current carrying loop (left) and an $N$ loop toroid (right)")
::: -->

<!-- The phenomenon of inductance opposes changes in magnetic fields. It will always attempts to maintain the current magnetic field. If you abruptly stop the current, it will induce a forward voltage in an attempt to maintain the current and magnetic field. If you increase the current, it will induce an opposing voltage to fight the increase in current and magnetic field.

In this way, inductors store energy. You must do some amount of work to get current flowing. When you cut off the driving source, current will continue to flow until the stored energy has dissipated. -->

The relationship between voltage across an inductor and the current flowing through it is given by the differential equation

:::Equation (induct_I)
$$
V(t)=L\frac{dI}{dt},
$$
:::
where $L$ is the inductance in Henries. Typical inductors have inductances that range from microHenries ($\mu$H) to milliHenries (mH).

You can predict the step response and natural response of an inductor by re-writing $I$ in [](#Equation-induct_I) in terms of $V$ using Ohm's law:
:::Equation (induct_V)
$$
V(t) = \frac{L}{R}\frac{dV}{dt}
$$
:::  
:::Intro (Notetaking Tip)
Review the logic above in your notes and <b>solve</b> this differential equation for the different boundary conditions given by a step function and a negative step function.  Note especially how the time constants, $\tau$, are related to the circuit parameters, $R$ and $L$.  Explain why the step response and natural response of an inductor look the way they do (see below).
:::
The step response ([](#Figure-stepUpInductor)) and natural response ([](#Figure-stepDownInductor)) of an inductor look somewhat similar to those of a capacitor, but there are important differences!
:::::::::Figure (stepUpInductor|xl|Row)
::::::row
:::col 
![](imgs/LabTau/pos_step_func_Inductor.png "A step function (solid,green) and the typical step response of an inductor (dashed,blue)")
:::
::::::
:::::::::
:::::::::Figure (stepDownInductor|xl|Row)
::::::row
:::col 
![](imgs/LabTau/neg_step_func_Inductor.png "A negative step function (solid,green) and the typical step response of an inductor (dashed,blue)")
:::
::::::
:::::::::


<!--
:::Exercise (induc_v|1 Point)
What is the voltage across a $0.01$ $\text{m}H$ (milli-Henry) inductor if it passes a constant current? The voltage if the current instead decreases steadily at 1$\text{mA}$ per second?
:::

Quick changes in current will give rise to large voltages. Said differently, if we want a quick change in current we’ll need to apply a large voltage. A constant current has no rate of change, thus there is no voltage across the inductor.

For a given rate of current change, a larger inductance value will yield a greater voltage drop. For a given voltage a larger inductor will produce a smaller rate of current change.

Note that all real inductors have some amount of resistance which will drop some amount of voltage. Using a practical rule of thumb, we can ignore this if this if it is smaller than $1/10\text{th}$ the other resistance in the circuit.
-->
You can understand the step response of an inductor as follows:
1. At the instant the step voltage is applied: There is no current though the inductor and, because of Lenz's Law, the inductor generates an opposing voltage that balances the externally applied voltage. Since no current is flowing there can be no voltage drop across the resistive elements in the circuit. The source voltage is dropped entirely across the inductor.
2. A short time after the voltage step was applied: Some current flows through the inductor, and therefore also through the resistive elements in the circuit. There is some voltage dropped across the resistive elements according to $V=IR$ and less voltage dropped across the inductor.
3. A long time after the voltage step was applied: The maximum amount of current is now flowing. This amount is determined by the resistance of the circuit. There is no voltage dropped across the inductor. The entire source voltage is dropped across the resistor.

:::Figure (rl_diagram)
![A circuit diagram for a resistor and inductor in series with a battery, along with graphs of the voltage across the resistor, capacitor, and the current in the circuit.](imgs/LabTau/rl.png "Step response of an inductor")
:::
<!--
This again is exponential behavior. The inductor voltage $V_L$ caused by the application of a voltage step $V_0$ with zero initial current is
:::Equation (induct_V)
$$
V_L(t) = V_0 \exp^{-t/\tau},
$$
:::
where
:::Equation (tau_RL)
$$
\tau=L/T.
$$
:::

We see that the voltage immediately assumes its maximum positive value and decays to zero from this point. Again this rate is determined by the time constant, in this case $L/R$ instead of $RC$ as it was for the capacitor. After one time constant the voltage has decayed to approximately 37% of its original value, we will again be measuring this in the procedure. Note the negative sign which indicates that the step response produces an opposing voltage.

The Natural response attempts to sustain the current flow and is simply the negative of the above equation

:::Equation (tau_RL)
$$
V_L(t) = -V_0 \exp^{-t/\tau}
$$
:::
-->
<!--
:::Exercise (induc_tau|1 Point)
What is the time constant of an $RL$ circuit whose voltage step response takes $0.3$ seconds to reach 37% of its original?
:::

:::Exercise (induc_v|1 Point)
How long does this circuit’s natural response take to decay to 15% of its original voltage?
:::

:::Figure (rl_step_nat)
![A circuit diagram for a resistor and capacitor in series with a battery.](imgs/LabTau/rl_step_nat.png "Step and Natural response for an inductor (respectively).")
:::

:::Exercise (induc_l|1 Point)
What happens to the time constant if we triple the value of the inductance?
:::

:::Exercise (induc_r|1 Point)
What happens to the time constant if we reduce the resistance by a factor of two?
:::
-->
As with the capacitor you can check whether the solutions to the differential equation you found above correspond to reality by building a simple RL circuit, observing the voltage drop across the inductor in response to an imposed square wave, and measuring the time constant.  Refer to the steps for a capacitor for guidance or define your own approach. 

:::Intro (Notetaking Tip)
Checking the step response of the inductor is optional.  If you choose to do it, describe what you do in your own words.  Include any decisions you find you have to make, and any questions that arise for you.
:::

<!--
:::::::::Activity (rl_meas|Measuring the time constants for an RL circuit)
You will now measure the time constants for an RL circuit with four different resistance values. You will use the same inductor in all cases.

::: Note (result|10)
Note: The result of this procedure is identical to the capacitance section &mdash; a table with four calculated time constants, four time constants measured from the step response, four time constants measured natural response and the percent error between each measured value and the theoretical.
:::

:::Figure (rl_circuit|R)
![A circuit diagram for a resistor and inductor in series with a battery.](imgs/LabTau/rl_circuit.png "$RL$ circuit")
:::

1. Wire the circuit shown in [](#Figure-rl_circuit). Be sure that the positive lead of the scope probe goes between the inductor and the resistor. Adjust the variable resistance box to $200$ $\Omega$ and use the breadboard inductor value of $25$ $\text{m}$ Henries.
2. Adjust the function generator to a $1\text{kHz}$ square wave.
3. Adjust the scope trace until you see the waveform
Each exponential decay represents either the step or natural response of a inductor. Keep in mind that inductors oppose change so they are opposite of what you’d expect. Again, when the driving signal’s wavelength is longer than five or six time constants, the current through the inductor has time to reach its asymptote and we can consider each edge as a natural or step response.
4. Use the scope adjustments to zoom in on just one step response.
::: Note (scope|10)
Note: You can invert the slope that the scope triggers on by toggling the SLOPE button in the TRIGGER MENU, under SLOPE/COUPLING. It may be necessary to toggle this to get just one waveform on the screen.
:::
5. Measure the amplitude of the driving square wave by switching the channel 1 positive lead to the top of the circuit (across both the inductor and resistor.) Calculate the voltage which is 37 percent of this value. Return the positive lead to its original position.
6. You should find that the initial spike of the inductor voltage is very near the voltage of the driving square wave. Measure the time it takes to decay to 37% of this value. This is an approximation of the circuit’s time constant.
7. Repeat steps 4, 5 and 6 for the Natural response.
8. Calculate the time constant using the known component values. Start a table that includes the measured step time constant, measured natural time constant, calculated time constant, and percent error for both the step and natural time constants.
9. Repeat this entire procedure for the resistance values 300$\Omega$, 600$\Omega$ and 900$\Omega$, in each case measure the time constants of the step and natural response. Calculate the theoretical value for each case, compute the percent error and neatly tabulate your results.

:::Exercise (rl_table|4 Points)
Include the table with your report. Make sure to follow the guidelines of a Good Table.
:::

:::::::::

# Part 4: Post Lab Questions -->
<!-- 
:::Exercise (c_round|1 Point)
What causes the capacitor to round off the edges of the driving square wave
:::

:::Exercise (l_spike|1 Point)
What causes the spike in the inductor's step and natural response?
::: -->

# Frequency response
Look back at the differential equations that govern the voltage across a capactior ([](#Equation-capac_V)) and an inductor ([](#Equation-induct_V)). What do you suppose the voltage response $V(t)$ of each of these circuit elements would be if a the voltage source in their circuit were sinusoidal?

:::Intro (Notetaking Tip)
Don't worry!  There is no "wrong" answer at this stage.  Use your notes to sort out your thoughts.  Calculations can be helpful, but your notes should include more than just calculations.  
- Write your thoughts as they happen.  Feel free to wonder, guess and correct yourself.  The goal is to "show your work" when your work is to think
- Write what you think the observable implications of those calculations might be and why.  
- Write how you could go about checking one or more of those implications.  
- Then perform one of more of those checks and write what you found.   
:::

:::Note (freqResponse|10)
HINT: A sinusoidal driving voltage 
:::

# RLC circuits
