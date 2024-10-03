# Health ID Recovery System

## Overview

The Health ID Recovery System is a decentralized application designed to securely manage and recover health IDs using blockchain technology. This system leverages cryptographic techniques to ensure the privacy and integrity of users' health information.

## Features

- **Secure Recovery**: Utilize secret sharing schemes to recover lost health IDs in a decentralized manner.
- **User-Friendly Interface**: A clean and intuitive interface for users to log in and manage their health IDs.
- **Blockchain Technology**: Ensures data integrity and security by storing health ID shares on a blockchain.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript

- **Backend**: 
  - Node.js
  - Express

- **Blockchain**: 
  - Ethereum (using Hardhat)

- **Database**: 
  - In-memory storage (for demonstration purposes)

## Dependencies

### Backend Dependencies

- **Express**: Web framework for Node.js
- **CORS**: Middleware for enabling CORS
- **Body-Parser**: Middleware for parsing incoming request bodies (if not using Express 4.16.0+)

### To install these dependencies, run the following command in your backend project directory:

```bash
npm install express cors body-parser
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** and **npm**: Download and install from [Node.js official website](https://nodejs.org/).
- **Git**: Download and install from [Git official website](https://git-scm.com/).
- A **GitHub account** for repository management.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Health-ID-Recovery.git
   cd Health-ID-Recovery
   ```

2. **Install backend dependencies**:
   ```bash
   npm install

3. **Set up the blockchain environment using Hardhat**:
   ```bash
   npx hardhat compile  
   npx hardhat run scripts/deploy.js --network localhost

4. **Start the Hardhat local blockchain node**:
   ```bash
   npx hardhat node

5. **Start the backend server**:
   ```bash
   npm start

6. **Open your web browser and go to http://localhost:3000.**


