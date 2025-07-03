# Folders and Paths




## Creating a Folder structure for this course

Folders help us to organize our files.

 - Within your `Documents` folder,
   create a folder called `UCLA-Classes`.
   (Right-click or two-finger tap
   and select "New (>) Folder".)
 - Within the `UCLA-Classes` folder you just created,
   create a folder called `PIC-1`.
 - Within the `PIC-1` folder you just created,
   create five folders:
   - `0-Homework-Assignments`
   - `1-File-Management`
   - `2-Desmos-Graphing-Calculator`
   - `3-Spreadsheets`
   - `4-Python`
 - Copy ("command + C" on MacOS; "ctrl + C" on Windows)
   the folder called `Files` from [last time](1-1-files.md).
 - Paste ("command + V" on MacOS; "ctrl + V" on Windows) it
   in the `1-File-Management` folder that you just created
   and rename it as `1-Files`.
 - Within the `1-File-Management` folder that you just created,
   create three other folders:
   - `2-Folders`
   - `3-Maze`
   - `4-Find-Replace`
 - Within the `2-Folders` folder that you just created,
   create four folders:
   - `Images`
   - `Sounds`
   - `Browser`
   - `Other`
 - Copy each of the eight files in `1-Files` and paste them in the
   appropriate folders `Images`, `Sounds`, `Browser`, `Other`.

You now have the following folder structure for this class.
```box-drawing
PIC-1
  │
  ├───0-Homework-Assignments
  │
  ├───1-File-Management
  │     │
  │     ├───1-Files
  │     │     ├───demo.csv
  │     │     ├───demo.py
  │     │     ├───demo.txt
  │     │     ├───demo.html 
  │     │     ├───demo.jpeg
  │     │     ├───demo.jpg
  │     │     ├───demo.m4a
  │     │     └───demo.wav
  │     │
  │     ├───2-Folders
  │     │     │
  │     │     ├───Images
  │     │     │     ├───demo.jpeg
  │     │     │     └───demo.jpg
  │     │     │
  │     │     ├───Sounds
  │     │     │     ├───demo.m4a
  │     │     │     └───demo.wav
  │     │     │
  │     │     ├───Browser
  │     │     │     └───demo.html
  │     │     │
  │     │     └───Other
  │     │           ├───demo.csv
  │     │           ├───demo.py
  │     │           └───demo.txt
  │     │  
  │     ├───3-Maze
  │     └───4-Find-Replace
  │
  ├───2-Desmos-Graphing-Calculator
  ├───3-Spreadsheets
  └───4-Python
```




## Paths

On most computers, the `Documents` folder is contained in a folder with your name,
which is contained in a folder called `Users`,
which is contained in a folder above all other folders: the root directory.

The *path* of a file records the exact location of the file on your computer.
For example, the path of the original file `demo.html` is
`/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management/1-Files/demo.html`
and the path of the copy that you made is
`/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management/2-Folders/Browser/demo.html`.
The path of the folder `1-File-Management` is `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management`.
All of these are *absolute paths* because they start at the root directory.

We can also give *relative paths* relative to a current working directory.
If we are working within the `PIC-1` directory, then
the paths above can be described more concisely as follows.
 - `./1-File-Management/1-Files/demo.html`
 - `./1-File-Management/2-Folders/Browser/demo.html`.
 - `./1-File-Management`.


### Seeing path information on MacOS

 - Right-click (or two-finger tap) on the original `demo.html`.
 - Click "Get Info".
 - After "Where:", it will communicate the path of the containing folder by saying
   `MacintoshHD > Users > YOUR_NAME > Documents > UCLA-Classes > PIC-1 > 1-File-Management > 1-Files`.
 - Right-click (or two-finger tap) on it and select "Copy as Pathname".
 - Pasting it into Sublime Text will give
   `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management/1-Files`,
   the path of the containing folder.

### Seeing path information on Windows

 - While in `1-Files`, the directory of the original `demo.html`, you can see at the top, it says...
   `This PC > Documents > UCLA-Classes > PIC-1 > 1-File-Management > 1-Files`
 - Right-click on `1-Files`.
 - Click "Copy Address".
 - Pasting it into Sublime Text will give
   `C:\Users\YOUR_NAME\Documents\UCLA-Classes\PIC-1\1-File-Management\1-Files`,
   the path formatted "Windows-style".




## Searching for files

Searching for files can be very useful.


### Searching on MacOS with Finder

 - Go to `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1`.
 - Search (top-right of Finder) for `demo.html`.
 - You will see at least two results.
 - Highlight one of them by single-clicking.
 - At the bottom you will see the path to that file.
 - This also gives a way to obtain the filepath.
   - Right-click (or two-finger tap) at the bottom on `demo.html`.
   - Select "Copy `demo.html` as Pathname".
   - Pasting it into Sublime Text will give
     `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management/1-Files/demo.html` or
     `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/1-File-Management/2-Folders/Browser/demo.html`
     depending on which file you selected.

### Searching on Windows with File Explorer

 - Go to `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1`.
 - Search (top-right of File Explorer) for `demo.html`.
 - You will see at least two results.
 - The paths are also indicated to the right.
   If a path is truncated, you can see the full path by hovering above the truncated path.




## Up next

Next, you will try [an exercise](1-3-maze.md) that
uses the concepts you have just learned about.
