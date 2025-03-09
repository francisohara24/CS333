/**
 * File Name:   html_parser.yy
 * Description: A flex program for parsing html files.
 * Author:      Francis O'Hara
 * Date:        3/5/25
*/

%%

\<.+\>    printf("");
^(\s+)    printf("");
(\s+)$    printf("");
\n+       printf("\n");

%%

int main( int argc, char * argv[]) {
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }
    yylex();
    return 0;
}