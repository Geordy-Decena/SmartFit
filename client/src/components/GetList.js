import {
    ageOption,
    methodOption,
    targetOption
} from './SmartList'

export var option = ''
export function getList() {
    //
    if ((ageOption === 0) && (methodOption === 0) && (targetOption === 0)) {
        option = 0
        //
    }
    else if ((ageOption === 1) && (methodOption === 1) && (targetOption === 1)) {
        option = 1
    }
    else if ((ageOption === 1) && (methodOption === 1) && (targetOption === 2)) {
        console.log("2")
        option = 2
    }
    else if ((ageOption === 1) && (methodOption === 1) && (targetOption === 3)) {
        console.log("3")
        option = 3
    }
    else if ((ageOption === 1) && (methodOption === 1) && (targetOption === 4)) {
        console.log("4")
        option = 4
    }
    else if ((ageOption === 1) && (methodOption === 2) && (targetOption === 1)) {
        console.log("5")
        option = 5
    }
    else if ((ageOption === 1) && (methodOption === 2) && (targetOption === 2)) {
        console.log("6")
        option = 6
    }
    else if ((ageOption === 1) && (methodOption === 2) && (targetOption === 3)) {
        console.log("7")
        option = 7
    }
    else if ((ageOption === 1) && (methodOption === 2) && (targetOption === 4)) {
        console.log("8")
        option = 8
    }
    //
    else if ((ageOption === 2) && (methodOption === 1) && (targetOption === 1)) {
        console.log("9")
        option = 9
    }
    else if ((ageOption === 2) && (methodOption === 1) && (targetOption === 2)) {
        console.log("10")
        option = 10
    }
    else if ((ageOption === 2) && (methodOption === 1) && (targetOption === 3)) {
        console.log("11")
        option = 11
    }
    else if ((ageOption === 2) && (methodOption === 1) && (targetOption === 4)) {
        console.log("12")
        option = 12
    }
    else if ((ageOption === 2) && (methodOption === 2) && (targetOption === 1)) {
        console.log("13")
        option = 13
    }
    else if ((ageOption === 2) && (methodOption === 2) && (targetOption === 2)) {
        console.log("14")
        option = 14
    }
    else if ((ageOption === 2) && (methodOption === 2) && (targetOption === 3)) {
        console.log("15")
        option = 15
    }
    else if ((ageOption === 2) && (methodOption === 2) && (targetOption === 4)) {
        console.log("16")
        option = 16
    }
    //
    else if ((ageOption === 3) && (methodOption === 1) && (targetOption === 1)) {
        console.log("17")
        option = 17
    }
    else if ((ageOption === 3) && (methodOption === 1) && (targetOption === 2)) {
        console.log("18")
        option = 18
    }
    else if ((ageOption === 3) && (methodOption === 1) && (targetOption === 3)) {
        console.log("19")
        option = 19
    }
    else if ((ageOption === 3) && (methodOption === 1) && (targetOption === 4)) {
        console.log("20")
        option = 20
    }
    else if ((ageOption === 3) && (methodOption === 2) && (targetOption === 1)) {
        console.log("21")
        option = 21
    }
    else if ((ageOption === 3) && (methodOption === 2) && (targetOption === 2)) {
        console.log("22")
        option = 22
    }
    else if ((ageOption === 3) && (methodOption === 2) && (targetOption === 3)) {
        console.log("23")
        option = 23
    }
    else if ((ageOption === 3) && (methodOption === 2) && (targetOption === 4)) {
        console.log("24")
        option = 24
    }
    return option
}