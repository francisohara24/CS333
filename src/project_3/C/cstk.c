/**
 * File Name:   cstk.c
 * Description: Implementation of a Stack data structure.
 * Author:      Francis O'Hara
 * Date:        3/20/25
 */

#include "cstk.h"
#include <stdlib.h>
#include <stdio.h>

Stack *stk_create(int capacity) {
    Stack *stack = (Stack *) malloc(sizeof(Stack));
    stack->capacity = capacity;
    stack->data = (int *) malloc(capacity * sizeof(int));
    stack->top = stack->data;
    return stack;
}


int stk_empty(Stack *stack) {
    return stack->top == stack->data;
}


int stk_full(Stack *stack) {
    return stack->top == (stack->data + stack->capacity);
}


void stk_push(Stack *stack, int value) {
    if (!stk_full(stack)) {
        *(stack->top) = value;
        stack->top++;
    } else
        printf("Warning: attempting to push value on a full stack.\n");
}


int stk_peek(Stack *stack) {
    if (!stk_empty(stack)) {
        return *(stack->top);
    }
    printf("Warning: attempting to peek an empty stack.\n");
    return 0;
}


int stk_pop(Stack *stack) {
    if (!stk_empty(stack)) {
        int value = *(stack->top);
        stack->top--;
        return value;
    }
    printf("Warning: attempting to pop an empty stack.\n");
    return 0;
}


void stk_display(Stack *stack, int order) {
    if (order == 1) {
        int *ptr = stack->data;
        while (ptr != stack->top) {
            printf("%d ", *ptr);
            ptr++;
        }
    } else {
        int *ptr = stack->top - 1;
        while (ptr != stack->data - 1) {
            printf("%d ", *ptr);
        }
    }
    printf("\n");
}


void stk_destroy(Stack *stack) {
    free(stack->data);
    free(stack->top);
    free(stack);
}


Stack *stk_copy(Stack *stack) {
    Stack *new_stack = (Stack *) malloc(sizeof(Stack));
    new_stack->data = (int *) malloc(stack->capacity * sizeof(int));
    new_stack->capacity = stack->capacity;
    new_stack->top = new_stack->data;
    int *ptr = stack->data;
    while (ptr != stack->top) {
        *new_stack->top = *ptr;
        new_stack->top++;
        ptr++;
    }
    return new_stack;
}
