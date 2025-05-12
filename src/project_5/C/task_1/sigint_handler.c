/**
 * @file   sigint_handler.c
 * @brief  Program to demonstrate signal handling in C using SIGINT signal.
 * @author Francis O'Hara
 * @date   4/23/25
 */
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

void handler(int signal) {
    printf("Interrupted!");
    exit(1);
}

int main() {

    signal(SIGINT, handler);

    while (1) {
        printf("Running...\n");
    }
    return 0;
}

