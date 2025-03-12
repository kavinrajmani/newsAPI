# News API

A RESTful API service for managing news articles built with Node.js and Express.

## Features

- CRUD operations for news articles
- Docker support
- Automated testing
- CI/CD pipeline with GitHub Actions

## Prerequisites

- Node.js 18.0.0
- npm

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/newsAPI.git

# Install dependencies
npm install
```

## Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 3000 (default) or the port specified in the PORT environment variable.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/news` | Get all news articles |
| GET | `/api/news/:id` | Get a specific news article |
| POST | `/api/news` | Create a new news article |
| PUT | `/api/news/:id` | Update a news article |
| DELETE | `/api/news/:id` | Delete a news article |

## Testing

Run the test suite:
```bash
npm test
```

## Docker Support

Build the image:
```bash
docker build -t news-api .
```

Run the container:
```bash
docker run -p 3000:3000 news-api
```

## CI/CD

The project uses GitHub Actions for:
- Running tests
- Building Docker image
- Publishing to Docker Hub

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.