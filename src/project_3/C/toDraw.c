/**
 * Test code for Stack 
 *
 * Ying Li
 * 08/01/2016
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
	
	printf("The original list: ");
	stk_display(s, 0);
	
	printf("The reversed list: ");
	stk_display(s, 1);
	
	stk_destroy(s);
    // Mark 2 (first memory picture)
	
	return 0;
}
