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
    console.log('./'+file)
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
            innerHTML= `<a class="nav-link lvl3 run" type="button"  aria-expanded="true" id='${data['projectname']}/${data['date']}/${data['run']}' onclick="importRun('${data['projectname']}/${data['date']}/${data['run']}','${data['name']}','${data['description']}')">
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



