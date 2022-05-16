# Solutions to Position, Velocity, Acceleration, and Falling Objects
 

:::Exercise (noforce|2 Points)
In space (no gravity), at $t=0\text{ s}$, a ball is shot towards a wall at a velocity of $7.5 \text{ m/s}$. The ball hits the wall and perfectly reflects after collision, maintaining the same *speed*. At $t= 4 \text{ s}$, the ball is measured to be $20 \text{ m}$ from the wall.

1. Did any forces act on the ball? Defend your answer, explicitly referencing the ball's initial and final velocities as needed.
---
Since the velocity changed by $- 7.5 \text{ m/s}$, a force had to act on the ball.
 - *(1 Point)* correct answer, fully defended
 - *(0.5 Points)* Correct answer, argument is wrong
 - *(0 Points)* wrong answer or no answer

---

2. How far was the ball from the wall initially? ;;;Hint: Try breaking the problem into two parts  — before the collision and after — and writing down the constant velocity equations;;;
---
The total distance the ball traveled over $4 \text{ s}$ is $28 \text{ m}$. Since th ball ended up $20 \text{ m}$ from the wall, it had to initially be $8 \text{ m}$ from the wall.
 - *(0.5 Points)* correct answer, work shown
 - *(0.25 Points)* wrong answer, good attempt at figuring it out
 - *(0 Points)* wrong answer,  no work or no answer

---
3. Sketch a graph of the ball's distance from the wall over time. You can do this on a digital drawing program or on paper and take a picture to attach to your report.
---

 - *(0.5 Points)* Sketch seems accurate
 - *(0.25 Points)* Sketch has some problems
 - *(0 Points)* Sketch totally wrong or missing


:::



:::Exercise (quadratic|1 Point)
Zak launches a ball straight up into the air, from the ground, at $5 \text{ m/s}$. Assume $a = g = 9.81 \text{ m/s}$
1. How long does it take for the ball to reach the ground again? ;;;Hint: When the ball reaches the ground again, y=0 ;;;
---
We need to solve for t in
$$
y = \frac{1}{2}gt^2 + 5 \frac{m}{s} t =0
$$
which gives $t= -2 v/g = 10/9.81 \text{ s}= 1.02 \approx 1 \text{ s}$

.
 - *(0.5 Points)* correct answer, work shown
 - *(0.25 Points)* wrong answer, good attempt at figuring it out
 - *(0 Points)* wrong answer,  no work or no answer

---
2. How long does it take for the ball to reach the highest point of its trajectory? ;;;Hint: When the ball reaches the top of its trajectory, what is its velocity? ;;;
---
Since it started on the ground, the trajectory is symmetric about the high point, so $\approx 0.5 \text{s}$
 - *(0.25 Points)* correct answer, work shown
 - *(0 Points)* wrong answer,  no work or no answer

---
3. What is the ball's maximum height? ;;;Hint: Can you  use the time to reach the maximum height from part (b) to find this?;;;
---
Plugging in $0.5 \text{s}$
$$
y_{max} = -\frac{1}{2}\left(9.81 \frac{\text{m}}{\text{s}^2}\right) \left(0.25\text{s}^2 \right)+ \left(5 \frac{m}{s}\right)\left(0.5\text{s}\right)= 1.27375 \text{m} \approx 1.3 m
$$
 - *(0.25 Points)* correct answer, work shown
 - *(0 Points)* wrong answer,  no work or no answer


:::


