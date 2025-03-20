/**
 * File Name:   html_scanner.yy
 * Description: A flex program for scanning html files. Ignores all tags, spaces, tabs, and single newlines, and
                replaces every occurrence of more than one newline in a row with a single newline character.
 * Author:      Francis O'Hara
 * Date:        3/5/25
*/

%%

\<[^<>]+\>    {}
[ \t]+        {}
\n{2,}        printf("\n");
\n            {}

%%

int main( int argc, char * argv[]) {
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }
    yylex();
    return 0;
}