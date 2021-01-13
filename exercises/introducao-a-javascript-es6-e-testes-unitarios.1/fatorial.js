const fatorial = n => {
    if (n > 1) {
        return n * (n - 1)
    }
    return n
}
console.log(fatorial(5))