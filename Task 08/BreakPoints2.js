function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log("Program started");

  let a = 10;        // 🔴 breakpoint here
  await delay(2000);

  let b = 20;        // 🔴 breakpoint here
  await delay(2000);

  let sum = a + b;   // 🔴 breakpoint here
  console.log("Sum =", sum);
}

main();
