function onLoad_CursorFocus() {
  document.getElementById("n1").focus();
  changeBorderColorOnFocus();
}

function clearAllFields() {
  var data = document.querySelectorAll("input");
  data.forEach((ele) => {
    ele.value = "";
    document.getElementById("n1").focus();
  });
  document.getElementById("res").value = 0;
  var data1 = document.querySelectorAll("select");
  data1.forEach((ele) => {
    ele.value = "select";
  });
}

document.getElementById("clear").addEventListener("click", () => {
  clearAllFields();
  document.getElementById("n1").style.borderColor = "red";
  document.getElementById("n2").style.borderColor = "red";
  document.getElementById("op").style.outline = "none";
  document.getElementById("op").style.border = "2px solid red";
});

function checkEmptyFields() {
  if (document.getElementById("n1").value == "") {
    alert("Please enter first number");
    document.getElementById("n1").focus();
    document.getElementById("n1").style.borderColor = "red";
  } else if (document.getElementById("n2").value == "") {
    alert("Please enter second number");
    document.getElementById("n2").focus();
    document.getElementById("n2").style.borderColor = "red";
  } else if (document.getElementById("op").value == "select") {
    alert("Please select atleast one operation");
    document.getElementById("op").focus();
    document.getElementById("op").style.outline = "none";
    document.getElementById("op").style.border = "2px solid red";
  }
}
/*the follwing code check the value present in input field. If the input field contains value 0 or empty then the color of the border will get into red otherwise it will remain as black.*/

document.getElementById("n1").addEventListener("input", () => {
  if (
    document.getElementById("n1").value == 0 ||
    document.getElementById("n1") == ""
  ) {
    document.getElementById("n1").style.borderColor = "red";
  } else {
    document.getElementById("n1").style.borderColor = "black";
  }
});

document.getElementById("n2").addEventListener("input", () => {
  if (
    document.getElementById("n2").value == 0 ||
    document.getElementById("n2") == ""
  ) {
    document.getElementById("n2").style.borderColor = "red";
  } else {
    document.getElementById("n2").style.borderColor = "black";
  }
});

document.getElementById("op").addEventListener("change", () => {
  if (document.getElementById("op").value == "select") {
    document.getElementById("op").style.outline = "none";
    document.getElementById("op").style.border = "2px solid red";
  } else {
    document.getElementById("op").style.outline = "none";
    document.getElementById("op").style.border = "2px solid black";
  }
});

function changeBorderColorOnFocus() {
  if (
    document.getElementById("n1").value == 0 ||
    document.getElementById("n1") == ""
  ) {
    document.getElementById("n1").style.borderColor = "red";
  } else if (
    document.getElementById("n2").value == 0 ||
    document.getElementById("n2") == ""
  ) {
    document.getElementById("n1").style.borderColor = "red";
  } else {
    document.getElementById("n1").style.borderColor = "black";
    document.getElementById("n2").style.borderColor = "black";
  }
}

function doTask() {
  checkEmptyFields();
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;
  var op = document.getElementById("op").value;

  switch (op) {
    case "+":
      var result = parseInt(num1) + parseInt(num2);
      document.getElementById("res").value = result;
      break;

    case "-":
      var result = parseInt(num1) - parseInt(num2);
      document.getElementById("res").value = result;
      break;

    case "*":
      var result = parseInt(num1) * parseInt(num2);
      document.getElementById("res").value = result;
      break;

    case "/":
      var result = parseInt(num1) / parseInt(num2);
      document.getElementById("res").value = result;
      break;
    default:
      alert("Please select proper operation");
  }
}

document.onkeydown = function (e) {
  if (e.ctrlKey && e.key == "c") {
    clearAllFields();
  }
};

//the following code use the shortcut key as enter. The asccii value of enter key is 13.
document.onkeydown = function (e) {
  if (e.keyCode == 13) {
    doTask();
  }
};

function disabledButton()
{
    var btnDoTask = document.getElementById('dotask');
    btnDoTask.disabled = true;
}


