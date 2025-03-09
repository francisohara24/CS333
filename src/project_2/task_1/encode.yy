/**
 * File Name:   encode.yy
 * Description: A flex program that shifts each alphabetic character in an input file 13 spaces forward in the alphabet.
 * Author:      Francis O'Hara
 * Date:        3/03/25
 */
%%

[A-Z]   printf("%c", 65 + ((*yytext - 52) % 26));
[a-z]   printf("%c", 97 + ((*yytext - 84) % 26));

%%

int main(int argc, char * argv[]){
    if (argc > 1){
        yyin = fopen(argv[1], "r");
    }
    yylex();
    return 0;
}