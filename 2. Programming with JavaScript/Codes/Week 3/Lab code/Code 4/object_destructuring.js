// Object representing a review
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure properties from the review object
const { author, title, timePosted } = review;

// Print the review details
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
