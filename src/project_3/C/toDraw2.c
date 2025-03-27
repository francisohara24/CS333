#include "cstk2.h"

typedef struct Account {
    char *name;
    int balance;
} Account;

int main() {
    Stack *stack = stk_create(10);

    printf("Address of stack: %p\n", &stack);
    printf("Value of stack: %p\n", stack);
    printf("Address of stack->data (i.e. value of stack): %p\n", &stack->data);
    printf("Value of stack->data: %p\n", stack->data);
    printf("Address of stack->top: %p\n", &stack->top);
    printf("Address of stack->capacity: %p\n", &stack->capacity);
    printf("Value of stack->capacity (i.e. 10): %d\n", stack->capacity);
    printf("\n");

    for (int i = 0; i < 5; i++) {
        int *x = (int *) malloc(sizeof(int));
        *x = i;
        printf("Address pointed to by x_%d: %p\n", i, x);
        printf("Value at address pointed to by x_%d: %d\n", i, *x);
        stk_push(stack, x);
    }
    printf("\n");


    Account account = {"Max Bender", 10};
    stk_push(stack, &account);

    printf("Value of stack->top: %p\n", stack->top);
    printf("Address of account: %p\n", &account);
    printf("Address of account.name (i.e. address of account): %p\n", &account.name);
    printf("Address pointed to by account.name: %p\n", account.name);
    printf("Value at address pointed to by account.name: %c\n", *account.name);
    printf("Address of account.balance: %p\n", &account.balance);
    printf("Value of account.balance: %d\n\n", account.balance);

    char *name = (char *) account.name;
    while (*name != '\0') {
        printf("%p %c\n", name, *name);
        name++;
    }

    printf("\n");

    void **data_ptr = stack->data;
    while (data_ptr != stack->top) {
        printf("%p %p %d\n", data_ptr, *data_ptr, *((int *)*data_ptr));
        data_ptr ++;
    }

    // MARK 1 - draw current contents of stack and relevant contents of heap

    return 0;
}
