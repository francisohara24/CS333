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
    // number of bytes to be allocated for result string
    int allocation_size = 0;

    // add bytes for string representation of each item on the stack
    void **data_ptr = stack->data;
    while (data_ptr != stack->top) {
        char *string = toString(*data_ptr);
        allocation_size += len(string);
        data_ptr++;
        free(string);
    }

    // add bytes for opening and closing square brackets
    allocation_size += 2;

    // add bytes for separator characters ", "
    allocation_size += 2 * (stk_size(stack) - 1);

    // add bytes for null terminator of final string
    allocation_size += 1;

    // allocate bytes and populate with characters
    char *result = (char *) malloc(allocation_size);

    data_ptr = stack->data;
    char *result_ptr = result;

    // append opening square bracket
    *result_ptr = '[';
    result_ptr++;

    while (data_ptr != stack->top) {
        // append string representation of current item on the stack
        char *string = toString(*data_ptr);
        char *string_ptr = string;
        while (*string_ptr != '\0') {
            *result_ptr = *string_ptr;
            string_ptr++;
            result_ptr++;
        }
        free(string);

        // append separator characters if current item is not last item
        if ((data_ptr + 1) != stack->top) {
            *result_ptr = ',';
            result_ptr++;
            *result_ptr = ' ';
            result_ptr++;
        } else {
            // append closing square bracket if current item is last
            *result_ptr = ']';
            result_ptr++;
        }

        data_ptr++;
    }

    // append null terminator
    *result_ptr = '\0';

    return result;
}
