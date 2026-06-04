# Ink Spire

- Frontend: [EduHunt](https://tutorlink-client.vercel.app/)
- Backend: [EduHunt](https://tutorlink-server-pi.vercel.app/api/v1)

## Project Overview
EduHunt is a full-stack web platform that connects students and tutors. Students can create posts to find tutors or apply to tutor listings, while tutors can do the same to find students. The platform features role-based authentication, a user-friendly UI/UX, and secure payment integration.

---
### Public Routes

- **Home Page**: Overview of the platform.
- **Student Posts page**: Show all student posts. 
- **Tutor Posts page**: Show all Tutor posts. 
- **Blog page**:  Show all blogs.
- **About Page**: Information about the EduHunt and mission.
- **Faq page**: Some question and answer page.

### Private Routes
- **Student Dashboard**: Manage posts, blogs, view tutor application and oversee platform activities.
- **Tutor Dashboard**: Manage posts, blogs, view student application and oversee platform activities.
---

## Getting Started
### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Hm-masum/EduHunt
   ```
2. Navigate to the project folder:
   ```sh
   cd eduHunt
   ```
3. Navigate to the Frontend folder:
   ```sh
   cd eduHunt-client
   ```
4. install dependencies:
   ```sh
   npm install 
   ```
5. Run code:
   ```sh
   npm run dev 
   ```
6. Navigate to the Backend folder:
   ```sh
   cd eduHunt-server
   ```
7. install dependencies:
   ```sh
   npm install 
   ```
8. Run code:
   ```sh
   npm run start:dev 
   ```

### Environment Variables
Create a  `.env` file in the root directory of tutorlink-server folder and add the following:
```
PORT=5000
DATABASE_URL= your database url
BCRYPT_SALT_ROUNDS = 12
JWT_ACCESS_SECRET= jwt access secret
JWT_REFRESH_SECRET= jwt refresh secret
JWT_ACCESS_EXPIRES_IN= 5d
JWT_REFRESH_EXPIRES_IN= 365d

SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL= http://localhost:3000/order-verify
```
Create a  `.env` file in the root directory of tutorlink-client folder and add the following:
```
NEXT_PUBLIC_BASE_API = http://localhost:5000/api/v1
```
---
## User Credentials
```
Tutor gmail: tutor1@gmail.com
Tutor password: 12345678

Student gmail: student1@gmail.com
Student password: 12345678
```
---

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS, Shadcn UI
- **Backend:** Express.js,Node.js, Mongoose
- **Authentication:** JWT, bcrypt.js
- **Payment Gateway:** SurjoPay
