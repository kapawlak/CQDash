                
                        
# Rules for Editing

This is a professionally-maintained folder intended to serve lab manuals to UCSB students. This is not a miscellaneous storage folder to put random lab-related files on.
Rules are strictly enforced on this respository to prevent rat-nesting of files. As this folder will be directly uploaded on the physics servers, any and all files contained within it are available to students — any files not following the rules below will be deleted without warning.

1. All course .md files must go into the appropriate course folder. 
     - Only **one** version of each lab is permitted. You must store alternate/historical versions of labs elsewhere.
2. Images must go into the respective /img/LabName folder of that course. 
     - Only one version of each image is permitted. Delete all other versions and sizes of the image.
     - Unused images (not linked in a lab file) are to be deleted.
     - Images must have a human-readable name.
3. Appending a file name with "old" "previous" "kelly" (e.g. "lab1-old.md" "kelly-lab5.md") is not permitted. These files will be removed. 
4. Additional proliferation of folders that are not for the explicit purpose of storing a course manual in the prescribed format is strictly prohibited
    - This includes "Misc" folders, or top-level folders that hold any files.
5. Any orphaned files will be deleted at the will of the maintainer without notice.
6. Any files with innapropriate names will be immediately deleted.


# Directory Structure

The directory structure must look as follows for the index.html linking to work:


```
-ILG.physics.ucsb.edu folder
  |-static
  |-people
  |-Courses
        |-Course_group_folder
                |Common (Contains stuff like shared FAQ and Policies for course Groups)
                        |- FAQ.md
                        |- imgs
                |-Course_folder
                        |- index.html
                        |- config.json             
                        |- home.md
                        |- lab0.md
                        .
                        .
                        .
                        |- lab#.md
                        |- imgs
                           |-LabName
                              |-imagename.ext
```


## Script Files and What they Do

| File Name                | Function                                                                                              | ILG Wrote It? | Should I Touch?                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| Auto-render.js           | Automatically starts rendering of LaTeX                                                               | No            | NO -- only replace with updates if needed       |
| katex.min.js             | Renders the LaTeX                                                                                     | No            | NO -- only replace with updates if needed       |
| loadscripts.js           | Batch loads all scripts that run on index page                                                        | Yes           | Yes -- when need to add new script              |
| loadstylesheets.js       | Batch loads all css styles that run on index page                                                     | Yes           | Yes -- when need to add new stylesheet          |
| markdown-containers.js   | Sets the style and behavior of boxes & blurbs                                                         | Yes           | Yes -- edits blurb behavior!                    |
| markdown-it-container.js | Processes ::: type boxes                                                                              | No            | NO -- only replace with updates if needed       |
| markdown-it.min.js       | Processes raw markdown into HTML                                                                      | No            | NO -- only replace with updates if needed       |
| render_nav_and_models.js | Renders the navagation bars and the items that "pop over" the screen like TA help and images          | Yes           | Yes -- change pop-over behavior and layout      |
| startup.js               | Adds copywrite, forces page to go to correct section and makes the side-bar chatframe scale correctly | Yes           | No -- only if something is broken. Is finicky.  |
| style-render.js          | Processes the [?] pop-overs, links to boxes, emojis and other special decorations.                    | Yes           | Yes -- beware that things here break easily tho |
| table-of-contents.js     | Automatically generates a table of contents and displays it in the left navigation pane               | Partially     | No -- can create a mess, avoid if possible      |


# License
Manual JS/CSS/Layout designed by Kelly Ann Pawlak 
Copyright (c) 2020 Kelly Ann Pawlak, UCSB ILG Physics


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