# CS333 - Project 2 - README
### Francis O'Hara
### 3/8/2025

***Google Sites Report: [https://sites.google.com/colby.edu/francis-ohara-cs333/home/](https://sites.google.com/colby.edu/francis-ohara-cs333/home/)***

## Directory Layout:
```
Project2_fohara27
    ├── README.md
    ├── task_1
    │   ├── encode.yy
    │   ├── encode_test.txt
    │   └── lex.yy.c
    ├── task_2
    │   ├── lex.yy.c
    │   ├── vowel_counter.yy
    │   └── vowel_counter_test.txt
    ├── task_3
    │   ├── html_parser.yy
    │   ├── html_parser_test_1.txt
    │   ├── html_parser_test_2.txt
    │   ├── lex.yy.c
    │   └── output.txt
    └── task_4
        ├── clite_parser.yy
        ├── clite_parser_test.c
        ├── lex.yy.c
        └── output.txt
```
## OS and C compiler
OS: macOS Ventura 13.7.4  
C Compiler: Apple clang version 15.0.0 (clang-1500.1.0.2.5)


## Part I
### Task 1
**Description:**  
A flex-generated lexer that shifts each alphabetic character in an input string 13 spaces forward in the alphabet, with 
wraparound from z back to a.  
The lexer uses two rules to achieve this, one for lowercase alphabets (pattern: `[a-z]`) and another for uppercase alphabets (pattern: `[A-Z]`).  
In the flex rule for uppercase alphabets, the action of the rule shifts the matched character using the formula $(65 + ((matched\_character - 65 + 13)\,\%\,26))$.  
In the flex rule for lowercase alphabets, the action of the rule shifts the matched character using a similar formula $97 + ((matched\_character - 97 + 13)\,\%\,26)$  
The input text used to test the generated lexer is stored in `encode_test.txt` and it has the following content:
```
This is the unencoded text. Encoding this text will shift each alphabetic character 13 spaces down the alphabet.
```

**Compile:**  
```
$ flex encode.yy
$ gcc -o encode lex.yy.c -ll 
```

**Run (encode):** `$ ./encode encode_test.txt`

**Run (decode):** `$ ./encode encode_test.txt | ./encode`

**Output:**  
![Screenshot of c task 1](screenshots/c_task_1_1.png)

**Explanation:**  
After running the lexer on the input file once, each alphabet in the input file is shifted 13 spaces forward.  
For example, The letter 'T' is replaced with 'G', which is 13 spaces forward from 'T' considering the wraparound from 'z' to 'a'.  
Additionally, running the lexer on the output of the first run reverts to the original as expected.



### Task 2
**Description:**
A flex-generated lexer that reads in a text file and outputs the number of rows, characters, and vowels contained in the text file.  
The code works by initializing three integer variables (`num_rows`, `num_chars`, and `num_vars`) for storing the count of rows, characters, and vowels in the text whose values get output at the end of the program.  
Three rules are used to determine when to increment each of the variables:  
1. Upon matching the newline character `\n`, `num_rows` is incremented by 1 and `num_chars` is also incremented by 1 since a newline character counts as a character.
2. Upon matching any vowel `[aeiouAEIOU]`, `num_vowels` is incremented by 1, `num_chars` is incremented by 1 since a vowel character counts as a character, and `num_rows` is also incremented by 1 if its current value is 0 since we want to be able to account for files that contain just one row that does not terminate with a newline character.
3. Upon matching any non-newline character `.`, `num_chars` is incremented by 1 and `num_rows` is also incremented by 1 if its current value is 0 since we want to be able to account for files that contain just one row not terminated by a newline character.  

The rules appear in the above-mentioned order exactly in the flex source program since we don't want the second rule matching vowels to be overshadowed by the rule matching characters.  
The input text used to test the generated lexer is stored in `vowel_counter_test.txt`, and it has the following content:
```
Hello World. This is a test file for a simple flex program.
Good bye Earth! 
```
It has **2 rows**, **75 characters** (including the newline separating row 1 from row 2), and **21 vowel characters**. 

**Compile:**  
```
$ flex vowel_counter.yy
$ gcc -o vowel_counter lex.yy.c -ll
```

**Run:**  `$ ./vowel_counter vowel_counter_test.txt`

**Output:**  
![Screenshot of c task 2](screenshots/c_task_2_1.png)  

**Explanation:**  
The screenshot above shows that the program correctly identifies that there are 2 rows, 75 characters, and 21 vowel characters in the input file `vowel_counter_test.txt`.

### Task 3
**Description:**
A flex-generated lexer for stripping an html file of tags, single-line comments, and extraneous whitespace.

**Compile:** `$ gcc -o task_3 task_3.c`

**Run:** `$ ./task_3`

**Output:**
1. Without `free()` statement (17.14 GB memory usage):  
   ![Screenshot of C task 3](screenshots/c_task_3_1.png)

2. With `free()` statement (348 KB memory usage):  
   ![Screenshot of C task 3](screenshots/c_task_3_2.png)

**Q.b.**  
Without the `free()` statement, the program requires significantly more memory over time (about 500 MB every few seconds).  
But with the `free()` statement, the program requires a constant amount of memory over time (348 KB).


### Task 4
**Compile:** `$ gcc -o task_4 task_4.c`

**Run:** `$ ./task_4`

**Output:**  
![Screenshot of C task 4](screenshots/c_task_4_1.png)  
![Screenshot of C task 4](screenshots/c_task_4_2.png)

**Q.a.**  
For this task, I created 3 different structs: `Structure1`(char, short, int), `Structure2` (char, int, short) and `Structure3`(char, long, int).  
From this task I learned the following two rules about struct byte alignment and will use each struct to explain:

    Rule 1: The size of the struct must be a multiple of the largest type among the members of the struct.  
    Rule 2: Any member of the struct can only be placed at a memory address that is a multiple of the size of the member’s datatype.

**Structure1**  
`Structure1` consists of a `char`, followed by a `short`, and a `int` and the following is a drawing of how its instance’s contents were laid out in memory:  
![Screenshot of C task 4](screenshots/c_task_4_3.png)
*Figure 1. Memory layout of Structure1 instance. Each square is a byte of memory and the indices are memory addresses.  
The instance members were assigned the values char `0xA1`, short `0xA1B2`, and int `A1B2C3D4`.*

The char is assigned to memory address 0. However, although the next available memory address is 1, it is padded with 0s and the short is assigned to memory address 2 because from **rule 2**, each member of the struct can only be stored in an address that is a multiple of the size of the member’s type (2 bytes in the case of short).  
The int is however stored in the next available memory address of 4 since the size of int is 4 bytes.  
The size of the struct is 8 bytes even though the minimum number of bytes required to store all members of the struct is 7 bytes `(sizeof char + sizeof short + sizeof int)`, and this is because of rule 1 (total size of struct must be multiple of size of largest type in struct).

**Structure2**  
`Structure2` consists of a `char`, followed by an `int`, followed by a `short`.
![Screenshot of C task 4](screenshots/c_task_4_4.jpg)
*Figure 2. Memory layout of Structure2 instance. Each square is a byte of memory and the indices are memory addresses.
The instance members were assigned the values char `0xA1`, int `A1B2C3D4`, and short `0xA1B2`.*

The char is assigned to memory address 0. Here also, though the next available memory address is 1, the next member of the struct is an int and has to be stored in a memory address that is a multiple of 4 because of **rule 2**.   
Hence, the int is stored in memory address 4 which is the next available multiple of 4.  
Likewise, the short was stored in the next available memory address of 8 because memory address 8 is the next multiple of 2 (size of short).  
But even after all members of the struct are stored, it is padded with 2 bytes of 0s so that it’s total size is 12 bytes.  
This was done because of **rule 1** (total size of struct must be a multiple of size of largest type in struct).  
Since the largest type in Structure2 is int, the 2 bytes padded at the end are there to ensure that the total size of the struct is a multiple of 4.

**Structure3**  
`Structure3` consists of a `char`, followed by a `long`, followed by an `int`.  
![Screenshot of C task 4](screenshots/c_task_4_5.jpg)
*Figure 3. Memory layout of Structure3 instance. Each box represents a byte of memory and the indices are memory addresses.
The instance members were assigned the values char `0xA1`, long `0xA1B2C3D4E5F6A7B8`, and int `A1B2C3D4`.*

The char is assigned to memory address 0. The long is, however, assigned to memory address 8 since that is the next available memory address that is a multiple of 8 (size of long) and all empty bytes before it are padded with 0s.  
The int is then assigned to memory address 8 since that is the next available address that is a multiple of 4 (size of int).  
The next 4 bytes are padded with 0s so that the total size of the struct is a multiple of the size of the largest member of the struct (long) and this is why the total size of the struct is 24 bytes instead of the minimum required 13 bytes `(sizeof char + sizeof long + sizeof int)`.

**Q.b.**
Yes, there are gaps, and they are because of the aforementioned struct byte alignment rules.

### Task 5
**Compile:** `$ gcc -o task_5 task_5.c`

**Run:** `$ ./task_5`

**Output:**  
![Screenshot of C task 5](screenshots/c_task_5_1.png)

**Q.a.**  
The string I found that doesn’t work is “AAAAAAAAAAAAA” (13 As) which yielded a positive bank balance of 65.

**Q.b.**  
Screenshot included above.

**Q.c.**  
Despite being initialized to 0, the bank balance increases to a positive value because its contents are overwritten when `scanf()` receives bad input (i.e. a buffer overflow occurs).  
The `Account` struct instance is laid out in memory such that the first 10 bytes (byte 0-9) are meant to contain the contents of the string member `name[10]`.   
The next two bytes (byte 10-11) are padded with 0s due to the struct byte alignment rules. Finally, the next 4 bytes (byte 12-15) store the contents of the integer bank balance.  
Therefore, if any input string is entered consisting of 13 or more characters whose ASCII values are not 0, the 13th character and over will end up getting written to bytes 12 – 15 which are the bytes containing the value of integer bank balance, thus resulting in a non-zero bank balance.  
Although entering only 12 characters is enough to cause a buffer overflow since the 12 characters will occupy bytes 0-11 and the null terminator ‘\0’ will occupy byte 12 (the first byte of the integer bank balance), the null terminator character is equivalent to the value 0 and will therefore have no effect on the first byte of the bank balance which has already been set to 0 at the start of the program.


## Extensions
### Extension 1
**Description**  
For this extension, I decided to make task 5 in part I more robust so that the inputs won't impact the initial balance.
To achieve this, I simply changed the order of declaration of the struct members so that integer bank balance is declared first and the name of the account is declared afterwards.  
As a result, a buffer overflow of the input name will not overwrite the bytes of the integer bank balance since the bank balance will be stored before the account name in memory.


**Compile:** `$ gcc -o extension_1 extension_1.c`

**Run:** `$ ./extension_1`

**Output:**  
![Screenshot of C extension 1](screenshots/c_extension_1_1.png)


### Extension 2
**Description**  
For this extension, I wrote a simple C program that generates a segmentation fault runtime error.  
It does so by creating and attempting to deference a pointer that points to an illegal memory address.

**Compile:** `$ gcc -o extension_2 extension_2.c`

**Run:** `$ ./extension_2`

**Output:**  
![Screenshot of C extension 2](screenshots/c_extension_2_1.png)


### Extension 3
**Description**  
For this extension, I decided to research a fifth programming language (C#) and included my findings in my Google Site report for project 1.

**Link:** The link to the specific section of my report in which I elaborate on my findings is [available here](https://sites.google.com/colby.edu/francis-ohara-cs333/home/project-1?authuser=1#h.7acaol1l6nrv).
