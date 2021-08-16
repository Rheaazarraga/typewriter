const sentence = "hello my name is Rhea and I'm a student at Lighthouse Labs";
let counter = 50;
for (const char of sentence) {
  i = 0;
  counter += 50;
  setTimeout(() => {
    process.stdout.write((char));
    i++;
    if (i === sentence.length) {
      console.log("\n");
    }
  },  1000 + counter);
};