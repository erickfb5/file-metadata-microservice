# **[File Metadata Microservice](https://eb-file-metadata-microservice.onrender.com)**

This is a very simple API that allows you to upload a file and receive information about the uploaded file, including its name, type, and size in bytes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoint](#endpoint)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine using:
   ```bash 
   git clone https://github.com/erickfb5/file-metadata-microservice.git
2. Navigate to the project directory:
   ```bash
   cd file-metadata-microservice
3. Install the required dependencies:
   ```bash
   npm install
4. Start the server:
   ```bash
   npm start
## Usage
-   Visit the app's home page by opening your web browser and going to http://localhost:3500.
-   You will see a simple web page that allows you to upload a file.
-   Click the "Choose File" button and select a file from your local machine.
-   Click the "Upload File" button.
-   You will receive a JSON response with information about the uploaded file, including its name, type, and size in bytes.

## Endpoint 
**```POST```** `/api/fileanalyse`: Upload a file and receive information about the uploaded file.

## Dependencies
- **```express```**: Fast, unopinionated, minimalist web framework for Node.js.
- **```cors```**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **```dotenv```**: Loads environment variables from a .env file into process.env.
- **```multer```**: Middleware for handling multipart/form-data, primarily used for file uploads.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository on GitHub.
- Make your changes and commit them to your fork.
- Create a pull request from your fork to this repository. 

# License
This project is licensed under the **[MIT License](https://spdx.org/licenses/MIT.html)**.