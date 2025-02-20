/**
 * File Name:   extension_1.c
 * Description: Fixes buffer overflow error in task 5.
 * Author:      Francis O'Hara
 * Date:        2/20/25
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * This creates a definition for the struct Account.
 *
 * Note that balance (an int) is saved after name in memory.
 */
typedef struct Account {
    // order of struct members was switched here.
    int balance;
    char name[10];
} Account;

int main(int arg, char *argv[]) {
    Account newAccount = {0, ""};
    printf("Please input your name for a new bank account: ");

    /**
     * The following line reads input from the terminal.
     *
     * One could have simply done: scanf("%s", newAccount.name), but this would
     * include the newline character at the end of the line. The [^\n] tells the
     * program to only read as much until a newline character is encountered.
     */
    scanf("%[^\n]s", newAccount.name);
    printf("Thank you %s, your new account has been initialized with balance %d.",
           newAccount.name, newAccount.balance);

    // inspect memory contents for bad string input.
    unsigned char * ptr = (unsigned char *) &newAccount.balance;

    printf("\n\nMemory Contents on Bad String:\n");
    for (int i = 0; i < sizeof(Account); i++) {
        printf("%d: %02X\n", i, ptr[i]);
    }

    return 0;
}
