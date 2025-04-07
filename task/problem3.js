function weatherAdvice(temperature, isRaining) {
    var message = '';
    if ( temperature < 10) {
        message = "wear a heavy jacket.";
    } else if ( temperature > 10 && temperature < 20 && isRaining) {
        message =  "Bring an Umbrella.";
    }
    else {
        message = " enjoy the weather!"
    }
    return message;
}

console.log(weatherAdvice(8, false))
console.log(weatherAdvice(15, true))
console.log(weatherAdvice(30, false))

/*
1 start program
2 create function named weatherAdvice
    3 declare a variable named message
    4 if temperature is less than 10
        4.1 set the value of message to "wear a heavy jacket."
    5 else if the temparature is between 10° and 20° as well as isReaning is equal to trus
         5.1 ser value of message to "bring an umbrella."
    6 otherwise
        6.1 set the value of message to "Enjoy the weather."
    7 return message
8 end program
*/
