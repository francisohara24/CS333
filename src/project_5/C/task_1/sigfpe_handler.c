/**
 * @file   sigfpe_handler.c  
 * @brief  Program to demonstrate signal handling in C with the floating point exception signal (SIGFPE).
 * @author Francis O'Hara
 * @date   4/23/25
 */
#include <signal.h>
#include <stdlib.h>
#include <stdio.h>

int dividend;
int divisor;

void handler(int signal) {
    printf("Encountered signal %d (SIGFPE) during division!\n", signal);

    printf("Enter non-zero value for divisor:\t");
    scanf("%d", &divisor);

    if (divisor != 0) {
        return;
    }
    printf("Invalid divisor value!\nTerminating program ...\n");
    exit(1);

}

int main() {
    signal(SIGFPE, handler);

    printf("Enter value of dividend:\t");
    scanf("%d", &dividend);
    printf("Enter value of divisor:\t");
    scanf("%d", &divisor);

    int quotient = dividend/divisor;

    printf("%d divided by %d is equal to %d.\n", dividend, divisor, quotient);

    return 0;
}
