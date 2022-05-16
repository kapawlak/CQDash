# Pendulum

:::Intro (Objective)
The objective of this lab is to collect data and evaluate a given model for the period of a pendulum and then make a *quantitative* argument about the model based on the data. 

You will be using the model provided below and see if you can detect a difference in the period of the pendulum when you have an initial angle of 10° or 25°. 
:::

# Introduction

## Simple Pendulum Basics
:::Figure (pendulumDiagram|l)
![A diagram of the apparatus. There is a vertical dashed line that marks the lowest point of the pendulum, while the bob itself is displaced to one side. There is an arc from the vertical to the displaced bob and it is labelled theta sub zero, for the initial angle. There is a marker running the length of the string to the middle of the bob to indicate the length of the pendulum designated as L. Lastly there is an m located inside the bob to show it has mass.](imgs/Lab1/PendulumDiagram.png "A diagram of the setup indicating the length, L, the mass, m, and the initial angle, θ_0. (Click on me, or any figure, to see a larger version)")
:::

In the last lab we introduced the simple pendulum. As a reminder, this is what we said.

The simple pendulum is called such because the most simplified model of pendulum that we have. It assumes that we are using a point mass, $m$, at the end of a string of length, $L$, that has negligible mass itself. Notice the simple pendulum does not attempt to exactly replicate what is happening in the real world. Instead it makes some assumptions and ignores some real life features.

This is a typical thing in physics. Often times the real world gets extremely complicated and it becomes easier to make assumptions and ignore things. However, we must be thoughtful about what we choose to assume and ignore. We want to choose things that will have little affect what we are trying to measure. Sometimes we do this well, and sometimes we are too loose with our assumptions. In the latter case we must then reevaluate our simplified model and add back things we may have thought we could ignore, or relax some of our assumptions.

