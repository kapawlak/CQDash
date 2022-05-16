# Online Assignment Lab 2: Pendulum

# Document Purpose
This is an online version of the second laboratory experiment, "Pendulum," performed in Physics 3L. 

## Pre-Lab

Include the following two exercises in your report even though you  have already done them in your pre-lab. Feel free to make changes to your procedure or your responses to the exercises for your report.

:::Prelab
**Before coming to lab sections** you will need to complete **and submit on Gauchospace** your responses to [](#Exercise-sigfigs) and [](#Exercise-procedure). 

Additionally, please read the [Making a Good Table](?linkfile=references#part5) of the Reference Material.

If you are unfamiliar with working with equations in spreadhseets, you should also read the [Working with a Spreadsheet](?linkfile=references#part6) part of the Reference Material.
:::

:::Note
From now on you will be expected to report your values with the correct number of sig figs and present your tables in a readable and understandable format. 

Improper sig figs or poor table formatting will result in a loss of points.
:::

## PhET
Since you won't have access to a pendulum apparatus at home, you will instead be using a pendulum apparatus simulation by the PhET group at the University of Colorado. Below is a link to the Pendulum PhET.

:::Card (|Simulation||bg-UCSB-clay text-white)
[Pendulum Apparatus Simulation](https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html?screens=1)
:::

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

In the last lab we introduced the simple pendulum. Below is a reminder of what was said:

"The simple pendulum is called such because the most simplified model of pendulum that we have. It assumes that we are using a point mass, $m$, at the end of a string of length, $L$, that has negligible mass. Notice the simple pendulum does not attempt to exactly replicate what is happening in the real world. Instead it makes some assumptions and ignores some real life features.

Making assumptions and simplifications of real physical objects and phenomena in order to create idealized models is typical in physics. Often times the real world gets extremely complicated and it is easier to make assumptions and simplifications. However, we must be thoughtful about what we choose to assume and ignore. We want ignore parameters and features that will have little effect on what we are measuring. Sometimes we do this well, and sometimes we are too loose with our assumptions. In the latter case we must then reevaluate our simplified model and add back things we may have thought we could ignore, or relax some of our assumptions.

For the simple pendulum we have three parameters as part of our model. The mass of the bob, $m$, the length of the pendulum, $L$, and the initial angle of release, $\theta_0$. Each of these is depicted in [](Figure-pendulumDiagram)."

## The Model
We want to evaluate the validity and assumptions behind the simple pendulum model. The model states that the period of the pendulum follows this equation:

:::Equation (model)
$$
T=2\pi \sqrt{\frac{L}{g}}
$$
:::

:::Figure (fullApparatus|m|R)
![Picture of the apparatus. Has a metal bar vertically clamped to a table. At the top of the bar clamped on is another bar that is orthogonal to the original. Clamped to the horizontal bar is a large wooden protractor. In front of the protractor is a string goes through a hole in the horizontal bar. In the middle of the vertical rod is a piece of plastic that is used to adjust the length of the string.](imgs/Lab1/FullApparatus.jpg "Fully constructed pendulum apparatus")
:::

The simple pendulum model makes the following assumptions:
- The only forces on the pendulum are due to gravity and tension in the string.
- The pendulum string is massless.
- The initial angle of release is small.
- The pendulum bob behaves like a point mass.

## Some Statistics

Last week we discussed uncertainty and qualitatively made some comparisons between different measurement techniques. We looked at histogram data and were a somewhat quantitative when comparing the uncertainty values. 

Today we will work on making the comparisons more quantitative by looking at some statistics. Namely we will be discussing the $t'$ statistic that we will use this quarter for making comparisons. Please check the reference section of the manual for the definition and more information on the $t'$ statistic. The definition is also included below:

:::Equation (tstat)
$$
t' = \frac{A-B}{\sqrt{\delta A^2 + \delta B^2}}
$$
:::

,where $A$ and $B$ are both measurements that have been made and $\delta A$ and $\delta B$ are uncertainties in $A$ and $B$ respectively.

$t'$ gives us a more quantitative way to talk about the relationship of two measurements.

## Apparatus

The apparatus is the same as the previous lab and can be shown in [](#Figure-fullApparatus). For a review of how the apparatus works you can go to the apparatus section of the previous lab document.


## Significant Figures

In the previous lab you measured the period of a pendulum with your class. You obtained an average period, the standard deviation of the measurement, and the standard uncertainty of the mean. At that time we did not take any care about how many digits we included in those values. 

As scientists and engineers it is important that we express our results as precisely as we know them, but not more precise. We don't want to convey knowledge that we don't have. This is what happens when we include too many digits in the values we report.

:::Card (|Example||bg-UCSB-navy text-white)
If you were to measure the length of a table and report that the length is $1.4528762$ m long, you would be indicating that you know the length of the table to a precision smaller than a bacteria cell.
:::

Thus, when we report our values, we must be thoughtful about how many digits we use. The digits that we report are known as **significant figures** or **sig figs** for short. If you are unfamiliar with how to determine the number of sig figs in a value please see the [Significant Figures](?linkfile=references#part4) portion of the reference material.

:::Exercise (sigfigs|2 Points)
Determine the number of significant figures in the following values:

1. 15.02

2. 42.120

3. 0.0004

4. 12300

5. 12300$.$ 

:::

For this course (and in many scientific fields) the number of sig figs of a reported measurement will be determined by the uncertainty. These are the the two guidelines we will use for this course:

:::Card (|Guidelines||bg-UCSB-seagreen text-white)
1. The uncertainty will be reported with only one significant figure.
2. The precision of the measurement can NOT exceed the uncertainty (typically from Standard Uncertainty of the Mean).
3. For tables, your data should not be more precise than the uncertainty (typically from standard deviation or measurement equipment).
:::

The reason the uncertainty contains 1 sig fig is that if we are already uncertain to that digit, we are even more uncertain in an subsequent digits. Some fields of physics and other sciences will include two digits in the uncertainty, but we will not do that in this class.

Here is an example

:::Card (|Example||bg-UCSB-navy text-white)
You measure the period of a pendulum 10 times. You then use some software (e.g. Google Sheets) to calculate the mean period, the standard deviation, and the standard uncertainty of the mean. Your software returns the values with 15 decimal places of precision. These are the results:

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
Write a procedure that you will use to measure the period at both 10° and 25°. Make sure to include information that you learned from the previous lab.
:::

# Making a Quantitative Comparison

::::::::::::Activity
In section, your TA led a discussion about the interpretation of $t'$ and how you might go about making some claims based on the value of $t'$. Instead, we will replicate some of that discussion here with a few illustrative examples. You are also encouraged to read the reference material for further details of the statistics.

First, we will look at some histograms. A histogram is a graph which shows how often certain values were measured in repeated trials within an experiment. After conducting many trials, the histogram displays how many of the measured values fell within some range, called a bin. By looking at all the bins the data fell into, you can visualize the relative probabilities of a measurement.

In [](#Figure-repeat_exp)(a), we have two histograms with data from two experiments A and B. In this particular example, the experiments measure a time in seconds. In this case, experiments A and B were performed under identical circumstances (that is, the same experiment was repeated). The differences in the histograms reflect the random error associated with any experiment. In [](#Figure-repeat_exp)(b), we have highlighted the means for Experiments A and B as well and shading representing the standard error of each mean. As you can see, the means are similar and the bounds of the error are largely overlapping.

:::::::::Figure (repeat_exp|s|Row)
::::::row
:::col 
![](imgs/Absent-Lab2/repeat_exp.png "(a) Histograms for two experiments, Experiments A and B, measuring a time in seconds. These experiments were conducted under identical circumstances")
:::
:::col 
![](imgs/Absent-Lab2/repeat_exp_bar.png "(b) The histograms from (a) with their means and standard error of the mean highlighted")
:::
::::::
:::::::::

Thinking about these histograms can give us intuition on the $t'$ statistic discussed above. To make a connection between the histograms and $t'$, consider your measurement $A$ to be the mean of all the data in Experiment A and your measurement $B$ to be the mean of all the data in Experiment B. 

Finally, although the histograms in [](#Figure-repeat_exp) are just one example of two histograms from a repeated experiment, histograms of any kind of experiment that is repeated exactly will share an important feature: the difference in the histograms will be due to the random error of the experiment.

:::Exercise (|3 Points)
If you perform the same experiment twice and collect statistics both times, what do you expect the value of $|t'|$ to be?
:::

For the next exercises in this activity, think carefully about the meaning of the $t'$ statistic. It represents the difference between the two measurements divided by the square root of the sum of their errors squared. One way to gain intuition about $t'$ is to think about its size in various circumstances. As a hint, you can think about (you do not need to explicitly answer them) some of the following questions: 
-What does it mean when $|t'|$ is small? The numerator must be smaller than the denominator. 
-So, what can you say about the relative size of the difference in the measurements compared to how well we can resolve that difference? 
-What can you say when $|t'|$ is large?

Below, we have some illustrative histograms to compare different (non-repeated) experiments. In these cases, we do not know if our different experimental conditions will give us different values for our measurement. For each experiment, we have a short explanation of the histograms. When looking at the histograms, it may be helpful to think about the following discussion questions (you do not need to explicitly answer them) to guide your thinking for the exercises.

- Do you think we can convincingly argue that the means of the two experiments are different?
- Can we convincingly argue they are the same?
- Do you think $|t'|$ will be large or small?

In [](#Figure-spread), you can see that the histograms overlap a little bit, but that the means are far more separated than the errors on them.  

In [](#Figure-ambiguous), you can see that the histograms overlap significantly. The means are separated, but not by much more than their errors.

In [](#Figure-one_unknown), you can see that the one of the histograms is significantly more spread out than the other, indicating that experiment had more random error than the other. However, the means are fairly close and there is some overlap in the error on the two means.

:::::::::Figure (spread|s|Row)
::::::row
:::col 
![](imgs/Absent-Lab2/spread.png "(a) Histograms for two experiments, Experiments A and B, measuring a mass in grams. These experiments were <b>not</b> conducted under identical circumstances")
:::
:::col 
![](imgs/Absent-Lab2/spread_bar.png "(b) The histograms from (a) with their means and standard error of the mean highlighted. The value of $t'$ for these histograms is 31")
:::
::::::
:::::::::

:::::::::Figure (ambiguous|s|Row)
::::::row
:::col 
![](imgs/Absent-Lab2/ambiguous.png "(a) Histograms for two experiments, Experiments A and B, measuring a velocity in meters per second. These experiments were <b>not</b> conducted under identical circumstances")
:::
:::col 
![](imgs/Absent-Lab2/ambiguous_bar.png "(b) The histograms from (a) with their means and standard error of the mean highlighted. The value of $t'$ for these histograms is 1.58")
:::
::::::
:::::::::

:::::::::Figure (one_unknown|s|Row)
::::::row
:::col 
![](imgs/Absent-Lab2/one_unknown.png "(a) Histograms for two experiments, Experiments A and B, measuring a distance in centimeters. These experiments were <b>not</b> conducted under identical circumstances")
:::
:::col 
![](imgs/Absent-Lab2/one_unknown_bar.png "(b) The histograms from (a) with their means and standard error of the mean highlighted. The value of $t'$ for these histograms is 0.37")
:::
::::::
:::::::::

In order to answer the following exercises, be sure to read the previous discussion carefully. You should also look at the figures and read the captions.

:::Exercise (|a. 3 Points / b. 4 Points)
1. What conclusions can be drawn if $|t'| \leq 1$?
2. What actions might you take to ensure that your conclusion is accurate?
:::

:::Exercise (|4 Points)
What conclusions can be drawn if $1 < |t'| \leq 3$?
:::

:::Exercise (|a. 3 Points / b. 4 Points)
1. What conclusions can be drawn if $|t'| > 3$?
2. What actions might you take to ensure that your conclusion is accurate?
:::

::::::::::::

# The Experiment

## Using the PhET
For the activities you will want to have the PhET set in a particular way and use some specfifc tools. This section will show you how to set up the simulation. 

1. Start by selecting the stopwatch checkbox in the lower left corner of the screen. You will be using the stopwatch to make measurements of the period. You can see the selector and the stopwatch in [](#Figure-stopwatch) below.

:::::::::Figure (stopwatch|s|Row)
::::::row
::: col
![Three checkboxes. The middle one is labelled stopwatch. Selecting this brings up the stopwatch.](imgs/Absent-Lab1/Stopwatch-Selection.png "a) Stopwatch Selection Menu")
:::

::: col
![An image of the stopwatch. It has numbers indicating the elapsed time. There are two buttons below the time. The one on the left is for resetting the stopwatch and the one on the right is for starting and stopping the stopwatch. ](imgs/Absent-Lab1/Stopwatch.png "b) Stopwatch")
 
:::
::::::
:::::::::

:::Figure (settings|s|R)
![A picture of the settings for the lab. There is a slider labbeled gravity, that is about half way and a dropdown below it that reads "Earth". There is a second slider labelled "Friction" set all the way to the left for no friction.](imgs/Absent-Lab1/GravityAndFriction.png)
:::

2. Ensure that gravity and friction are set to Earth and None respectively. This is the default setting and you shouldn't need to switch it for the lab. See the proper settings in [](#Figure-settings)


:::::::::Activity

In this lab you will attempt to determine if there is a difference between the period of a pendulum released at 10° and 25°. 

Follow your procedure and use the $t'$ statistic to help make a case for one way or the other.

There is not a "right answer" for this activity. You are not trying to prove something. You are trying to make a measurement and draw a conclusion from your data. 

You will be graded on whether or not you made logical and justified decisions in your lab and that you properly analyzed your data using uncertainty and statistics provided.

:::Note
You should pause and do calculations throughout your lab to evaluate your measurement process and your data.
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


