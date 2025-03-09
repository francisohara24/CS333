/**
 * File Name:   vowel_counter.yy
 * Description: A flex program for counting the number of rows, characters and vowels in an input file.
 * Author:      Francis O'Hara
 * Date:        3/5/25
 */

%{
    int num_rows = 0;
    int num_chars = 0;
    int num_vowels = 0;
%}

%%

\n              num_rows ++; num_chars++;
[aeiouAEIOU]    num_vowels ++; num_chars++; num_rows = (num_rows == 0)? 1: num_rows;
.               num_chars ++; num_rows = (num_rows == 0)? 1: num_rows;

%%

int main(int argc, char * argv[]){
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }
    yylex();
    printf("Number of Rows:\t%d\n", num_rows);
    printf("Number of Characters:\t%d\n", num_chars);
    printf("Number of Vowels:\t%d\n", num_vowels);
    return 0;
}