# Files and File Extensions




## Downloading files

Download [this ZIP archive](./files.zip).




## Unzipping files

Although it is sometimes possible to view the contents of a ZIP archive without unzipping it,
it is normally best to unzip such archives immediately. For example, unzipping a ZIP archive
will enable common search procedures to find the unzipped content (this will be useful later).
Some browsers are configured to unzip a downloaded ZIP archive for you. 
If not, you will need to unzip the archive yourself.


### Unzipping files on MacOS

Unzipping files on a Mac is normally as simple as double-clicking on the ZIP archive.

### Unzipping files on Windows

[7-Zip](https://www.7-zip.org/download.html){:target="_blank"} is
the best tool for unzipping ZIP archive on Windows,
so it is useful for you to download it now.

Unzipping files on a Windows is often done by
right-clicking on the ZIP archive,
clicking on "Show more options" (if necessary),
and selecting "7-Zip > Extract Here".
Note that this is a better option than
directly clicking "Extract All..."
(it preserves the metadata of the content).

### Success??

You should now see a folder called `Files`.
It should contain eight files:
 - `demo.csv`
 - `demo.py`
 - `demo.txt`
 - `HTML_FILE.txt`
 - `JPEG_FILE.txt`
 - `JPG_FILE.txt`
 - `M4A_FILE.txt`
 - `WAV_FILE.txt`

However, you may not see the full file names...




## Making your computer display file extensions

Most filenames end with a period and
a sequence of one or more characters,
e.g. `.pdf`, `.jpg`, and `.mp3`.
These suffixes to the names of computer files are called *filename extensions*.
They are often used to indicate characteristics of the file and/or its intended use,
and so it is always helpful for us to be able to see them...


### Viewing file extensions on MacOS
 - Go to Finder.
 - Choose "Finder > Settings".
 - Click "Advanced".
 - Select "Show all filename extensions".

### Viewing file extensions on Windows 10
 - Go to File Explorer.
 - Choose the "View" tab.
 - Select "File name extensions" (in the "Show/hide" group).

### Viewing file extensions on Windows 11
 - Go to File Explorer and maximize the window.
 - Select "View".
 - Select "Show > File name extensions".


### Success??

You should now see that the eight files
use three distinct extensions:
`.csv`, `.py`, `.txt`.




## A good text editor: Sublime Text

A good text editor has many applications.
In this course, we ask you to start using [Sublime Text](https://www.sublimetext.com/download){:target="_blank"}.

 - Sublime Text understands many programming and markup languages (including Python, C++, Java, JavaScript, and HTML).
 - It performs useful syntax highlighting of code written in these languages.
 - It provides transparent search and replace functionality (with support for regular expressions).
 - It is available for MacOS, Windows, and Linux.
 - Although Sublime Text is proprietary software, it can be downloaded for free and used as an evaluation version with no time limit.
   View PIC classes as your evaluation period of Sublime Text. If you use Sublime Text for work purposes, please consider buying it.


### Setting Sublime Text as the default for .txt and .py files on MacOS

 - Right-click (or two-finger tap) on `demo.txt`.
   - Click "Get Info".
   - Under "Open with:" select "Sublime Text.app".
   - Click "Change All...".
   - Click "Continue".
 - Do the same for `demo.py`.

### Setting Sublime Text as the default for .txt and .py files on Windows 10

 - Right-click on `demo.txt`.
   - Choose "Open with > Choose another app".
   - Check "Always use this app to open .py files".
   - If necessary, select "More Apps". Then select "Sublime Text".
   - Click "OK".
 - Do the same for `demo.py`.

### Setting Sublime Text as the default for .txt and .py files on Windows 11

 - Right-click on `demo.txt`.
   - Choose "Open with > Choose another app".
   - If necessary, select "Choose an app on your PC". Then select "Sublime Text".
   - Click "Always".
 - Do the same for `demo.py`.


### Success??

You should now be able to open `demo.py` file to see the code
```python
for s in ['Welcome', 'to', 'PIC', '1!']:
  print(s + ' ', end='')

print()
```
and `demo.txt` to read the text `Welcome to PIC 1!`.

Both are text files!
However, `demo.py` contains Python code
and because of the file extension `.py`,
Sublime Text applies its syntax highlighting
for the Python programming language.




## Opening `demo.csv` in two different ways

By default, it is likely that `demo.csv` is opened
in spreadsheet software like "Numbers" or "Excel".
This can be helpful and so we will not change the default behavior.
However, it can also be useful to edit CSV files using Sublime Text.


### Opening a .csv file with Sublime Text on MacOS
 - Right-click (or two-finger tap) on `demo.csv`.
 - Click "Open With > Sublime Text.app".

### Opening a .csv file with Sublime Text on Windows 10
 - Right-click on `demo.csv`.
 - Choose "Open with > Choose another app".
 - Do **not** check "Always use this app to open .py files".
 - If necessary, select "More Apps". Then select "Sublime Text".
 - Click "OK".

### Opening a .csv file with Sublime Text on Windows 11
 - Right-click on `demo.csv`.
 - Choose "Open with > Choose another app".
 - If necessary, select "Choose an app on your PC". Then select "Sublime Text".
 - Click "Just once".


### Success??

`demo.csv` is also just a text file!
It is a text file containing tabular data
where commas are used to separate the values
in different columns. In fact, CSV stands for
"Comma-Separated Values".




## Renaming files / changing their extension

Look at the other text files:
 - `HTML_FILE.txt`
 - `JPEG_FILE.txt`
 - `JPG_FILE.txt`
 - `M4A_FILE.txt`
 - `WAV_FILE.txt`

These files store non-text information.
However, because they all use the extension `.txt`,
our computers open these files using Sublime Text
and attempt to interpret the information as text.
The consequence: we see gibberish!

The parts of the filenames before the `.txt` extension
suggest more appropriate extensions to use.
Rename the files as follows.
 - `HTML_FILE.txt --> demo.html` 
 - `JPEG_FILE.txt --> demo.jpeg`
 - `JPG_FILE.txt --> demo.jpg`
 - `M4A_FILE.txt --> demo.m4a`
 - `WAV_FILE.txt --> demo.wav`


### A renaming procedure that works for MacOS and Windows

 - Click once to select the file.
 - Wait a little so that your second click does not open the file.
 - Click again to enable the renaming.
 - Make sure to delete the old extension.


Your computer will warn you about the
consequences of changing the file extensions.
This is okay.
We are making these changes on purpose
to investigate such consequences!

**Finally, open the renamed files!!**




## Up next

Next, you will learn about [folders](1-2-folders.md).
