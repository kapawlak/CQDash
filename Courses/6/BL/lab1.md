
# The Pendulum

::::::Intro (This week...)
:::Figure (pendulum|xs|R)
![Shot of Pendulum Setup](imgs/Lab1/PhotofPendulum.jpg)
Shot of Pendulum Setup
:::

Our first major topic in Physics 6BL will be simple harmonic motion (SHM), or the oscillating behavior of a body when subjected to a restoring force directly proportional to its displacement from equilibrium. SHM is a universal behavior, witnessed in everything from springs to pendulums, and even forms the basis of Quantum Field theories. 


In this lab we will learn about SHM by studying the behavior of a pendulum, and characterizing how carrying certain physical variables of a pendulum change its behavior.

::::::

::::::Prelab
Please complete the following Activities:
:::center
[](#Activity-tables)
:::
and the following exercises
:::center
[](#Exercise-linTL)
:::
**Reminder:** Completion of the Prelab counts toward 10% of your grade.

You are encouraged to read the entire lab before going to your section. You are free to set up plots before-hand, or answer any theory questions that do not require data to complete. 

**You will only have two hours to complete the lab in person, so come prepared!**
::::::
---


# Introduction




:::Figure (sho|xs|R)
![](imgs/Lab1/SHO.gif 'Mass on a spring ')
:::

Simple harmonic motion &mdash; the simple oscillatory behavior of a mass bouncing on a spring &mdash; is found everywhere in nature, both in the classical and quantum world! Because of this, the theory of simple harmonic motion will be a recurring theme throughout your physics career: many different systems can be modeled or approximated as harmonic oscillators. 

One of the most accessible systems that can be approximated by simple harmonic motion is the pendulum. A **pendulum** is a weight hung from a fixed point so that it can swing freely backward and forward under gravity. As you know intuitively, when you hang a mass from a pivot point, and let it go from a position higher than its minimum, it will continue to swing back and forth until friction or external forces bring it to rest at its equilibrium point. When a pendulum weight is let go from a small height above its minimum ;;; otherwise a **small angle**;;;, its motion is very well approximated by a harmonic oscillator. 



The objective of this lab is to determine the physical quantities that influence the period of a pendulum. The period is how long it takes for the pendulum to make one complete cycle of motion. The relevant features are the mass of the bob, the length of the pendulum, and the initial angular displacement. We will test how each of these parameters influences the period of the pendulum by varying one of them while keeping the other two constant.

## Preparing for the Pendulum Experiments

In the following [Activity](#Activity-tables), we will be preparing our data tables and calculations so that we can quickly take down data and see the final results of calculations. We will need four tables in this lab, one for each parameter (mass $m$, initial angle $\theta_0$, length $L$) we will vary during the experiment, and one table for additional length data. We are interested in how varying each of these parameters affects the period of oscillation, $T$. 

If you haven't done so, please preview the lab procedure in [Part II](#part2) to familiarize yourself the the general procedure. After reviewing this, continue on to [](#Activity-tables) to prepare the data tables and basic calculations.


::::::Activity (tables|Preparing the Tables)
In this lab, we will need four data tables: three are for exploring the dependence of period on three parameters, and one for a more detailed exploration of $T$ v.s. $L$. 
1. A very basic template of these tables is provided [here](https://docs.google.com/spreadsheets/d/1prSaLpiSssbD8Dj2goacOyrGukwA9QpgQPbgtWdFdYM/edit?usp=sharing). Please **copy** these into a personal spreadsheet.
2. These tables are not [Good Tables](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport). Add missing elements and formatting to ensure that they are good, descriptive tables. You will need to come up with a descriptive title for each table.
3. For each column titled **1 Period**, insert a spreadsheet function that will calculate the average period of the pendulum using the **10 Period** value ;;;You may wish to enter "dummy" data to ensure that your spreadsheet function is working;;;
4. In the final table, you will need to add in a spreadsheet function to calculate the LOG10 of the period and length data as appropriate.

For your Prelab: Link a copy of each of Tables 1-3 in the exercises you will use them in ([](Exercise-table1),[](Exercise-table2), [](Exercise-table3) respectively). You can find how to do this in the [FAQ](?linkfile=FAQ). They will automatically update if you are linking between a Google sheet and a Google doc.

:::Note (|10 C)
When linked sheets are updated, any edits to the data in the original file will appear in the Google Docs file. If you make edits to the linked chart, table, or slide in your Google Docs, the **changes won't be copied to the original file** and will be lost. [See More Here](https://support.google.com/docs/answer/7009814?hl=en&co=GENIE.Platform%3DAndroid)
:::

::::::

## Preparing the Theory

This lab is all about exploring the dependence of the period on different parameters of a pendulum. As an example, we can explore how a pendulum's period might depend on the length of the string. Let's assume that the period $T$ depends on the length $L$ in a non-linear way, namely a power law:

::: Equation generalizedPeriod
$$T=a L^b$$
:::

where $a$ and $b$ are unknown values that do not matter to us right now &mdash; they could depend on other parameters, such as the mass, angle, color or latitude of the pendulum.


From your data analysis lab, you recall learning about "linearizing" data, that is, making nonlinear data fit a straight line. The method you used was to take the logarithm of both the independent variable ($x$) and  the dependent variable ($y$) values, to plot them, and from that plot find the power of $x$ (and/or $y$) and the proportionality constant in the original equation. 

We will repeat this analysis in this lab after collecting some data. One of our goals will be to determine the **numerical values** of $a$ and $b$ in [](#Equation-generalizedPeriod). To prepare for this, we will first want to linearize this equation. As a reminder, the below drop-down summarizes the mathematical properties of logs

:::::: Hider (logs|A reminder about properties of logarithms:)

:::Equation (logRules)
$$\log(XY) = \log(X) + \log(Y)$$

$$\log(\frac{X}{Y}) = \log(X) - \log(Y)$$

$$\log(X^Y) = Y \log(X)$$ 

$$10^{\log (f)} = f $$

:::



::::::

::::::Exercise (linTL|2 Point + Prelab|prelab)
Start with the [](#Equation-generalizedPeriod) given above. Take the logarithm of both sides, and reduce this equation by using the rules for logarithms that you learned in the last lab. 


1. Provide your work and the equation you arrived at. 

:::Note (|10 C)
In your final reduction, you should recognize that some values are constant, while one term is dependent upon the length $L$ (specifically on $\rm log_{10}(L)$).
:::

2. What is the mathematical relationship between the slope of the log-log line and the unknowns $a$ and $b$? (1-2 Sentences)

3. What is the mathematical relationship between the intercept of the log-log line with the vertical axis and the unknowns $a$ and $b$? (1-2 Sentences)
::::::


# The Pendulum Experiments
## Mass

We will investigate if the period $T$ of the pendulum depends on the mass $m$ of the bob attached to its end. To do so, we will vary the mass, $m$, while keeping the length, $L$, and initial angle, $\theta_0$, constant.

::::::Activity (mass| Period as a function of Mass)

We have **three** (3) bobs of different masses that we can place at the end of our pendulum. 

1. Set the length of the string to about $1 \text{ m}$ by sliding the plastic clip gently up or down the rod, as demonstrated by your TA.
2. One partner should align the mass to an initial displacement of $5^\circ-20^\circ$ while keeping the string taut. 
:::Note (|10 C)
This angle should be measured from the vertical, e.g. from  the $90^\circ$ mark.
::: 
3. When one partner starts the timer, the other should simultaneously let go of the mass.
:::Note (|10 C)
It is important that the pendulum swing in the plane parallel to the protractor.
To achieve this, you must release the mass in this plane, with no other components of motion. The easiest method is to have one lab partner release the bob in the correct direction, while the second lab partner reads the initial angular displacement. 
::: 
4. Stop the timer after 10 full (out and back) swings and record your data.
5. Repeat this procedure for three different masses in total, keeping length and angular displacement fixed ;;;use the same angle for each trial!;;;. Record your results for each mass trial. Your spreadsheet function should divide these times by 10 to get the average period for each trial.


::::::

:::Exercise (table1|2 Point)
1. Include your completed [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) here.
2. Does the period appear to depend on mass? Justify your answer in 2-3 sentences.
:::


## Initial Angle

Conventional analysis of the pendulum is done for small angles, where the restoring force experienced by the mass is approximately linear with the displacement angle. A linear restoring force is one of the criteria for simple harmonic motion. When the displacement angles become large, the restoring force is no longer linear. The motion is still periodic, but it is not sinusoidal, and the mathematical analysis becomes far more involved. In this lab we will focus only on small displacement angles, and thus simple harmonic motion.


We will investigate if the period $T$ of the pendulum depends on the initial angle $\theta_0$ of the bob attached to its end. To do so, we will vary the initial angle, $\theta_0$, while keeping the length, $L$, and mass, $m$, constant.

::::::Activity (angle| Period as a function of Initial Angle)

You will be working with only a single mass ;;; any of the ones available is fine ;;; for this part of the experiment, and only one pendulum length. You will repeat the experiment for the pendulum starting at the different initial angles of $5^{\circ}$, $10^{\circ}$, and $15^{\circ}$.

1. Use the same method as in [](#Activity-mass), but instead of changing the mass, choose three different initial angles ($5^{\circ}$, $10^{\circ}$, and $15^{\circ}$) to test.
2. Record your angles and 10-Period times into your spreadsheet. The average 1-Period times should be automatically calculated.




::::::

:::Exercise (table2|2 Point)
1. Include your completed [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) here.
2. Does the period depend on the initial angle? Justify your answer in 2-3 sentences.
:::

:::Exercise (|1 Point)
Why can you use only one mass instead of all available different masses in order to determine if period depends on initial angle? Respond in 1-2 sentences.
:::

## Length

We will investigate if the period $T$ of the pendulum depends on the length of the pendulum $L$. To do so, we will vary the length $L$, while keeping the initial angle, $\theta_0$, and mass, $m$, constant.

::::::Activity (mass| Period as a function of Length)

In the following procedure, you will set-up three pendulum experiments with the same mass (mass #2) and initial angle of $10^{\circ}$. The only parameter that varies among runs is the length, $L$. The lengths you should use should be approximately $80 \text{cm}, 60 \text{cm}, 40 \text{cm}$

1. Use the same method as in [](#Activity-mass), but instead of changing the mass, choose three different lengths (Approximately $80 \text{cm}, 60 \text{cm}, 40 \text{cm}$ &mdash; record your *actual* value!) to test.
2. Record your lengths and 10-Period times into your spreadsheet. The average 1-Period times should be automatically calculated.


::::::

:::Exercise (table3|2 Point)
1. Include your completed [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) here.
2. Does the period depend on length? Justify your answer in 2-3 sentences.
:::

# Determining Mathematical Dependence


From your previous investigations on which parameters affect the period of the pendulum you should have concluded that the length $L$ affects the period of the pendulum. In this part, we will attempt to find the mathematical relationship between the period $T$ and the length $L$.


::::::Activity (additional|Additional $L$ v.s. $T$ Data)

We will now set-up a more rigorous experiment where you vary the length in approximately $10 cm$ increments.

1. Start at about $L=20\text{ cm}$, go to about $160 \text{cm}$.
:::Note (|10C)
If you use the same mass as in step 4) above you may include those measurements to save time.
:::

2. Choose the same initial displacement of $10^\circ$ for all trials.
3. Repeat the measurement steps to obtain the 10-period time for all angles.
4. Make a plot of period vs. length (include all elements of a good plot).

::::::

:::Exercise (|2 Point)
1. Include your [Good Plot](?linkfile=FAQ#QHowdoIreceivefullcreditonaplotinmylabreport) here.
2. Describe the relationship between length and period. Is it linear or nonlinear? How do you know? (1-2 Sentences)


:::


## Analyzing the Data



:::::::::Activity (loglog|Making a Log-Log Plot)


1. In the spreadsheet of data from [](#Activity-additional), you should have filled in the spreadsheet.function to calculate $\rm log_{10}(L)$ and $\rm log_{10}(T)$ in the Prelab. Check that the values seem to make sense.
2. Plot $\rm log_{10}(L)$ on the independent axis, and $\rm log_{10}(T)$ on the dependent axis.  
3. Find the line of best fit and display it on your plot.


:::Note (|6 C)
Hint: Convert length measurements to meters if you recorded them in $\text{cm}$.
:::

:::Exercise (|2 Points)
1. Include your [Good Plot](?linkfile=FAQ#QHowdoIreceivefullcreditonaplotinmylabreport) here.
2. From the line of best fit, what is the numerical value of the slope of this  log-log line? The intercept of this log-log line with the vertical axis?;;; Hint: Make sure you use the correct number of significant figures;;;
:::

2.  Use the slope and intercept of your log-log graph to determine the quantities $a$ and $b$ as they appear in the equation you linearized in [](#Exercise-linTL).

:::Exercise (|2 Points)
1. From your answers to the previous Exercise, what is the numerical value of $a$ you calculated? 

2. From your answers to the previous Exercise, what is the numerical value of $b$ you calculated? 

3. Using the numerical values for $a$ and $b$, rewrite the [](#Equation-generalizedPeriod) involving them explicitly.;;; Hint: Make sure you use the correct number of significant figures;;;

:::

:::::::::


## Comparing Experiment to Theory
The relationship between the period and length can be derived theoretically to be:

:::Equation (period|Theoretical Period of a Small-Angle Pendulum)
$$
T = 2\pi \sqrt{\frac{L}{g}}
$$
:::

where $g$ is the acceleration due to gravity ($g=9.8\rm\ m/s^2$). We want to compare our nonlinear equation, [](#Equation-generalizedPeriod), (which we guessed) to the theoretical model.

:::Exercise (|1 Point)

1. Compare the nonlinear equation we assumed $T=aL^b$ with the above equation and identify the parameters $a$ and $b$ (write the theoretical equations for $a$ and $b$). **Hint:** Recall that $\sqrt{x} = x^{1/2}$

2. What numerical values would you expect for $a$ and $b$ from the theoretical model?

3. Calculate the percent discrepancy between the measured and theoretical values for $a$ and $b$.
:::



:::Exercise (|1 Point)
1. Express the acceleration due to gravity $g$ in terms of $a$ and $b$.

2. What numerical value do you obtain for $g$?

3. What is the percent discrepancy between the accepted value of $g$ and your calculated value?
:::

:::Note (|10 C)
Measuring the period of a pendulum is a simple method to determine the acceleration due to gravity on Earth or any planet!
:::




<!---
::::::Exercise (|1 Point)
Consider two different pendulums of equal mass and tied to strings of equal length, but which differ in the following way: The first is a sphere, similar to those used in this experiment. The second is a lengthy rod, tied at one end. (See [](#Figure-twoPendulums).) Which pendulum has a longer period? **Hint: Think about the center of mass and what that means for the effective length.**
:::Figure (twoPendulums| m|)
![Figure 2](imgs/Lab1/TwoPendulums.png)<!--{max-width=200px max-height=200px}
::: 
:::::: 
--->





# Conclusion

:::Exercise (|1 Point)
Write a brief conclusion summarizing the important points of this lab.
:::


::::::Summary

- Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.
- All responses and answers should contain the correct number of sig figs and should include units when needed.
- Please show your work where applicable

::::::