function printDiamond(letter) {

    let acceptedParams = ['A', 'B', 'C', 'D']

    if (!acceptedParams.includes(letter))
        return ""

    const index = acceptedParams.indexOf(letter)

    let diamond = ""
    for (let i = index; i >= 0; i--) {
        let newLine = ""
        const currentLetter = acceptedParams[i]
        // Espaces devant
        for (let j = 0; j < index - i; j++) { // lign containg letter
            newLine += " "
        }

        // Premiere lettre
        newLine += currentLetter

        // Espaces au milieu
        for (let j = 0; j < (2 * i - 1); j++) {
            newLine += " "
        }

        // Seconde lettre
        if (currentLetter !== "A")
            newLine += currentLetter

        // New line
        newLine += "\n"

        diamond += newLine
        if (i !== index) diamond = newLine + diamond
    }
    diamond = diamond.substring(0, diamond.length - 1)
    return diamond

}

module.exports = {
    printDiamond
}