The thing that we will be focusing on is the period, $T$. For the simple pendulum we have three parameters available to us. The mass of the bob, $m$, the length of the pendulum, $L$, and the initial angle, $\theta_0$. Each of these is depicted in [](#Figure-pendulumDiagram) We will be adjusting these three parameters to see what affects they have on the period.

## The Model
The model that we will be evaluating states that the period of the pendulum follows this equation:

:::Equation (model)
$$
T=2\pi \sqrt{\frac{L}{g}}
$$
:::

:::Figure (fullApparatus|m|R)
![Picture of the apparatus. Has a metal bar vertically clamped to a table. At the top of the bar clamped on is another bar that is orthogonal to the original. Clamped to the horizontal bar is a large wooden protractor. In front of the protractor is a string goes through a hole in the horizontal bar. In the middle of the vertical rod is a piece of plastic that is used to adjust the length of the string.](imgs/Lab1/FullApparatus.jpg "Fully constructed pendulum apparatus")
:::

Our model makes the following assumptions:
- The only forces on the pendulum are due to gravity and tension in the string.
- The pendulum string is massless.
- The initial angle of the amplitude is small.
- The pendulum bob behaves like a point mass.

## Some Statistics

Last week you talked a bit about uncertainty and qualitatively made some comparisons by looking at some histogram data and were a little quantitative when comparing the uncertainty values. 

Today we will work on making the comparisons more quantitative by looking at some statistics. Namely we will be discussing the $t'$ statistic that we will use this quarter for making comparisons. It is defined, with more information, in the reference section of the manual. Just so you don't have to jump back and forth to see its definition we will define it here.

:::Equation (tstat)
$$
t' = \frac{A-B}{\sqrt{\delta A^2 + \delta B^2}}
$$
:::

In [](#Equation-tstat) $A$ and $B$ are both measurements that have been made and $\delta A$ and $\delta B$ are uncertainties in $A$ and $B$ respectively.

$t'$ gives us a more quantitative way to talk about the relationship of two measurements.

## Apparatus

The apparatus is the same as the previous lab and can be shown in [](#Figure-fullApparatus). For a review of how the apparatus works you can go to the apparatus section of the previous lab document.


## Pre-Lab

:::Prelab
**Before coming to lab** you will need to complete [](#Exercise-sigfigs) and [](#Exercise-procedure). This will be checked off by your TA when you get to class. 

Additionally, please read the [Making a Good Table](?linkfile=references#part5) of the Reference Material.

If you are unfamiliar with working with equations in spreadhseets, you should also read the [Working with a Spreadsheet](?linkfile=references#part6) part of the Reference Material.
:::


:::Note
From now on you will be expected to report your values with the correct sig figs and present your tables in a readable and understandable format. 

Improper sig figs or poor table formatting will result in a loss of points.
:::

## Significant Figures

In the previous lab you measured the period of a pendulum with your class. You obtained an average period, the standard deviation of the measurement, and the standard uncertainty of the mean. At that time we did not take any care about how many digits we included in those values. 

As scientists and engineers it is important that we express our results as precisely as we know them, but not more precise. We don't want to convey knowledge that we don't have. This is what happens when we include too many digits in the values we report.

:::Card (|Example||bg-UCSB-navy text-white)
If you were to measure the length of a table and say report that the length is $1.4528762$ m long, you would be indicating that you know the length of the table to smaller than a bacteria cell.
:::

Thus when we report our values we must be thoughtful about how many digits we use. The digits that we report are known as **significant figures** or **sig figs** for short. If you are unfamiliar with how to determine the number of sig figs in a value please see the [Significant Figures](?linkfile=references#part4) portion of the reference material.

:::Exercise (sigfigs|2 Points)
Determine the number of significant figures in the following values:

1. 15.02

2. 42.120

3. 0.0004

4. 12300

5. 12300$.$ 

:::

For this course (and in many scientific fields) the number of sig figs will be determined by the uncertainty. These are the the two guidelines we will use for this course:

:::Card (|Guidelines||bg-UCSB-seagreen text-white)
1. The uncertainty will be reported with only on significant figure.
2. The precision of the measurement can not exceed the uncertainty (typically from Standard Uncertainty of the Mean).
3. For tables, your data should not be more precise than the uncertainty (typically from standard deviation or measurement equipment).
:::

The reason the uncertainty contains 1 sig fig is that if we are already uncertain to that digit, we are even more uncertain in an subsequent digits. Some fields of physics and other sciences will include two digits in the uncertainty, but we will not do that in this class.

Here is an example

:::Card (|Example||bg-UCSB-navy text-white)
You measure the period of a pendulum 10 times. You then use some software (e.g. Google Sheets) to calculate the mean period, the standard deviation, and the standard uncertainty of the mean. Your software returns the values to you with 15 decimal places of precision. These are the results:

$$
\begin{aligned}
    \bar{T} &=1.157473047475658 \\\\
    \sigma  &=0.023948573263946 \\\\
    \delta \bar{T} &= 0.007573203822548
\end{aligned}
$$

The proper way to report your results would be:

$$
1.157 \pm 0.008 \text{ s}
$$

:::


## Procedure

:::Exercise (procedure| 5 Points)
Write a procedure that you will use during class to measure the period at both 10° and 25°. Make sure to include information that you learned from the previous lab.
:::

# Making a Quantitative Comparison

::::::Activity
Your TA will start a discussion about the interpretation of $t'$ and how you might go about making some claims based on the value of $t'$.

:::Exercise (|3 Points)
If you perform the same experiment twice and collect statistics on both, what do you expect the value of $|t'|$ to be?
:::

:::Exercise (|a. 3 Points / b. 4 Points)
1. Based on your discussion, what conclusions can be drawn if $|t'| \leq 1$?
2. What actions might you take to ensure that your conclusion is accurate?
:::

:::Exercise (|4 Points)
Based on your discussion, what conclusions can be drawn if $1 < |t'| \leq 3$?
:::

:::Exercise (|a. 3 Points / b. 4 Points)
1. Based on your discussion, what conclusions can be drawn if $|t'| > 3$?
2. What actions might you take to ensure that your conclusion is accurate?
:::

::::::

# The Experiment

:::::::::Activity

In this lab you will attempt to determine if there is a difference between the period of a pendulum released at 10° and 25°. 

Follow your procedure and use the $t'$ statistic to help make a case for one way or the other.

There is not a "right answer" for this activity. You are not trying to prove something. You are trying to make a measurement and draw a conclusion from your data. 

You will be graded on whether or not you made logical and justified decisions in your lab and that you properly analyzed your data using uncertainty and statistics provided.

:::Note
You should stop and do calculations throughout your lab to evaluate your measurement process and your data.
:::

:::Exercise (|15 Points)
Each time you calculate $t'$, make a decision about how to proceed in your lab, or maybe just every ~20 minutes or so, write down a short summary of what you did, what your data is telling you, and what you are choosing to do. 

:::

:::Exercise (|6 Points)
List any major sources of uncertainty and systematics.
:::

:::Exercise (|8 Points)
Include all of the data tables you made here. Make sure each table is easily identifiable and labelled.
:::

:::Exercise (|11 Points)
Make two histograms of your data. Be sure to include a title and label the axes appropriately with correct units.
:::

:::Exercise (|7 Points)
Calculate the mean, standard deviation, and standard uncertainty of the mean for each of your two final data sets.
:::

:::::::::


# Conclusion

::::::Exercise (|20 Points)
Based on your results, does the model we use accurately describe the world to your level of measurement? Explain your reasoning.;;;You should make a reference to your histograms, your t' value, and the rest of the statistics you calculated.;;; 

If you don't think think the model is accurate, look at the assumptions we made when developing the model and try to determine if any may be invalid.
::::::

:::Summary
Please note: There will be an additional 5 points for neatness. Make sure that your report is well organized and easy to follow.
:::


