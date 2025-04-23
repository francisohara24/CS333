/**
 * @file   factorial.c  
 * @brief  
 * @author Francis O'Hara
 * @date   4/19/25
 */
#include <stdio.h>
#include <stdlib.h>

/**
 * Returns the factorial of the given input number.
 * @param n a non-negative integer whose factorial is to be computed.
 * @return an integer denoting the factorial of the given input number `n`.
 */
int factorial(int n) {
    int result = 1;

    for (int i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

int main(int argc, char **argv) {
    int N;

    if (argc > 1) {
        N = atoi(argv[1]);
        if (N < 0) {
            printf("Error: number must be non-negative!");
            return 1;
        }
    } else {
        printf("Error: No argument provided!");
        return 1;
    }

    int (*calc)(const int) = factorial;

    printf("%d factorial is %d ", N, calc(N));
    return 0;
}
