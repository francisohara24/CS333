/**
 * File Name:   cstk.h
 * Description: Header file for cstk.c, an implementation of a Stack data structure.
 * Author:      Francis O'Hara
 * Date:        3/20/25
 */

#ifndef CSTK_H
#define CSTK_H

typedef struct Stack {
    /** pointer to start of data stored in stack */
    int *data;

    /** pointer to where new elements are to be inserted in stack */
    int *top;

    /** maximum size of the stack */
    int capacity;
} Stack;


/**
* Creates a stack with capacity specified by the int value.
*/
Stack *stk_create(int capacity);

/**
* Returns 1 if the given Stack is empty; Otherwise 0.
*/
int stk_empty(Stack *stack);

/**
* Returns 1 if the given stack is full; Otherwise 0.
*/
int stk_full(Stack *stack);

/**
* Adds a new value to the top of the stack if there's space.
* If there's no space, prints out a warning but does nothing.
*/
void stk_push(Stack * stack, int value);

/**
* Returns the value on the top of the stack if such a value exists.
* Otherwise, prints out a warning and returns 0.
*/
int stk_peek(Stack *stack);

/**
* Removes and returns the value on the top of the stack if such a value exists.
* Otherwise, prints out a warning and returns 0.
*/
int stk_pop(Stack *stack);

/**
* Prints out all the values on the stack in the reverse order (LILO) if the int `order` is 1;
* otherwise, prints out the values in the original order (LIFO).
*/
void stk_display(Stack *stack, int order);

/**
* Frees up the memory containing the stack.
*/
void stk_destroy(Stack *stack);

/**
* Copies the contents of the given stack into another stack of the same capacity and returns it.
*/
Stack *stk_copy(Stack *stack);

#endif //CSTK_H