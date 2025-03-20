package main

import "fmt"
import "rsc.io/quote"

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("--Wise Sayings--\n" + quote.Opt() + "\n" + quote.Go())
}