:::Exercise (tffromy|1 Point)
The final time, $t_f$, is the time that the ball has hit the ground after being dropped from rest at some height $y_0$. 
1. Using [](#Equation-positionwithforce), write out an equation that solves for $t_f$ for an object at rest at an initial height of $y_0$. You can assume that the experiment takes place on earth so that $a=g$. ;;;Hint: First, set t= tf. What is y(tf)?;;; ;;;Hint: Watch your signs before and after applying the squareroot!;;;
---
Solving the kinematic eqn
$$
 0 = \frac{1}{2} g t_f^2 + y_0
$$
we get $t_f = \sqrt{\frac{2y_0}{t}}$
 - *(0.5 Points)* correct answer, work shown
 - *(0.25 Points)* wrong answer, good attempt at figuring it out
 - *(0 Points)* wrong answer,  no work or no answer
---
2. What is the $t_f$ for an object released from rest at $y_0 = 1.0 \text{ m}$? $y_0 = 5.0 \text{ m}$? $y_0 = 20.0 \text{ m}$? $y_0 = 50.0 \text{ m}$?, $y_0 = 0.0 \text{ m}$? You may use that $g=-9.81 \text{ m/s}$
---
<input 
type="text" 
placeholder="starting height" 
onchange= "document.getElementById('calculator-out').value= Math.sqrt(2*this.value/9.81)"></input>
######
<input type="text"  id= 'calculator-out' placeholder="final time"></input>

$(0.45, 1.0, 2.0, 3.2, 0 ) \text{s}$
 - *(0.25 Points)* mostly correct
 - *(0 Points)* mostly wrong or missing
---
3. Using the points above, make a sketch of the $t_f (y_0)$ graph.
- *(0.25 Points)* sketch looks correct
- *(0 Points)* sketch wrong or missing
:::



:::Exercise (confounded|2 Points)
In the previous Part we discussed the ideal behavior of a ball under constant acceleration. Brainstorm three possible reasons;;; including, e.g. environmental, experimenter mistakes, equipment;;; why the time it takes for a ball to reach the ground after being dropped in our real-life experiment may not match the ideal theoretical predictions. For each possible reason, indicate whether the cause would result in a faster-than-ideal drop time or a slower-than-ideal drop time and why.

---
We are looking for students to acknowledge that seeing pure freefall is not possible under real conditions.

- *(Add 0.25 Points)* for each possible reason given, up to three
- *(Add 0.25 Points)* for correct each prediction of faster or slower than ideal
- *(Add 0.5 Points)* for explaining why this is the case.
:::

:::Exercise (collect-heights|1 Point)
Answer the following data questions using the standard reporting form that includes uncertainty: $(y \pm \delta y) \text{ units}$
1. What is the distance from the drop zone to the rail on the second floor?
2. What is the distance from the drop zone to the rail on the third floor?
3. What is the distance from the drop zone to the rail on the fourth floor?
---

- *(1 Points)* all heights recorded
- *(0 Points)* missing data 
:::

:::Exercise (tables|2 Points)
1. Fill in the raw measurements of $t_f$ into your raw data tables. Include a copy of your raw table and processed table here. Make sure that this data and all calculated columns have the correct number of significant figures and have labeled units as necessary. ;;;If you were one of the droppers, please ask the TA for their measurements to use as your own;;;
---

- *(1 Points)* great table that follows all rules
- *(1 - .25*n Points)* deduct quarter point for each good table rule broken
- *(0 Points)* missing data, bad table

---
2. Once it is available, use the calculated average $t_f$'s to fill in the theoretical table, and include a copy of the final table in this exercise. 
---

- *(1 Points)* great table that follows all rules
- *(1 - .25*n Points)* deduct quarter point for each good table rule broken
- *(0 Points)* missing data, bad table

---
:::


:::Exercise (|2 Points)
1. Which of the objects **most closely** follow the theoretically predicted drop time?
---
- *(1 Points)* correct answer as supported by data
---
2. Which of the objects have the greatest percent difference with the theoretically predicted drop time?
---
- *(0.5 Points)* correct answer as supported by data
---
3. For the object in part (b), is the percent difference greater for higher or lower drop heights?
---
- *(0.5 Points)* correct answer as supported by data
:::



:::Exercise (|1 Point)
You do not need to include the plot, only answer the following questions.
1. Does the plot look linear? Why or why not?
---
These questions refer to the beachball ideally, and otherwise the object that they mention in part b of the previous questions.
- *(0.5 Points)* Answer with full details on what they see that is clearly defended
---
2. What is the slope of the line of best fit, including units?
---
- *(0.25 Points)* Slope reported with correct units
---
3. What is the physical meaning of the line of best fit?
---
- *(0.25 Points)* Anything along the lines of "how the time to hit the ground changes with starting height"
---
:::


 
:::Exercise (|3 Points)
1. How do the average velocities from different fall distances compare to one another? Elaborate on if you see a trend.
---
Ideally, they should find that the denser the object, the more it matches the ideal drop time. 
- *(2 Points)* Anything noticing the above and making good arguments
- *(1 Points)* Anything trying to infer information from data, but has mistakes
- *(0 Points)* Missing or very poor analysis
---
2. Make an educated guess as to what the average velocity of this object would be if you dropped it from a height of $500 \text{ m}$, and support your hypothesis with your *data*.
---
Ideally, they should find that the average velocity stays more or less the same since it is reaching terminal velocity. The answer, hoever depends on the data quality, so use your best judgement
- *(1 Points)* Anything trying to infer information from data by extrapolating relationships that generally seems corrct
- *(0.5 Points)* Analysis that tries to get the correct answer but misses the point
- *(0 Points)* Missing or very poor analysis
---
:::


:::Exercise (FinalevalAR|1 Point)
Reflect on the trajectories of the dropped objects and their properties.
1. Which objects, according to your data, were most influenced by air resistance as discussed? Support your conclusion with a sentence or two.
---
Ideally, they should find that beach ball was most affected, but make your best judgement. 
- *(0.5 Points)* Correct assesment, uses data to back up
- *(0.25 Points)* Correct assesment, weak use of data OR wrong assesment but really tried to use data correctly
- *(0 Points)* Missing or very poor analysis or answer without defending it with data
---
2. Does it make sense to you that these mentioned objects were affected most by air resistance? What physical properties to they have that might lead to high air resistance?
---
Ideally, they should find that denser objects are less affected by AR.
- *(0.5 Points)* Full credit to most answers that attempt to explain what is happening
- *(0 Points)* Missing or very poor answer/explanation
---
:::


:::Exercise (Finalevalall|1 Point)
**Challenge Question**
######
We now want to discuss the impact of factors other than air resistance on our experiment. 
1. Do you think that the uncertainty introduced by you and your classmates' reaction times is significant in this experiment? Please answer this quantitatively, referencing your measured reaction time from this [Exercise](index.html?linkfile=lab0#Activity-randomerr) in Lab 0 and comparing it to the *variance* in measured times
2. You all had to start a stopwatch on a certain agreed upon signal, and then stop it the instant an object hit the ground. Do you think that the *systematic error* associated with the average *delay* in reaction time resulted in a **bias** in the measured $t_f$ being longer? ;;;This is a high level discussion, try your best here;;; 
3. Do you think that there any environmental factors that could have significantly altered the results of the experiment? ;;;Hint: consider things such as wind, weather, accidentally imparting a v0;;;. Argue your answer in a sentence or two. Pointing to evidence in the data is strongly encouraged for full credit.

---
Be generous with credit, go with your gut.

:::


:::Exercise (|2 Points)
Write a brief conclusion summarizing the important points of this lab. Dedicate one paragraph to answering the question:

**Do the laws of linear motion appear to hold for this experiment? Why or why not?**

Be specific and reference your data and evidence.

---
Use judgement assigning points to summary
:::


