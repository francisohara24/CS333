/**
 * File Name:   task_3.c
 * Description: Check effect of allocating without freeing on program memory usage;
 * Author:      Francis O'Hara
 * Date:        2/18/25
 */
#include <stdio.h>
#include <stdlib.h>

int main(int arg, char *argv[]) {
    unsigned char * ptr;

    // allocate without freeing
    // while (1) {
    //     ptr = (unsigned char *) malloc(sizeof(int));
    // }

    // allocate and free
    while (1) {
        ptr = (unsigned char *) malloc(sizeof(int));
        free(ptr);
    }
    return 0;
}
