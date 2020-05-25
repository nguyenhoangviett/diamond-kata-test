function printDiamond(letter) {

    let acceptedParams = ['A', 'B', 'C', 'D']

    if (!acceptedParams.includes(letter))
        return ""

    const index = acceptedParams.indexOf(letter)

    let diamond = ""
    for (let i = index; i >= 0; i--) {
        let newLine = ""
        const currentLetter = acceptedParams[i]
        // Leerzeichen davor
        for (let j = 0; j < index - i; j++) { // Zeile enthält Buchstabe
            newLine += " "
        }

        // Der erste Buchstabe
        newLine += currentLetter

        // Leerzeichen in der Mitte
        for (let j = 0; j < (2 * i - 1); j++) {
            newLine += " "
        }

        // Der zweite Buchstabe
        if (currentLetter !== "A")
            newLine += currentLetter

        // Neue Zeile
        newLine += "\n"

        diamond += newLine
        if (i !== index) diamond = newLine + diamond
    }
    diamond = diamond.substring(0, diamond.length - 1)
    return diamond

}

console.log(printDiamond("D"))

module.exports = {
    printDiamond
}