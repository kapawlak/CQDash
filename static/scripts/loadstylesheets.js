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

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

//css stylesheets to load, in order
const css_links = [
        'https://fonts.googleapis.com/css?family=Roboto', //fonts
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', //fonts
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css', //fonts
        '../../../static/assets/webfont.css',//UCSB web standards font
        '../../../static/css/katex.min.css', //Katex styles
        '../../../static/css/custom.css', //Custom Sass compiled CSS sheet for manual environments
        '../../../static/css/dashboard.css' // Another Custom CSS sheet that should get moved directly into custom.css eventually
]


// Create new stylesheet link Elements
css_links.forEach(e => {
        var link = document.createElement('link');
        // set the attributes for link element 
        link.rel = 'stylesheet';

        link.type = 'text/css';

        link.href = e;
        // Append link element to HTML head
        head.appendChild(link);
});



