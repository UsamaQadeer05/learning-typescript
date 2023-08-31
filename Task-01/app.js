"use strict";
// Task 1: Modeling Online Store Entities
// You're building a TypeScript application for an online store. Define the following types and interfaces:
// Define an interface Product with properties like id, name, price, and category.
// Create a type Cart that represents an array of Product objects.
// Define an interface Customer with properties like id, name, and email.
// Create a type Order that represents an object containing a Customer and a Cart.
// Implement a function that calculates the total price of products in the cart.
const CalculateTotalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.price, 0);
};
const customer = {
    id: 1,
    name: "Usman Ashraf",
    email: "usmanashraf@gmail.com",
};
const products = [
    {
        id: 1,
        name: "Sunflower Oil",
        price: 4000,
        category: "Food & Beverages"
    },
    {
        id: 2,
        name: "Soybean",
        price: 8000,
        category: "Food & Beverages"
    },
    {
        id: 3,
        name: "Shapers",
        price: 200,
        category: "Fitness"
    },
];
const order = {
    customer: customer,
    cart: products,
};
console.log(CalculateTotalPrice(order.cart));
function FindMostLikedPost(profiles) {
    let mostLikedPost = null;
    let maxLikes = 0;
    for (const profile of profiles) {
        for (const post of profile.posts) {
            if (post.likes.length > maxLikes) {
                maxLikes = post.likes.length;
                mostLikedPost = post;
            }
        }
    }
    return mostLikedPost;
}
// Example usage
const user1 = {
    id: 1,
    userName: "user1"
};
const user2 = {
    id: 2,
    userName: "user2"
};
const post1 = {
    id: 1,
    content: "Awesome post!",
    likes: [{ user: user1, timeStamp: new Date() }],
    comments: [],
};
const post2 = {
    id: 2,
    content: "Another great post!",
    likes: [
        {
            user: user1,
            timeStamp: new Date()
        },
        {
            user: user2,
            timeStamp: new Date()
        }
    ],
    comments: [],
};
const profile1 = {
    id: 1,
    userName: "profile1",
    bio: "Hello world",
    posts: [post1]
};
const profile2 = {
    id: 2,
    userName: "profile2",
    bio: "Hi there",
    posts: [post2]
};
const profiles = [profile1, profile2];
const mostLikedPost = FindMostLikedPost(profiles);
if (mostLikedPost) {
    console.log(`Most liked post: "${mostLikedPost.content}" by ${mostLikedPost.likes[0].user.userName}`);
}
else {
    console.log("No posts found.");
}
