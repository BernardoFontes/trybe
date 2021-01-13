const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let word of wordArray){
        if (word.length>maxLength){
            result = word;
        }
    }
    return result;
}

console.log(longestWord("Antônio foi ao banheiro"));