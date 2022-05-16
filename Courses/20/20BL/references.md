
# Reference Material

# Uncertainty

Physics is the study of the laws of nature through observation and experiment. In an experiment, we perform measurements and collect data, then we interpret the data and derive trends and relationships between our variables.

When we measure a quantity, say the length of a pendulum, we will never be able to measure the **true value** of the length. Instead, if we are careful and thoughtful in our measurement, we will get a length close to the true length, our **best estimate**. 

The most honest way to report our measurement to others is to provide our best estimate and a window of values in which the true length might fall. This window is called our **uncertainty**. We would typically write down the length of the pendulum in the following format.

$$
60.23 \pm 0.05 \text{ cm}
$$

The 60.23 cm is our best estimate, and the 0.05 cm is our estimate of the uncertainty.  We are saying that our best guess at the true length of the rod is 60.23 cm but the true length is most likely between 60.18 cm and 60.28 cm.

:::Note
**Uncertainty is unavoidable in every measurement**
:::

Typically, the uncertainty comes from two sources, systematic and random uncertainty. 

## Systematic Uncertainty

**Systematic uncertainty** causes the measurement to consistently be high or low. Systematic uncertainty usually arises from measurement technique or other physical influences, for example improperly calibrating an instrument or assuming a variable is negligible. The job of the experimenter is to minimize the systematic uncertainty and eliminate it if possible. 

One example of systematic uncertainty we might see while measuring the length of the pendulum is the following. Imagine we were using a metal meter stick that was calibrated at 25 °C but we were making our measurements at 15 °C. The metal would contract making the markers spaced shorter than 1 mm apart. Thus all of our measurements of the pendulum length would be larger than the true length of the pendulum is.

Knowing this, the next questions an experimenter would ask his/her self are, "how does this systematic uncertainty compare in magnitude to the rest of my uncertainty? Can I ignore this effect?" and if not, "how can I account for contraction of the meter stick or prevent it from contracting in the first place?"

## Random Uncertainty

**Random uncertainty** are random variations in *every measurement* that do not consistently cause the measurement to shift in a high or low direction but instead randomly high and low. That is to say if we repeat a measurement, the values of the measured quantity will vary from each other, measurement to measurement. The values will be randomly distributed around a mean value.

Random uncertainties are caused by limitations in our instruments or fluctuations in the physical system. We can't eliminate random uncertainties, but we can minimize them by using precise instruments and by collecting a large data set for calculating the average of our measurements. Thus, we need to perform multiple trials by repeating the experiment several times to help reduce the random uncertainty. 

:::Note
- All measurements have uncertainty in them. They may have both random and systematic uncertainty.
- An experimenter should do their best to minimize systematic uncertainty in their measurement.
- Random uncertainties is unavoidable but should also be reduced as much as possible.
:::

## Accuracy and Precision

:::Figure (accuracyTargets|m|R)
![A picture of four bullseye targets in a 2 by 2 grid. Top left is labels High Precision and Low Accuracy. It has a small cluster of holes not located on the central bullseye. The top right is label High Precision and High Accuracy. It has a small cluster of holes this time on the central bullseye. The lower left is labelled as lLow Precision and Low Accuracy. It has a large spread of holes not near the central bullseye. The lower right is labelled as Low Precision and High Accuracy. It has a large spread of holes that average around the central bullseye. ](imgs/Reference/targets.png)
:::

Measurements are often classified by their precision and accuracy. **Accuracy** indicates how close one is to the true value of measurement. This is often times a predicted or standard value. **Precision** indicates how tightly the measurements are grouped together. 

Accuracy and precision are independent of one another. The definitions and independence are depicted visually in [](Figure-accuracyTargets).

Precision can be measured by looking at the uncertainty in our measurement. Accuracy is not so simple to determine. In order to make a useful statement about accuracy we must first understand the precision of our measurement. It's not useful to makes claims about accuracy if the uncertainty is too high. For instance, perhaps someone missed evenly all around the target but never hit the target itself. All of the holes would average to a bullseye but we would not consider the thrower to be accurate. 

# Statistics

:::Figure (histogram|l|L)
![j](imgs/Reference/histogram.png)
:::

For the majority of this class, when making some claim we will begin our justification with some amount of statistics. Thus when we make a measurement we will want to repeat it so that we can get some quantitative values to support our claims.

