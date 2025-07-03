# Find and Replace




Find and Replace are two particularly useful features of Sublime Text (and other text editors).
 - We can use *find* on a piece of text to jump to particular parts of it and
   to count how many times a specified piece of text shows up.
    - Either select "Find > Find..."
    - or use the keyboard shortcut "command + F" on MacOS or "ctrl + F" on Windows.
 - We can use *replace* to change any found text
   to some other specified text.
    - Either select "Find > Replace..."
    - or use the keyboard shortcut "command + option + F" on MacOS or "ctrl + H" on Windows.
 - We can use *replace all* to change
   all occurrences of some looked-for text
   to some other specified text.




## Finding a secret image

There is a secret image hidden inside the following text.

```
HIHKJHHHIKIHHKIIHJJJKIHKIJJHHIHIIIKHHHHHHIIIJIHHHIHHJII
KJIKIHIPKJHHJIHHKHIJJKIIKHIKHJKJIHHKHIIIHIJHHIHIJIHHIKH
IIHHPNMLOBIKHKHHBONBIHIHHHJKIHIIKPMNMHJIIIKKKIIJHHJKHKH
HHJHLMAFLLBIHHHPMMMIJJJHIIHHHHIJLOHINJJHJHIJHHHHIHHIHIH
KHHHIIHBMNAHKIHMONCKHJHKIHJHHIJMOHPNIKIHHIJJIJIHJJIIKIK
JIIIKIJOMNHIKKPLLNIIIBMMLNAHIIKNOPMIIHINOMGAPBAHJHHKHIH
KIIKJHOLLAJIHHMLLHKKMNLCKDLAKIPNLLCKHOLNCKFMLLEHHIKIHIH
IIHHJDNNLHIJHHNLLKHMLOCIHNMJIIBLMCIHMMOIHHIMMOKKIKJJJKI
KJIIHDNOEJHJINMNLJPNNEJKHDKJPOCONAKHONNJJIPMLNIHIIHKJKK
HIHJIDNNOBHLLOLNNLLOLBJJIHPGMCKEOMPMLLLAIKBOMNIPMJKHKJK
HIKHHHDEOMNMMFDOOLCDELMLMNECIKHHELNNHFNLLNMCKOLOCHHHJJJ
KKHJKIKKIKHIJHIIIJHJIIHHKIIKHHHHHIJIIIIJHKIHKJJJKIIKJHJ
IIIJHIIHHIJHKKKKJJHKJJHHJIHJJJIIHIIIIKIHHKJIJHIJIHKKHIK
```

To decode it, perform the following "Find and Replace"s
after copying and pasting it to Sublime Text.
 - `A --> 9`
 - `B --> "`
 - `C --> d`
 - `D --> b`
 - `E --> .`
 - `F --> o`
 - `G --> '`
 - `H`, `I`, `J`, `K --> 8`
 - `L`, `M`, `N`, `O -->` a single space




## Applying a long mathematical formula to a particular situation

The following math equation shows you what a $4\times 4$ *matrix* looks like.
These mathematical objects show up all over the place in Data Science.

<div>
  \[M =
  \begin{pmatrix}
  a & b & c & d\\
  n & p & q & r\\
  s & t & u & v\\
  w & x & y & z
  \end{pmatrix}\]
</div>

