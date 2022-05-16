# Position, Velocity, Acceleration, and Falling Objects


::::::Intro (This Week's Topic: Motion!|Objects for Dropping --- Your TAs will have these |Stopwatch| Reel Measuring Tape |Notebook)
This week we will review how to describe, mathematically, the trajectory of a body moving under the influence of a constant force. 
For your Pre-Lab, you will sharpen your calculational abilities on some test problems, and prepare your notebook for this weeks experiment.

**The experiment this week is simple in nature:** drop some objects off of a balcony and time them to show that all of the linear motion equations you've learned *in class* actually work *in the real world*
:::center 
**... or do they?**
:::
After an analysis of your data, you will have to make that decision with an evidence-backed argument.


::::::

::::::Prelab
**Reminder:** Completing the PreLab before your Lab day is worth 2 Points.
 
**Prior to Lab**, please complete the following Exercises:
:::center
  [](#Exercise-noforce), [](#Exercise-quadratic), [](#Exercise-tffromy), [](#Exercise-confounded)
:::

You must also complete the following Activity to ensure that you have a table ready to collect data on Experiment Day:

:::center
[](#Activity-sheets)
:::

You will need to upload your report with prelabs completed on Gauchospace before the beginning of class. You should also, at the very minimum, skim the rest of the lab before class to ensure that you are prepared to turn in your report by the end of class. You can change your answers to the Prelab during class. 
::::::
---





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

:::Exercise (noforce|2 Points)
In space (no gravity), at $t=0\text{ s}$, a ball is shot towards a wall at a velocity of $7.5 \text{ m/s}$. The ball hits the wall and perfectly reflects after collision, maintaining the same *speed*. At $t= 4 \text{ s}$, the ball is measured to be $20 \text{ m}$ from the wall.

1. Did any forces act on the ball? Defend your answer, explicitly referencing the ball's initial and final velocities as needed.
2. How far was the ball from the wall initially? ;;;Hint: Try breaking the problem into two parts  — before the collision and after — and writing down the constant velocity equations;;;
3. Sketch a graph of the ball's distance from the wall over time. You can do this on a digital drawing program or on paper and take a picture to attach to your report.
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

:::Exercise (quadratic|1 Point)
Zak launches a ball straight up into the air, from the ground, at $5 \text{ m/s}$. Assume $a = g = -9.81 \text{ m/s}$
1. How long does it take for the ball to reach the ground again? ;;;Hint: When the ball reaches the ground again, y=0 ;;;
2. How long does it take for the ball to reach the highest point of its trajectory? ;;;Hint: When the ball reaches the top of its trajectory, what is its velocity? ;;;
3. What is the ball's maximum height? ;;;Hint: Can you  use the time to reach the maximum height from part (b) to find this?;;;
:::

# Preparing for the Experiment

## Calibrating our Expectations

In the previous section, we considered the motion of an object under constant acceleration due to gravity.  In our experiment this week, we will explicitly test the validity of this model under earth's gravity using a number of different objects. As is generally true in experimental physics, we face the possibility that our theoretical models may only be partially right. Our job will be to figure out in what situations the theoretical model applies and in which it doesn't. For the case that the model *fails*, we will inspect our data and develop a hypothesis as to **why** it has failed. 



### What is our model?

We, unfortunately, will not have access to a way of *continuously* tracking the height of our dropped balls during the experiment. We will have data that is much more "primitive", e.g. an average time that it takes for the ball to drop from a balcony to the ground — a single number for each run of the experiment!

The procedure is roughly as follows:
:::Hider (|Procedure Summary)
There will be one person in charge of letting go of the ball on the balcony, and everyone else will view the experiment from the ground with a stopwatch.
The heights of the three balconies will be obtained prior to the experiment using a [measuring reel](imgs/VelAcc/reel.jpg).

1. Someone will bring the first ball to the lowest balcony.
2. Using an agreed upon signal, this person will drop the ball and everyone else will start their timers
3. When the ball reaches the ground, everyone will stop their timers.
4. Repeat (1-3) for all three balconies
5. Repeat (1-4) for all balls.
:::



The structure of our experiment means that instead of height as a function of time, we need to calculate the *final time*, $t_f$, as a function of *initial height*, $y_0$. In this situation the final time, $t_f$, is our dependent variable and the initial height, $y_0$, is our independent variable. This should be contrasted with the usual situation in class where your *instantaneous height*, $y$, is dependent on the *instantaneous time*, $t$.  

:::Exercise (tffromy|1 Point)
The final time, $t_f$, is the time that the ball has hit the ground after being dropped from rest at some height $y_0$. 
1. Using [](#Equation-positionwithforce), write out an equation that solves for $t_f$ for an object at rest at an initial height of $y_0$. You can assume that the experiment takes place on earth so that $a=g$. ;;;Hint: First, set t= tf. What is y(tf)?;;; ;;;Hint: Watch your signs before and after applying the squareroot!;;;
2. What is the $t_f$ for an object released from rest at $y_0 = 1.0 \text{ m}$? $y_0 = 5.0 \text{ m}$? $y_0 = 20.0 \text{ m}$? $y_0 = 50.0 \text{ m}$?, $y_0 = 0.0 \text{ m}$? You may use that $g=-9.81 \text{ m/s}$
3. Using the points above, make a sketch of the $t_f (y_0)$ graph.
:::

### Where can our model go wrong?
We now have a model that should predict the times that it takes for each object to hit the ground. You may have noticed that the only variable that enters the equation for $t_f$ is $y_0$. 

:::center
**There is no reference to any of the objects shapes, masses, colors, or textures... so why bother with three different objects?**
:::


We answer this question with another: When dropped from the same height, which one of these objects &mdash; stone or feather &mdash; will hit the ground first? 

In summary, in this experiment, we ultimately have two questions to answer:
 1. Which, if any, of the objects will match our expectations of motion under constant acceleration?
 2. Which, if any, of the objects will defy these expectations, *in what way*, and *why*?

Quantitatively, both of these questions are essentially asking you to compare the theoretical & measured time to hit the ground, $t_f$, and draw a conclusion from any agreement or disagreement. 


:::Exercise (confounded|2 Points)
In the previous Part we discussed the ideal behavior of a ball under constant acceleration. Brainstorm three possible reasons;;; including, e.g. environmental, experimenter mistakes, equipment;;; why the time it takes for a ball to reach the ground after being dropped in our real-life experiment may not match the ideal theoretical predictions. For each possible reason, indicate whether the cause would result in a faster-than-ideal drop time or a slower-than-ideal drop time and why.
:::

## Setting Up the Notebook
Generally, it is good practice to set up your lab notebook *prior* to an experiment to make sure that you record all of the necessary data in a legible manner. In this portion of the Prelab, we will go ahead and do this in a Google Sheet [fn] Spreadsheet programs are not typically used in real scientific experiments, but in the spirit of equity and freely available software for students, we believe this is the best choice[/fn]. If you have completed the previous lab, you should have enough experience with Google Sheets to follow along with the following activity. If you haven't, please return to [Lab 0](?linkfile=Lab0) to complete it now.

:::::::::Activity (sheets|Setting Up our Notebook)
So that we can quickly and efficiently gather our data in person, and make an analysis, please follow along with this activity to set up a datatable.

1. Open a new Google Sheet and Create a Table with 3 rows for data similar to [](#Table-droptable) 
   :::Table (droptable| Processed Data)
   Ball : ______________
     | Drop Height (units) | Theoretical $t_f$ (units) | Object 1 Avg. Measured $t_f$ (units) | Object 1 Percent Difference | Measured Average Velocity (units) |
   |---------------------|---------------------------|--------------------------------------|-----------------------------|-----------------------------------|
   | ...                 | ...                       | ...                                  | ...                         | ...                               |
   | ...                 | ...                       | ...                                  | ...                         | ...                               |
   | ...                 | ...                       | ...                                  | ...                         | ....                              |
   ::: 

2. Inside each column header you just made, specify the correct units that the measurement will be made in.
3. From your answer to [](#Exercise-tffromy), set up a function in Google Sheets that will automatically display theoretical $t_f$ using the drop height.
4. Using the definition of [Percent Difference](?linkfile=lab0#Definition-PercentDifference), create a google sheet function that will automatically calculate the values in this column once the data is entered.
5. Finally, Using the **Drop Height** column and the **Avg. Measured $t_f$** column, use a function to calculate the **Measured Average Velocity** ;;; Hint: Average Velocity is just the net displacement / net time;;; ;;;It might help to input "sample" data to check your functions work! Maybe use the data from the exercises and quizzes ;;;
6. Make a Copy of this table for each of the three balls.
7. Next, below these or on a separate sheet, make a table to record **your individual measurements** for an object, similar to [](Table-rawtable).  Each column should be labeled with the appropriate units in your version.
 :::Table (rawtable| Raw Data)
   | Drop Height (u) | Object 1 $t_f$ (u) | Object 2 $t_f$ (u) | Object 3 $t_f$ (u) |
   |-----------------|--------------------|--------------------|--------------------|
   | ...             | ...                | ...                | ...                |
   | ...             | ...                | ...                | ...                |
   | ...             | ...                | ...                | ...                |
 ::: 

7. Link [](#Table-droptable) and [](#Table-rawtable) into your lab notebook under [](#Exercise-tables). You can find how to do this in the FAQ.  Make sure the table is easily readable and properly formatted prior to class so that your TA can verify that you have done the prelab.
      :::Note (|10 C)
      When linked sheets are updated, any edits to the data in the original file will appear in the Google Docs file. If you make edits to the linked chart, table, or slide in your Google Docs, the **changes won't be copied to the original file** and will be lost. [See More Here](https://support.google.com/docs/answer/7009814?hl=en&co=GENIE.Platform%3DAndroid)
      :::

:::::::::



# The Experiment

We are now ready to move ahead and conduct the experiment. You have done most of the hard work in the lab already! On the day of your laboratory experiment, please be sure your completed work is available to be checked by your TA.

## Collecting Drop Times
:::Materials (Objects for Dropping --- Your TAs will have these |Stopwatch| Reel Measuring Tape |Notebook)
:::

On the experiment day, your TA will have the test objects for dropping. Since the class has limited time, please follow your TA's instructions closely so that the experiment can begin as soon as possible. 

::::::Activity (ball-drop|Making the measurement)
**Instructions:**
1. Grab your notebook and stopwatch head out to the designated dropping area with your TA. 
2. Using the measuring tape, a few students will determine the height from the drop zone to each of the floors. The railing makes for a good 
reference point from where the objects will be dropped. The student on the highest floor will reel the measuring tape down to the ground so that all measurements can be taken simultaneously.
:::Exercise (collect-heights|1 Point)
Answer the following data questions using the standard reporting form that includes uncertainty: $(y \pm \delta y) \text{ units}$
1. What is the distance from the drop zone to the rail on the second floor?
2. What is the distance from the drop zone to the rail on the third floor?
3. What is the distance from the drop zone to the rail on the fourth floor?
:::
3. The students who will be dropping objects will bring them to the second, third, and fourth floors of Broida. 
4. On an agreed-upon signal, one student will release an object from the recorded height and everyone watching will start their timers. Be sure you release the object cleanly without imparting an initial upward or downward 
speed, *i.e.* that the object is released from **rest**.
5. All students watching will stop the timer once the object hits the floor, and record their measurement. Be sure to have a well-organized notebook with a table to record the value in so that it does not get mixed up. There will be 9 values recorded in total.
6. Repeat this procedure until data for all objects and all balconies is obtained.
::: Warning
Do not throw the objects to the upper floors. Use the stairs. 
:::
7. At the end of the experiment, submit your data to the group spreadsheet created by your TA.


::::::
:::Exercise (tables|2 Points)
1. Fill in the raw measurements of $t_f$ into your raw data tables. Include a copy of your raw table and processed table here. Make sure that this data and all calculated columns have the correct number of significant figures and have labeled units as necessary. ;;;If you were one of the droppers, please ask the TA for their measurements to use as your own;;;
2. Once it is available, use the calculated average $t_f$'s to fill in the theoretical table, and include a copy of the final table in this exercise. 
:::

## Analyzing the Experiment 


Now that you have collected and organized your data, we can now analyze the results and answer the original questions:
 1. Which, if any, of the objects will match our expectations of motion under constant acceleration?
 2. Which, if any, of the objects will defy these expectations, *in what way*, and *why*?


[](#Activity-analy) walks you though a short analysis, by plotting the theoretical behavior against your real data sets.

 
::::::Activity (analy|Analyzing the Drop Times)

1. Using the data in your processed data table, for each object, graph the measured fall time $t_f$ vs. initial height $y_0$. Label your graph with the proper units. Your graph should have 
four points for each object;;;Hint: what is tf for a height of 0? ;;;. 

2. On the same graph, also plot the theoretical fall time calculated, and compare this to your original data.

:::Exercise (|2 Points)
1. Which of the objects **most closely** follow the theoretically predicted drop time?
2. Which of the objects have the greatest percent difference with the theoretically predicted drop time?
3. For the object in part (b), is the percent difference greater for higher or lower drop heights?
:::

3. For the object in with the greatest percent difference with the theoretically predicted drop time, use Google sheets to create a line of best fit with the measured data (excluding the origin).

:::Exercise (|1 Point)
You do not need to include the plot, only answer the following questions.
1. Does the plot look linear? Why or why not?
2. What is the slope of the line of best fit, including units?
3. What is the physical meaning of the line of best fit?
:::

4. For this ball, look at the column that calculates the average velocity.
 
:::Exercise (|3 Points)
1. How do the average velocities from different fall distances compare to one another? Elaborate on if you see a trend.
2. Make an educated guess as to what the average velocity of this object would be if you dropped it from a height of $500 \text{ m}$, and support your hypothesis with your *data*.
:::
::::::

## Discussing Our Results

If all things in the lab have gone well, you likely found that at least one of your objects has a suspiciously linear-looking $y_0$ v.s. $t_f$ graph. This is seemingly in direct conflict with our expectations for objects experiencing constant acceleration. What use are the these theoretical models if they get such a simple experiment wrong?

Upon a closer inspection of [Part I](#part1), we find something interesting. Recall that the the velocity of an object, in the absence of acceleration, remains constant. In a world without gravity, if we had performed the experiment by dropping an object with an initial velocity $v_0$ from a height of $y_0$, it would reach the ground at a time $t_f = y_0/v_0$. This relationship is *linear* in height, just like some of our data. 

:::center
**Wait, what? But we live in a world** ***with*** **gravity!**
:::

Indeed, some of our objects behave in a way that looks like they are ignoring gravity after a few moments of time. The reason for this is that their motion through the air generates an **additional force**  proportional to and in the direction opposite of their velocity. As an object falls under the influence of gravity, eventually the decelleration from air resistance will cancel the acceleration from gravity, leading to an **object experiencing motion under no net force**. [](#Simulation-balldrop) below lets you explore this interactively. 




:::Simulation (balldrop)
<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BallDrop/Page.html"  height="1000" style="border:none;width:100%"> </iframe>

:::

:::Exercise (FinalevalAR|1 Point)
Reflect on the trajectories of the dropped objects and their properties.
1. Which objects, according to your data, were most influenced by air resistance as discussed? Support your conclusion with a sentence or two.
2. Does it make sense to you that these mentioned objects were affected most by air resistance? What physical properties to they have that might lead to high air resistance?
:::


:::Exercise (Finalevalall|1 Point)
**Challenge Question**
######
We now want to discuss the impact of factors other than air resistance on our experiment. 
1. Do you think that the uncertainty introduced by you and your classmates' reaction times is significant in this experiment? Please answer this quantitatively, referencing your measured reaction time from this [Exercise](index.html?linkfile=lab0#Activity-randomerr) in Lab 0 and comparing it to the *variance* in measured times
2. You all had to start a stopwatch on a certain agreed upon signal, and then stop it the instant an object hit the ground. Do you think that the *systematic error* associated with the average *delay* in reaction time resulted in a **bias** in the measured $t_f$ being longer? ;;;This is a high level discussion, try your best here;;; 
3. Do you think that there any environmental factors that could have significantly altered the results of the experiment? ;;;Hint: consider things such as wind, weather, accidentally imparting a v0;;;. Argue your answer in a sentence or two. Pointing to evidence in the data is strongly encouraged for full credit.
:::

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

