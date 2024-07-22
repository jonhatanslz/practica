# Implementation of Grafana and Prometheus for Monitoring a System

## Objective
The goal of this project is to investigate, install, and configure Grafana and Prometheus to establish a monitoring system for a software application. This system will be tested using a Node.js service. Docker and Docker-Compose will be utilized for containerization, and Git will be used for version control and to upload service configurations to a GitHub repository.


---

## 1. Preliminary Investigation
### Research
- Investigate the main functionalities and features of Grafana and Prometheus.
- Identify how these services can be integrated with the project's programming language.
- Explore similar examples and use cases to understand best practices and potential challenges.

## 2. Installing Docker and Docker-Compose
### Installation
- Install Docker and Docker-Compose in the development environment if they are not already installed.
- Follow the official installation guides:
  - [Docker Installation](https://docs.docker.com/get-docker/)
  - [Docker-Compose Installation](https://docs.docker.com/compose/install/)

### Verification
- Verify the correct installation by executing basic Docker and Docker-Compose commands:
  ```bash
  docker --version
  docker-compose --version
  ```

## 3. Configuration of Prometheus
### Docker-Compose
- Create a `docker-compose.yml` file to define the Prometheus service:
  ```yaml
  version: '3.7'
  services:
    prometheus:
      image: prom/prometheus
      volumes:
        - ./prometheus.yml:/etc/prometheus/prometheus.yml
      ports:
        - "9090:9090"
  ```

### Metrics Collection
- Configure Prometheus to collect relevant project metrics.
- Create a Prometheus configuration file `prometheus.yml` to specify the monitoring targets:
  ```yaml
  global:
    scrape_interval: 15s

  scrape_configs:
    - job_name: 'node'
      static_configs:
        - targets: ['node-app:3000']
  ```

## 4. Configuration of Grafana
### Docker-Compose
- Add Grafana to the `docker-compose.yml` as an additional service:
  ```yaml
  services:
    grafana:
      image: grafana/grafana
      ports:
        - "3000:3000"
  ```

### Data Source
- Configure Grafana to connect to Prometheus as a data source:
  1. Open Grafana at `http://localhost:3000`.
  2. Log in with the default credentials (`admin` / `admin`).
  3. Add a new data source and select Prometheus.
  4. Set the URL to `http://prometheus:9090` and save.

### Dashboards
- Create basic dashboards in Grafana to visualize the metrics collected by Prometheus.

## 5. Integration with the Project
### Metrics Collection
- Implement the collection of metrics in the project code using the corresponding programming language.

### Compatibility
- Ensure that the metrics are exposed in a format compatible with Prometheus. For a Node.js application, you can use libraries like `prom-client`.

## 6. Versioning and Repository on GitHub
### Initialize Git
- Initialize a local Git repository for the monitoring project:
  ```bash
  git init
  ```

### Add Project Files
- Add all the files of the chosen project to monitor (suggested basic project: Node Todo App.js):
  ```bash
  git add .
  git commit -m "Initial commit"
  ```

### Documentation
- Create a `README.md` file with detailed instructions for the installation and configuration of the monitoring system.

## 7. Testing and Verification
### Start Services
- Run `docker-compose up` to start the Prometheus and Grafana services.

### Verification
- Verify that Prometheus is collecting metrics and that Grafana is displaying them correctly.

### Adjustments
- Make necessary adjustments based on the evidence to ensure efficient and accurate monitoring.

## 8. Deliverables
- A repository on GitHub with the Docker, Docker-Compose, Prometheus, and Grafana configurations.
- Clear and detailed documentation on the operation of the monitoring system in the `README.md` file.
- Functional Grafana dashboards that visualize the project metrics.
- Project code with the modifications made to expose the necessary metrics to the Prometheus service.

---

## 9. Installation and Configuration Instructions

### Prerequisites
- Docker
- Docker-Compose
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Run Docker-Compose**
   ```bash
   docker-compose up
   ```

3. **Access Grafana**
   Open your browser and navigate to `http://localhost:3000`.

4. **Verify Prometheus**
   Ensure Prometheus is collecting metrics by navigating to `http://localhost:9090`.

### Configuration Details

- **Prometheus Configuration:** Located in `prometheus.yml`.
- **Docker-Compose File:** Located in `docker-compose.yml`.
- **Grafana Dashboards:** Basic dashboards are pre-configured; additional dashboards can be created as needed.

### Testing and Verification

- **Metrics Collection:** Ensure metrics are being collected and displayed correctly in Grafana.
- **Adjustments:** Make adjustments to configurations if necessary to ensure accurate monitoring.

---

This documentation provides a comprehensive guide to setting up a monitoring system using Grafana and Prometheus. By following these steps, you will be able to monitor your Node.js application efficiently.
