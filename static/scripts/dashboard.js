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
      ListItem(["list-group-item"],` <div class="fw-bold">Shots:</div> ${PAGESTATE['run-data'].data['parameters']['shots']}`),
      ListItem(["list-group-item"],` <div class="fw-bold">Coupling map:</div> ${PAGESTATE['run-data'].data['parameters']['coupling']}`),
      ListItem(["list-group-item"],` <div class="fw-bold">Optimization:</div> ${PAGESTATE['run-data'].data['parameters']['optimization']}`))

   //Append Identity
   datadiv.appendChild(NewNode('div',['col']))
   .appendChild(DataCard('Identity'))
   .appendChild(NewNode('ul',['list-group','list-group-flush','center']))
   .append(
     ListItem(["list-group-item"],` <div class="fw-bold">User:</div> ${PAGESTATE['run-data'].data['identity']['first']} ${PAGESTATE['run-data'].data['identity']['last']}, ${PAGESTATE['run-data'].data['identity']['title']}`),
     ListItem(["list-group-item"],` <div class="fw-bold">Organization:</div> ${PAGESTATE['run-data'].data['identity']['organization']}`),
     ListItem(["list-group-item"],` <div class="fw-bold">Git:</div> ${PAGESTATE['run-data'].data['identity']['giturl']} `),
     ListItem(["list-group-item"],` <div class="fw-bold">Version:</div> ${PAGESTATE['run-data'].data['versions']['qiskit-coldquanta']}/${PAGESTATE['run-data'].data['versions']['qexp']}`)
     )


///SPAM & Single Qubit Operations Table
 let single_qubit_oplist=['spam','gr', 'rz']
 let two_quibit_oplist=['cz']
 let qubit_list=['Q1','Q2','Q3','Q4']

 let mop=PAGESTATE['run-data'].data['runs'][PAGESTATE['run']]['machinestatus']['operations']
 let machine_table=dataholder.appendChild(DataCard('Single Qubit Gate and SPAM Fidelity'))
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
  row_data.appendChild(TableElement('th','row',['text-center'], op))

  qubit_list.forEach((q,i)=>{
    row_data.appendChild(Object.assign(NewNode('td',['text-center']),{
    innerHTML:
      `<span title='${mop[op][i]["fidelity"]["value"]}'>${mop[op][i]["fidelity"]["value"].toFixed(3)} </span><br>
      <small class="bs-lightgray" style="font-size:80%" title="${mop[op][i]["fidelity"]["upper_sigma"].toFixed(4)}">
       (${mop[op][i]["fidelity"]["upper_sigma"].toFixed(4)}
      </small> 
      <small class="bs-lightgray" style="font-size:80%" title='${mop[op][i]["fidelity"]["lower_sigma"]}'>,
       ${mop[op][i]["fidelity"]["lower_sigma"].toFixed(4)})
      </small>`}))
    })
   machine_body.appendChild(row_data)
 })





///////Two Qubit Operations Table
let entangle_table=dataholder.appendChild(DataCard('Entangling Gate Information'))
                          .appendChild(NewNode('table',['table','table-bordered']))
let entangle_body=NewNode('tbody');

entangle_table.appendChild(NewNode('thead'))
.appendChild(NewNode('tr')).append(
            TableElement('th', 'col',['text-center'],''),
            TableElement('th', 'col',['text-center'],'Q1'),
            TableElement('th', 'col',['text-center'],'Q2'),
            TableElement('th', 'col',['text-center'],'Q3'),
            TableElement('th', 'col',['text-center'],'Q4'))


entangle_table.appendChild(entangle_body);
let cz_table=populateCZtable(mop)

qubit_list.forEach((q1,i)=>{

  var row_data=NewNode('tr',['table-bordered'])
  row_data.appendChild(TableElement('th','row',['text-center'], q1))

  qubit_list.forEach((q2,j) =>{
    
    var datacell= row_data.appendChild(NewNode('td',['text-center']))
    if(i===j){
      datacell.classList.add("bg-CQ-lightgray")
    }else{
      two_quibit_oplist.forEach((qq)=>{
        
        if(cz_table[i][j]==null){
          datacell.classList.add("bg-CQ-lightgray")
        }else
            {
            datacell.innerHTML+=
              `<span title='${cz_table[i][j]["value"]}'>${cz_table[i][j]["value"].toFixed(3)} </span><br>
              <small class="bs-lightgray" style="font-size:80%" title="${cz_table[i][j]["upper_sigma"].toFixed(4)}">
                (${cz_table[i][j]["upper_sigma"].toFixed(4)}
              </small> 
              <small class="bs-lightgray" style="font-size:80%" title='${cz_table[i][j]["lower_sigma"]}'>,
                ${cz_table[i][j]["lower_sigma"].toFixed(4)})
              </small>`; 
            }
          }
            )
          }
      })
    entangle_body.appendChild(row_data)
})
entangle_table.appendChild(Object.assign(NewNode('div',[card-footer]),{innerHTML: "How we calculate two-qubit gate fidelities"}))



 ///Circuit Image 
 locpeices=location.split("/")
 dataholder.appendChild(DataCard('Circuit Image')).appendChild(Object.assign(NewNode('div','text-center'),{
   innerHTML:`<img src='${locpeices[0]}/${locpeices[1]}/img/${locpeices[2].split('_')[1]}_${locpeices[2].split('_')[2]}/_0.png' width="100%" title='Circuit'></img>`
 }))
 
 modal_img()

  //var str = syntaxHighlight(data_list)
  //dataholder.innerHTML+='<pre id="json">'+str+'</pre>'


///Errors


///All Data Accordion

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


function DataCard(title){
  node=Object.assign(NewNode('div',['card','my-2']),{style:'width:100%'})
  node.appendChild(NewNode('div',['card-header','text-center']))
       .appendChild(Object.assign(NewNode('b'),{innerHTML:title}))
  
 
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