function verify(x) {
  if (x == "") {
    alert("Please fill both the fields");
    return false;
  } else return true;
}

function setNewValue(op) {
  console.log(op);
  document.querySelector(".op").innerHTML = op;
}

// ---------- Assignment 2

let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");

document.querySelector(".add").addEventListener("click", () => {
  if (verify(inp1.value) && verify(inp2.value)) {
    let op = Number(inp1.value) + Number(inp2.value);
    setNewValue(op);
  }
});

document.querySelector(".sub").addEventListener("click", () => {
  if (verify(inp1.value) && verify(inp2.value)) {
    let op = Number(inp1.value) - Number(inp2.value);
    setNewValue(op);
  }
});

// ---------- Assignment 3a

let counter = document.querySelector(".counter");

document.querySelector(".open").addEventListener("click", () => {
  let arr = [];
  for (let i = 0; i < Number(counter.value); i++) {
    arr.push(window.open("https://www.bing.com"));
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    setTimeout(() => {
      arr[i].close();
    }, 2000);
  }
});

document.querySelector(".stop").addEventListener("click", () => {});

// ---------- Assignment 3b

var openInt, closeInt;
document.querySelector(".open2").addEventListener("click", () => {
  let arr = [];
  openInt = setInterval(() => {
    arr.push(window.open("https://www.bing.com"));
  }, 1500);
  closeInt = setInterval(() => {
    arr[0].close();
    arr.shift();
  }, 2500);
});

document.querySelector(".stop2").addEventListener("click", () => {
  clearInterval(openInt);
  clearInterval(closeInt);
});

// ---------- Assignment 4

function valid(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("Invalid email address!");
  return false;
}

let username = document.querySelector(".name");
let email = document.querySelector(".email");
let body = document.querySelector(".body");

document.querySelector(".submit").addEventListener("click", () => {
  if (verify(username.value) && verify(email.value)) {
    if (valid(email.value)) {
      sessionStorage.setItem(Date(), username.value + "," + email.value);
    }
  }
});

document.querySelector(".show").addEventListener("click", () => {
  let rows = "";
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const val = sessionStorage.getItem(key);
    const [iname, iemail] = val.split(",");
    let row =
      "<tr><td>" +
      parseInt(i + 1) +
      "</td><td>" +
      iname +
      "</td><td>" +
      iemail +
      "</td><td>" +
      key +
      "</td></tr>";
    rows += row;
  }
  body.innerHTML = rows;
});
