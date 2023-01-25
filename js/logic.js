import {print} from './utils/print.js'

const main = () => {
    let calculationLine = []
    let calculationNumber = "0"
    let countArguments = [
        {vision: "x", operand: '*'},
        {vision: "/", operand: '/'},
        {vision: "-", operand: '-'},
        {vision: "+", operand: '+'}]
    return (state) => {
        if (state === "=") {
            calculationLine.push(calculationNumber)
            for (let i = 0; i < calculationLine.length; i++) {
                countArguments.map((item) => {
                        let concat = calculationLine.indexOf(item.vision)
                        if (calculationLine.indexOf(item.vision) !== -1) {
                            calculationLine[concat - 1] = eval(calculationLine[concat - 1] + item.operand + calculationLine[concat + 1])
                            calculationLine.splice(concat, 2);
                        }

                        if (calculationLine.length === 1) {
                            calculationNumber = calculationLine[0]
                            print(calculationNumber)
                            calculationLine.splice(0, 1)
                        }
                    }
                )

            }
        }
        countArguments.map((item) => {
            if (state === item.vision) {
                calculationLine.push(calculationNumber)
                calculationLine.push(item.vision)
                calculationNumber = "0"
                print(calculationNumber)
            }
        })
        if (state > 0 && calculationNumber !== '0' || state === '.') {
            calculationNumber = String(calculationNumber) + String(state)
            print(calculationNumber)
        } else if (state > 0) {
            calculationNumber = state
            print(calculationNumber)
        }

        if (state === "АС") {
            calculationLine.splice(0, calculationLine.length);
            calculationNumber = "0"
            print(calculationNumber)
        }
        if (state === "С") {
            calculationNumber = "0"
            print(calculationNumber)
        }
    }
}

export default main