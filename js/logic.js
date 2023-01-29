import {print} from './utils/print.js'

class calculation {
    constructor(calculationLine) {
        this.calculationLine = calculationLine;
    }

    calculationSet(symbol) {
        this.calculationLine = symbol;
    }

    calculationLineSetter(symbol) {
        this.calculationLine = this.calculationLine + symbol;
    }

    calculationLineGetter() {
        return this.calculationLine;
    }

    evalLine() {
        return eval(this.calculationLine)
    }

    lastSymbol() {
        return this.calculationLine[this.calculationLine.length - 1]
    }

    deleteLastSymbol() {
        if (this.calculationLine.length !== 1) {
            this.calculationSet(this.calculationLine.slice(0, -1))
            print(this.calculationLine)
        } else {
            this.calculationSet('0')
            print(this.calculationLine)
        }
    }
}

const main = () => {
    let countArguments = [
        {vision: "x", operand: '*'},
        {vision: "/", operand: '/'},
        {vision: "-", operand: '-'},
        {vision: "+", operand: '+'}]
    let calc = new calculation('0')
    return (state) => {
        if (state >= 0) {
            if (state == 0) {
                if (calc.calculationLineGetter() === '0') {
                    calc.calculationSet(state)
                    print(calc.calculationLineGetter())
                } else {
                    calc.calculationLineSetter(state)
                    print(calc.calculationLineGetter())
                }
            } else if (state > 0) {
                if (calc.calculationLineGetter() === '0') {
                    calc.calculationSet(state)
                    print(calc.calculationLineGetter())
                } else {
                    calc.calculationLineSetter(state)
                    print(calc.calculationLineGetter())
                }

            }

        }
        countArguments.map((arg) => {
            if (arg.vision === state) {
                if (arg.vision !== calc.lastSymbol()) {
                    calc.calculationLineSetter(arg.operand)
                    print(calc.calculationLineGetter())
                }
            }
        })
        if (state === '=') {
            print(calc.evalLine())
            calc.calculationSet(calc.evalLine())
        }
        if (state === 'АС') {
            calc.calculationSet('0')
            print(calc.calculationLineGetter())
        }
        if (state === 'С') {
            calc.deleteLastSymbol()
        }
        if (state === '.') {
            if (state !== calc.lastSymbol()) {
                calc.calculationLineSetter(state)
                print(calc.calculationLineGetter())
            }
        }
    }
}

export default main