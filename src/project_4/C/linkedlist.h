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
LinkedList *ll_create();


/**
 * adds a Node to the front of the given LinkedList, storing the given data in the added node.
 *
 * @param l The LinkedList to which a new Node is to be added.
 * @param data The data value to be stored in the Node being added to the front of the given LinkedList.
 */
void ll_push(LinkedList *l, void *data);


/**
 * Removes the node at the front of the given LinkedList and returns the associated data.
 *
 * @param l The LinkedList from which a node is to be removed.
 */
void* ll_pop(LinkedList *l);


/**
 * Adds a Node to the end of the given LinkedList, storing the given data in the added Node.
 *
 * @param l The LinkedList to which a Node is to be added.
 * @param data The data value to be stored in the Node added to the end of the LinkedList.
 */
void ll_append(LinkedList *l, void *data);


/**
 * Removes the first node in the list whose data matches the target given the comparison function and returns a pointer
 * to the data in the removed Node.
 *
 * @param l The LinkedList from which a Node is to be removed.
 * @param target A pointer to the target value to be compared to each Node value of the list.
 * @param compfunc A comparison function for comparing each Node value in the LinkedList to the given target value.
 * @return A pointer to the data in the removed Node.
 */
void *ll_remove(LinkedList *l, void *target, int (*compfunc)(void *, void *));


/**
 * Finds the first node in the list whose data matches the target given the comparison function and returns a pointer to the data
 * in the node. Returns NULL if target is not in the list.
 *
 * @param l The LinkedList to be searched.
 * @param target The value being searched for in the LinkedList
 * @param compfunc A comparison function for comparing each Node value in the LinkedList to the given target value.
 * @return A pointer to the data in the node, or NULL if target not found.
 */
void *ll_find(LinkedList *l, void *target, int (*compfunc)(void *, void *));

/**
 * Returns the size of the Linkedlist
 *
 * @param l The LinkedList whose size is to be returned.
 * @return An integer denoting the size of the LinkedList
 */
int ll_size(LinkedList *l);


/**
 * Removes all nodes of the list, freeing the associated data using the given function.
 *
 * @param l The list all of whose nodes are to be removed.
 * @param freefunc The function for freeing associated data of the nodes.
 */
void ll_clear(LinkedList *l, void (*freefunc)(void *));


/**
 * Traverses the list and applies the given function to the data at each node.
 *
 * @param l The list to be traversed.
 * @param mapfunc The function to be applied to the data at each node in the list.
 */
void ll_map(LinkedList *l, void (*mapfunc)(void *));


#endif //LINKEDLIST_H