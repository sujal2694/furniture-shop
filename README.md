# CasaLuxe - Furniture shop
A full-stack E-commerce furniture store with a customer facing storefront, backend API, and admin dashboard.

## Live Demo
| Application | URL |
|----------|----------|
| Store   | https://casa-luxe.vercel.app/ |
| Admin Panel   | https://casa-luxe-backend.vercel.app/  |
| API | https://casa-luxe-admin.vercel.app/ |

## Features
### Customer Store
- Browse furniture catalog
- Product search and filtering
- Shopping cart functionality
- User authentication
- Order placement and tracking

### Admin Dashboard
- Product management (CRUD opertions)
- Order management
- User management
- Sales analysis

### Backend API
- RESTful API architecture
- User authentication & authorization
- Database integration
- Image upload handling

## Tech Stack
| Layer | Technologies |
|-------|--------------|
| Frontend | React, CSS/Tailwind |
| Admin | React, TailwindCSS|
| Backend | Node.js, Express.js |
| Databse | MongoDB |
| Deployment | Render |

## Getting Started
### Prerequires
- Node.js (v16+)
- npm
- MongoDB connection string

### Installation
1. Clone the repository
   
   ```
   git clone [github.com] (https://github.com/sujal2694/furniture-shop.git)
   cd furniture-shop

3. Backend Setup
   
   ```
   cd backend
   npm install

#### create a .env file:

  ```js
  PORT=4000
  MONGODB_URL=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

#### Start the server:

  ```js
  npm start
  ```

3. Frontend Setup
   
   ```js
   cd client
   npm install
   npm run dev
   ```

5. Admin Panel Setup
   
   ```js
   cd admin
   npm install
   npm run dev
   ```

## Project Structure

```txt
furniture-shop/
├── frontend/        
├── admin/           
├── backend/         
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── README.md
```

## API Endpoints

| Mehod | Endpoint | Description |
|-------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/users/register | Register user |
| POST | /api/users/login | User login |
| POST | /api/orders | Create order |
| GET | /api/orders/:id | Get order detailes |

## Contributing
1. Fork the repository
2. Create a feature branch (git checkout -b feature/new-feature)
3. Commit changes (git commit -m 'Add new feature')
4. Push to branch (git push origin feature/new-feature)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, please open an issue on GitHub.
