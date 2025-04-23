# CS333 - Project 4 - README
### Francis O'Hara
### 04/20/2025

***Google Sites Report: [https://sites.google.com/colby.edu/francis-ohara-cs333/home/](https://sites.google.com/colby.edu/francis-ohara-cs333/home/)***

## Directory Layout:
```
Project4_fohara27
```
## OS and C compiler
OS: macOS Sequoia 15.4  
C Compiler: Apple clang version 17.0.0 (clang-1700.0.13.3)


## Part I
### Task 1
**Description:**  
To implement the comparator function, I first computed the actual integer values pointed to by the void pointers passed as arguments to the function.
I then accounted for the 4 possible cases of the evenness or oddness of the input numbers `p` and `q`, and specified what value should be returned in each based on our desired sorting order.
- `p` and `q` are equal    ==> return 0.
- `p` is even, `q` is even ==> return negative number if `p` is greater than `q` and return positive number otherwise (to achieve even numbers sorting in descending order).
- `p` is even, `q` is odd  ==> return negative number (to achieve even numbers appearing before odd numbers)
- `p` is odd, `q` is even ==> return positive number (to achieve even numbers appearing before odd numbers) 
- `p` is odd, `q` is odd ==> return positive number if `p` is greater than `q` and return negative number otherwise (to achieve odd numbers sorting in ascending order)

**Compile:** `$ gcc -o quicksort quicksort.c`

**Run:** `$ ./quicksort`

**Output:**  
![Screenshot of C task 1](screenshots/c_task_1_1.png)


### Task 2
**Description:**
For this task I implemented my factorial function in the source file [factorial.c](C/factorial.c).  
The main function expects a command-line argument, which is the integer value whose factorial is to be found, and error
checking is done to ensure this argument is provided in addition to ensuring that the provided number is a non-negative integer.

**Compile:** `gcc -o factorial factorial.c`

**Run (N=5):**  
`./factorial 5`  

**Output (N=5):**  
![Screenshot of C task 2_1](screenshots/c_task_2_1.png)

**Explanation:**  
The output demonstrates that the algorithm I implemented for computing factorial is correct as $5!$ is indeed $120$.  
In terms of the implementation, the `factorial()` function I defined for computing the factorial is not actually invoked in the code, but rather a `calc` function pointer that points to the address of the factorial function is invoked and still achieves the same result as calling the `factorial()` function directly.  
This shows that a function pointer variable can store the address of any function regardless of the identifier name as long as it has the same parameter types and return types.

**Run (N=12):**  
`./factorial 12`

**Output (N=12):**  
![Screenshot of C task 2_2](screenshots/c_task_2_2.png)

**Run (N=13):**  
`./factorial 13`

**Output (N=13):**  
![Screenshot of C task 2_3](screenshots/c_task_2_3.png)

**Run (N=14):**  
`./factorial 14`

**Output (N=14):**  
![Screenshot of C task 2_4](screenshots/c_task_2_4.png)

**Run (N=15):**
`./factorial 15`

**Output (N=15):**  
![Screenshot of C task 2_5](screenshots/c_task_2_5.png)

**Explanation:**  
The result for $12!$ is accurate. However, for $13!$, $14!$, and $15!$ the answer obtained is incorrect.
This is because the factorial function we defined has a return type of `int` and the maximum possible value representable by an integer is 
$2^{31} - 1$. Hence, only $12!$ is in the range of `int` but $13!$, $14!$, and $15!$ are all out of the range of `int` therefore cause overflow errors which leads to inaccurate answers.

## Part II: Selected Languages
### Task 2

**Code Preview:**  
![]()

**Run:**  `$ `

**Output Preview:**  
![]()