For this class, we will assume that all of our measurements will follow a Gaussian distribution. Thus when you make many measurement you will be able to produce a histogram similar to [](Figure-histogram).

## Mean
The mean of your data can be calculated in the typical way:

:::Equation
$$
\bar{x} = \frac{1}{N}\sum_{i=1}^{N} x_i
$$
:::

This will represent our best estimate of the true value of what we measure.

## Standard Deviation
The width of the histogram is characterized by the standard deviation. The standard deviation tells use that if were to make another measurement there is a 68% chance that our new measurement would be within one standard deviation of the mean. 

The standard deviation is calculated with the following equation:

:::Equation
$$
\sigma = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2}
$$
:::

:::Note
Increasing the number of measurements you make should not change the value of the standard deviation.
:::

## Standard Uncertainty of the Mean

When we make many measurements and want to estimate the mean, we get a reward for all of the our hard work. The uncertainty in the mean *does decrease* as we take more measurements.

The uncertainty in the mean is given by the following equation:

:::Equation
$$
\delta \bar{x} = \frac{\sigma}{\sqrt{N}}
$$
:::

# Making Comparisons

Often times we want to compare two values and make a quantitative judgement about the relationship of the two values. We will do this using a statistic that we will call $t'$. It is found with the following equation:

:::Equation
$$
t' = \frac{A-B}{\sqrt{\delta A^2 + \delta B^2}}
$$
:::

Once $t'$ is calculated we can evaluate the similarity or distinguishability of our two measurements using the following criteria:


$|t'| \leq 1$: This implies that the two measurements are not distinguishable at the resolution of your uncertainty. This may be because be you are measuring the same thing in both measurements ($A$ and $B$ are likely the same) or that your uncertainty is so large you can't tell the difference. If you find yourself in this situation you may want to do the following:
- Reduce your uncertainty to see if you the two results are still the same.
- Improve your measurements.
- Check that you have appropriately accounted for uncertainty and verify that you haven't overestimated the uncertainty.

$ 1 < |t'| \leq 3$: When $|t'|$ is in this regime it is possible that $A$ and $B$ are the same but at this level of uncertainty it is hard to be sure.

$|t'| > 3$: At this point is very likely that these two measurements are indeed distinguishable. If this is the case $A$ and $B$ are probably not measuring the same thing. If you find yourself in this situation you may want to do the following:
- Improve your measurements.
- Evaluate your model and considering revising it. 
- Make sure that you have appropriately accounted the uncertainty and that you haven't underestimated your uncertainty. 


# Significant Figures

When we quote our measurements, the number of digits we write has to correlate with the precision of our measurement tool. When we read a scale, we can interpolate between two of the finest divisions on the scale to find the first uncertain digit.
For instance, if we use a scale whose finest divisions are 1 $\text{cm}$ apart, we can quote a measurement as 1.6 $\text{cm}$.  We could not quote it as 1.6723 $\text{cm}$, since our ruler does not have that much precision.

For a scale whose finest divisions are 1 mm apart, we could quote a measurement as 1.67 $\text{cm}$, since the last digit mentioned (7, obtained by interpolation between neighboring mm marks) is the uncertain one.

To know the best way to write our answer, we must determine which **digits carry meaningful information**, and which ones do not. That is, we keep only those digits that are *significant*. We call these *significant figures*, which many people shorten to *sig figs*. These are all the digits whose values are certain, plus the first uncertain one.

To determine the number of significant figures, count from left to right the number of digits.

:::Card (|Example||bg-UCSB-navy text-white)
$1.6$ $\text{cm}$ has two sig figs, whereas $1.67$ $\text{cm}$ has three sig figs.
:::



Note that leading zeros after the decimal point are not significant. They merely determine the location of the decimal point.

:::Card (|Example||bg-UCSB-navy text-white)
$0.0167 \text{ m}$  has only three significant figures. (This is the $1.67$ $\text{cm}$ quoted before.)

:::


Zeros at the end of a number (trailing zeros) can be significant or not depending on context. If the trailing zero is to the right of a decimal point then we will count it as significant. 


:::Card (|Example||bg-UCSB-navy text-white)
$12.450$ has five sig figs, while $12.45000$ has seven sig figs.
:::

