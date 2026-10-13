function testing(){ //i searched how to output it all at once and mr. google said to make it return it as a list???
    return[
        "7" + 3,                 //10 ***
        "7" * "2",               //14???
        typeof NaN,              //idk
        0 || "fallback",         //???
        "10" == 10,              //true
        parseInt("12abc"),       

        "7" - 3,                 //4
        10 / 3 ,                 //3
        Boolean("false"),        //??
        0 ?? "fallback",         //idk again
        "10" === 10 ,            //???
        "  hi  ".trim(),         //hi

        7 + 3 + "1",             //11 ***
        typeof null,             //idk
        Boolean("0"),           
        "" || "empty",           //false since technically, "empty" isn't empty
        Number("12abc"),         
        "cat".includes("a"),     //true
    ];
}
console.log(testing());

// i was surprised by the concatenation of the numbers (those marked with "***"). i thought it would force
// math or something