/**
 * File Name:   main.c
 * Description: Program that checks whether machine is big or little endian based on byte storage order.
 * Author:      Francis O'Hara
 * Date:        2/9/25
 */

#include <stdio.h>

int main(int arg, char *argv[]) {
    // TASK 1
    char character = (char) 0xA1;
    short short_integer = (short) 0xA1B2;
    int integer = (int) 0xA1B2C3D4;
    long long_integer = (long) 0xA1B2C3D4E5F6A7B8;
    float float_number = (float) 0xA1B2C3D4;
    double double_number = (double) 0xA1B2C3D4E5F6A7B8;
    unsigned char *ptr;

    printf("char:\n");
    ptr = (unsigned char *) &character;
    for (int i = 0; i < sizeof(character); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    printf("\nshort:\n");
    ptr = (unsigned char *) &short_integer;
    for (int i = 0; i < sizeof(short_integer); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    printf("\ninteger:\n");
    ptr = (unsigned char *) &integer;
    for (int i = 0; i < sizeof(integer); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    printf("\nlong:\n");
    ptr = (unsigned char *) &long_integer;
    for (int i = 0; i < sizeof(long_integer); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    printf("\nfloat:\n");
    ptr = (unsigned char *) &float_number;
    for (int i = 0; i < sizeof(float_number); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    printf("\ndouble:\n");
    ptr = (unsigned char *) &double_number;
    for (int i = 0; i < sizeof(double_number); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    return 0;
}