If the trailing zero is to the left of the decimal point it can be ambiguous. To avoid ambiguity we use the following convention. If the number ends in a decimal point, all of the zeros are significant. If the number does not end in a decimal point, the trailing zeros are not significant.

:::Card (|Example||bg-UCSB-navy text-white)
 $4,510,000$ has three sig figs, while $4,510,000.$ has 7 sig figs. 
:::

Finally, if the final significant figure in a number is a 0 to the left of the decimal and it is not in the ones's place, you must write that number in [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation). Scientific notation is the preferred notation in much of STEM because significant figures are unambiguous.
:::Card (|Example||bg-UCSB-navy text-white)
 $4,510,000$ has three sig figs, while $4.5100 \times 10^{6}$ has 5 sig figs. 
:::



## Significant Figures and Uncertainty
When we take data with an estimated uncertainty, the uncertainty will always be in the first uncertain figure. This is natural, of course, since digits beyond the location of the uncertainty of the number are washed out by the possible error.

:::Card (|Example||bg-UCSB-navy text-white)
If you measured a dog's height to be $101.537$ $\text{cm}$, but your ruler and technique suggested an uncertainty of $\pm 0.4$ $\text{cm}$, then naturally, the last significant figure in your measurement is '$5$', i.e., $ \text{Height of dog} = (101.5 \pm 0.4)$ $\text{cm}$ 
:::


But how many significant figures should be reported in the uncertainty *itself*? The answer to this is easy! **The uncertainty is always reported with one significant figure,** for the same reason as above: the additional digits in the uncertainty are far less important than the first digit.
# Making a Good Table
In the previous assignment you learned some basics about how to make a table for your lab report. Here we will write down the requirements for any table that you submit. Expand the box below to see the requirements.


:::Hider (|Recipe for a Good Table)
**In order for the table to convey the data scientifically, it must contain:**

1. Data organized in columns with descriptive headers that specify variable names and **units**.  If a table must span multiple pages, a header needs to be added for every page.
2. Correct number of significant figures for the data. 
3. If you have any calculations in your table, then you should show your work for **one row** of the table. 
:::

