/**
 * Main application file
 */

const main = () => {
    console.log("Hello, World!");
};

// Export for testing
module.exports = { main };

// Execute if run directly
if (require.main === module) {
    main();
}
