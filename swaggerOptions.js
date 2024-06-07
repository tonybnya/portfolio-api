module.exports = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio API",
      version: "1.0.0",
      description: "API for managing portfolio projects and timeline entries",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Project: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The auto-generated ID of the project",
            },
            title: {
              type: "string",
              description: "The title of the project",
            },
            description: {
              type: "string",
              description: "The description of the project",
            },
            tags: {
              type: "array",
              items: {
                type: "string",
              },
              description: "List of tags associated with the project",
            },
            images: {
              type: "array",
              items: {
                type: "string",
              },
              description: "List of image URLs",
            },
            liveUrl: {
              type: "string",
              description: "URL to the live website",
            },
            sourceUrl: {
              type: "string",
              description: "URL to the source code",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
