//Global Data Directory Object
OPENED=false
function importDirData() {
    fetch("index?" + Math.floor(Math.random() * 100000))
        .then(response => {
            return response.json();
        })
        .then(data => stash(data));
    function stash(data) {
        initiateNavBar(data)
    }
}

function returnJSONdata(file, project_directory, callback) {
    console.log(file)
    fetch(file)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            callback(project_directory, data)
        });
}


function initiateNavBar(directory_data) {
    
    for (var project_name in directory_data) {
        if (project_name.includes('.') != true && project_name != 'index' && project_name != 'pages') {   
            project_directory=
            returnJSONdata("/"+project_name+"/info", directory_data[project_name],build_accordion)
            
        }
    }  
}


function build_accordion(project_directory, data){
    let state={'opened': true, 'level':1}
    //console.log(data)
    let node=NewNode('div',['accordion-item'])
    node.appendChild(accordion_header(data,state))
    Object.keys(project_directory).sort().reverse().filter(element => element!='info').sort().forEach((date)=>{
        data['date']=date
        data['text_date']=date.substring(2, 4) + '/' + date.substring(4, 6) + '/' + date.substring(0, 2)
        state['level']=2
        l2_node=node
        .appendChild(accordion_container(data,state))
        .appendChild(NewNode('div',['accordion-item']))
        .appendChild(accordion_header(data,state))
        .parentNode
        state['level']=3
        l2_node=l2_node
        .appendChild(accordion_container(data,state))
        
        Object.keys(project_directory[date]).sort().reverse().filter(element => element!='img').forEach((run) =>
        {   state['level']=3
            data['run']=run
            data['run-text']=`${run.split('_')[0]} @ ${run.split('_')[2].substring(0, 2)}:${run.split('_')[2].substring(2, 4)}:${run.split('_')[2].substring(4, 6)}`
            
            l2_node
            .appendChild(accordion_header(data,state))
        })
    })
    
    document.getElementById("navcordion").appendChild(node)
}

function accordion_container(data, state){
    let node=NewNode('div',['accordion-collapse','collapse', 'FINDME'])
    switch (state['level']){
        case 2:
            Object.assign(node,{id: 'collapse'+data['projectname']})
            node.dataset['bsParent'] = "#navcordion";
            break
        case 3:
            Object.assign(node,{id: 'collapse'+data['projectname'] + data['date']})
            node.dataset['bsParent'] = '#collapse'+data['projectname'] + data['date'];
            break
    }
    
    return node
}

function accordion_header(data, state){
    let datalabel=''
    let innerHTML
    let tag = 'h2';
    let CL= ['accordion-header'];

    switch (state['level']){
        case 1:
            datalabel=data['projectname']
            innerHTML= `<div class='lvl${state['level']}-text'> ${data['name']}</div>`
            break;
        case 2:
            datalabel=data['projectname'] +data['date']
            innerHTML= `<div class='lvl${state['level']}-text'> ${data['text_date']}</div>`
            break;
        case 3:
            tag='div'
            CL=null
            innerHTML= `<a class="nav-link lvl3 run" type="button"  aria-expanded="true" id='${data['projectname']}/${data['date']}/${data['run']}' onclick="importRun('${data['projectname']}/${data['date']}/${data['run']}')">
            <small> ${data['run-text']} </small>
          </a>`
            break;
        default:
            innerHTML='error'
    }

    let node = Object.assign(NewNode(tag, CL),
        {
            id:"heading" + datalabel
        }
    )
    if(state['level']!=3){
    button= node.appendChild(Object.assign(
        NewNode('button'),
        {   classList:`accordion-button lvl${state['level']} ${state['opened']? 'collapsed': ''}`,
            type: 'button', 
            innerHTML:innerHTML}))
    button.setAttribute('aria-expanded', 'true')
    button.setAttribute('aria-controls', `collapse${datalabel}`)
    button.setAttribute('data-bs-toggle','collapse')
    button.setAttribute('data-bs-target',`#collapse${datalabel}`)
}else{
    node.innerHTML=innerHTML
}
    return node
}






















