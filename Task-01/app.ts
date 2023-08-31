// Task 1: Modeling Online Store Entities
// You're building a TypeScript application for an online store. Define the following types and interfaces:
// Define an interface Product with properties like id, name, price, and category.
// Create a type Cart that represents an array of Product objects.
// Define an interface Customer with properties like id, name, and email.
// Create a type Order that represents an object containing a Customer and a Cart.
// Implement a function that calculates the total price of products in the cart.

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

type Cart = Product[];

interface Customer {
    id: number;
    name: string;
    email: string;
}

type Order = {
    customer: Customer;
    cart: Cart;
}

const CalculateTotalPrice = (cart: Cart): number => {
    return cart.reduce((total, product) => total + product.price, 0);
}

const customer: Customer = {
    id: 1,
    name: "Usman Ashraf",
    email: "usmanashraf@gmail.com",
}

const products: Cart = [
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

const order: Order = {
    customer: customer,
    cart: products,
}

console.log(CalculateTotalPrice(order.cart));



// Task 2: Building a Blog System
// Imagine you're developing a TypeScript application for a blogging platform. Create the following types and interfaces:
// Define an interface Author with properties like id, name, and bio.
// Create a type Comment that represents an object with author (of type Author), content, and timestamp.
// Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.
// Implement a function that sorts posts based on their number of comments.
// interface Author {
//     id: number;
//     name: string;
//     bio: string;
// }

// type _Comment = {
//     author: Author;
//     content: string;
//     timeStamp: Date;
// }

// interface Post {
//     id: number;
//     title: string;
//     content: string;
//     author: Author;
//     comment: _Comment[];
// }

// const authors: Author[] =
//     [
//         {
//             id: 1,
//             name: "Author A",
//             bio: "Bio of Author A"
//         },
//         {
//             id: 2,
//             name: "Author B",
//             bio: "Bio of Author B"
//         },
//     ];

// const comments: _Comment[] =
//     [
//         {
//             author: authors[0],
//             content: "Comment 1",
//             timeStamp: new Date()
//         },
//         {
//             author: authors[1],
//             content: "Comment 2",
//             timeStamp: new Date()
//         },
//     ];

// const posts: Post[] =
//     [
//         {
//             id: 1,
//             title: "Post A",
//             content: "Content of Post A",
//             author: authors[0],
//             comment: [comments[0]]
//         },
//         {
//             id: 2,
//             title: "Post B",
//             content: "Content of Post B",
//             author: authors[1],
//             comment: [comments[1]]
//         },
//         {
//             id: 3,
//             title: "Post C",
//             content: "Content of Post C",
//             author: authors[0],
//             comment: []
//         },
//     ];

// const SortedPosts = (posts: Post[]): Post[] => {
//     return posts
//         .slice()
//         .sort((a, b) => a.comment.length - b.comment.length);
// }

// console.log(SortedPosts(posts));



// Task 3: Social Media Platform
// Develop a TypeScript application for a social media platform. Define the following types and interfaces:
// Define an interface Profile with properties like id, username, bio, and an array of Posts.
// Create a type Like that represents an object with user (of type User) and timestamp.
// Define an interface Comment with properties like id, user (of type User), content, and timestamp.
// Implement a function that finds the most liked post and the user who posted it

interface Profile {
    id: number;
    userName: string;
    bio: string;
    posts: Post[];
}

interface Post {
    id: number;
    content: string;
    likes: Like[];
    comments: Comment[];
}

type Like = {
    user: User;
    timeStamp: Date;
}

interface Comment {
    id: number;
    user: User;
    content: string;
    timeStamp: Date;
}

type User = {
    id: number;
    userName: string;
}

function FindMostLikedPost(profiles: Profile[]): Post | null {
    let mostLikedPost: Post | null = null;
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

const user1: User = {
    id: 1,
    userName: "Usman Ashraf"
}

const user2: User = {
    id: 2,
    userName: "Zia Khan"
}

const post1: Post = {
    id: 1,
    content: "Welcome to Web3.0!",
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
}

const post2: Post = {
    id: 2,
    content: "Today is holiday!",
    likes: [
        {
            user: user1,
            timeStamp: new Date()
        }
    ],
    comments: [],
};

const profile1: Profile = {
    id: 1,
    userName: "profile1",
    bio: "Hello world",
    posts: [post1]
};

const profile2: Profile = {
    id: 2,
    userName: "profile2",
    bio: "Hi there",
    posts: [post2]
};

const profiles: Profile[] = [profile1, profile2];

const mostLikedPost = FindMostLikedPost(profiles);

if (mostLikedPost) {
    console.log(`Most liked post: "${mostLikedPost.content}" by ${mostLikedPost.likes[0].user.userName}`);
} else {
    console.log("No posts found.");
}