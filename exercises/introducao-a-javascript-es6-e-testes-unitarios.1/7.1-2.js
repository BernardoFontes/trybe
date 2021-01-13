const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}
console.log(fatorial(5));