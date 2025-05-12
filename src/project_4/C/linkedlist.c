/**
 * @file   linkedlist.c
 * @brief  Program containing implementation of LinkedList data structure.
 * @author Francis O'Hara
 * @date   4/17/25
 */
#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"


LinkedList *ll_create() {
    LinkedList *list = (LinkedList *) malloc(sizeof(LinkedList));
    list->head = NULL;
    return list;
}


void ll_push(LinkedList *l, void *data) {
    Node *new_node = (Node *) malloc(sizeof(Node));
    new_node->data = data;
    new_node->next = l->head;
    l->head = new_node;
}


void *ll_pop(LinkedList *l) {
    if (l->head == NULL) {
        return NULL;
    }

    void *result = l->head->data;
    l->head = l->head->next;
    return result;
}


void ll_append(LinkedList *l, void *data) {
    if (l->head == NULL) {
        l->head = (Node *) malloc(sizeof(Node));
        l->head->data = data;
        l->head->next = NULL;
    } else {
        Node *current_node = l->head;
        while (1) {
            if (current_node->next == NULL) {
                current_node->next = (Node *) malloc(sizeof(Node));
                current_node->next->data = data;
                current_node->next->next = NULL;
                break;
            }
            current_node = current_node->next;
        }
    }
}


void *ll_remove(LinkedList *l, void *target, int (*compfunc)(void *, void *)) {
    void *result = NULL;

    if (l->head == NULL) {
        return NULL;
    }

    if (compfunc(l->head->data, target) == 1) {
        result = l->head->data;
        l->head = l->head->next;
    } else {
        Node *previous_node = l->head;
        Node *current_node = l->head->next;

        while (current_node != NULL) {
            if (compfunc(current_node->data, target) == 1) {
                result = current_node->data;
                previous_node->next = current_node->next;
                break;
            }
            previous_node = current_node;
            current_node = current_node->next;
        }
    }
    return result;
}


void *ll_find(LinkedList *l, void *target, int (*compfunc)(void *, void *)) {
    if (l->head == NULL) {
        return NULL;
    }

    Node *current_node = l->head;
    while (current_node != NULL) {
        if (compfunc(current_node->data, target) == 1) {
            return current_node->data;
        }
        current_node = current_node->next;
    }

    return NULL;
}


int ll_size(LinkedList *l) {
    int size = 0;

    Node *current_node = l->head;

    while (current_node != NULL) {
        size++;
        current_node = current_node->next;
    }

    return size;
}


void ll_clear(LinkedList *l, void (*freefunc)(void *)) {
    Node *current_node = l->head;

    while (current_node != NULL) {
        freefunc(current_node->data);
        Node *temp = current_node->next;
        free(current_node);
        current_node = temp;
    }

    l->head = NULL;
}


void ll_map(LinkedList *l, void (*mapfunc)(void *)) {
    Node *current_node = l->head;

    while (current_node != NULL) {
        mapfunc(current_node->data);
        current_node = current_node->next;
    }
}
