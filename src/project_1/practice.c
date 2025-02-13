/*
File Name:   practice.c
Description: Practice code for project 1.
             Checks whether system is big endian or little endian based on order in which bytes are printed.
Author:      Francis O'Hara
Date:        2/7/25
*/

#include <stdio.h>

int main(int arg, char *argv[]) {
    int i = 0x29979245;
    unsigned char *ptr;
    ptr = (unsigned char *) &i;

    for (int i = 0; i < sizeof(int); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    if (ptr[0] == 0x29) {
        printf("Your system is big endian!");
    } else if (ptr[0] == 0x45) {
        printf("Your system is little endian!");
    }
    return 0;
}
