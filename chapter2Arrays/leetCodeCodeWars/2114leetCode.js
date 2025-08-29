const sentences = ["w jrpihe zsyqn l dxchifbxlasaehj", "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom", "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg", "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm", "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr", "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk", "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo", "qstd zui nbbohtuk", "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"]

let max = 0

for (let i = 0; i < sentences.length; i++) {
    let wordCount = sentences[i].split(" ").length; 
    if (wordCount > max) { 
        max = wordCount; 
    }
}
console.log("max: ", max);
