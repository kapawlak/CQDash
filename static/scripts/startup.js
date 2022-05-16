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

  //Make Sidebar Functional
  (function () {
    'use strict'
    document.querySelector('#sidebar-button').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
      console.log("pressed")
    })
  })()
document.getElementById('copyright').innerHTML=`©(2020-${new Date().getFullYear()}) UCSB ILG, Design by Kelly Ann Pawlak`

  //Function that determines the page to display based on URL Variable.
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var linkfile = urlParams.get('linkfile')
  if (linkfile == null) {
    linkfile = 'home'
  }

  function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
  function appresize(){
    document.getElementById('chatframe').height=(window.innerHeight-document.getElementById('chatframe').getBoundingClientRect().y) -10 +'px'
  }
  appresize()

  window.onresize=appresize

  init_nav(linkfile)

  
  window.onload = function (){
    
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
                document.getElementById(hash).focus()
            }, 300);
          }
        }
