import express from 'express'
import mongoose from 'mongoose'



const app = express()

// BodyParser Middleware
app.use(express.json());
