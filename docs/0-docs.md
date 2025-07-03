# Key concepts

This document is arranged so that every major concept has a heading associated with it
which begins with `concept::`. For example, if you want to learn about `if` statements,
then you can search for `concept::if`. When a concept involves more than one word,
the words are separated-by-dashes. For example, if you want to learn about `for` loops,
then you can search for `concept::for-loop`. Multiple headings are often given so
that your searches are more likely to succeed. Headings list words in singular, so
searching for `concept::directory` is better than searching for `concept::directories`.

All coding concepts are approached through the Python coding language.


## concept::filename-extension, concept::file-extension, concept::extension

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


## concept::txt, concept::csv, concept::bmp, concept::jpg, concept::png, concept::pdf, concept::wav, concept::aiff, concept::flac, concept::mp3, concept::m4a, concept::mp4, concept::mov, concept::html, concept::py, concept::ipynb

Here are some common file extensions.
Do not worry if you have not encountered them all.

| Extension               | Purpose                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
|  `.txt`                 | Text file consisting of plain text (no formatting)                                                      |
|  `.csv`                 | Text file containing tabular data where columns are separated by commas                                 |
|  `.bmp`, `.jpg`, `.png` | Image file                                                                                              |
|  `.pdf`                 | Nicely formatted documents which can include text and images                                            |
|  `.wav`                 | Uncompressed audio (originated on Microsoft Windows)                                                    |
|  `.aiff`                | Uncompressed audio (originated on Apple Macintosh)                                                      |
|  `.flac`                | Compressed (lossless) audio file                                                                        |
|  `.mp3`                 | Compressed (lossy) audio file                                                                           |
|  `.m4a`                 | A container for audio files allowing storage of ALAC (lossless compression) and AAC (lossy compression) |
|  `.mp4`                 | Digital multimedia container format (video and audio)                                                   |
|  `.mov`                 | QuickTime file format (originated on Apple Macintosh)                                                   |
|  `.html`                | Document designed to be displayed in a web browser                                                      |
|  `.py`                  | Python script file                                                                                      |
|  `.ipynb`               | Interactive Python NoteBook file                                                                        |
|  `.zip`                 | An archive file format that supports lossless data compression                                          |


## concept::directory, concept::folder

Files on your computer are organized into *directories*.
For example, it is common for computers to have directories called
`Documents`, `Music`, `Pictures`, and `Downloads` within a directory
associated with the user of the computer.

It is possible to navigate through these directories using the
the Terminal on Mac or the Command Prompt on Windows. However,
you are most familiar with navigating through them using Finder
on Mac or the File Explorer on Windows. In this case, they appear
graphically as *folders* which you can double-click on to view
their contents.


## concept::path, concept::file-path, concept::filepath, concept::absolute-path, concept::relative-path

Given a file on your computer. You can repeatedly ask:

> "In what directory does this exist?"

Eventually, the answer to this question will be:

> "The root directory."

This is the top-most directory in a computer's filesystem.
The *path* of the original file stores the answers to all these questions.

 - Suppose the file is called `solutions.txt`,
 - that it is contained in a directory called `HW-1`,
 - that this directory is contained in a directory called `0-Homework-Assignments`,
 - that this directory is contained in a directory called `PIC-1`,
 - that this directory is contained in a directory called `UCLA-Classes`,
 - that this directory is contained in a directory called `Documents`,
 - that this directory is contained in a directory called `YOUR_NAME`,
 - that this directory is contained in a directory called `Users`,
 - and that this directory is contained in the root directory.

Then the path of your file is `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/0-Homework-Assignments/HW-1/solutions.txt`.
Similarly, the folder `HW-1` has the path `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/0-Homework-Assignments/HW-1`.
Both of these are *absolute paths* because they start at the root directory.

We can also give *relative paths* relative to a current working directory.
If we are working within the `PIC-1` directory, then
the path of the file `solutions.txt` relative to `PIC-1` is `./0-Homework-Assignments/HW-1/solutions.txt` and
the path of the directory `HW-1` relative to `PIC-1` is `./0-Homework-Assignments/HW-1`.


## concept::string

## concept::charset

## concept::print


## concept::int

## concept::arithmetic

## concept::comparison


## concept::list

## concept::index

## concept::len, concept::length-of-a-list, concept::length-of-list


## concept::assignment, concept::assign, concept::=


## concept::bool, concept::boolean

## concept::equals, concept::equal-to, concept::==

## concept::and, concept::or, concept::not


## concept::control, concept::control-flow

## concept::if, concept::if-statement

## concept::while, concept::while-loop

## concept::for, concept::for-loop

## concept::range


## concept::float, concept::int-division, concept::float-division

## concept::floating-point-imprecision


## concept::function, concept::method

## concept::sort, concept::sorted


## concept::dictionary

## concept::set

## concept::comprehension, concept::list-comprehension, concept::dictionary-comprehension, concept::set-comprehension


## concept::numpy

## concept::scipy

## concept::fitting, concept::line-fitting, concept::curve-fitting

## concept::matplotlib, concept::plotting, concept::plt
