function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Alice", "Bob"];
console.log(greeter(user)); // This will now work correctly
console.log(greeter("Alice")); // This will also work correctly