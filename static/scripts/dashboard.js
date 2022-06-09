/* globals Chart:false, feather:false */
const arrayColumn = (arr, n) => arr.map(x => x[n]);

//Globally track current chart, run instance so that it can be destroyed and redrawn
var PAGESTATE={'run': 0};

//Add a class to manage all the data from a single file.
class RunData{
  constructor(json_data){
    this.data=json_data
    console.log('All Data',this.data)
    ///PLOTTING DATA
    //Construct the axis data
    this.axisdata=this.constructAxisData();

    //Construct the sets of data
    this.datasets= this.constructDataSets();
    
    //Construct plotdata
    this.plotdata=this.constructPlotData()

    //PRINTING DATA.
    //Gather parameter data.
    this.runs=this.data['runs']

    

  }


  constructPlotData(){
   return this.datasets.map((s,i)=> {return this.templatePlotData(s,i)})
    
  }

  templatePlotData( dataset, label_index){
   return  {
        data: dataset,
        label: "Run "+ label_index,
        lineTension: 0,
        backgroundColor: ColorList[label_index%ColorList.length],
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }  
  }

  constructDataSets() {
    var data1 = Object.values(this.data['runs']).map(e => e['output']['counts']);
    console.log('data1', data1)
    var data2=data1.map(e => this.axisdata.map(a => e[a]));
    console.log('data2', data2)
    return data2
  }

  constructAxisData() {
    var axisdata =[]
    
    Object.values(this.data['runs']).forEach((e) => {
      var entry = e['output']['counts'];
      if (typeof entry === 'string') {
        axisdata = removeDuplicates(axisdata.concat(entry));
      } else {
        axisdata = removeDuplicates(axisdata.concat(Object.keys(entry)));
      }
    });
    axisdata.sort();
    return axisdata
  }

  averageRunData(){
    return 'Hi'
  }

}

//Does some preprocessing on the field and highlights the links (Denny request) in the least efficient way possible
function importRun(location) {

  //Remove all highlighting of runs
  var runs = document.getElementsByClassName('run')
  for (var e = 0; e < runs.length; e++) {
    runs[e].classList.remove('text-primary')
  }
  //Highlight the current run
  document.getElementById(location).classList.add('text-primary')

  //Destroy the text placeholder instructing user to chose data
  const preinfo = document.getElementById('preinfo')
  if (preinfo != null) {
    preinfo.remove()
  }

  //initiate JSON fetch and synchronus callback
  returnJSONdata(location, location, DataRendering)
}


function DataRendering(location, data_list) {
  'use strict'
  // Create run object and store
  PAGESTATE['run-data']= new RunData(data_list)
  var ctx = document.getElementById('myChart')

  //Call chart drawer
  DisplayChart(PAGESTATE['run-data'],ctx);

  //Call data printer
  DisplayData(location)
}

function DisplayChart(obj,ctx) {
  //Remove existing chart to prevent draw conflict
  if (PAGESTATE['chart']){
    PAGESTATE['chart'].destroy()}
  //Create and display new chart object
  // eslint-disable-next-line no-unused-vars
  PAGESTATE['chart'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: obj.axisdata,
      datasets: obj.plotdata
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });

}




