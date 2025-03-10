/**
 * File Name:   html_parser.yy
 * Description: A flex program for parsing html files. Removes all tags, spaces, tabs, and single newlines, and
                replaces every occurrence of more than one newline in a row with a single newline character.
 * Author:      Francis O'Hara
 * Date:        3/5/25
*/

%%

\<[^<>]+\>    printf("");
[ \t]+        printf("");
\n{2,}        printf("\n");
\n            printf("");

%%

int main( int argc, char * argv[]) {
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }
    yylex();
    return 0;
}