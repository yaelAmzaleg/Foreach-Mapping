function capitalize(str) {
    return str.toUpperCase();
}
function swapCase(str) {
    str = str.split(" ")
    str.forEach((char, index) => {
        if (index % 2 == 0)
            str[index] = capitalize(char)
    });
    return str.join(" ")
}
console.log(swapCase("dfg rft fgfh"))