# Assured Farming Connect 🌾

A full-stack smart agriculture platform that connects **Farmers** and **Buyers** for crop listing, negotiation, contracts, and payments.

## Project Overview

Assured Farming Connect helps farmers list crops and allows buyers to browse, negotiate prices, and complete payments through a simulated payment system.

The platform is designed to reduce middlemen dependency and provide direct communication between farmers and buyers.

---

## Features

### Farmer Module
- Farmer Login / Registration
- Add Crop
- Edit Crop
- Delete Crop
- View My Crops
- View Buyer Offers
- Accept / Reject Negotiations
- Dashboard Statistics

### Buyer Module
- Buyer Login / Registration
- Browse Available Crops
- Search Crops
- Negotiate Crop Prices
- View Contracts
- Payment System (Simulated)
- Track Accepted / Rejected Deals

### Payment Module
- Buyer can pay for **accepted deals only**
- Simulated payment flow
- Payment status updates in MongoDB
- Status changes from:
  - `Unpaid`
  - `Paid`

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- React Icons
- React Hot Toast
- Recharts

### Backend
- Flask
- Flask REST APIs
- Python

### Database
- MongoDB Atlas

---

## Project Flow

### Farmer Flow
1. Farmer Login
2. Add Crop
3. Buyer sends offer
4. Farmer accepts/rejects offer
5. Deal status updates

### Buyer Flow
1. Buyer Login
2. Browse Crops
3. Search Crop
4. Send Negotiation Offer
5. Farmer Accepts Deal
6. Buyer Makes Payment
7. Payment Status = Paid

---

## Database Collections

### users
Stores farmer and buyer information.

Fields:
- name
- email
- password
- role

### crops
Stores crop details.

Fields:
- crop_name
- price
- quantity
- harvest_date
- location
- description
- farmer_name
- farmer_id

### negotiations
Stores buyer-farmer negotiations.

Fields:
- crop_name
- buyer_name
- buyer_email
- farmer_name
- offer_price
- quantity
- message
- status
- payment_status

---

## Installation Guide

### Clone Project

```bash
git clone <repository-link>
```

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Project Structure

```text
frontend/
│── src/
│   ├── pages/
│   ├── services/
│   ├── components/
│
backend/
│── controllers/
│── routes/
│── models/
│── config/
│── app.py
```

---

## Future Enhancements

- Cloudinary Image Upload
- Real Payment Gateway (Razorpay / Stripe)
- Notifications System
- Advanced Analytics Dashboard
- Invoice Generation
- AI Crop Recommendations

---

## Conclusion

Assured Farming Connect is a full-stack agriculture marketplace platform built using React, Flask, and MongoDB. It provides a direct connection between farmers and buyers through crop listing, negotiation, contracts, and payments.

This project demonstrates practical implementation of:
- Full Stack Development
- REST APIs
- MongoDB Integration
- Authentication
- CRUD Operations
- Payment Simulation
- Real-world Marketplace Workflow

---

## Developed By

**Abhay Jhumhare**
**Devansh Lodhi**
**Darshan Ostawal**
**Subham Thakur**
