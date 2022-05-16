# Solutions to Reflection and Refraction

:::Figure (refrac|xl)
![The result of refraction at different angles of incidence.](imgs/ReflectionRefraction/fig1_1.jpg 'The result of refraction across the blue-yellow interface at different angles of incidence.')
 
:::


[](#Figure-refrac) above shows beams of light being emitted from the blue semicircle at the bottom left. There are some important features to observe:
- The rays travel through a medium having an index of refraction of $n_1$, toward the interface of that medium with a second medium having an index of refraction of $n_2$. 
- The beams in the lower region are the *incident* beams. 
- The beams in the upper region are the *refracted* beams. 
- When light reaches the interface, some of it is reflected back into the first medium, but most of it is refracted into the second medium. 
- Note that two of the exiting beams, B and C, are bent (*refracted*) away from the normal [fn]Ray D is also bent away from the normal, but represents a special case, which we will see later in this lab.[/fn]. 
- When a beam is perpendicular to the interface boundary, as is beam A, it is said to be *normal* to the interface. Normal rays are undeflected. 
  
 This figure could represent light coming from water and going into air. 



:::Exercise (|1 Point)
Look at [](#Figure-refrac) to answer the following:

1. Light ray A is normal to the interface.  What is the angle of incidence $\theta_1$ for this ray? According to Snell's law, what is the angle of refraction $\theta_2$? 
---

The angle should clearly be $0$. This is just a check to make sure this got through to them
- *(0.5 Points)* Correct answer with reference to snell's law
- *(0.25 Points)* Correct answer with no reference to snell's law
- *(0 Points)* Wrong answer

---

2. Is the angle of the refracted light beam B larger or smaller than the angle of incidence? What about light beam C? According to Snell's Law, what does the relative magnitude of the angles (*i.e.*, $\theta_2/\theta_1$) tell us about the relative magnitude of the indexes $n_1$ and $n_2$?
---
Ideally, they should find that beach ball was most affected, but make your best judgement. 
- *(0.5 Points)* Correct answer with reference to snell's law and assesment about indexes
- *(0.25 Points)* Correct answer with no reference to snell's law or poor assesment
- *(0 Points)* Wrong answer or missing assessment
---

:::


:::Exercise (snell-rearranged|2 Points)
In our experiment, we will want to calculate the index of refraction of a prism by measuring the angle of incidence and angle of refraction at the interface between the prism and air. Without loss of generality, assume that we are making these measurements such that the light is *leaving* the prism and *entering the air* at this interface.
1. Based on the interface we are studying, do you think $\theta_1$ or $\theta_2$ should be larger? Defend your answer
---
We are studying acrylic->air interface, so refracted angle should be larger. This should be apparent since $\frac{n_1}{n_2} = \frac{\sin(\theta_1)}{\sin(\theta_2)}> 1$ and sine is monotonic in $(0, \pi/2)$ (Students of course won't write this, but any attempt similar in spirit should be rewarded). 
- *(1 Points)* Correct assesment, good attempt at defense
- *(0.5 Points)* Problems with defense or assesment
- *(0 Points)* Missing or very poor effort
---
2. Starting from [](#Equation-snell), derive an expression that gives the value of $n_1$ in terms of $\theta_1$, $\theta_2$ and $n_2$  
---
- *(0.5 Points)* Correct result, shows steps
- *(0.25 Points)* minor issues with results or steps
- *(0 Points)* Missing or very poor attempt
---
3. Given that one of the interfaces is *air*, can you make a substitution in your answer to part (b) that simplifies your equation? If so, write the simpler equation. If not, explain why.
---
We want them to set $n_2 = 1$. 
- *(0.5 Points)* Correct result, shows steps
- *(0.25 Points)* minor issues with results or steps
- *(0 Points)* Missing or very poor attempt

:::

::::::Simulation (mystery_critical)
:::center

:::
<iframe src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=1" width="100%" height="600px" allowfullscreen="1" frameborder="0"></iframe>
<button onclick='emergency_reload_iframes()'> Click Here to Reload if Stuck</button>
::::::



:::Exercise (find|1 Point)
Change the top material to air and the bottom material to Mystery B in [](#Simulation-mystery_critical).
1. Using any angle of incidence you'd like, calculate index of refraction, $n$ for the material "Mystery B?" Show your work.
---
They should get around $1.4-1.5$ depending on how carefully they measured
- *(0.5 Points)* Correct result, shows steps
- *(0.25 Points)* minor issues with results or steps
- *(0 Points)* Missing or very poor attempt

---
2. Now swap the  materials so that the top is "Mystery B" and the bottom is air. What is the critical angle? ;;;The simulation is hard to get just right — give your best guess at the lower bound;;;
3. Calculate $n$ using the critical angle you found.
4. Do you think that these values agree?
---
Critical angle should be about $43 \deg \pm 5\deg$. This means that they should calculate a similar value, $n\approx 1.4-1.5$, and hence they should agree up to the ability to measure by eye.Be lenient.
- *(0.25 Points)* Gave reasonable answer
- *(0 Points)* Missing or very poor attempt

---


5. What is the speed of light in the "Mystery B" material? ;;;Use the measurement of n you think is more accurate. Show your work;;;
---
Use calculate (type + press enter) to check their result.

<input 
type="text" 
placeholder="calculated n" 
onchange= "document.getElementById('calculator-out').value= 299792458/this.value +' m/s'"></input>
######
<input type="text"  id= 'calculator-out' placeholder="effective speed of light"></input>


- *(0.25 Points)* Result matches their $n$ and has reasonable number of sigfigs
- *(0 Points)* Missing or answer does not match sigfigs 
---
:::



:::Exercise (look-up|1 Point)
1. Look up a value for the index of refraction of acrylic. Report it here.

2. Where did you get this information from?

3. For an incident angle of $\theta_1=30 \deg$, what $\theta_2$ should you get?
---
Check their final part here

<input 
type="text" 
placeholder="acrylic IOR" 
onchange= "document.getElementById('calculator-out-2').value= 360*(Math.asin(Math.sin((30/360)*2*Math.PI)*this.value))/(2*Math.PI)"></input>
######
<input type="text"  id= 'calculator-out-2' placeholder="refracted angle"></input> 
- *(1 Points)* Everything looks good, has reasonable sigfigs
- *(0.5 Points)* Some issues
- *(0 Points)* Missing or very poor work

:::





:::Exercise (prism-hyp|1 Point)
1. Do you think you will be able to get the light to go directly through the triangular end of the prism, i.e. without any change in direction or offset? Defend your reasoning.
---
Ideally, they should find that beach ball was most affected, but make your best judgement. 
- *(0.5 Points)* Attempts assesment, makes argument
- *(0 Points)* Missing or very poor work
---
2. Do you think you will be able to get the light to go directly through the square end of the prism, i.e. without any change in direction or offset? Defend your reasoning.
---
Ideally, they should find that beach ball was most affected, but make your best judgement. 
- *(0.5 Points)* Attempts assesment, makes argument
- *(0 Points)* Missing or very poor work
---


:::



:::Exercise (|1 Point)
1. Present a copy of your final table here.
---

- *(0.5 Points)* Good Table
- *(0.25 Points)* Table has issues
- *(0 Points)* Missing or very poor table
---
2. What is the average measured index of refraction (call this $\bar n$), for the acrylic block?

3. What is the critical angle you found?

4. What is the index of refraction calculated from this value (call this $n_c$)?
---

<input 
type="text" 
placeholder="Critical Angle" 
onchange= "document.getElementById('calculator-out-3').value= 1/Math.sin((this.value/360)*2*Math.PI)"></input>
######
<input type="text"  id= 'calculator-out-3' placeholder="refracted angle"></input> 

- *(0.5 Points)* Most answers correct and reflective of data
- *(0.25 Points)* Multiple issues
- *(0 Points)* Missing or very poor work
---
:::


:::Exercise (|3 Points)
1. What is the **percent difference** between your two results, $n_c$ and $\bar n$?
---

<input 
type="text" 
placeholder="nb" 
id='nb'
onchange= "document.getElementById('calculator-out-4').value= 100*Math.abs(nb.value - nc.value)/(0.5*(nb.value + nc.value)) + '%'"></input>
<input 
type="text" 
placeholder="nc" 
id='nc'
onchange= "document.getElementById('calculator-out-4').value= 100*Math.abs(nb.value - nc.value)/(0.5*(nb.value + nc.value))+ '%'"></input>
######
<input type="text"  id= 'calculator-out-4' placeholder="percent dif"></input> 


---

2. Estimate your error in measuring the angles of incidence and refraction. Write these as $\delta \theta_1$ and $\delta \theta_2$

3. The **percent uncertainty** in determining the index of refraction can be calculated as 
    $$
    \text{percent uncert. in }n = \frac{\delta n}{n} = \sqrt{ \left(\frac{\delta \theta_1}{\tan\theta_1} \right)^2 + \left(\frac{\delta \theta_2}{\tan\theta_2} \right)^2}
    $$
    Using your data for $\theta_1 = 30 \deg$, calculate the percent uncertainty you expect in $n$.
---

<input 
type="text" 
placeholder="theta1" 
id='theta1'></input>
<input 
type="text" 
placeholder="theta2" 
id='theta2'></input>

<input 
type="text" 
placeholder="dtheta1" 
id='dtheta1'></input>
<input 
type="text" 
placeholder="dtheta2" 
id='dtheta2'></input>
######
<button onclick="document.getElementById('calculator-out-5').value=100* Math.sqrt((document.getElementById('dtheta1').value/document.getElementById('theta1').value)**2 + (document.getElementById('dtheta2').value/document.getElementById('theta2').value)**2)">
Calc</button>
<input type="text"  id= 'calculator-out-5' placeholder="percent dif"></input> 


---

---
1 Point is distributed for the technical work above. 
- *(1 Points)* Mostly correct calculations
- *(0.5 Points)* Some issues
- *(0 Points)* Missing or very poor work
---

4. Assume all your measurements of $n$ have the uncertainty that you calculated in part (c). Do you measurements of $n_c$ and $\bar n$ agree with each other? Do either of these measurements agree with the accepted value found in [](#Exercise-look-up)? Explain.

5. Which result do you think is more accurate? Which result do you think is more precise? Explain.
---
1 Point is distributed for the discussion work above. 
- *(1 Points)* Good discussions, mostly correct
- *(0.5 Points)* Some issues
- *(0 Points)* Missing or very poor work
---

6. Calculate the speed of light in the block for both $\bar n$ and $n_c$. By what percent does light slow down in the block?
---
<input 
type="text" 
placeholder="sample IOR" 
onchange= "document.getElementById('calculator-out-6').value= 360*(Math.asin(Math.sin((30/360)*2*Math.PI)*this.value))/(2*Math.PI)"></input>
######
<input type="text"  id= 'calculator-out-6' placeholder="speed of light"></input> 
- *(1 Points)* Correct answer based on results
- *(0.5 Points)* Minor mistake like sigfigs
- *(0 Points)* Missing or very poor work
---
:::





:::Exercise (|2 Points)
**For the triangular end of the prism, complete the following:**

1. Sketch the orientation of the block when the rainbow is most observable, and attach the image to your report. Why do you think this is?;;;Hint: Is the refraction greater at grazing or normal angles? White light goes in, what comes out?;;;
2. Is it possible to get light directly through a prism? Why do you think this is? Was your hypothesis from [](#Exercise-prism-hyp) correct?

---

- *(1 Points)* Sketch provided and question answered
- *(0.5 Points)* Minor issues
- *(0 Points)* Missing or very poor work
---

**For the square end of the prism, complete the following:**

4. What do you observe about the beam on the opposite side of the block? Was your hypothesis from [](#Exercise-prism-hyp) correct, *i.e.* is the beam able to
pass straight through or is there an offset? Is it parallel to the original beam? Why?
5. When the incident beam is normal to the surface are you able to observe the same phenomenon?


---

- *(1 Points)* Questions answered satisfactorily
- *(0.5 Points)* Minor issues or lackluster effort
- *(0 Points)* Missing or very poor work


:::



:::Exercise (|1 Point)
1. Where do the dashed lines meet?
2. How does the perpendicular distance from the object pin to the reflection line compare with the distance from the image to that line?
3. What can you say about the angle of incidence and angle of reflection for each of the rays?

---
- *(1 Points)* Questions answered satisfactorily
- *(0.5 Points)* Minor issues or lackluster effort
- *(0 Points)* Missing or very poor work
:::





:::Exercise (|1 Point)
Write a brief conclusion summarizing the important points of this lab.


---
Use your judgement
:::