function DisplayData(location){

  dataholder=document.getElementById('data-holder')
  dataholder.innerHTML=''
  
  dataholder.appendChild(Object.assign(NewNode('h2'),{innerHTML:'Run Overview'}))
  datadiv=dataholder.appendChild(NewNode('div',['container','m-0','p-0']))
            .appendChild(NewNode('div',['row','align-items-start']))
  //Append Time and Duration
  datadiv.appendChild(NewNode('div',['col']))
          .appendChild(DataCard('Outputs'))
          .appendChild(NewNode('ul',['list-group','list-group-flush','center']))
          .append(
            ListItem(["list-group-item"],` <div class="fw-bold">Run time:</div> ${PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['output']['run time']}`),
            ListItem(["list-group-item"],` <div class="fw-bold">Run duration:</div> ${PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['output']['run duration']} seconds`))

  //Append Parameters
  datadiv.appendChild(NewNode('div',['col']))
    .appendChild(DataCard('Parameters'))
    .appendChild(NewNode('ul',['list-group','list-group-flush','center']))
    .append(
      ListItem(["list-group-item"],` <div class="fw-bold" style='display:inline'>Shots:</div> ${PAGESTATE['run-data'].data['parameters']['shots']}`),
      ListItem(["list-group-item"],` <div class="fw-bold">Coupling map:</div><div class='text-center'> <svg height="150" width="150" id="CouplingSVG"> ${PAGESTATE['run-data'].data['parameters']['coupling']}</svg></div>`),
      ListItem(["list-group-item"],` <div class="fw-bold" style='display:inline'>Optimization:</div> ${PAGESTATE['run-data'].data['parameters']['optimization']}`))

   //Append Identity
   datadiv.appendChild(NewNode('div',['col']))
   .appendChild(DataCard('Identity'))
   .appendChild(NewNode('ul',['list-group','list-group-flush','center']))
   .append(
     ListItem(["list-group-item"],` <div class="fw-bold">User:</div> ${PAGESTATE['run-data'].data['identity']['first']} ${PAGESTATE['run-data'].data['identity']['last']} <span class="badge bg-CQ-orange">${PAGESTATE['run-data'].data['identity']['title']}</span>`),
     ListItem(["list-group-item"],` <div class="fw-bold">Organization:</div> ${PAGESTATE['run-data'].data['identity']['organization']}`),
     ListItem(["list-group-item"],` <div class="fw-bold">Git:</div> ${PAGESTATE['run-data'].data['identity']['giturl']} `),
     ListItem(["list-group-item"],` <div class="fw-bold">Version:</div> ${PAGESTATE['run-data'].data['versions']['qiskit-coldquanta']}/${PAGESTATE['run-data'].data['versions']['qexp']}`)
     )
    let single_qubit_oplist=['spam','gr', 'rz']
    let single_qubit_tolerance={
                            'spam': [0.95, 0.03],
                            'gr': [0.999, 0.005],
                            'rz': [0.99, 0.01]
                          }
    let two_quibit_oplist=['cz']
    let qubit_list=['Q0','Q1','Q2','Q3']
  
    let mop=PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['machinestatus']['operations']

if(PAGESTATE['run-data'].data['parameters']['device']==='Hilbert'){
///SPAM & Single Qubit Operations Table

 let machine_table=dataholder.appendChild(DataCard('Single Qubit Gate and SPAM Fidelities',['Ops']))
                         .appendChild(NewNode('table',['table','table-bordered']))
 let machine_body=NewNode('tbody')
                         
                         
machine_table.appendChild(NewNode('thead'))
.appendChild(NewNode('tr')).append(
                          TableElement('th', 'col',['text-center'],'Quantity'),
                          TableElement('th', 'col',['text-center'],'Q1'),
                          TableElement('th', 'col',['text-center'],'Q2'),
                          TableElement('th', 'col',['text-center'],'Q3'),
                          TableElement('th', 'col',['text-center'],'Q4'))

machine_table.appendChild(machine_body)
//Create table qubit by qubit
single_qubit_oplist.forEach((op)=>{
  var row_data=NewNode('tr',['table-bordered'])
  row_data.appendChild(TableElement('th','row',['text-center','align-middle'], op))

  qubit_list.forEach((q,i)=>{
    row_data.appendChild(Object.assign(NewNode('td',['text-center','align-middle']),{
    innerHTML:
      `<span title='${mop[op][i]["fidelity"]["value"]}'>${mop[op][i]["fidelity"]["value"].toFixed(3)} </span><br>
      <small class="bs-lightgray" style="font-size:80%" title="${mop[op][i]["fidelity"]["upper_sigma"].toFixed(4)}">
       (${mop[op][i]["fidelity"]["upper_sigma"].toFixed(4)}
      </small> 
      <small class="bs-lightgray" style="font-size:80%" title='${mop[op][i]["fidelity"]["lower_sigma"]}'>,
       ${mop[op][i]["fidelity"]["lower_sigma"].toFixed(4)})
      </small>`, 
      style:`background-color:${cellColor(mop[op][i]["fidelity"]["value"],single_qubit_tolerance[op][0],single_qubit_tolerance[op][1])}`}))
    })
   machine_body.appendChild(row_data)
 })


 machine_table.parentNode.appendChild(Object.assign(NewNode('div',['card-footer','text-center']),{
  innerHTML: "<a href='?linkfile=GettingStarted#SingleQubitFidelities'>How we calculate single qubit fidelities</a>"
}))



///////Two Qubit Operations Table
let entangle_table=dataholder.appendChild(DataCard('Entangling Gate Fidelities',['Ops']))
                          .appendChild(NewNode('table',['table','table-bordered']))
let entangle_body=NewNode('tbody');

entangle_table.appendChild(NewNode('thead'))
.appendChild(NewNode('tr')).append(
            TableElement('th', 'col',['text-center'],''),
            TableElement('th', 'col',['text-center'],'Q0'),
            TableElement('th', 'col',['text-center'],'Q1'),
            TableElement('th', 'col',['text-center'],'Q2'),
            TableElement('th', 'col',['text-center'],'Q3'))


entangle_table.appendChild(entangle_body);
let cz_table=populateCZtable(mop)

qubit_list.forEach((q1,i)=>{

  var row_data=NewNode('tr',['table-bordered'])
  row_data.appendChild(TableElement('th','row',['text-center','align-middle'], q1))

  qubit_list.forEach((q2,j) =>{
    
    var datacell= row_data.appendChild(NewNode('td',['text-center']))
    if(i===j){
      datacell.classList.add("bg-CQ-lightgray")
    }else{
      two_quibit_oplist.forEach((qq)=>{
        if(cz_table[i][j]==null && cz_table[j][i]==null){
          datacell.classList.add("bg-CQ-lightgray")
        }else
            {
            cell_values=(cz_table[i][j]||cz_table[j][i])
            datacell.innerHTML+=
              `<b>CZ</b>: <span title='${cell_values["value"]}'>${cell_values["value"].toFixed(3)} </span><br>
              <small class="bs-lightgray" style="font-size:80%" title="${cell_values["upper_sigma"].toFixed(4)}">
                (${cell_values["upper_sigma"].toFixed(4)}
              </small> 
              <small class="bs-lightgray" style="font-size:80%" title='${cell_values["lower_sigma"]}'>,
                ${cell_values["lower_sigma"].toFixed(4)})
              </small>`; 
            }
            datacell.style.backgroundColor=cellColor(cell_values["value"],0.95,0.03)
          }
            )
          }
      })
    entangle_body.appendChild(row_data)
})
entangle_table.parentNode.appendChild(Object.assign(NewNode('div',['card-footer','text-center']),{
  innerHTML: "<a href='?linkfile=GettingStarted#TwoQubitFidelities'>How we calculate two-qubit gate fidelities</a>"
}))

}

 ///Circuit Image 
 locpeices=location.split("/")
 dataholder.appendChild(DataCard('Circuit Image')).appendChild(Object.assign(NewNode('div',['text-center','CircuitImage']),{
   innerHTML:`<img 
   src='${locpeices[0]}/${locpeices[1]}/img/${locpeices[2].split('_')[1]}_${locpeices[2].split('_')[2]}/_0.png' 
   width="100%" 
   title='Circuit'
   style='max-width: 500px'></img>`
 }))
 
 modal_img()

  //var str = syntaxHighlight(data_list)
  //dataholder.innerHTML+='<pre id="json">'+str+'</pre>'


///Errors
if(Object.keys(PAGESTATE['run-data'].data).filter(e=>e.includes('error')).length+PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['errors'].length > 0){
errorcard= dataholder.appendChild(NewNode('div',['col']))
.appendChild(DataCard('Errors'))
.appendChild(NewNode('ul',['list-group','list-group-flush','center']))

Object.keys(PAGESTATE['run-data'].data).filter(e=>e.includes('error')).forEach( (er) =>{
  errorcard.append(
  ListItem(["list-group-item"],` <div class="fw-bold">${er}:</div> ${PAGESTATE[er]}`),
)})

Object.keys(PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['errors']).forEach( (er) =>{
  errorcard.append(
  ListItem(["list-group-item"],` ${er}: ${PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['errors'][er]}`),
)}
)
}


///All Data Accordion


///SVG place
drawSVG(JSON.parse(PAGESTATE['run-data'].data['parameters']['coupling']))
}






