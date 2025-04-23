/**
 * @file   linkedlist.h
 * @brief  Header file for implementing linkedlist data structure.
 * @author Francis O'Hara
 * @date   4/17/25
 */
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

/** Node of LinkedList */
typedef struct Node {
    void *data;
    struct Node *next;
} Node;

/** LinkedList representation */
typedef struct LinkedList {
    Node *head;
} LinkedList;

/** Creates a new LinkedList instance and returns a reference to it. */
LinkedList **ll_create();

void ll_push();

#endif //LINKEDLIST_H