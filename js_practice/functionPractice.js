function show(number) {

    if (number > 10) {
        return true;
    } else if (number == 10) {
        return null;
    } else {
        return false;
    }


}

let result = show("10");
if (result == true) {
    console.log("number is greater than 10");
} else if (result == false) {
    console.log("number is less than 10");
} else {
    console.log("number is equal to 10");
}
console.log(result);
console.log("this", this);