function populateCZtable(mop){
let cz_table=[[],[],[],[]];
mop['cz'].forEach((c)=>{
  cz_table[c['qubit_a_id']][c['qubit_b_id']]=c['fidelity']
})
console.log(cz_table)
return cz_table

}













// Utility
function syntaxHighlight(json) {
  if (typeof json != 'string') {
       json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}





function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const ColorList=['#3399FF','#a3a3a3', '#FF9933', '#a3a3a3', '#243d57','#8c551d','#8fc7ff']


function DataCard(title, classes = null){
  node=Object.assign(NewNode('div',['card','my-2']),{style:'width:100%'})
  node.appendChild(NewNode('div',['card-header','text-center']))
       .appendChild(Object.assign(NewNode('b'),{innerHTML:title}))
  
  if(classes){
    console.log(classes)
    node.classList.add(classes)
  }
 
  return node
 }
 
 function ListItem(classes, innerHTML){
   return Object.assign(NewNode('li',classes),{innerHTML:innerHTML})
 }

 function TableElement(tag, scope, classes, innerHTML ){
  return Object.assign(NewNode(tag,classes),{scope: scope,innerHTML:innerHTML})
}

function changeRunNumber(value){
  PAGESTATE['run']=value
}





function copytoClipboard(){
  var copyText=JSON.stringify(PAGESTATE['run-data'].data)
  navigator.clipboard.writeText(copyText);
 

}



function cellColor(value, goal, tol){
  //value from 0 to 1
  var hue=(Math.min(1.00,(Math.exp(-Math.sign(goal-value)*((goal-value)**2)/(2*tol**2))))*120).toString(10);
  return ["hsl(",hue,",100%,90%)"].join("");
}


ATOMCOORDS={
  0 : [0.15,0.15],
  1 : [0.85,0.15],
  2 : [0.15,0.85],
  3 : [0.85, 0.85]
  }
  

  
  function drawLine(SVG, pair){
    var dim=SVG.attributes.height.value

  SVG.innerHTML+=
   ` <line 
     x1='${(ATOMCOORDS[pair[0]][0]*dim).toString()}' 
    y1="${(ATOMCOORDS[pair[0]][1]*dim).toString()}" 
    x2="${(ATOMCOORDS[pair[1]][0]*dim).toString()}" 
    y2="${(ATOMCOORDS[pair[1]][1]*dim).toString()}" 
    style="stroke:#FF9933;stroke-width:2" />`
  }
  
  function drawAtoms(SVG){

  var dim=SVG.attributes.height.value
  console.log('dim: ', dim)
  console.log('atomcoords: ', ATOMCOORDS[2][0])
  console.log('mult: ', ATOMCOORDS[2][0]*dim)
  Object.keys(ATOMCOORDS).forEach((a)=>{
  SVG.innerHTML+=`<circle 
  cx="${(ATOMCOORDS[a][0]*dim).toString()}" 
  cy="${(ATOMCOORDS[a][1]*dim).toString()}" 
  r="${0.1*dim}" 
  stroke="teal" 
  stroke-width="0" 
  fill="#3399FF" />
  <text 
  x="${(ATOMCOORDS[a][0]*dim).toString()}" 
  y="${(ATOMCOORDS[a][1]*dim).toString()}" 
  fill="black"
  text-anchor="middle"
  dominant-baseline="middle"
  font-size="0.75rem">
  Q${a}</text>`
  
  })
  }
  
  
  
  function drawSVG(pairs){
  console.log(pairs)
  var node = document.getElementById('CouplingSVG')
  node.innerHTML=''
  
  pairs.forEach((p)=>{ console.log(p); drawLine(node,p)})
  drawAtoms(node)
  return node
  }
  
  
  