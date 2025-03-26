/**
 * @file cstktest2.c
 * @author mbender & srtaylor
 * @date 2024-03-05
 *
 * Exercises the functionality of cstk 
 * Modified by Ying Li 08/22/24
 * Modified by Francis O'Hara 03/25/2025
 */
#include "cstk2.h"

typedef struct Account {
    char *name;
    int balance;
} Account;

char *intToString(void *x) {
    // number to be converted
    int number = *((int *) x);

    // number of digits in number
    int num_digits = 0;

    // count number of digits
    if (number == 0) {
        num_digits++;
    } else if (number < 0) {
        number *= -1;
    }

    while (number != 0) {
        number = number / 10;
        num_digits++;
    }

    // allocate bytes for representing number of digits, null terminator, and minus sign in result string.
    char *result = (char *) malloc(num_digits + 2);
    char *result_ptr = result;
    number = *((int *) x);

    // append minus sign to result string if number is negative
    if (number < 0) {
        *result = '-';
        number *= -1;
        result_ptr++;
    }

    // map for converting single-digit number to corresponding character
    char digit_to_char[10] = "0123456789";

    for (int i = 0; i < num_digits; i++) {
        // append character representation of last digit of number to appropriate position in result string
        int digit = number % 10;
        result_ptr[num_digits - 1 - i] = digit_to_char[digit];
        number = number / 10;
    }
    return result;
}

char *account_toString(void *v) {
    Account account = *((Account *) v);

    // number of bytes to be allocated for result string
    int result_length = 0;

    // add bytes for account name
    char *name_ptr = account.name;

    while (*name_ptr != '\0') {
        result_length++;
        name_ptr++;
    }

    // add bytes for string account balance
    char *balance = (char *) intToString(&account.balance);
    char *balance_ptr = balance;

    while (*balance_ptr != '\0') {
        result_length++;
        balance_ptr++;
    }

    // add bytes for ':' and ' ' separator characters and null terminator
    result_length += 3;

    // allocate bytes and populate with characters
    char *result = (char *) malloc(result_length);
    char *result_ptr = result;

    // append characters for account name
    name_ptr = account.name;
    while (*name_ptr != '\0') {
        *result_ptr = *name_ptr;
        name_ptr++;
        result_ptr++;
    }

    // append separator characters
    *result_ptr = ':';
    result_ptr++;
    *result_ptr = ' ';
    result_ptr++;

    // append characters for account balance
    balance_ptr = balance;
    while (*balance_ptr != '\0') {
        *result_ptr = *balance_ptr;
        balance_ptr++;
        result_ptr++;
    }

    // append null terminator
    *result_ptr = '\0';

    free(balance);
    return result;
}

int main(int argc, char **argv) {
    /**
     * Test stack initialization
     */
    {
        Stack *stack1 = stk_create(10);
        Stack *stack2 = stk_create(10);

        if (stack1 == NULL || stack2 == NULL) {
            printf("Error in stk_create: unable to initialize stack");
            return 0;
        }

        if (stack1 == stack2) {
            printf(
                "Error in stk_create: two stacks created but are pointing to "
                "the same memory.");
            return 0;
        }

        stk_destroy(stack1);
        stk_destroy(stack2);
    }

    /**
     * Test stk_push
     */
    {
        Stack *stack1 = stk_create(1);
        Stack *stack2 = stk_create(1);
        int *someInts = (int *) malloc(sizeof(int) * 2);
        *someInts = 0;
        *(someInts + 1) = 1;

        stk_push(stack1, someInts);
        stk_push(stack2, someInts + 1);

        if (*(stack1->top - 1) != someInts ||
            *(stack2->top - 1) != someInts + 1) {
            printf(
                "Error in stk_push: value not inserted correctly or top not "
                "updated correctly");
            return 0;
        }

        stk_destroy(stack1);
        stk_destroy(stack2);
        free(someInts);
    }

    /**
     * Test stk_peek
     */
    {
        Stack *stack1 = stk_create(1);
        Stack *stack2 = stk_create(1);
        Stack *stack3 = stk_create(10);
        int *someInts = (int *) malloc(sizeof(int) * 6);
        for (int i = 0; i < 6; i++) *(someInts + i) = i;

        stk_push(stack1, someInts);
        stk_push(stack2, someInts + 1);
        for (int i = 0; i < 6; i++) {
            stk_push(stack3, someInts + i);
        }

        if (stk_peek(stack1) != someInts || stk_peek(stack2) != someInts + 1 ||
            stk_peek(stack3) != someInts + 5) {
            printf("Error in stk_peek: incorrect value returned");
            return 0;
        }

        stk_destroy(stack1);
        stk_destroy(stack2);
        stk_destroy(stack3);
        free(someInts);
    }

    /**
     * Test stk_pop
     */
    {
        Stack *stack1 = stk_create(1);
        Stack *stack2 = stk_create(3);
        Stack *stack3 = stk_create(10);
        int *someInts = (int *) malloc(sizeof(int) * 6);
        for (int i = 0; i < 6; i++) *(someInts + i) = i;

        stk_push(stack1, someInts);
        stk_push(stack2, someInts);
        stk_push(stack2, someInts + 1);
        for (int i = 0; i < 6; i++) stk_push(stack3, someInts + i);

        int *val1 = stk_pop(stack1);
        int *val2 = stk_pop(stack2);
        int *val3 = stk_pop(stack3);

        if (*val1 != 0 || *val2 != 1 || *val3 != 5) {
            printf("Error in stk_pop: incorrect value returned");
            return 0;
        }

        stk_destroy(stack1);
        stk_destroy(stack2);
        stk_destroy(stack3);
        free(someInts);
    }

    printf("All non-display tests passed!\n");
    Stack *stack = stk_create(10);
    for (int i = 0; i < 10; i++) {
        int *x = (int *) malloc(sizeof(int));
        *x = i;
        stk_push(stack, x);
    }
    printf("You should now see the numbers from 0 to 9: \n");
    printf("%s\n\n", stk_toString(stack, &intToString));

    for (int i = stk_size(stack); i > 0; i--) stk_pop(stack);

    Account account = {"Max Bender", 10};
    stk_push(stack, &account);
    // why is the above perhaps dangerous?

    Account account2 = {"Stephanie Taylor", 100};
    stk_push(stack, &account2);
    printf(
        "You should now see the string: [Max Bender: 10, Stephanie Taylor: "
        "100]\n");
    printf("%s\n\n", stk_toString(stack, &account_toString));

    /**
     * What follows is a test to visually confirm whether stk_destroy
     * is correctly implemented. After uncommenting the lines below,
     * open your task manager (Windows) or Activity Monitor (Mac) and observe
     * that your memory usage doesn't increase while the program runs.
     *
     * In this second version, it will also test if you have avoided memory
     * leaks in your toString method(s).
     */
    while (1) {
        int cap = 100;
        Stack *stack = stk_create(cap);
        int *ints = (int *) malloc(sizeof(int) * cap);
        for (int i = 0; i < cap; i++) {
            *(ints + i) = 0x7FFF0000 + i;
            stk_push(stack, ints + i);
        }
        char *toString = stk_toString(stack, &intToString);
        // comment out the line(s) below and watch your memory usage explode!
        free(toString);
        stk_destroy(stack);
        free(ints);
    }
}
