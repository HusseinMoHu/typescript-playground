const button = document.querySelector("button")!;

const clicked = {
  message: "You are welcome",
};

function clickHandle(message: string) {
  console.log(`Clicked!, ${message}`);
}

button.addEventListener("click", clickHandle.bind(null, "Hey!"));
