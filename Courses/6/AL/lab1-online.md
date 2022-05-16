# Position, Velocity, Acceleration, and Falling Objects


::::::Intro (This Week's Topic: Motion!)
We will investigate how to describe, mathematically, the trajectory of a body moving under the influence of a force. Following this discussion we will turn our attention to a real experiment. The data from this "real-world" experiment will be analyzed and compared to the "ideal" theory and you will draw inferences about the underlying physics.

::::::

To get a feel for the concepts in this lab, feel free to play with [](#Simulation-balldrop). You can adjust the sliders to see how different conditions affect the trajectory of the ball. Observe how increasing and decreasing air resistance affects the shape of the graph! In this lab you will explore this phenomenon using your analytical and mathematical skills.

:::Simulation (balldrop)
<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BallDrop/Page.html"  height="1000" style="border:none;width:100%"> </iframe>

:::





# Keeping Track of Motion in 1D

For a body in motion, we are typically concerned with three variables which characterize the trajectory of some object. The first and most familiar is the **position**, which tells you where an object is at some instant, with reference to some coordinate system. The position of an object, however, is not always useful — think about a fast moving car on the highway: while you may know which exit you saw it at in one instant, you won't know where the car is a few minutes later unless you know its **velocity**. The velocity of a car, as you instinctively know, tells you something about how its position *changes in time*. 

Now, if that car happens to be on Route 405 in Los Angeles, even knowing its velocity won't help you figure out where it is minutes later — the heavy LA traffic means that the car's velocity could change at a moment's notice! This change in velocity over time is called **acceleration**. 




:::Definition (Variables of Motion in 1D)

The **position**, $x(t)$, quantifies where a body is located in space at a given time. In this lab, this is simply the *height* of an object above the ground.

--- 

The  **velocity**, $v(t)$, quantifies how the *position* of an object changes over time. It is a measure of the speed *and* direction the object is traveling at a given time. 

--- 

The **acceleration**, $a(t)$, quantifies how the *velocity* of an object changes over time. Physically, it originates from the forces acting on the body through $F=ma$.


:::


These three variables are interrelated, as each of the latter two quantities tells you about the *change over time* of the previous one [fn]You may wonder what a change in acceleration is. This is called [*jerk*](https://en.wikipedia.org/wiki/Jerk_(physics)).We could go on to define the change in jerk and so on, but as it turns out, the three variables in our current discussion are often more than adequate to describe most kinds of motion[/fn]. In this lab, we will learn about what these relationships mean in both a qualitative and quantitative way. Since we are going to experiment with these concepts by dropping a ball off the side of Broida, the remaining discussions in the manual will focus on this scenario.

:::Note (vectors|7 C )
Unlike the simple case of 1D motion, when we are considering motion in 2D (a plane) or 3D (a volume), all three quantities must be expressed as *vectors*, with independent components for each possible direction of motion. 
:::


## Motion with No Forces

To make our discussion concrete, we should review some basic physics for the case in which there are no forces acting on the body of interest. In this and the following sections, we will do thought experiments on what happens to a ball as it is released in various scenarios, similar to the experiment you will perform. 

### An Object at Rest

The first case of force-free motion to consider is a body starting at **rest**.
:::Definition (Rest|6 C)
An object at **rest** has a velocity of $v=0 \text{ m/s}$ in the frame of interest. 
:::

From [](#Definition-VariablesofMotionin1D), [](#Definition-Rest), and your intuition alone, you can probably guess what happens to an object at rest when no force is acting upon it. Take a minute to consider the situation and try answering the *Check Your Understanding* box below ;;;Don't worry — This isn't graded!;;;.


:::Quiz (rest| $0\text{m}$ --- No! Would mean that the speed was $-2.5\text{m/s}$|$25 \text{m}$ --- Correct! Since the ball is stationary  $$v_0= 0\, \text{ m/s}$$ so it is still at $y=25\text{ m}$!| $250\text{ m}$ --- No way! Go back and check your work.)
 Let's imagine that that at $t=0$, we have a ball at **rest** at a height $y_0= 25 \text{m}$. There are no forces acting on the ball. What is its position at $t=10\text{s}$?
:::
:::Figure (noforce|m|R)
![A graph showing the trajectory a ball takes in time when no force is applied to it. The vertical axis of the graph is distance and the horizontal axis is time. The plot appears as a perfectly horizonal line through the initial position of the ball since the position does not change.](imgs/VelAcc/nov_pos.gif "The trajectory of the ball with no force and zero initial velocity")
:::
Indeed, when there are no forces acting on a body, there is no acceleration; hence, the body's velocity does not change. Since the ball started at rest, e.g. $v(0\text{s})= 0\text{ m/s}$, it *stayed* at rest[fn] You might recognize this as Newton's 1st Law — the law of inertia![/fn]. Since the ball remains at rest, its position doesn't change.




### An Object with Non-Zero Velocity
Now we imagine that this ball is given an initial velocity $v_0 = + 10$ m/s by being tossed upwards, with no forces acting upon it after its release (for example, in space).  Since no forces are acting on the ball, the *change* in the velocity must be zero, so $v(t) = v_0=10 \text{ m/s}$ for all time.  Note that the time, $t$, does not appear in this equation!

Since the velocity tells you how an object's *position* is changing with time, and we know that the velocity in the absence of force is constant, we can say that the position of the ball will increase by $10$ meters per second that passes. 


:::Quiz (const-vel| $125 \text{ m}$ --- Correct! The ball traveled for $10\text{ s}$ at $10\text{ m/s}$, meaning it travelled $10\text{ s} \times 10 \frac{\text m}{\text s} = 100$m from its initial position of $25$m|$25 \text{ m}$ --- Careful! This is where the ball would be if it was at rest.| $250 \text{ m}$  --- Don't multiply random numbers together — make sure your math makes physical sense.)

From the discussion above, we deduce that a ball that started at $x_0 = 25 \text{ m}$ with an initial velocity of $v_0 = 10\text{ m/s}$ at $t= 10\text{ s}$ will be located at $y(10 \text{s})$ =

:::


:::::::::Figure (constvel|l|Row)
::::::row
:::col
![A graph of a balls position over time when no force is applied, but the starting velocity is not zero. The vertical axis of the graph is position and the horizontal axis is time. The plot appears as a straight line of slope v naught through the initial position of the ball.](imgs/VelAcc/v10_pos.gif "a) When there is no force, the velocity remains constant")
:::
:::col
![A graph of a balls velocity over time when no force is applied. The vertical axis of the graph is velocity and the horizontal axis is time. The plot appears as a perfectly horizonal line through the initial veloctiy of the ball since the position does not change.](imgs/VelAcc/v10_vel.png "b) Constant velocity, like constant position, appears as a perfectly horizontal line")
:::
::::::
:::::::::

Generally, in the absence of external forces, we can capture this relationship mathematically as:

:::Equation (noforcep|Position at Constant Velocity)
$$
y(t) = v_0 t + y_0
$$

:::
In plain English, the above mathematical sentence translates to: "The position of the ball at a given time is equal to the distance it travels per unit of time (*e.g.*, seconds), multiplied by the time that has passed, plus its original position." Really make sure you understand this statement before moving on.
:::Note (|8 C)
Important distinction! It is easy to get speed and velocity mixed up. Speed doesn't care about the direction an object is moving and is always positive. Velocity does care about direction. For Example, a falling ball has a velocity of $-3 \text{ m/s}$ , but a speed of $3 \text{ m/s}$. On the other hand, a ball thrown upwards could have the same speed $3 \text{ m/s}$, but would have a different velocity $+ 3 \text{ m/s}$.
:::




## Motion Under Constant Acceleration
Once we include external forces acting on a body, we now must think about how the velocity changes over time. Consider that we repeat this experiment on the moon, so that our ball is accelerating toward the ground at approximately $a = -1.6$ m/s$^2$. 

Before we can think about how the *position* of the ball changes over time, we first have to analyze the *velocity*. Similar to [](#Equation-noforcep) for change in position, our equation for velocity is now:

:::Equation (constant-force| Velocity under Constant Acceleration)
$$
v(t) = a t + v_0 
$$
:::

:::Quiz (const-force| $ 6\text{ m/s}$ --- Careful about your signs! A positive velocity means that the ball is traveling *away* from the ground.| $ 16\text{ m/s}$ --- Careful about your signs! Is the acceleration in the same direction as the initial velocity?|$ -6\text{ m/s}$ --- Correct! By multiplying the change of velocity per unit time by the elapsed time, we can get the change in velocity)
Using [](#Equation-constant-force), we find that at $t = 10 \text{ s}$ our ball that had an initial velocity of $v_0 = 10 \text{ m/s}$ has a final velocity of: 
:::


While the [](#Equation-constant-force) easily lets us calculate the velocity at any time during constant acceleration, the changing velocity becomes an issue when we try to calculate the new position of our ball. Since now the velocity is continually changing, [](#Equation-noforcep) is no longer correct. We can see from Graph (a) in [](#Figure-withforce) that the expression for position as a function of time is no longer a simple linear relationship!

:::::::::Figure (withforce|xl|Row)
::::::row
:::col 
![](imgs/VelAcc/acc_pos.gif "(a) Position vs. time in the presence of an external force")
:::
:::col 
![](imgs/VelAcc/acc_vel.png "(b) Velocity vs. time in the presence of an external force")
:::
::::::

 
:::::::::


### Position during constant acceleration

You might guess the equation for position is some kind of quadratic function after seeing [](#Figure-withforce). This is correct — given the relationship between velocity and acceleration above, it is an exercise in calculus to show that the following relationship is true:

:::Equation (positionwithforce| Position under Constant Acceleration)
$$
y(t) = \frac{1}{2} at^2 + v_0 t 
+y_0
$$
:::



:::Quiz (const-force2| Click to Reveal Answer --- $45\text{ m}$.)
Putting it all together, for the ball on the moon, we have that $x(10\text{ s}) = $ 
:::


## General Properties of Motion Curves
:::Figure (motionfunc|s|L)
![](imgs/VelAcc/Constant.png "a) Constant position vs time")
![](imgs/VelAcc/Linear.png "b) Linear position vs time")
![](imgs/VelAcc/Quad.png "c) Quadratic position vs time")
:::
Before you start the lab, we have one last theoretical discussion: given a plot of position versus time, how can we make quantitative and qualitative statements about the physics of a falling object?

To answer this, we have two important statements to make from the discussion above:

The velocity of an object at a certain time is the slope of the distance-time graph at that point.
Similarly, the acceleration of an object at a certain point is the slope of the velocity-time graph at that point.
Before discussing this, there are three plot shapes that are important to understand for this analysis: constant, linear, and curved.

Constant refers to a value that is not changing in time, a horizontal line, as can be seen in [](#Figure-motionfunc)a . Linear refers to value that is changing with time but has a linear slope as seen in [](#Figure-motionfunc)b. Curved refers to a value that is changing with time and is not linear as seen in Fig 4c.

[](#Figure-motioncurves), obtained from from Hyperphysics, shows the trajectory of a body whose acceleration is constant for each segment of time. Acceleration being constant for each segment is important for simplifying our plots.

[](#Figure-motioncurves)a, shows the three plots unobstructed. Notice how the velocity corresponds to each section of the position plot.

:::Figure (motioncurves|m|R)
![](imgs/VelAcc/HP_MotionGraphs_Download.png "a) View of motion curves")
![](imgs/VelAcc/HP_MotionGraphs_Annotated.png "a) Labeled motion curves")
:::

In particular notice that:

- Whenever the position plot is linear, the velocity is constant.
- Whenever the position plot is curved, the velocity is linear.
- If the position is curving upwards, the velocity is positive
- If the position is curving downwards, the velocity is negative.
- The Acceleration plot corresponds to the velocity plot exactly the same way the velocity plot corresponds to the position plot.


[](#Figure-motioncurves)b indicates points on the plots which correspond to the description of Part A. Please study the plots and notes in Part B to understand how they relate.


::::::Exercise (|1 Point)
Now that you have gained familiarity with position, velocity, and acceleration plots we can do analysis. In this exercise you will take a new position plot and create sketches of the velocity and acceleration plots. Please see [](#Figure-ex1) below.

:::Figure (ex1|xl)
![](imgs/VelAcc/PvTSketch.png "Sample Position v.s. Time data. The dashed lines indicate where the plot changes from one of our above mentioned plot shapes to another.  Click to enlarge")
:::



1. Make a sketch plot for velocity with dotted lines in the same positions. You may do this by hand and photograph it, or use a digital drawing program. ;;;A sketch is just a quick drawing to display the important features of a plot, e.g. linear, parabolic, or constant. You should label the axes, but you don't need a title;;;
2. Sketch the velocity curve for each segment in you skeleton plot.

3. Do the same to make an acceleration plot. Please note you will now have to refer to the velocity plot instead of the position one.

4. Describe the motion in words. What is happening to the object in each segment of time? (1-2 Sentences for each segment) 

:::Note (|10 C)
Make sure to take a picture of your sketch plots and include them in your report along with the description.
:::

::::::

# Obtaining the Data

## Collecting Data from an Experiment
:::Figure (balls|s|R)
![The sport balls](imgs/VelAcc/Balls2.png)
The sport balls - click to enlarge
:::

In [](#Activity-drop) we will look at different balls dropped from the sixth floor walkway of Broida Hall. The four balls dropped in Video are of varying sizes and weights. [](#Figure-balls) shows the balls &mdash;a basketball, a volleyball, a beachball, and a dog ball &mdash; which each have different trajectories upon release. How do the properties of these sport balls affect how they fall?

The pink dog ball is small but fairly weighty for its size &mdash; in other words, it is *dense*. The basket ball is medium sized and is moderately heavy. The volley ball is smaller than the basket ball and slightly lighter as well. The beach ball is by far the largest and the lightest. These four balls should give a wide range of masses and sizes for our data set. 

::::::Activity (drop|Collecting data: Basketball Drop (15 min) )

In this exercise you will be collecting data on the height of a ball in freefall versus time. All four balls are dropped, however, you will **only be taking data for the basketball.** The data on the other balls have been taken for you. 

We have annotated [](#Video-balldrop) for you with the height measurements and an embedded stopwatch. These will be useful tools for your data collection.

**Instructions:**
1. Make a copy of the [template table](https://docs.google.com/spreadsheets/d/15SBpcXPMgbUNaSU0EcvD1j5YY65JeYB5pVOqdG-vt3k/edit?usp=sharing) for the Basketball Measurement. 
  - You will need to make this table a [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) by including descriptive titles, replacing "u" with the proper unit, and formatting it to be appealing.


2. Watch [](#Video-balldrop) and see how each ball falls to the ground. 

3. Record 10 data points by pausing the video and noting the distance from the top and the timestamp on the embedded stopwatch. Be sure to use the correct significant figures!



:::Video (balldrop| Dropping the Basket Ball)
<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/OZn--kkp2vA" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::


::::::

:::Exercise (ball-drop-table|2 Points)
Include your completed Basketball data table here. Be sure it follows all the rules of a [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport).
:::


## Understanding & Organizing Data
You have now collected some data for a basketball falling from the sixth floor of Broida! As mentioned above, three other balls were dropped from the same point at Broida. Rather than have you repeat the same data collection we have collected data for you using a software called Tracker.

Tracker allows us to monitor the location of the ball at every frame of the video which happens once every 1/30 seconds. This method has two advantages. 

1. We are able to more precisely identify the location of the ball.
2. We are able to collect many more data points.

Below is a short video demonstrating how the Tracker software was used to collect data for the four drops.

:::Video (tracker| Tracking Software Demonstration)

<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/hvwjn3tAtqc" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

The data you will need is in the box below, including a link to the google sheet holding it.

::::::Hider (datatable|Table of Data - Click to Expand)
<iframe width="100%" height ="400px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRjap_R4TFvQqlPgrOHBNpjmNz1h0AOOVBmnvw95l6yJlgL8EKgRB0ahCc4HR-Pt9Qvho_yBRfRecRE/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

::: center 
[Link to Google Sheet](https://docs.google.com/spreadsheets/d/1XI2mEKyuVftiG0uhUlS6Iah3zZuiGx1tUE5g1-e0ZIw/edit?usp=sharing)  
:::
::::::


Please open the link to the Google Sheet data when you are ready to start [](#Activity-full-table).

::::::Activity (full-table|Obtaining the Data for All Four Balls (15 min))
**Instructions:**
1. Start by copying the data linked in [the above table](#Hider-datatable) into separate spreadsheet. 
2. Insert your data you took for the basketball into the table and plot all four ball drops on one plot. For instructions on how to do this, revisit [Lab 0](?linkfile=lab0) and watch the following video. 

:::Video (drop-2)

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PT6GM85ut4I" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::
::::::



:::Exercise (|3 Points)
Include a copy of your completed [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) here. It should have the new data and also your data.
:::


# Analyzing the Data

## Qualitatively Understanding your Data
In [](#Activity-anal) you will begin analyzing the drop data. You will apply what you learned in the Physics Primer, and try to **infer** something about the underlying physics.

:::Activity (anal| Analyzing the Data (10 min))
**Instructions:**

1. Start by just looking at your data. 
    - **Analyze it qualitatively by using the tools you learned in Part 1 of the lab.** 
    - Try to determine what parts of each drop are falling under constant acceleration or constant velocity.
2. Notice how the Dog Ball, Basket Ball, and Volleyball all look very similar. The beach ball is quite different from the other three. Pick one of the three similar data sets and the beach ball and **sketch**;;; A sketch is just a quick drawing to display the important features of a plot, e.g. linear, parabolic, or constant. You should label the axes and the two lines, but you don't need a title. You shouldn't spend more than 5 minutes drawing this.;;; a velocity vs time plot for both data sets on the same graph.

:::

:::Exercise (|2 Points)

1. Include a picture of your sketch here.
2. Using the velocity lines, translate the plot into a brief description of the drop (1-2 Sentences).

:::

## Quantitatively Understanding your Data
In [](#Activity-fit), for each of the datasets, you will perform a polynomial fit of degree 2. This will draw a line of best fit by using a quadratic function. That is that it will attempt to fit the equation:


:::Equation (fit)
$$
y = ax^2+bx+c
$$
:::

The computer will adjust $a$, $b$, and $c$ to best fit the data provided. Let's start by understanding what $a$, $b$, and $c$.

[](#Equation-fit) looks a lot like our kinematic equation for motion. Let's equate [](#Equation-fit) to the kinematic equation. We do this in  the table below. Each row starts by defining the variable. The next column has the symbol we use to represent the variable in the fit. The final column has the equivalent symbol used in the kinematic equation.
:::Table eq
| Variable Name | Fit Symbol | Kinematic Symbol |
| -------- | -------- | -------- |
| Time     | $x$     | $t$     |
| Position | $y$    | $y$    |
| Acceleration| $a$ | $\frac{1}{2}g$ |
| Initial Velocity | b |  $v_0$ |
| Initial Position | c | $y_0$
:::



::::::Activity (fit| Check Your Understanding (15 min))
**Check your understanding:** 

This is a critical concept that you understand before moving forward. Below are three questions. Read them and spend a few minutes trying to answer them for yourself. When you think you have the answers, click the link at the bottom to take you to the answers. 

1. For an ideal fall (one that falls exactly like the kinematic equation describes), what should the value of $a$ in your fit be?
2.  For drop like the ones in the video, where the ball is released from rest, what should the value of $b$ in your fit be?
3. When the origin is defined at the release point of the ball, like it is in the video, what should the value of $c$ in your fit be?

:::Hider (|Answers)
1. The value of $a$ in your fit should be $\frac{g}{2}$, which is approximately $4.9$ms$^{-2}$
2. The value of $b$ in your fit should be $0$ ms$^{-1}$ because the ball is being released from rest. It has no initial velocity.
3. The value of $c$ in your fit should also be $0$ m. This is because $c$ is the initial position of the ball, and we defined origin to be the point where the ball is released.

Keep in mind, these answers are for an ideal (not real world) drop. When we drop a ball in the real world, there will be factors and errors that shift the value of $a$, $b$, & $c$ from the ideal values. 
:::

After answering these questions, return to your spreadsheet and play with the curve fitting tools in Google Sheets. If you need a reminder how to do curve fitting, please refer to the video from the last lab:

:::Video
<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/wkqlSuAoFLQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::




:::Note (|10 C)
This exercise is designed to help you understand curve fitting. Nothing needs to be submitted for this exercise.
:::

::::::

## Quantitatively Understanding your Data 2
In this [](#Activity-quant) we will be more quantitative about our analysis. We will perform specific fits to our data and use the results to analyze the underlying physics in our experiment in [](#Activity-analysis). 

::::::Activity (quant| Quantitative Analysis of the Ball Drop Experiment (15 min))
**Instructions:**

1. For each of the drops perform a polynomial fit of degree 2. 
2. Create a table, similar to [](#Table-fit-params) to summarize the information from your fits. ;;; a=g/2, so make sure to solve this for g before putting it in your table! ;;; . 

:::Table (fit-params| Fit Parameter Summary)


| Parameters| Ideal Drop | Dog Ball | Basketball | Volleyball | Beach Ball|
| -------- | -------- | -------- | -- | -- | -- |
| Gravitational Accel. $g$ ($\text{m}/\text{s}^2$)     |      |      |   |   | |
| Initial Velocity  ($\text{m}/\text{s}$)   |      |      |   |   | |
| Initial Position    ($\text{m}$) |      |      |   |   | |

:::




::::::




:::Exercise (|3 Points)
1. Provide your completed [Good Table](?linkfile=FAQ#QHowdoIreceivefullcreditonatableinmylabreport) here.  
2. Calculate the percent discrepancy of the acceleration from ideal for each of the four drops. You can do this in a spreadsheet if you'd like but please show your work for **one** of the calculations. 
:::

:::Exercise (|1 Point)
1. What is the cause of this systematic error in the measurement of $g$?

2. Based on the picture of the balls, and what you know about the balls generally, why do you think the systematic error is different for the different balls? 
:::

With this processed data in hand, we are ready to ask some deeper questions.

::::::Activity (analysis| Doing a Deeper Analysis (20 min))
Now let's look more closely at the initial velocity and intital position for the different drops. Do you notice how as the drops getting further from ideal the initial velocity and the inital position get further from ideal as well?

:::Exercise (|2 Points)
1. What is the percent difference in initial velocity of the beach ball and the basketball?

2. What is the percent difference in initial position of the beach ball and the basketball?
:::

The lower percent error in the value of $g$ from the basketball indicates that it has less systematic error, or that it is a better representation of our model (objects falling under constant acceleration). The large percent difference the beach ball has in the initial velocity and initial position with the basketball, combined with the larger percent discrepancy in the value of $g$ for the beach ball, hints that the beach ball strongly doesn't follow the constant acceleration model.

:::Exercise (|2 Points)

If the beach ball isn't falling under constant acceleration, what model might it be falling under?
:::

5. Create one more plot of only the beach ball falling, but only use one second of data near the end, somewhere where it looks most linear. 
6. Perform a linear fit on this data.

:::Exercise (|2 Points)
1. Provide a copy of your [Good Plot](?linkfile=FAQ#QHowdoIreceivefullcreditonaplotinmylabreport) here. Be sure it includes the fit.
2. What is the slope of the line?
3. What does the slope represent?
:::


::::::









# Conclusion

:::Exercise (|2 Points)
Write a brief conclusion summarizing the important points of this lab. Dedicate one paragraph to answering the question:

**Do the laws of linear motion appear to hold for this experiment? Why or why not?**

Be specific and reference your data and evidence.
:::

:::Summary 
Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises, in your report, as well as answers to all the questions.

**All responses and answers should contain the correct number of sig figs and should include units when needed.**
:::

