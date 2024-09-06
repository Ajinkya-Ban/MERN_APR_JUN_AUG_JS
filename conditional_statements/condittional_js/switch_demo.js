function showMessage(){
    var day = document.getElementById("day").value;
    let message;

    switch(day){
        case "monday":
            message = "It's Monday";
            break;
        case "tuesday":
            message = "It's Tuesday";
            break;
        case "wednesday":
            message = "It's Wednesday";
            break;
        case "thursday":
            message = "It's Thursday";
            break;
        case "friday":
            message = "It's Friday";
            break;
        case "saturday":
            message = "It's Saturday";
            break;
        case "sunday":
            message = "It's Sunday";
            break;
        default:
            message = "Invalid day";
    }
    document.getElementById("result").innerHTML = message;

}