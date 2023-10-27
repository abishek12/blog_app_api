import Express from 'express';

const app = Express.Router();

app.get("/", (req,res) => res.status(200).json({
    status: 200,
    mesage: "Welcome!!!"
}))

import userRoutes from '../services/User/routes/UserRoutes.js';
app.use('/user', userRoutes);

import authRoutes from '../services/Authentication/routes/auth_routes.js';
app.use('/auth', authRoutes);

import categoryRoutes from '../services/Category/routes.js';
app.use('/category', categoryRoutes);

import postRoutes from '../services/Post/routes.js';
app.use('/post', postRoutes);

import likeRoutes from '../services/Like/LikeRoutes.js';
app.use('/like', likeRoutes);

export default { app };