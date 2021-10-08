# Neomorphic Metal Bands

![Website](https://img.shields.io/website?url=https%3A%2F%2Fneomorphic-metal-bands.iamtsamart.com%2F)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/tsamantanis/neomorphic-metal-bands/latest)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tsamantanis/neomorphic-metal-bands)

[FreshPing Status](https://statuspage.freshping.io/57422-NeomorphicMetalBands)

The goal is to make a project with React, load data from a JSON file, create and display components, use state, and use Array.map to create a collection of components.

# Table of contents

-   [Project Title](#project-title)
-   [Demo-Preview](#demo-preview)
-   [Table of contents](#table-of-contents)
-   [Installation](#installation)
-   [Development Server](#development-server)
-   [Production Server](#production-server)
-   [Deployment](#deployment)
-   [Requirements](#requirements)

# Demo Preview

[Demo GH Pages](https://tsamantanis.github.io/neomorphic-metal-bands/)
[Demo Caprover Custom Domain](https://neomorphic-metal-bands.iamtsamart.com/)

# Installation

[(Back to top)](#table-of-contents)

To use this project, first clone the repo on your device using the commands below:

`git init`

`git clone https://github.com/tsamantanis/neomorphic-metal-bands.git`

`cd neomorphic-metal-bands`


# Development Server

[(Back to top)](#table-of-contents)

`yarn dev`
OR
`docker-compose -f docker-compose.dev.yml up`

This will run the app at `http://localhost:3000`

# Production Server

`yarn prod`
OR
`docker-compose up`

This will run the app at `http://localhost:80`. The page may appear blank when not deployed as the production server is configured for deployment.

# Deplyoment

### GH pages

Navigate to the `main` branch and run the following:

`yarn deploy`

### Caprover 

Navigate to the `production` branch and run the following:

`caprover deploy`

Follow the instructions for deploying the app within the correct instance. 


# Requirements

|  Category  | Requirement                                                                                          | ✅ |
|:---------- |------------------------------------------------------------------------------------------------------|:-:|
| **🐳 Docker** | Repository contains a `Dockerfile` and a `docker-compose.yml` file                                  | ✅ |
| **🐳 Docker** | `Dockerfile` and `docker-compose.yml` file build without error                                      | ✅ |
| **⚙️ Deployment** | Project deployed on CapRover using your own domain | |                             | ✅ |
| **⚙️ Deployment** | Uptime monitored by FreshPing or another health check service |
|  **📝 Docs**  | `README` includes [badges](https://shields.io) for image size, build status, and website monitoring |   |
|  **📝 Docs**  | `README` includes instructions on how to build and run your container                               |   |