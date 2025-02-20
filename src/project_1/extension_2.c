/**
 * File Name:   extension_2.c
 * Description: A short C program to generate a segmentation fault.
 * Author:      Francis O'Hara
 * Date:        2/20/25
 */
#include <stdio.h>

int main(int arg, char *argv[]) {
    /**
     * Pointer to an illegal memory address 0x00
     */
    char * ptr = (char *) 0x00;

    /**
     * Derefence illegal pointer
     */
    *ptr = 42;

    return 0;
}
