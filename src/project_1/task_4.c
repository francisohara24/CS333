/**
 * File Name:   task_4.c
 * Description: Program to check layout of struct members in memory and the effect of struct member declaration order on
 *              byte alignment.
 * Author:      Francis O'Hara
 * Date:        2/18/25
 */
#include <stdio.h>
#include <stdlib.h>


typedef struct Structure1 {
    char character;
    short short_integer;
    int integer;
} Structure1;

typedef struct Structure2 {
    char character;
    int integer;
    short short_integer;
} Structure2;

typedef struct Structure3 {
    char character;
    long long_integer;
    int integer;
} Structure3;

int main(int arg, char *argv[]) {
    // structure 1
    Structure1 * structure1 = (Structure1 *) malloc(sizeof(Structure1));
    structure1->character = (char) 0xA1;
    structure1->short_integer = (short) 0xA1B2;
    structure1->integer = (int) 0xA1B2C3D4;

    unsigned char * ptr = (unsigned char *) &structure1->character;

    printf("Structure1 (char,short,int) Size: %zu bytes\n", sizeof(Structure1));
    printf("Structure1 (char,short,int) Memory Layout:\n");
    for (int i = 0; i < sizeof(Structure1); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    // structure 2
    Structure2 * structure2 = (Structure2 *) malloc(sizeof(Structure2));
    structure2->integer = (int) 0xA1B2C3D4;
    structure2->character = (char) 0xA1;
    structure2->short_integer = (short) 0xA1B2;

    ptr = (unsigned char *) &structure2->character;

    printf("\n\nStructure2 (char,int,short) Size: %zu bytes\n", sizeof(Structure2));
    printf("Structure2 (char,int,short) Memory Layout:\n");
    for (int i = 0; i < sizeof(Structure2); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    // structure 3
    Structure3 * structure3 = (Structure3 *) malloc(sizeof(Structure3));
    structure3->character = (char) 0xA1;
    structure3->integer = (int) 0xA1B2C3D4;
    structure3->long_integer = (long) 0xA1B2C3D4E5F6A7B8;

    ptr = (unsigned char *) &structure3->character;

    printf("\n\nStructure3 (char,int,long) Size: %zu bytes\n", sizeof(Structure3));
    printf("Structure3 (char,int,long) Memory Layout:\n");

    for (int i = 0; i < sizeof(Structure3); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    free(structure1);
    free(structure2);
    free(structure3);
    return 0;
}