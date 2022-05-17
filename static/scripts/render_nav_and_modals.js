/*! 
Manual JS designed by Kelly Ann Pawlak 
Copyright (c) 2020 Kelly Ann Pawlak
Copyright (c) 2021 Kelly Ann Pawlak
Copyright (c) 2022 Kelly Ann Pawlak

This work is posted under the MIT License, you must keep the above attribution line.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


let sitedata

///Start by just printing out json file.
function init_nav(linkfile) {
  let lab_list = document.getElementById('lab_list')
  let TeamList = document.getElementById('Team')
  fetch(ABSOLUTE_LOCATION+"static/config.json?v=" + Math.floor(Math.random() * 100000))
    .then(response => {
      return response.json();
    })
    .then(data => sTeamh(data));
  function sTeamh(data) {
    sitedata = data
    includeHTML(linkfile)


    document.getElementById('datasourcelabel').innerHTML = "<img height='30px' src='static/assets/img/CQSym.png' class='px-2'></img>" + sitedata['Course-info']['name'];


    for (i = 0; i < sitedata['page-links'].length; i++) {
      lab_list.innerHTML += `<li><a class="dropdown-item" href="?linkfile=${sitedata['page-links'][i]["file"]}">${sitedata['page-links'][i]["name"]}</a></li>`

    }
    lab_list.innerHTML += `<li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="?linkfile=home"><i class="bi bi-house-fill"></i> Home</a></li>`
    //TA List Stuff

    TeamList.innerHTML +=

      `
      <li>
      <hr class="p-0 m-0" >
            </li>
      <li class="text-center lead bg-dark text-white"> 
      <b>Apps Team</b> 
      </li> 
      <li ><hr class="p-0 m-0" ></li>`
    for (i = 0; i < sitedata['Team'].length; i++) {
      var first_name = sitedata['Team'][i]['first-name']
      var last_name = sitedata['Team'][i]['last-name']
      var title=sitedata['Team'][i]['title']
      var email = sitedata['Team'][i]['email']
      var location = sitedata['Team'][i]['location']

      TeamList.innerHTML += `<li >
              <div class="dropdown-item text-center py-1">
                <div class="col-sm-12 nav-links lead">${first_name} ${last_name}</div>
                <div class="row bg-CQ-lightgray p-1">
                <a href="mailto:${email}" class="col"><i class="bi bi-envelope-fill px-1"></i></a>
               
                <button type="button" class="btn col px-1 py-0" data-bs-toggle="modal" data-bs-target="#infoModal" 
                data-name="${first_name + ' ' + last_name}" 
                data-title="${title}"
                data-email="${email}" 
                data-location="${location}" 
                data-img="${sitedata['Team'][i]['img']}"
                data-pronouns="${sitedata['Team'][i]['pronouns']}"
                ><i class="bi bi-info-circle text-primary"></i></button>
                </div>
              </div>
            </li>`

    }
    TeamList.innerHTML +=
      `<li>
            <hr class="p-0 m-0" >
          </li>
            <li class="text-center lead bg-dark text-CQ-orange"> 
      <b>Leadership</b>
      </li> 
            <li>
            <hr class="p-0 m-0" >
            </li>`

    for (i = 0; i < sitedata['Management'].length; i++) {
      var first_name = sitedata['Management'][i]['first-name']
      var last_name = sitedata['Management'][i]['last-name']
      var title = sitedata['Management'][i]['title']
      var email = sitedata['Management'][i]['email']
      var location = sitedata['Management'][i]['location']

      TeamList.innerHTML += `<li>
        <div class="dropdown-item text-center">
        <div class="col-sm-12 nav-links lead">${first_name} ${last_name}</div>
        <div class="row bg-CQ-lightgray p-1">
        <a href="mailto:${email}" class="col"><i class="bi bi-envelope-fill px-1"></i></a>
        
        <button type="button" class="btn col px-1 py-0" data-bs-toggle="modal" data-bs-target="#infoModal" 
                data-name="${first_name + ' ' + last_name}" 
                data-title= "${title}"
                data-email="${email}" 
                data-location="${location}" 
                data-img="${sitedata['Management'][i]['img']}"
                data-pronouns="${sitedata['Management'][i]['pronouns']}"
                ><i class="bi bi-info-circle text-primary"></i></button>
              </div>
            </li>`

    }



  }



}

//<a href="${room}" class="col"><i class="bi bi-camera-video-fill px-1 py-0"></i></a>

var infoModal = document.getElementById('infoModal')
infoModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-name')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = infoModal.querySelector('.modal-title')
  var modalBodyInput = infoModal.querySelector('.modal-body')

  modalTitle.innerHTML = `Contact <span class='text-CQ-seagreen'>${recipient}</span>`

  modalBodyInput.innerHTML = ''
  let color
  if (button.getAttribute('data-title') == "TA") {
    color = "primary"
  } else {
    color = "danger"
  }

  if (button.getAttribute('data-img')) {
    modalBodyInput.innerHTML += `
    <img src="${button.getAttribute('data-img')}" class="img-fluid rounded" style="max-height:200px;"></img>
    <br>
    <br>
    `
  }

  modalBodyInput.innerHTML +=
    `<strong>${recipient}</strong> 
    <br>
    <small class="text-muted pronoun">${button.getAttribute('data-pronouns')}</small>
    <br>
   <span class="badge bg-${color}" style="font-size: 12pt">${button.getAttribute('data-title')}</span>
   <hr>`

  if (button.getAttribute('data-email') != 'undefined') {
    modalBodyInput.innerHTML += `
  <b>Email:</b> <br>
  <a href="mailto:${button.getAttribute('data-email')}">${button.getAttribute('data-email')}</a>
  <br><hr>
  `}
  if (button.getAttribute('data-location') != '' && button.getAttribute('data-location') != 'undefined' && button.getAttribute('data-location') != null) {
    modalBodyInput.innerHTML += `
    
  <b>Location:</b> <br>
  ${button.getAttribute('data-location')}

  `}
  
})

var imgModal = document.getElementById('imgModal')
imgModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var image = event.relatedTarget
  // Extract info from data-bs-* attributes
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalBodyInput = imgModal.querySelector('.modal-body')


  modalBodyInput.innerHTML = `
  <img src="${image.getAttribute('src')}"  alt="${image.getAttribute('alt')} width="100%" style="max-width:100%"></img>
  <hr>
  <p id= "modal_cap">
  ${image.getAttribute('title')}
  </p>
  `

  quick_math(document.getElementById('imgModal'))




})


function modal_img() {
  imgs = document.querySelectorAll("img")
  var details
  for (i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('data-bs-toggle', "modal")
    imgs[i].setAttribute('data-bs-target', "#imgModal")
    if (imgs[i].getAttribute('title')) {
      imgs[i].outerHTML += imgs[i].getAttribute('title')
    }
  }



}


window.document.onload = function (e) {
  console.log("document.onload", e, Date.now(), window.tdiff,
    (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred));
}

