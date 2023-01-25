import {print, takeResult} from './utils/print.js'

const main = () => {
    let calculationLine = []
    return (state) => {
        if (state === "=") {
            calculationLine.push(takeResult())
            for (let i = 0; i < calculationLine.length; i++) {
                if (calculationLine.indexOf("x") !== -1) {
                    let concat = calculationLine.indexOf("x")
                    calculationLine[concat - 1] = calculationLine[concat - 1] * calculationLine[concat + 1]
                    calculationLine.splice(concat, 2);
                    if (calculationLine.length === 1) {
                        print(calculationLine[0])
                        calculationLine.splice(0, 1)
                    }
                } else if (calculationLine.indexOf("/") !== -1) {
                    let concat = calculationLine.indexOf("/")
                    calculationLine[concat - 1] = calculationLine[concat - 1] / calculationLine[concat + 1]
                    calculationLine.splice(concat, 2);
                    if (calculationLine.length === 1) {
                        print(calculationLine[0])
                        calculationLine.splice(0, 1)
                    }
                } else if (calculationLine.indexOf("-") !== -1) {
                    let concat = calculationLine.indexOf("-")
                    calculationLine[concat - 1] = Number(calculationLine[concat - 1]) - Number(calculationLine[concat + 1])
                    calculationLine.splice(concat, 2);
                    if (calculationLine.length === 1) {
                        print(calculationLine[0])
                        calculationLine.splice(0, 1)
                    }
                } else if (calculationLine.indexOf("+") !== -1) {
                    let concat = calculationLine.indexOf("+")
                    calculationLine[concat - 1] = Number(calculationLine[concat - 1]) + Number(calculationLine[concat + 1])
                    calculationLine.splice(concat, 2);
                    if (calculationLine.length === 1) {
                        print(calculationLine[0])
                        calculationLine.splice(0, 1)
                    }
                }
            }
        }

        if (state === "/") {
            calculationLine.push(takeResult())
            calculationLine.push("/")
            print(0)
        } else if (state === "x") {
            calculationLine.push(takeResult())
            calculationLine.push("x")
            print(0)
        } else if (state === "-") {
            calculationLine.push(takeResult())
            calculationLine.push("-")
            print(0)
        } else if (state === "+") {
            calculationLine.push(takeResult())
            calculationLine.push("+")
            print(0)
        }
        if (0 < state && takeResult() !== '0'||state==='.') {
            print(takeResult() + state)
        } else if (state > 0) {
            print(state)
        }
        if (state === "АС") {
            calculationLine.splice(0, calculationLine.length);
            print(0)
        }
        if (state === "С") {
            print(0)
        }
    }
}

export default main