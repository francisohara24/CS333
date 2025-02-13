/**
 * File Name:   main.c
 * Description: 
 * Author:      Francis O'Hara
 * Date:        2/9/25
 */

#include <stdio.h>

int main(int arg, char *argv[]) {
    // Task 1
    char c = 0xA1;
    short s = 0xA1B2;
    int d = 0xA1B2C3D4;
    long l = 0xA1B2C3D4E5F6A7B8;
    unsigned char * ptr;

    ptr = &c;
    for (int i = 0; i < sizeof(c); i++) {
        printf("%d: %02X\n",i, ptr[i]);
    }

    ptr = &s;
    for (int i = 0; i < sizeof(s); +++ )

    return 0;
}
