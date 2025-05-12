/**
 * @file   sigsegv_handler.c  
 * @brief  Program to demonstrate signal handling in C with sigsegv signal.
 * @author Francis O'Hara
 * @date   4/23/25
 */
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>

void handler(int signal) {
    printf("Encountered signal %d (SIGSEGV)!\n", signal);
    exit(1);
}

int main() {
    signal(SIGSEGV, handler);

    int *ptr = NULL;
    printf("Dereferencing ptr %p\n", ptr);
    printf("Dereferenced ptr: %d\n", *ptr);
}