In [](#Figure-table_ex) we show an example of an excellent table and a not-so-great table. Just by glancing at them, you can probably guess which table is which -- the bad table is visually confusing and difficult to read, independent of its poor technical qualities.

:::::::::Figure (table_ex|s|Row)
::::::row
::: col
![Table 1](imgs/Lab2/GoodTable.png "a) Table 1")
:::

::: col
![Table 2](imgs/Lab2/BadTable.png "b) Table 2")
 
:::
::::::
:::::::::

In (a), the two variables that were measured are clearly described, the headers have units, the values have the proper number of sig figs, and their decimal points are aligned. In (b) the variables are not clearly described. Even if you could determine what the two columns represent, there is no way for you to know the units. Is it seconds and millimeters? Hours and nanometers? Years and feet?

Your goal with a table, is to communicate what you did as simply as possible to those reading your report. For this class, that means your TA, who will be grading your report. If you are clear in your thoughts and your tables, it is more likely that your TA will be able to understand any mistakes you make. This will allow them to provide better feedback, and maybe even take off fewer points. If your TA can't follow what you did, they are more likely to take off points.

Here is a video demonstrating how to make a nice table like in (a). 

:::Video
<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/pnvFYFyK7zs" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::


# Working with a Spreadsheet
Spreadsheets will make your life **MUCH** easier. We highly recommend that you take the time to learn how to use them. It will be a useful skill for all of your physics lab courses, and you probably will even find it useful in the real world. 

We will assume that you can make a table from having done the first lab. These data are recorded by a car traveling from San Diego to San Francisco. The driver marked the distance traveled in kilometers roughly every 60 minutes. Once the car got on the freeway, the driver put on cruise control and  never stopped (what amazing mileage!). 

**We want to answer the question: at what speed, in mph, did the driver set their cruise control?**

We know that for an object traveling at a constant velocity, $v$, starting at position $x_0$, that its position, $x$, as a function of time, $t$, is given by the following linear equation:

:::Equation

$$
x = vt+x_0
$$
:::

Our plan here is to convert the data table into units of miles and hours so that we can answer the question in the correct units, then to fit a line to our data, where the slope should be the velocity. 

## Using Equations in a Spreadsheet

The driver took data in units that we would like to convert. We do that in a spreadsheet program by using equations and functions. Watch the video below for instructions on how to use sheets to help with conversions.

:::Video

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Nv4Ty11e00k" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

# Least-Squares Algorithm

You have a data set that is a list of $N$ ordered pairs $(x_1, y_1),\ (x_2,y_2),...(x_N, y_N)$ that represents your data. You want to draw the best fit line through them.

1. Start with a line that has the equation $Y=mx+b$. We want to see how good this line matches the data. 
2. We start by looking at how bad this line is from our data set. We do that by with the following equation:

:::Equation (residuals)
$$
\sum_{i=1}^{N} (y_i-Y(x_i)) = \sum_{i=1}^{N} y_i - (mx_i+b)
$$
:::

That is to say, we look at the difference each of our data values $y_i$ and the $Y$ value determined from our line of best fit. These differences are called the **residuals**.

3. On average, the sum of [](#Equation-residuals) will be zero since we should have data equally above and below. So like we do with standard deviations, we will look at the sum of the squares of the residuals so that we get a positive answer.

:::Equation (sumSquares)
$$
\sum_{i=1}^{N} (y_i-Y(x_i))^2 = \sum_{i=1}^{N} (y_i - (mx_i+b))^2
$$
:::

4. Finally we weight the data by the inverse of its uncertainty squared. For this course we will assume the uncertainty is constant for each data point.

:::Equation (chi-squared)
$$
\chi^2 = \sum_{i=1}^{N} \frac{(y_i-Y(x_i))^2}{\sigma_y^2} = \sum_{i=1}^{N} \frac{(y_i - (mx_i+b))^2}{\sigma_y^2}
$$
:::

This value is called chi-squared.

5. Finally we minimize chi-squared by adjusting the $m$ and $b$ parameters of our line until the sum of the residuals squared is at a minimum. This is why it is called the least-squares algorithm. Typically this part is handled by a computer.  

# Propagating Uncertainty

Sometimes you make a measurement of some value and you want to use that value to calculate some new value. How do you determine the uncertainty in your new calculated value?

The uncertainty is propagated through the equation! That is the uncertainty is carried through using an equation to determine the new uncertainty of your calculated value.

If you are determining an uncertainty from the calculated value $q$ using the measured values $x_1, x_2, ...x_n$, the uncertainty is propagated with [](#Equation-uncertaintyPropagation)

:::Equation (uncertaintyPropagation)
$$
\delta q = \sqrt{ \sum_{i=1}^{N} \left ( \frac{\partial q}{\partial x_i} \delta x_i \right )^2 }
$$
:::

:::Card (|Example||bg-UCSB-navy text-white)
Let's say you measure the acceleration due to gravity $g$ using a pendulum. You have measured the period, $T$, with uncertainty, $\delta T$, and the length, $L$, with uncertainty $\delta L$. You assume you have a simple pendulum and you know that: 

$$g = 4\pi^2 \frac{L}{T^2}$$

To get the error in $g$ you apply [](#Equation-uncertaintyPropagation). You note that:

$$
\begin{aligned}
    \frac{\partial g}{\partial T} &= -8\pi^2 \frac{L}{T^3} \\\\
    \frac{\partial g}{\partial L} &= 4\pi^2 \frac{1}{T^2}
\end{aligned}
$$

Thus [](#Equation-uncertaintyPropagation) becomes:

$$
\begin{aligned}
    \delta g &= \sqrt{ \left ( \frac{\partial g}{\partial T} \delta T \right )^2 + \left (  \frac{\partial g}{\partial L} \delta L \right )^2} \\\\
    &= \sqrt{ \left (-8\pi^2 \frac{L}{T^3} \delta T \right )^2 + \left ( 4\pi^2 \frac{1}{T^2} \delta L \right )^2}
\end{aligned}
$$

:::

# Plotting in Google Sheets

This below is a video that give an introduction on how to plot in google sheets and perform a linear fit. It also explains how to use the "LINEST" function to determine the uncertainty in the slope and intercept from your fit.

:::Video
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wkqlSuAoFLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

>>>>>>> 391ca0ec91e697ba46bf589e73ef2e90ff7f7afe
