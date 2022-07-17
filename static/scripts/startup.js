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


///////////VERSION CHECK///////////////////////////////////////
// const VERSIONtest='0.1.0'
latest_version='0.2.1'

function version_to_int(ver){
  var vsplit=ver.split('.').map(Number)
  var BaseArray=[10000,100,1]
  dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
  var vint=dot(vsplit, BaseArray)
  console.log(vint)
  return vint
}


if (VERSION == null || VERSION == 0) {
  AlertUpdate();
} else {
  if(version_to_int(latest_version)>version_to_int(VERSION)){
    AlertUpdate()
  }
}

function AlertUpdate(){
  update=document.getElementsByClassName('navbar-nav')[0]
  update.insertBefore(NewNode('li',['nav-link'])
  .appendChild(Object.assign(NewNode('a'),{href:'https://gitlab.com/coldquanta/coldquanta-applications-team/qexp', innerHTML:' <b>New qexp released! Click to update</b>'})).parentNode,update.firstChild)
  
}


///////////ENABLE GADETS////////////////////////////////////////

//////Make Sidebar Functional
(function () {
  'use strict'
  document.querySelector('#sidebar-button').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
    console.log("pressed")
  })
})()

//COLDQUANTA CONFIDENTIAL
document.getElementById('copyright').innerHTML=`<b>COLDQUANTA CONFIDENTIAL.</b> Distribution of this program or information `


///////////READ URL VARIABLE AND LOAD PAGE.///////////////////////////////////////
//Function that determines the page to display based on URL Variable.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var linkfile = urlParams.get('linkfile')
if (linkfile == null) {
  linkfile = 'Home'
}

init_nav(linkfile)

