import express, { response } from 'express'
import session from 'express-session';

const app = express()
const port = 5000;

// setup and use session middleware
app.use(
    session({
        secret: "secret phrase",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

// Enable support for URL-encoded request bodies (form posts)
app.use(express.urlencoded({extended:true}))



// Setup and use the EJS view engine
app.set("view engine", "ejs")


// setup and use static files middleware
app.use(express.static("static"))

// Import and use controllers
import productController from './controllers/product.js'
app.use(productController)

import orderController from './controllers/order.js'
app.use(orderController)

import staffController from './controllers/staff.js'
app.use(staffController)

import homeController from './controllers/home.js'
app.use(homeController)

import productFeatureController from './controllers/products_features.js'
app.use(productFeatureController)

import changelogController from './controllers/changelog.js';
app.use(changelogController)

// setup 404 and root page redirects
app.get("*",(request,response)=>{
    response.status(400).render("status.ejs",{
        status:"404 Not Found"
    })
})

app.listen(port,()=>{
    console.log(`Express Server started on local host on http://localhost:${port}`);
})
