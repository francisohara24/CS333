/**
        Bruce Maxwell
        Fall 2012
        CS 333

        Linked list test function
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "linkedlist.h"

// function that prints an integer
void printInt(void *i) {
    int *a = (int *) i;

    printf("value: %d\n", *a);
}

// function that squares an integer
void squareInt(void *i) {
    int *a = (int *) i;

    *a = *a * *a;
}

// function that compares two integers and returns 1 if they are equal
int compInt(void *i, void *j) {
    int *a = (int *) i;
    int *b = (int *) j;

    return (*a == *b);
}


/**
 * Student struct for testing linkedlist of custom type.
 */
typedef struct Student {
    char name[256];
    double gpa;
}
Student;

/** function for printing Student instance */
void print_student(void *student_ptr) {
    Student *student = (Student *) student_ptr;
    printf("value: { name: %s, gpa: %0.2lf }\n", student->name, student->gpa);
}

/** function for resetting gpa of a Student instance */
void reset_gpa(void *student_ptr) {
    Student *student = (Student *) student_ptr;
    student->gpa = 0.0;
}

/** function for comparing two Student instances for equality */
int comp_student(void *student_a_ptr, void *student_b_ptr) {
    int result = 1;
    Student *student_a = (Student *) student_a_ptr;
    Student *student_b = (Student *) student_b_ptr;
    if (strcmp(student_a->name, student_b->name) != 0) {
        result = 0;
    } else if (student_a->gpa != student_b->gpa) {
        result = 0;
    }
    return result;
}

/** Alternate Student struct with pointer members for testing custom free() function. */
typedef struct Student1 {
    char *name;
    double *gpa;
} Student1;

/** Custom free() function for Student1 struct */
void free_student(void *student_ptr) {
    Student1 *student = (Student1 *) student_ptr;
    free(student->name);
    free(student->gpa);
    free(student_ptr);
}

// test function for the various linked list functions
int main(int argc, char *argv[]) {
    {
        /** Tests for int linkedlist*/
        LinkedList *l;
        int *a;
        int *target;
        int i;

        // create a list
        l = ll_create();

        // push data on the list
        for (i = 0; i < 20; i += 2) {
            a = malloc(sizeof(int));
            *a = i;

            ll_push(l, a);
        }

        // printing the list and testing map
        printf("After initialization\n");
        ll_map(l, printInt);

        ll_map(l, squareInt);

        printf("\nAfter squaring\n");
        ll_map(l, printInt);

        // testing removing data
        target = malloc(sizeof(int));

        *target = 16;
        a = ll_remove(l, target, compInt);
        if (a != NULL)
            printf("\nremoved: %d\n", *a);
        else
            printf("\nNo instance of %d\n", *target);

        *target = 11;
        a = ll_find(l, target, compInt);
        if (a != NULL)
            printf("\nFound: %d\n", *a);
        else
            printf("\nNo instance of %d\n", *target);
        a = ll_remove(l, target, compInt);
        if (a != NULL)
            printf("\nremoved: %d\n", *a);
        else
            printf("\nNo instance of %d\n", *target);

        printf("\nAfter removals\n");
        ll_map(l, printInt);

        // testing appending data
        ll_append(l, target);

        printf("\nAfter append\n");
        ll_map(l, printInt);

        // test clearing
        ll_clear(l, free);

        printf("\nAfter clear\n");
        ll_map(l, printInt);

        // rebuild and test append and pop
        for (i = 0; i < 5; i++) {
            a = malloc(sizeof(int));
            *a = i;
            ll_append(l, a);
        }

        printf("\nAfter appending\n");
        ll_map(l, printInt);

        a = ll_pop(l);
        printf("\npopped: %d\n", *a);
        free(a);

        a = ll_pop(l);
        printf("popped: %d\n", *a);
        free(a);

        printf("\nAfter popping\n");
        ll_map(l, printInt);

        printf("\nList size: %d\n", ll_size(l));
    }


    /** Tests for Student linkedlist */
    {
        LinkedList *l;
        Student *a;
        Student *target;
        int i;

        // create a list
        l = ll_create();

        // define initial student data
        char names[][10] = {
            "Armin", "Eren", "Mikasa", "Levi", "Bertholdt", "Reiner", "Annie", "Falco", "Porco", "Pieck"
        };
        double gpas[] = {3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2};

        // push data on the list
        for (i = 0; i < 10; i += 1) {
            Student *student = (Student *) malloc(sizeof(Student));
            strcpy(student->name, names[i]);
            student->gpa = gpas[i];

            ll_push(l, student);
        }

        // printing the list and testing map
        printf("After initialization\n");
        ll_map(l, print_student);

        ll_map(l, reset_gpa);

        printf("\nAfter resetting gpa\n");
        ll_map(l, print_student);

        // testing removing data
        target = malloc(sizeof(Student));

        strcpy(target->name, "Porco");
        target->gpa = 0.00;

        a = ll_remove(l, target, comp_student);
        if (a != NULL) {
            printf("\nremoved: ");
            print_student(a);
            printf("\n");
        } else {
            printf("\nNo instance of ");
            print_student(target);
            printf("\n");
        }

        strcpy(target->name, "Bertholdt");
        target->gpa = 0.00;

        a = ll_find(l, target, comp_student);
        if (a != NULL) {
            printf("\nFound: ");
            print_student(a);
            printf("\n");
        } else {
            printf("\nNo instance of ");
            print_student(target);
            printf("\n");
        }

        a = ll_remove(l, target, comp_student);
        if (a != NULL) {
            printf("\nremoved: ");
            print_student(a);
            printf("\n");
        } else {
            printf("\nNo instance of ");
            print_student(target);
            printf("\n");
        }
        printf("\nAfter removals\n");
        ll_map(l, print_student);

        // testing appending data
        ll_append(l, target);

        printf("\nAfter append\n");
        ll_map(l, print_student);

        // test clearing
        ll_clear(l, free);

        printf("\nAfter clear\n");
        ll_map(l, print_student);

        // rebuild and test append and pop
        for (i = 0; i < 5; i++) {
            a = malloc(sizeof(Student));
            strcpy(a->name, names[i]);
            a->gpa = gpas[i];
            ll_append(l, a);
        }

        printf("\nAfter appending\n");
        ll_map(l, print_student);

        a = ll_pop(l);
        printf("\npopped: ");
        print_student(a);
        printf("\n");
        free(a);

        a = ll_pop(l);
        printf("\npopped: ");
        print_student(a);
        printf("\n");
        free(a);

        printf("\nAfter popping\n");
        ll_map(l, print_student);

        printf("\nList size: %d\n", ll_size(l));
    }

    /** Test to demonstrate custom freefunc() for freeing linkedlist data elements **/
    {

        LinkedList *l = ll_create();

        while (1) {
            Student1 *student = malloc(sizeof(Student1));
            char *name = (char *) malloc(sizeof(50));
            double *gpa = (double *) malloc(sizeof(double));
            strcpy(name, "John Doe");
            *gpa = 4.0;
            student->name = name;
            student->gpa = gpa;

            ll_append(l, student);

            // // incorrect free func for freeing Student struct with dynamically allocated members
            // ll_clear(l, free);

            // correct free func for freeing Student struct
            ll_clear(l, free_student);

        }
    }

    return (0);
}
