
import bcrypt from 'bcrypt';
import { userModel } from './models/userModel.js';
import { productModel } from './models/productModel.js';
import mongoose from 'mongoose';
import 'dotenv/config';


const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connected');

        // Clear existing data
        await userModel.deleteMany({});
        await productModel.deleteMany({});

        // Create a user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);
        const user = new userModel({
            name: 'Test User',
            email: 'test@example.com',
            password: hashedPassword,
        });
        const savedUser = await user.save();
        console.log('User created:', savedUser);

        // Create a product
        const product = new productModel({
            name: 'Test Product',
            price: 100,
            description: 'A test product',
            image: 'test-image.jpg',
            category: 'sofa',
            discount: "0"
        });
        const savedProduct = await product.save();
        console.log('Product created:', savedProduct);

        await mongoose.disconnect();
        console.log('DB disconnected');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDatabase();
