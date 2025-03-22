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
        *stack->top = value;
        stack->top++;
    }
    else
        printf("Warning: attempting to push value on a full stack.");
}


