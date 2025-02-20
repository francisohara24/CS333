/**
 * File Name:   task_2.c
 * Description: Program to determine layout of variables declared on the stack in memory.
 * Author:      Francis O'Hara
 * Date:        2/17/25
 */
#include <stdio.h>

int main(int arg, char * argv[]){
  char character = (char) 0xA1;
  short short_integer = (short) 0xA1B2;
  int integer = (int) 0xA1B2C3D4;
  long long_integer = (long) 0xA1B2C3D4E5F6A7B8;
  unsigned char * ptr;
  ptr = (unsigned char *) &ptr;

  for (int i = 0; i < 100; i++){
    printf("%d: %02X\n", i, ptr[i]);
  }

  return 0;
}