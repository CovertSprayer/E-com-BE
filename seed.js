require("dotenv").config();
const Product = require("./app/models/Product.model");
const connectToDatabase = require("./app/middlewares/db");

connectToDatabase();

const dummy_data = [
  {
    name: "Men's Classic Cotton T-Shirt",
    price: 19.99,
    imageSrc: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQiaz-vpPtRl3NzffULzbwQpKUoI30uzHLetbD7PB55Lhn8kEbz6K-TDWEEdgzfjanEpV6QQY0h2Px03bnC0PchNuzbFt1imdXb2mfW1iVl9M1W0I_9edyG",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSab4m8BCiSs5lJ5Zk3kJGbrksLQkzwBiY4MlpCDvkT4UXdaLk9Hfuz8ucibgI0bknz10j25heyh2FZNbVJfZ4H-Y5auDRkLcGQe-9he7bD4q3isPa7pMzT",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTppCL0dDhgbPXSGISpFukJVXCqI3q6Nsv-oIvX0qagFXhdL7BHvoMRRe6w19ezbY-7HI_u1QoU6Yqsh4y0KWBqjO3iyGLk95-bvmi50wxdDz8IgGCALg",
    ],
    description:
      "A timeless wardrobe essential, our men's classic cotton t-shirt offers comfort and style in every stitch. Made from 100% premium cotton, it's perfect for casual wear or layering under jackets. Available in black, white, blue, and red.",
    colors: ["black", "white", "blue", "red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Women's Running Shoes",
    price: 49.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfEgMNW4yk0ew4oUiy5psgbDzZhvQwCx0y1obS80PX5tLhQFDz12mdVBTaEfVpUZI8OjLMG2F12yBJJxw2UHYG_bQ3El-wjCw-OCAueiJ1Gr7etVmDsqy5KD0&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfEgMNW4yk0ew4oUiy5psgbDzZhvQwCx0y1obS80PX5tLhQFDz12mdVBTaEfVpUZI8OjLMG2F12yBJJxw2UHYG_bQ3El-wjCw-OCAueiJ1Gr7etVmDsqy5KD0&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfEgMNW4yk0ew4oUiy5psgbDzZhvQwCx0y1obS80PX5tLhQFDz12mdVBTaEfVpUZI8OjLMG2F12yBJJxw2UHYG_bQ3El-wjCw-OCAueiJ1Gr7etVmDsqy5KD0&usqp=CAE",
    ],
    description:
      "Designed for performance and comfort, our women's running shoes are crafted with breathable materials and cushioned soles to support your every stride. Ideal for running, training, or everyday wear. Available in black, blue, and gray.",
    colors: ["black", "blue", "gray"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    name: "Wireless Noise-Canceling Headphones",
    price: 79.99,
    imageSrc: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwMP5BlpGGoDv1zvg62b93NPjEYBGKs_CW0gjiCwnPtnIZK-z6Od6lOYQYf3uygvIUZftsjrWvdYLZw48IXTHAiM7GZUQTJWokJ9hPOYi9iABB2KVAvJdl&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwMP5BlpGGoDv1zvg62b93NPjEYBGKs_CW0gjiCwnPtnIZK-z6Od6lOYQYf3uygvIUZftsjrWvdYLZw48IXTHAiM7GZUQTJWokJ9hPOYi9iABB2KVAvJdl&usqp=CAE",
    ],
    description:
      "Immerse yourself in music with our wireless noise-canceling headphones. Featuring advanced Bluetooth technology and superior noise-canceling capabilities, these headphones deliver crisp, clear sound without distractions. Available in black, white, and red.",
    colors: ["black", "white", "red"],
    sizes: null,
  },
  {
    name: "Smartwatch with Health Monitoring",
    price: 129.99,
    imageSrc: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSt6V3fznGAJWR8viEQ_-ihlv9e88fWb8uJUJpTBjh3nHpWY8SJ6-NobEkt6fuE-GA3dB8IBoIDx-AEal1QFAQqpLjp_tXd_v1iDzzmXEM-FJ9p57-Tg4BD&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSt6V3fznGAJWR8viEQ_-ihlv9e88fWb8uJUJpTBjh3nHpWY8SJ6-NobEkt6fuE-GA3dB8IBoIDx-AEal1QFAQqpLjp_tXd_v1iDzzmXEM-FJ9p57-Tg4BD&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSt6V3fznGAJWR8viEQ_-ihlv9e88fWb8uJUJpTBjh3nHpWY8SJ6-NobEkt6fuE-GA3dB8IBoIDx-AEal1QFAQqpLjp_tXd_v1iDzzmXEM-FJ9p57-Tg4BD&usqp=CAE",
    ],
    description:
      "Stay connected and track your fitness goals with our smartwatch. Equipped with health monitoring features such as heart rate tracking, sleep analysis, and GPS navigation, it's your perfect companion for an active lifestyle. Available in black, silver, and rose gold.",
    colors: ["black", "silver", "rose gold"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    name: "Genuine Leather Wallet",
    price: 39.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQE9XnVsOLlExuGCbzXDoe_dEo1GqRpJFXZhfFrjt539CrcjSC3-ET1vfimt5YB42KoGdIvyCZQRWbVPadlXe-wJQ46g9AW0A&usqp=CAE",
      "",
      "",
    ],
    description:
      "Organize your essentials in style with our genuine leather wallet. Handcrafted from premium leather, it features multiple card slots, a coin pocket, and a bill compartment. Sleek and functional, it's available in classic brown, black, and tan.",
    colors: ["brown", "black", "tan"],
    sizes: null,
  },
  {
    name: "Women's Yoga Leggings",
    price: 29.99,
    imageSrc: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTo-fDXaA4G4b-dartsDsfD7GydsXERKlXA2fvAu9ECIM5pc95p9fpiBW37bUp8YORIBGDp-f0Y_ayqoJDb1EZP7ZdJhTLUc5YZYT-WAcuWG0uJ5FAAAHz4UQ&usqp=CAE",
      "",
    ],
    description:
      "Achieve comfort and flexibility with our women's yoga leggings. Designed for active movement, these leggings are made from breathable fabric that wicks away moisture. Perfect for yoga, running, or lounging. Available in black, gray, and navy.",
    colors: ["black", "gray", "navy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    imageSrc: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7SCM0pSTvNcArUWgVuhcvtgywfvD45sCrl4rYpNKRSBXG9gQh-93Yx5vevHDcJXZdoJ71pvknNk-nDZRsleIkmR90ehbv-FvwtIkCGYTN2Z4fDZC6kW-n1Q&usqp=CAE",
      "",
      "",
    ],
    description:
      "Enjoy powerful sound wherever you go with our portable Bluetooth speaker. With wireless connectivity and long battery life, it's perfect for outdoor gatherings or indoor use. Available in black, blue, and red.",
    colors: ["black", "blue", "red"],
    sizes: null,
  },
  {
    name: "Men's Slim Fit Jeans",
    price: 39.99,
    imageSrc: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQU8AX96D1hOiztGqkG1ETyaJYlewQzoJAJcQN9NrldVZUZO62NbFth2tvOCRopTG64aLsz2EH9CsafxVzEM54OOuzlJvY1B381sBTTXPQ&usqp=CAE",
      "",
    ],
    description:
      "Look sharp and feel comfortable in our men's slim fit jeans. Made from durable denim with a hint of stretch, these jeans offer a modern fit that complements any casual outfit. Available in dark wash, medium wash, and black.",
    colors: ["dark wash", "medium wash", "black"],
    sizes: ["30x32", "32x32", "34x32", "36x32"],
  },
  {
    name: "Travel Backpack",
    price: 79.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwDzEwZgNN68KtsjzgtLtElfaMYJQUxJtISp7V8foaTMpUDXlkF4K5tFO1s8JnezbYgfQlTLgEosZBCFqBPwyCDVNL7QUP12QT0vM2-CMm_ni3vunPt6PL8w&usqp=CAE",
      "",
      "",
    ],
    description:
      "Explore the world with our versatile travel backpack. Featuring multiple compartments, padded straps, and durable materials, it's designed for comfort and functionality on-the-go. Available in black, gray, and olive green.",
    colors: ["black", "gray", "olive green"],
    sizes: null,
  },
  {
    name: "Professional Hair Dryer",
    price: 69.99,
    imageSrc: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYFIr6kYZX0qUm6feKmNmbUN2xAtOZ4X4FO1sjno5IE7nS16j5XLN1YIUGxRD8ZVjfMlQpIMr_iIMoOyfkTeCzJUHBglxnUEV_hg5876vNGg95vfDrFpo7&usqp=CAE",
      "",
    ],
    description:
      "Achieve salon-quality results at home with our professional hair dryer. Featuring advanced heat settings and a lightweight design, it's perfect for fast drying and styling. Available in black and rose gold.",
    colors: ["black", "rose gold"],
    sizes: null,
  },
  {
    name: "Digital Camera Kit",
    price: 299.99,
    imageSrc: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMMnfK0riOXAw-AVkjr6I7z_HCJxDOxYA5fWugdZKRoTDnS-k3lhERJyBKPBjQcAj5BBenhmz6VQx8Sc_SVZjOMWMizJM-cHLcTznxKYt8jrV3CAukjnmbhw&usqp=CAE",
      "",
      "",
    ],
    description:
      "Capture life's moments with clarity and precision using our digital camera kit. Includes camera body, lenses, and accessories for versatile photography. Ideal for beginners and enthusiasts alike. Available in black.",
    colors: ["black"],
    sizes: null,
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTj0icXnd3LRm1T0uXjTh4qWpZ0uq2dN3WwCHEMbKzTZID8C86GNON60xuvs-OTeR39CKtslh8nOfdbtlsnBS-sfPDDnUwDzLtDfwrN8W0miDoJRBPuYdM70A&usqp=CAE",
      "",
    ],
    description:
      "Stay hydrated on-the-go with our stainless steel water bottle. Designed for durability and insulation, it keeps drinks cold for hours. Perfect for workouts, travel, or everyday use. Available in silver and matte black.",
    colors: ["silver", "matte black"],
    sizes: ["500ml", "750ml", "1L"],
  },
  {
    name: "Wireless Gaming Mouse",
    price: 49.99,
    imageSrc: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFQn1hJ8mSxDOikY2GTlCUFXT7VDAho1ynnIv8evHuN3kSlEUP-jTADoHSIq9NbrNGvkmQox1Qvnzy5g8y_ZdY_vH7-2jUAiLRYzfzs-Kr0BLXtNcFm13MoA&usqp=CAE",
      "",
    ],
    description:
      "Enhance your gaming experience with our wireless gaming mouse. Featuring customizable buttons, ergonomic design, and high precision tracking, it delivers optimal performance for gaming enthusiasts. Available in black and RGB lighting.",
    colors: ["black", "RGB"],
    sizes: null,
  },
  {
    name: "Fitness Tracker Band",
    price: 39.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQenAdQe35kyih0Xb5_-iGkrBc6e82Zn5A39_4BrFn0ac1brFMgi-KBKWuAs_oQL7Umqmgh_2vLpJVRqn1qctdM0CY68gkpserN4WE-70QH9AAGu915Hj8nVw&usqp=CAE",
      "",
      "",
    ],
    description:
      "Monitor your fitness goals with our sleek fitness tracker band. Track steps, calories burned, and sleep patterns with ease. Syncs with your smartphone for real-time data. Available in black, blue, and purple.",
    colors: ["black", "blue", "purple"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    name: "Women's Crossbody Bag",
    price: 34.99,
    imageSrc: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5SmaqZcgdceoTG68V-EXDfwTHnD7xOl12o0yGdHrom6UseylMrS3nvDnV6LtpFfbKbvDEg5KtlTuiBXYJ1a1c7zo74DDSAwmPKSF18lpVTACxSL7dYcrrcNU&usqp=CAE",
      "",
      "",
    ],
    description:
      "Carry your essentials in style with our women's crossbody bag. Compact yet spacious, it features multiple compartments and an adjustable strap for versatility. Available in black, brown, and navy.",
    colors: ["black", "brown", "navy"],
    sizes: null,
  },
  {
    name: "Chef's Knife Set",
    price: 89.99,
    imageSrc: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2k8KvG2tIvWwrXMwXuJLOJ9DVxwrVVwXEEdbToA3ZBTCJLhFR4BAHqkyKqdDA0okKh3arzrHPt1ZOZnOGPyWBYFAdV7qNNdCXJcnzTkwuvD2M9wKSRUZiuw&usqp=CAE",
      "",
    ],
    description:
      "Prepare meals with precision using our chef's knife set. Includes high-quality knives for cutting, slicing, and dicing. Ergonomic handles for comfort and control. Available in stainless steel.",
    colors: ["stainless steel"],
    sizes: null,
  },
