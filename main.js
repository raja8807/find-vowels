const getInput = ()=>{
    let word = prompt("enter the word").toLowerCase()
    // sumDigits(num)
    findVowels(word)
}

getInput()

function findVowels(word){
    let vowels = ["a", "e", "i", "o", "u"]
    let out = ""
    for(char of word){
        if(vowels.includes(char)){
            if(!out.includes(char)){
                out = out+char
            }
        }
    }
    console.log(out)
    return out
}