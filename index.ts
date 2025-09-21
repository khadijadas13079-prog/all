// index.ts

/**
 * Greet function
 * @param name Name to greet
 */
const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
};

// Execute
greet("World");

// Export for module usage
export { greet };