//   {
//     name: "Portable Power Bank",
//     price: 29.99,
//     imageSrc: ["power-bank-front.jpg", "power-bank-side.jpg"],
//     description:
//       "Stay charged wherever you go with our portable power bank. Compact and lightweight, it provides multiple charges for smartphones and tablets. Perfect for travel or emergencies. Available in black, blue, and white.",
//     colors: ["black", "blue", "white"],
//     sizes: null,
//   },
//   {
//     name: "Classic Aviator Sunglasses",
//     price: 19.99,
//     imageSrc: ["sunglasses-front.jpg", "sunglasses-side.jpg"],
//     description:
//       "Shield your eyes in style with our classic aviator sunglasses. Featuring UV protection and durable frames, they're perfect for sunny days and outdoor activities. Available in black, silver, and gold.",
//     colors: ["black", "silver", "gold"],
//     sizes: null,
//   },
//   {
//     name: "Elegant Pearl Necklace",
//     price: 149.99,
//     imageSrc: ["necklace-front.jpg", "necklace-detail.jpg"],
//     description:
//       "Add a touch of elegance to any outfit with our pearl necklace. Handcrafted with lustrous pearls and a timeless design, it's a sophisticated accessory for special occasions. Available in white and silver.",
//     colors: ["white", "silver"],
//     sizes: null,
//   },
//   {
//     name: "Men's Formal Dress Shirt",
//     price: 49.99,
//     imageSrc: ["dress-shirt-front.jpg", "dress-shirt-back.jpg"],
//     description:
//       "Look sharp and polished in our men's formal dress shirt. Made from premium cotton with a classic fit, it's perfect for business meetings or formal events. Available in white, blue, and gray.",
//     colors: ["white", "blue", "gray"],
//     sizes: ["S", "M", "L", "XL"],
//   },
];

async function seedDB() {
  await Product.deleteMany();
  await Product.create(dummy_data);
  console.log("DB seeded successfully!");
  process.exit(1);
}

seedDB();