The *determinant* of the matrix $M$ is given by the following horrifically long formula.
```
+ a p u z - a p v y - a q t z + a q v x
+ a r t y - a r u x - b n u z + b n v y
+ b q s z - b q v w - b r s y + b r u w
+ c n t z - c n v x - c p s z + c p v w
+ c r s x - c r t w - d n t y + d n u x
+ d p s y - d p u w - d q s x + d q t w
```
Here, `a p u z` means `a` times `p` times `u` times `z`.

 - Make Sublime Text store a valid arithmetic expression,
   only involving numbers (no alphabetic characters),
   for the determinant of the following matrix.

   <div>
     \[A =
     \begin{pmatrix}
     3 & 1 & 4 & 1 \\
     2 & 5 & 1 & 1 \\
     1 & 1 & 2 & 3 \\
     2 & 1 & 2 & 3
     \end{pmatrix}\]
   </div>

 - Finally, use an online calculator like
   [Desmos Scientific Calculator](https://www.desmos.com/scientific){:target="_blank"}
   to find the determinant of the matrix $A$
   by copying and pasting your arithmetic expression into the calculator.




## Formatting UIDs

 - Download [grades.csv](./1-4-find-replace/grades.csv)

 - This file consists of a table with the following headings:
   `last name, first name, uid, hw1, hw2, hw3, hw4, hw5, exam1, exam2, final`.

 - This file was (fictionally) downloaded from a university's grading platform.
   The grading platform is somewhat silly because
   it has produced a file where University IDs (UIDs) contain dashes,
   and yet it will not allow one to upload a file where UIDs contain dashes!

 - Remove all the dashes from the UIDs in the `uid` column.

 - Watch out! Many student names contain dashes and
   the grading platform will not recognize students
   unless the dashes in their name appear correctly.
   You may want to look for something more specific
   than an isolated dash.




## Chemical reaction

Consider the following large piece of text which attempts to describe some important chemical reactions.

```
     N_9 H_11 CO_2  +  3 O_2  +                       N_6 H_8 O_6  +  2 N_9 H_15 C_5 O_3  +  N_15 H_22 C_6 O_5 Na
-->  N_9 H_11 CO_3  +  2 O_2  +    H_2 O  +           N_6 H_8 O_6  +    N_9 H_15 C_5 O_3  +  N_15 H_22 C_6 O_5 Na  +    N_9 H_13 C_5 O_3
-->  N_9 H_11 CO_4  +    O_2  +  2 H_2 O  +           N_6 H_8 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_8 H_11 CO_2  +    O_2  +  2 H_2 O  +  NO_2  +  N_6 H_8 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_8 H_11 CO_3  +            3 H_2 O  +  NO_2  +  N_6 H_6 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_9 H_13 CO_3  +            3 H_2 O  +  NO_2  +  N_6 H_6 O_6  +                         N_14 H_20 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_9 H_13 CO_3  +            2 H_2 O  +  NO_2  +  N_6 H_6 O_6  +    N_4 H_9 C O_2 Na   +  N_10 H_13 C_5 O_4    +  2 N_9 H_13 C_5 O_3
```

The person recording the reactions has made some mistakes.
 - Each occurrence of Nitrogen (`N`) should really be a Carbon (`C`).
 - Each occurrence of Carbon (`C`) should be a Nitrogen (`N`).
 - Each occurrence of Sodium (`Na`) should really be a Sulphur (`S`).

Fix the mistakes! (Any idea what these reactions are?)




## DNA and RNA sequences

Consider the following text block.
It is a *coding* DNA sequence (CDS),
part of the [MT-ATP8 gene](https://en.wikipedia.org/wiki/MT-ATP8){:target="_blank"}
found in [human mitochondria](https://www.ncbi.nlm.nih.gov/nuccore/NC_012920.1){:target="_blank"}.

```
atgttcgccgaccgttgactattctctacaaaccacaaagacattggaacactatacctattattcggcgcatgagctggagtcctaggcacagct
ctaagcctccttattcgagccgagctgggccagccaggcaaccttctaggtaacgaccacatctacaacgttatcgtcacagcccatgcatttgta
ataatcttcttcatagtaatacccatcataatcggaggctttggcaactgactagttcccctaataatcggtgcccccgatatggcgtttccccgc
ataaacaacataagcttctgactcttacctccctctctcctactcctgctcgcatctgctatagtggaggccggagcaggaacaggttgaacagtc
taccctcccttagcagggaactactcccaccctggagcctccgtagacctaaccatcttctccttacacctagcaggtgtctcctctatcttaggg
gccatcaatttcatcacaacaattatcaatataaaaccccctgccataacccaataccaaacgcccctcttcgtctgatccgtcctaatcacagca
gtcctacttctcctatctctcccagtcctagctgctggcatcactatactactaacagaccgcaacctcaacaccaccttcttcgaccccgccgga
ggaggagaccccattctataccaacacctattctgatttttcggtcaccctgaagtttatattcttatcctaccaggcttcggaataatctcccat
attgtaacttactactccggaaaaaaagaaccatttggatacataggtatggtctgagctatgatatcaattggcttcctagggtttatcgtgtga
gcacaccatatatttacagtaggaatagacgtagacacacgagcatatttcacctccgctaccataatcatcgctatccccaccggcgtcaaagta
tttagctgactcgccacactccacggaagcaatatgaaatgatctgctgcagtgctctgagccctaggattcatctttcttttcaccgtaggtggc
ctgactggcattgtattagcaaactcatcactagacatcgtactacacgacacgtactacgttgtagcccacttccactatgtcctatcaatagga
gctgtatttgccatcataggaggcttcattcactgatttcccctattctcaggctacaccctagaccaaacctacgccaaaatccatttcactatc
atattcatcggcgtaaatctaactttcttcccacaacactttctcggcctatccggaatgccccgacgttactcggactaccccgatgcatacacc
acatgaaacatcctatcatctgtaggctcattcatttctctaacagcagtaatattaataattttcatgatttgagaagccttcgcttcgaagcga
aaagtcctaatagtagaagaaccctccataaacctggagtgactatatggatgccccccaccctaccacacattcgaagaacccgtatacataaaa
tctaga
```

 - How many times do the following sequences appear?
   - `act`
   - `cat`
   - `gaga`
   - `tact`


 - Which letter has the longest consecutive block and what is its length?


 - DNA is composed of two *strands* that coil around each other to form a double helix.
   The *bases* of the two separate strands are bound together according to base pairing rules.
    - `a <--> t`
    - `c <--> g`

   Swap `a` and `t` and swap `c` and `g` to calculate
   the sequence of the *template* strand that binds to
   the *coding* strand whose sequence is listed above.


 - RNA strands are created using DNA strands
   in a process called *transcription*.
   The RNA sequence is the same as
   the *coding* DNA sequence
   except that `t` is replaced by `u`.

   Calculate the RNA strand that is created when transcription occurs.


 - Using *the genetic code* an RNA strand specifies a sequence of amino acids within proteins in a process called *translation*.
   The [vertebrate mitochondrial code translation table](https://en.wikipedia.org/wiki/Vertebrate_mitochondrial_code#Translation_table){:target="_blank"}
   tells us the replacements that we have to make.

   Click "Find" and "Replace...".
   **Then select the icon** $.^*$**.**
   This enables the fancy functionality we are about to use!

   | Find           | Replace                         |
   | -------------- | ------------------------------- |
   | `.{3}`         | `$0` followed by a single space |
   | `uu[u,c]`      | `F`                             |
   | `uu[a,g]`      | `L`                             |
   | `uc[u,c,a,g]`  | `S`                             |
   | `ua[u,c]`      | `Y`                             |
   | `ua[a,g]`      | `"`                             |
   | `ug[u,c]`      | `C`                             |
   | `ug[a,g]`      | `W`                             |
   | `cu[u,c,a,g]`  | `L`                             |
   | `cc[u,c,a,g]`  | `P`                             |
   | `ca[u,c]`      | `H`                             |
   | `ca[a,g]`      | `Q`                             |
   | `cg[u,c,a,g]`  | `R`                             |
   | `au[u,c]`      | `I`                             |
   | `au[a,g]`      | `M`                             |
   | `ac[u,c,a,g]`  | `T`                             |
   | `aa[u,c]`      | `N`                             |
   | `aa[a,g]`      | `K`                             |
   | `ag[u,c]`      | `S`                             |
   | `ag[a,g]`      | `"`                             |
   | `{figure out}` | `V`                             |
   | `{figure out}` | `A`                             |
   | `{figure out}` | `D`                             |
   | `{figure out}` | `E`                             |
   | `{figure out}` | `G`                             |
   | a single space | no characters at all            |


 - Check your answer!

   <textarea id="amino" rows="17" cols="32" style="font-family:monospace"></textarea>
   <input type="button" value="Submit Amino Acids" id="submit_button">
   <div id="status"></div>
   <script>
     function update_status() {
       const solution = 'MFADRWLFSTNHKDIGTLYLLFGAWAGVLGTA' +
                        'LSLLIRAELGQPGNLLGNDHIYNVIVTAHAFV' +
                        'MIFFMVMPIMIGGFGNWLVPLMIGAPDMAFPR' +
                        'MNNMSFWLLPPSLLLLLASAMVEAGAGTGWTV' +
                        'YPPLAGNYSHPGASVDLTIFSLHLAGVSSILG' +
                        'AINFITTIINMKPPAMTQYQTPLFVWSVLITA' +
                        'VLLLLSLPVLAAGITMLLTDRNLNTTFFDPAG' +
                        'GGDPILYQHLFWFFGHPEVYILILPGFGMISH' +
                        'IVTYYSGKKEPFGYMGMVWAMMSIGFLGFIVW' +
                        'AHHMFTVGMDVDTRAYFTSATMIIAIPTGVKV' +
                        'FSWLATLHGSNMKWSAAVLWALGFIFLFTVGG' +
                        'LTGIVLANSSLDIVLHDTYYVVAHFHYVLSMG' +
                        'AVFAIMGGFIHWFPLFSGYTLDQTYAKIHFTI' +
                        'MFIGVNLTFFPQHFLGLSGMPRRYSDYPDAYT' +
                        'TWNILSSVGSFISLTAVMLMIFMIWEAFASKR' +
                        'KVLMVEEPSMNLEWLYGCPPPYHTFEEPVYMK' +
                        'S"';

       const submission = document.getElementById('amino').value.replaceAll(' ', '').replaceAll('\n', '');

       document.getElementById('status').innerHTML = submission === solution ? 'Correct - well done!' : 'Try again.';
     }
     document.getElementById('submit_button').addEventListener('click', update_status);
   </script>


 - If only we could tell a computer to perform these tedious replacements to help translate any RNA sequence.
   By the end of the course, you will be able to write such Python programs!


 - By the way,
   if you were unable
   to complete the exercise above because
   you have chosen to live without Sublime Text,
   then you can perform the following find and replaces
   one-by-one (no "Replace All") instead!

   **There is another exercise below this nonsense.**

   | Find  | Replace |
   | ----- | ------- |
   | `aug` |   `M`   |
   | `uuc` |   `F`   |
   | `gcc` |   `A`   |
   | `gac` |   `D`   |
   | `cgu` |   `R`   |
   | `uga` |   `W`   |
   | `cua` |   `L`   |
   | `uuc` |   `F`   |
   | `ucu` |   `S`   |
   | `aca` |   `T`   |
   | `aac` |   `N`   |
   | `cac` |   `H`   |
   | `aaa` |   `K`   |
   | `gac` |   `D`   |
   | `auu` |   `I`   |
   | `gga` |   `G`   |
   | `aca` |   `T`   |
   | `cua` |   `L`   |
   | `uac` |   `Y`   |
   | `cua` |   `L`   |
   | `uua` |   `L`   |
   | `uuc` |   `F`   |
   | `ggc` |   `G`   |
   | `gca` |   `A`   |
   | `uga` |   `W`   |
   | `gcu` |   `A`   |
   | `gga` |   `G`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `ggc` |   `G`   |
   | `aca` |   `T`   |
   | `gcu` |   `A`   |
   | `cua` |   `L`   |
   | `agc` |   `S`   |
   | `cuc` |   `L`   |
   | `cuu` |   `L`   |
   | `auu` |   `I`   |
   | `cga` |   `R`   |
   | `gcc` |   `A`   |
   | `gag` |   `E`   |
   | `cug` |   `L`   |
   | `ggc` |   `G`   |
   | `cag` |   `Q`   |
   | `cca` |   `P`   |
   | `ggc` |   `G`   |
   | `aac` |   `N`   |
   | `cuu` |   `L`   |
   | `cua` |   `L`   |
   | `ggu` |   `G`   |
   | `aac` |   `N`   |
   | `gac` |   `D`   |
   | `cac` |   `H`   |
   | `auc` |   `I`   |
   | `uac` |   `Y`   |
   | `aac` |   `N`   |
   | `guu` |   `V`   |
   | `auc` |   `I`   |
   | `guc` |   `V`   |
   | `aca` |   `T`   |
   | `gcc` |   `A`   |
   | `cau` |   `H`   |
   | `gca` |   `A`   |
   | `uuu` |   `F`   |
   | `gua` |   `V`   |
   | `aua` |   `M`   |
   | `auc` |   `I`   |
   | `uuc` |   `F`   |
   | `uuc` |   `F`   |
   | `aua` |   `M`   |
   | `gua` |   `V`   |
   | `aua` |   `M`   |
   | `ccc` |   `P`   |
   | `auc` |   `I`   |
   | `aua` |   `M`   |
   | `auc` |   `I`   |
   | `gga` |   `G`   |
   | `ggc` |   `G`   |
   | `uuu` |   `F`   |
   | `ggc` |   `G`   |
   | `aac` |   `N`   |
   | `uga` |   `W`   |
   | `cua` |   `L`   |
   | `guu` |   `V`   |
   | `ccc` |   `P`   |
   | `cua` |   `L`   |
   | `aua` |   `M`   |
   | `auc` |   `I`   |
   | `ggu` |   `G`   |
   | `gcc` |   `A`   |
   | `ccc` |   `P`   |
   | `gau` |   `D`   |
   | `aug` |   `M`   |
   | `gcg` |   `A`   |
   | `uuu` |   `F`   |
   | `ccc` |   `P`   |
   | `cgc` |   `R`   |
   | `aua` |   `M`   |
   | `aac` |   `N`   |
   | `aac` |   `N`   |
   | `aua` |   `M`   |
   | `agc` |   `S`   |
   | `uuc` |   `F`   |
   | `uga` |   `W`   |
   | `cuc` |   `L`   |
   | `uua` |   `L`   |
   | `ccu` |   `P`   |
   | `ccc` |   `P`   |
   | `ucu` |   `S`   |
   | `cuc` |   `L`   |
   | `cua` |   `L`   |
   | `cuc` |   `L`   |
   | `cug` |   `L`   |
   | `cuc` |   `L`   |
   | `gca` |   `A`   |
   | `ucu` |   `S`   |
   | `gcu` |   `A`   |
   | `aua` |   `M`   |
   | `gug` |   `V`   |
   | `gag` |   `E`   |
   | `gcc` |   `A`   |
   | `gga` |   `G`   |
   | `gca` |   `A`   |
   | `gga` |   `G`   |
   | `aca` |   `T`   |
   | `ggu` |   `G`   |
   | `uga` |   `W`   |
   | `aca` |   `T`   |
   | `guc` |   `V`   |
   | `uac` |   `Y`   |
   | `ccu` |   `P`   |
   | `ccc` |   `P`   |
   | `uua` |   `L`   |
   | `gca` |   `A`   |
   | `ggg` |   `G`   |
   | `aac` |   `N`   |
   | `uac` |   `Y`   |
   | `ucc` |   `S`   |
   | `cac` |   `H`   |
   | `ccu` |   `P`   |
   | `gga` |   `G`   |
   | `gcc` |   `A`   |
   | `ucc` |   `S`   |
   | `gua` |   `V`   |
   | `gac` |   `D`   |
   | `cua` |   `L`   |
   | `acc` |   `T`   |
   | `auc` |   `I`   |
   | `uuc` |   `F`   |
   | `ucc` |   `S`   |
   | `uua` |   `L`   |
   | `cac` |   `H`   |
   | `cua` |   `L`   |
   | `gca` |   `A`   |
   | `ggu` |   `G`   |
   | `guc` |   `V`   |
   | `ucc` |   `S`   |
   | `ucu` |   `S`   |
   | `auc` |   `I`   |
   | `uua` |   `L`   |
   | `ggg` |   `G`   |
   | `gcc` |   `A`   |
   | `auc` |   `I`   |
   | `aau` |   `N`   |
   | `uuc` |   `F`   |
   | `auc` |   `I`   |
   | `aca` |   `T`   |
   | `aca` |   `T`   |
   | `auu` |   `I`   |
   | `auc` |   `I`   |
   | `aau` |   `N`   |
   | `aua` |   `M`   |
   | `aaa` |   `K`   |
   | `ccc` |   `P`   |
   | `ccu` |   `P`   |
   | `gcc` |   `A`   |
   | `aua` |   `M`   |
   | `acc` |   `T`   |
   | `caa` |   `Q`   |
   | `uac` |   `Y`   |
   | `caa` |   `Q`   |
   | `acg` |   `T`   |
   | `ccc` |   `P`   |
   | `cuc` |   `L`   |
   | `uuc` |   `F`   |
   | `guc` |   `V`   |
   | `uga` |   `W`   |
   | `ucc` |   `S`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `auc` |   `I`   |
   | `aca` |   `T`   |
   | `gca` |   `A`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `cuu` |   `L`   |
   | `cuc` |   `L`   |
   | `cua` |   `L`   |
   | `ucu` |   `S`   |
   | `cuc` |   `L`   |
   | `cca` |   `P`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `gcu` |   `A`   |
   | `gcu` |   `A`   |
   | `ggc` |   `G`   |
   | `auc` |   `I`   |
   | `acu` |   `T`   |
   | `aua` |   `M`   |
   | `cua` |   `L`   |
   | `cua` |   `L`   |
   | `aca` |   `T`   |
   | `gac` |   `D`   |
   | `cgc` |   `R`   |
   | `aac` |   `N`   |
   | `cuc` |   `L`   |
   | `aac` |   `N`   |
   | `acc` |   `T`   |
   | `acc` |   `T`   |
   | `uuc` |   `F`   |
   | `uuc` |   `F`   |
   | `gac` |   `D`   |
   | `ccc` |   `P`   |
   | `gcc` |   `A`   |
   | `gga` |   `G`   |
   | `gga` |   `G`   |
   | `gga` |   `G`   |
   | `gac` |   `D`   |
   | `ccc` |   `P`   |
   | `auu` |   `I`   |
   | `cua` |   `L`   |
   | `uac` |   `Y`   |
   | `caa` |   `Q`   |
   | `cac` |   `H`   |
   | `cua` |   `L`   |
   | `uuc` |   `F`   |
   | `uga` |   `W`   |
   | `uuu` |   `F`   |
   | `uuc` |   `F`   |
   | `ggu` |   `G`   |
   | `cac` |   `H`   |
   | `ccu` |   `P`   |
   | `gaa` |   `E`   |
   | `guu` |   `V`   |
   | `uau` |   `Y`   |
   | `auu` |   `I`   |
   | `cuu` |   `L`   |
   | `auc` |   `I`   |
   | `cua` |   `L`   |
   | `cca` |   `P`   |
   | `ggc` |   `G`   |
   | `uuc` |   `F`   |
   | `gga` |   `G`   |
   | `aua` |   `M`   |
   | `auc` |   `I`   |
   | `ucc` |   `S`   |
   | `cau` |   `H`   |
   | `auu` |   `I`   |
   | `gua` |   `V`   |
   | `acu` |   `T`   |
   | `uac` |   `Y`   |
   | `uac` |   `Y`   |
   | `ucc` |   `S`   |
   | `gga` |   `G`   |
   | `aaa` |   `K`   |
   | `aaa` |   `K`   |
   | `gaa` |   `E`   |
   | `cca` |   `P`   |
   | `uuu` |   `F`   |
   | `gga` |   `G`   |
   | `uac` |   `Y`   |
   | `aua` |   `M`   |
   | `ggu` |   `G`   |
   | `aug` |   `M`   |
   | `guc` |   `V`   |
   | `uga` |   `W`   |
   | `gcu` |   `A`   |
   | `aug` |   `M`   |
   | `aua` |   `M`   |
   | `uca` |   `S`   |
   | `auu` |   `I`   |
   | `ggc` |   `G`   |
   | `uuc` |   `F`   |
   | `cua` |   `L`   |
   | `ggg` |   `G`   |
   | `uuu` |   `F`   |
   | `auc` |   `I`   |
   | `gug` |   `V`   |
   | `uga` |   `W`   |
   | `gca` |   `A`   |
   | `cac` |   `H`   |
   | `cau` |   `H`   |
   | `aua` |   `M`   |
   | `uuu` |   `F`   |
   | `aca` |   `T`   |
   | `gua` |   `V`   |
   | `gga` |   `G`   |
   | `aua` |   `M`   |
   | `gac` |   `D`   |
   | `gua` |   `V`   |
   | `gac` |   `D`   |
   | `aca` |   `T`   |
   | `cga` |   `R`   |
   | `gca` |   `A`   |
   | `uau` |   `Y`   |
   | `uuc` |   `F`   |
   | `acc` |   `T`   |
   | `ucc` |   `S`   |
   | `gcu` |   `A`   |
   | `acc` |   `T`   |
   | `aua` |   `M`   |
   | `auc` |   `I`   |
   | `auc` |   `I`   |
   | `gcu` |   `A`   |
   | `auc` |   `I`   |
   | `ccc` |   `P`   |
   | `acc` |   `T`   |
   | `ggc` |   `G`   |
   | `guc` |   `V`   |
   | `aaa` |   `K`   |
   | `gua` |   `V`   |
   | `uuu` |   `F`   |
   | `agc` |   `S`   |
   | `uga` |   `W`   |
   | `cuc` |   `L`   |
   | `gcc` |   `A`   |
   | `aca` |   `T`   |
   | `cuc` |   `L`   |
   | `cac` |   `H`   |
   | `gga` |   `G`   |
   | `agc` |   `S`   |
   | `aau` |   `N`   |
   | `aug` |   `M`   |
   | `aaa` |   `K`   |
   | `uga` |   `W`   |
   | `ucu` |   `S`   |
   | `gcu` |   `A`   |
   | `gca` |   `A`   |
   | `gug` |   `V`   |
   | `cuc` |   `L`   |
   | `uga` |   `W`   |
   | `gcc` |   `A`   |
   | `cua` |   `L`   |
   | `gga` |   `G`   |
   | `uuc` |   `F`   |
   | `auc` |   `I`   |
   | `uuu` |   `F`   |
   | `cuu` |   `L`   |
   | `uuc` |   `F`   |
   | `acc` |   `T`   |
   | `gua` |   `V`   |
   | `ggu` |   `G`   |
   | `ggc` |   `G`   |
   | `cug` |   `L`   |
   | `acu` |   `T`   |
   | `ggc` |   `G`   |
   | `auu` |   `I`   |
   | `gua` |   `V`   |
   | `uua` |   `L`   |
   | `gca` |   `A`   |
   | `aac` |   `N`   |
   | `uca` |   `S`   |
   | `uca` |   `S`   |
   | `cua` |   `L`   |
   | `gac` |   `D`   |
   | `auc` |   `I`   |
   | `gua` |   `V`   |
   | `cua` |   `L`   |
   | `cac` |   `H`   |
   | `gac` |   `D`   |
   | `acg` |   `T`   |
   | `uac` |   `Y`   |
   | `uac` |   `Y`   |
   | `guu` |   `V`   |
   | `gua` |   `V`   |
   | `gcc` |   `A`   |
   | `cac` |   `H`   |
   | `uuc` |   `F`   |
   | `cac` |   `H`   |
   | `uau` |   `Y`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `uca` |   `S`   |
   | `aua` |   `M`   |
   | `gga` |   `G`   |
   | `gcu` |   `A`   |
   | `gua` |   `V`   |
   | `uuu` |   `F`   |
   | `gcc` |   `A`   |
   | `auc` |   `I`   |
   | `aua` |   `M`   |
   | `gga` |   `G`   |
   | `ggc` |   `G`   |
   | `uuc` |   `F`   |
   | `auu` |   `I`   |
   | `cac` |   `H`   |
   | `uga` |   `W`   |
   | `uuu` |   `F`   |
   | `ccc` |   `P`   |
   | `cua` |   `L`   |
   | `uuc` |   `F`   |
   | `uca` |   `S`   |
   | `ggc` |   `G`   |
   | `uac` |   `Y`   |
   | `acc` |   `T`   |
   | `cua` |   `L`   |
   | `gac` |   `D`   |
   | `caa` |   `Q`   |
   | `acc` |   `T`   |
   | `uac` |   `Y`   |
   | `gcc` |   `A`   |
   | `aaa` |   `K`   |
   | `auc` |   `I`   |
   | `cau` |   `H`   |
   | `uuc` |   `F`   |
   | `acu` |   `T`   |
   | `auc` |   `I`   |
   | `aua` |   `M`   |
   | `uuc` |   `F`   |
   | `auc` |   `I`   |
   | `ggc` |   `G`   |
   | `gua` |   `V`   |
   | `aau` |   `N`   |
   | `cua` |   `L`   |
   | `acu` |   `T`   |
   | `uuc` |   `F`   |
   | `uuc` |   `F`   |
   | `cca` |   `P`   |
   | `caa` |   `Q`   |
   | `cac` |   `H`   |
   | `uuu` |   `F`   |
   | `cuc` |   `L`   |
   | `ggc` |   `G`   |
   | `cua` |   `L`   |
   | `ucc` |   `S`   |
   | `gga` |   `G`   |
   | `aug` |   `M`   |
   | `ccc` |   `P`   |
   | `cga` |   `R`   |
   | `cgu` |   `R`   |
   | `uac` |   `Y`   |
   | `ucg` |   `S`   |
   | `gac` |   `D`   |
   | `uac` |   `Y`   |
   | `ccc` |   `P`   |
   | `gau` |   `D`   |
   | `gca` |   `A`   |
   | `uac` |   `Y`   |
   | `acc` |   `T`   |
   | `aca` |   `T`   |
   | `uga` |   `W`   |
   | `aac` |   `N`   |
   | `auc` |   `I`   |
   | `cua` |   `L`   |
   | `uca` |   `S`   |
   | `ucu` |   `S`   |
   | `gua` |   `V`   |
   | `ggc` |   `G`   |
   | `uca` |   `S`   |
   | `uuc` |   `F`   |
   | `auu` |   `I`   |
   | `ucu` |   `S`   |
   | `cua` |   `L`   |
   | `aca` |   `T`   |
   | `gca` |   `A`   |
   | `gua` |   `V`   |
   | `aua` |   `M`   |
   | `uua` |   `L`   |
   | `aua` |   `M`   |
   | `auu` |   `I`   |
   | `uuc` |   `F`   |
   | `aug` |   `M`   |
   | `auu` |   `I`   |
   | `uga` |   `W`   |
   | `gaa` |   `E`   |
   | `gcc` |   `A`   |
   | `uuc` |   `F`   |
   | `gcu` |   `A`   |
   | `ucg` |   `S`   |
   | `aag` |   `K`   |
   | `cga` |   `R`   |
   | `aaa` |   `K`   |
   | `guc` |   `V`   |
   | `cua` |   `L`   |
   | `aua` |   `M`   |
   | `gua` |   `V`   |
   | `gaa` |   `E`   |
   | `gaa` |   `E`   |
   | `ccc` |   `P`   |
   | `ucc` |   `S`   |
   | `aua` |   `M`   |
   | `aac` |   `N`   |
   | `cug` |   `L`   |
   | `gag` |   `E`   |
   | `uga` |   `W`   |
   | `cua` |   `L`   |
   | `uau` |   `Y`   |
   | `gga` |   `G`   |
   | `ugc` |   `C`   |
   | `ccc` |   `P`   |
   | `cca` |   `P`   |
   | `ccc` |   `P`   |
   | `uac` |   `Y`   |
   | `cac` |   `H`   |
   | `aca` |   `T`   |
   | `uuc` |   `F`   |
   | `gaa` |   `E`   |
   | `gaa` |   `E`   |
   | `ccc` |   `P`   |
   | `gua` |   `V`   |
   | `uac` |   `Y`   |
   | `aua` |   `M`   |
   | `aaa` |   `K`   |
   | `ucu` |   `S`   |
   | `aga` |   `"`   |




## Fixing the McLaren and RedBull logos

 - Download [logo.bmp](./1-4-find-replace/logo.bmp).

 - Open the file and observe that
   the McLaren logo uses red
   and the RedBull logo uses orange.

   > **"No, Mikey. No, no, Mikey. That was so not right."** *Toto Wolff*

   We need to swap the colors!

 - Open the file with Sublime Text.
   The simplest way to do this is to drag the file icon
   onto an open Sublime Text window.

 - Right-click or two-finger tap and select "Reopen File as Text".

 - Click "Find" and "Replace...".
   Select the icon $.^*$.
   This enables the finds and replaces to recognize `\n` as "newline".

 - Now perform the following "Find and Replace"s.
   - `a single space --> no characters at all`.
     This will take a few seconds since there are many spaces to delete.
   - `2d1cea --> xxyyzz`
   - `2d\n1cea --> xx\nyyzz`
   - `2d1c\nea --> xxyy\nzz`
   - `0080ff --> 2d1cea`
   - `00\n80ff --> 2d\n1cea`
   - `0080\nff --> 2d1c\nea`
   - `xxyyzz --> 0080ff`
   - `xx\nyyzz --> 00\n80ff`
   - `xxyy\nzz --> 0080\nff`

 - Save the edited file.

 - Reopen the file with your normal image-viewing program.
   If you did everything correctly, then the colors will be correct
   (except that McLaren's orange is a little darker these days).




## Up next

Your first homework assignments are posted [here](1-5-homework.md).
Some of the content that you have learned so far is documented [here](../0-docs.md).
