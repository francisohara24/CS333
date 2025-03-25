/**
 * Test code for Stack 
 *
 * Ying Li
 * 08/01/2016
 *
 * Modified by: Francis O'Hara
 * Date: 		03/24/2025
 */

#include "cstk.h"
#include <stdio.h>
#include <stdlib.h>

int main (int argc, char **argv) {
	Stack *s = stk_create(20);
	
	int i;
	for(i = 0; i < 10; i++) {
		stk_push(s, i+1);
	}

    // Mark 1 (first memory picture)
   	printf("-----PROGRAM STATE AT MARK 1--------------\n");
    printf("Address of i: %p\n", &i);
    printf("Address of s: %p\n", &s);
    printf("Address pointed to by s (i.e. address of s->data): %p\n", s);
    printf("Address of s->data: %p\n", &s->data);
    printf("Address of s->top: %p\n", &s->top);
    printf("Address of s->capacity: %p\n", &s->capacity);
    printf("Address pointed to by s->data: %p\n", s->data);
    printf("Address pointed to by s->top: %p\n", s->top);
    printf("Address of last element in s->data: %p\n", s->top - 1);
    printf("Value of i: %d\n", i);
    printf("Value of s->capacity: %d\n\n", s->capacity);
    int *ptr = s->data;
    while (ptr != s->top){
        printf("%p %d\n", ptr, *ptr);
        ptr++;
    }
    // Mark 1 (first memory picture)

	printf("The original list: ");
	stk_display(s, 0);
	
	printf("The reversed list: ");
	stk_display(s, 1);
	
	stk_destroy(s);
    // Mark 2 (second memory picture)
   	printf("\n-----PROGRAM STATE AT MARK 2--------------\n");
    printf("Address of i: %p\n", &i);
    printf("Address of s: %p\n", &s);
    printf("Address pointed to by s (i.e. address of s->data): %p\n", s);
    printf("Address of s->data: %p\n", &s->data);
    printf("Address of s->top: %p\n", &s->top);
    printf("Address of s->capacity: %p\n", &s->capacity);
    printf("Address pointed to by s->data: %p\n", s->data);
    printf("Address pointed to by s->top: %p\n", s->top);
    printf("Address of last element in s->data: %p\n", s->top - 1);
    printf("Value of i: %d\n", i);
    printf("Value of s->capacity: %d\n\n", s->capacity);
    // Mark 2 (second memory picture)

	return 0;
}