// function navBar(data_dir) {
//     datas = data_dir
//     navbar = document.getElementById("navcordion")
//     var state={'opened': false}
//     for (var proj in datas) {
//         var values={}
//         values['projectname']=proj
//         values['name']=proj

//         var proj_dir = datas[proj];
//         if (proj.includes('.') != true && proj != 'index' && proj != 'pages') {
//             accordion_container = ac_item()
//             navbar.appendChild(accordion_container)       // Create top level accordion container
//             project_node = levelone(proj, opened)
//             accordion_container.appendChild(project_node)    // Append Project header to top level accordion container
//             date_collapsing_containter = leveltwocontainer(proj, opened)
//             opened = true
//             accordion_container.appendChild(date_collapsing_containter)     // Append the collapsing container for the dates

//             dates = Object.keys(proj_dir).sort().reverse()
//             for (var d in dates) {
//                 date = dates[d]
//                 if (date != "info") {
//                     var date_dir = proj_dir[date];
//                     big_ac = document.createElement("div")
//                     big_ac.id = proj + date
//                     date_collapsing_containter.appendChild(big_ac)
//                     accordion_container2 = ac_item()
//                     big_ac.appendChild(accordion_container2)

//                     date_node = leveltwo(proj, date)
//                     accordion_container2.appendChild(date_node)
//                     run_container = levelthreecontainer(proj, date)
//                     accordion_container2.appendChild(run_container)
//                     runs = Object.keys(date_dir).sort().reverse()
//                     for (var run in runs) {
//                         if (runs[run] != 'img'){
//                             run_node = levelthree(proj, date, runs[run])
//                             run_container.appendChild(run_node)}
//                     }

//                 }
//             }
//         }
//     }
// }

// values dictionary needs: name, projectname, date, text_date, run, run_info 
// state dictionary needs: level, opened?
//
//
//
//
//











// function levelone(proj, opened) {
//     isCollpased = opened ? ' collapsed': ''

//     node = Object.assign(NewNode("h2",['accordion-header']),{id:"heading" + proj})
//     .appendChild(Object.assign(
//         NewNode('button'),
//         {   classList:`accordion-button lvl1 ${isCollpased}`,
//             type: 'button', 
//             innerHTML: `<span data-feather="layers"> </span> ${proj}`}))
//     node.setAttribute('aria-expanded', 'true')
//     node.setAttribute('aria-controls', `collapse${proj}`)
//     node.setAttribute('data-bs-toggle','collapse')
//     node.setAttribute('data-bs-target',`#collapse${proj}`)
   
//     return node.parentNode
// }

// function leveltwocontainer(proj, opened) {

//     node = document.createElement("div")
//     node.id = "collapse" + proj
//     node.classList.add("accordion-collapse", "collapse")
//     if (opened == false) {
//         node.classList.add("show")
//         opened = true

//     }
//     node.dataset['bsParent'] = "#navcordion";
//     return node

// }


// function levelthreecontainer(proj, date) {
//     node = document.createElement("div")
//     node.id = "collapse" + proj + date
//     node.classList.add("accordion-collapse", "collapse")
//     node.dataset['bsParent'] = '#'+proj + date
//     return node

// }


// function leveltwo(proj, date) {

//     text_date = date.substring(2, 4) + '/' + date.substring(4, 6) + '/' + date.substring(0, 2)
//     node = document.createElement("h3")
//     node.classList.add('accordion-header')
//     node.id = "heading" + proj
//     node.innerHTML = `
//     <button class="accordion-button lvl2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${proj + date}" aria-expanded="true" aria-controls="collapse${proj + date}">
//       <small> ${text_date} </small>
//     </button>
//     `
//     return node
// }

// function levelthree(proj, date, run) {

//     run_info=run.split('_')
//     run_method = run_info[0]
//     run_time = run_info[2]
//     run_string = `${run.split('_')[0]} @ ${run.split('_')[2].substring(0, 2)}:${run.split('_')[2].substring(2, 4)}:${run.split('_')[2].substring(4, 6)}`

//     node = document.createElement("div")
//     node.innerHTML = `
//     <a class="nav-link lvl3" type="button"  aria-expanded="true"  onclick="importRun('${proj}/${date}/${run}')">
//       <small> ${run_string} </small>
//     </a>
//     `
//     return node
// }




