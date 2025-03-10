/**
 * File Name:   clite_parser.yy
 * Description: A flex program for parsing C-lite, a small subset of the C programming language.
                Does not use all production rules in C-lite syntax.
 * Author:      Francis O'Hara
 * Date:        3/7/25
*/

%%
    /* remove single-line comments */
\/\/[^\n]*      {}

    /* remove multi-line comments */
\/\*[^*]*\*\/   {}

    /* remove whitespace */
[ \n\t]              {}

    /* remove semi-colon */
;                    {}

    /* keywords */
if|else|while|for|int|float    printf("Keyword-%s\n", yytext);

    /* identifier */
[A-Za-z_][A-Za-z_0-9]*               printf("Identifier-%s\n", yytext);

    /* float */
(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)    printf("Float-%s\n", yytext);

    /* integer */
0|([1-9][0-9]*)  printf("Integer-%s\n", yytext);

    /* Assignment */
=                   printf("Assignment\n");

    /* Comparison */
==|\<|\>|\<=|\>=        printf("Comparison-%s\n", yytext);

    /* Operator */
[\+\-\*/]               printf("Operator-%s\n", yytext);

    /* Brackets */
\{                   printf("Open-bracket\n");
\}                   printf("Close-bracket\n");

    /* Parentheses */
\(                   printf("Open-paren\n");
\)                   printf("Close-paren\n");

%%

int main(int argc, char * argv[]) {
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }
    yylex();
    return 0;
}
