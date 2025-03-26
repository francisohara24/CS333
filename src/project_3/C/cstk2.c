/**
 * File Name:   cstk2.c
 * Description: Alternate implementation of stack Data Structure in C.
                Implements all declared methods in cstk2.h
 * Author:      Francis O'Hara
 * Date:        3/25/25
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "cstk2.h"

Stack *stk_create(int capacity) {
    Stack *stack = (Stack *) malloc(sizeof(Stack));
    stack->data = malloc(capacity * sizeof(void *));
    stack->top = stack->data;
    stack->capacity = capacity;
    return stack;
}


void stk_destroy(Stack *stack) {
    free(stack->data);
    free(stack);
}


int stk_size(Stack *stack) {
    int size = 0;
    void **ptr = stack->data;
    while (ptr != stack->top) {
        size++;
        ptr++;
    }
    return size;
}


void stk_push(Stack *stack, void *item) {
    if (stk_size(stack) < stack->capacity) {
        *stack->top = item;
        stack->top++;
    } else {
        printf("Warning: attempting to push to a full stack!");
    }
}


void *stk_peek(Stack *stack) {
    if (stk_size(stack) > 0) {
        return *(stack->top - 1);
    }
    printf("Warning: attempting to peek an empty stack!");
    return NULL;
}


void *stk_pop(Stack *stack) {
    if (stk_size(stack) > 0) {
        void *value = *(stack->top - 1);
        stack->top--;
        return value;
    }
    printf("Warning: attempting to pop an empty stack!");
    return NULL;
}


/**
 *  @brief Returns the length of the given string. This is a helper function for the `stk_toString()` function below.
 *
 * @param string pointer to the first character of the string whose length is to be returned.
 * @return an integer representing the length of the given string.
 */
int len(char *string) {
    int length = 0;
    char *ptr = string;
    while (*ptr != '\0') {
        length++;
        ptr++;
    }
    return length;
}

char *stk_toString(Stack *stack, char *(*toString)(void *)) {
    int allocation_size = 0;

    // bytes to be allocated for string representation of each element
    void **ptr = stack->data;
    while (ptr != stack->top) {
        allocation_size += len(toString(*ptr));
        ptr++;
    }

    // bytes to be allocated for opening and closing square brackets
    allocation_size += 2;

    // bytes to be allocated for separator characters ", "
    allocation_size += 2 * (stk_size(stack) - 1);

    // byte to be allocated for null terminator of final string
    allocation_size += 1;

    // allocate bytes and populate with characters
    char *result = (char *) malloc(allocation_size);

    ptr = stack->data;
    char *result_ptr = result;

    *result_ptr = '[';
    result_ptr++;

    while (ptr != stack->top) {
        char *string = toString(*ptr);
        char *string_ptr = string;
        while (*string_ptr != '\0') {
            *result_ptr = *string_ptr;
            string_ptr++;
            result_ptr++;
        }

        if ((ptr + 1) != stack->top) {
            *result_ptr = ',';
            result_ptr++;
            *result_ptr = ' ';
            result_ptr++;
        } else {
            *result_ptr = ']';
            result_ptr++;
        }

        ptr++;
    }

    *result_ptr = '\0';

    return result;
}
