function showFeedBack() {

    var feedback = document.getElementById("name").value.toUpperCase();
    var message = "";

    switch (feedback) {

        case "A":
            message = "Excellent work ! keep it up !";
            break;
        case "B":
            message = "Good work ! keep it up !";
            break;
        case "C":
            message = "You can do better !";
            break;
        case "D":
            message = "You need to work hard !";
            break;
        case "E":
            message = "You need to work very hard !";
            break;
        default:  
            message = "Invalid input !";

    }

    document.getElementById("feedback").innerHTML = message;

}