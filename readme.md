# Microservices Deployment with VirtualBox

This project demonstrates the implementation of a microservices architecture using multiple Virtual Machines (VMs) in VirtualBox. The system consists of a frontend service and two backend microservices (greeting and time services) deployed across different VMs.

## Architecture Overview

- Frontend VM: Hosts the web interface
- Backend VM 1: Hosts the greeting service
- Backend VM 2: Hosts the time service
- Network: NAT Network with DHCP (10.0.2.x range)

## Prerequisites

- VirtualBox installed
- Node.js (v14+ recommended)
- npm package manager
- Basic networking knowledge

## Project Structure

```
microservices-project/
├── frontend/
│   └── index.html
├── greeting-service/
│   ├── package.json
│   └── server.js
└── time-service/
    ├── package.json
    └── server.js
```

## Installation & Setup

### 1. VirtualBox Configuration

1. Create three VMs in VirtualBox
2. Configure NAT Network:
   ```
   VirtualBox > File > Host Network Manager > Create
   Enable DHCP
   ```
3. Set network adapter for each VM to NAT Network

### 2. Backend Services Setup

#### Greeting Service
```bash
cd greeting-service
npm install
npm start
```

Required dependencies:
```json
{
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5"
  }
}
```

#### Time Service
```bash
cd time-service
npm install
npm start
```

Required dependencies:
```json
{
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5"
  }
}
```

### 3. Frontend Setup

1. Copy the frontend files to the designated VM
2. Update the service URLs in `index.html` with your VM IPs:
```javascript
const greetingServiceUrl = 'http://[VM-IP]:3000/api/greeting';
const timeServiceUrl = 'http://[VM-IP]:3000/api/time';
```

## Running the Services

1. Start the Greeting Service:
```bash
node server.js
```

2. Start the Time Service:
```bash
node server.js
```

3. Open the frontend `index.html` in a web browser

## API Endpoints

### Greeting Service
- **GET** `/api/greeting`
- Returns a greeting message
- Response format:
```json
{
  "message": "Hello from the greeting microservice hosted on VM-viraj"
}
```

### Time Service
- **GET** `/api/time`
- Returns current timestamp
- Response format:
```json
{
  "currentTime": "2024-02-11T12:00:00.000Z"
}
```

## Network Configuration

1. All VMs should be configured to use DHCP for IP assignment
2. Verify connectivity between VMs using ping
3. Ensure all VMs are on the same NAT Network

## Troubleshooting

1. Network Connectivity Issues:
   - Verify all VMs are on the same NAT Network
   - Check DHCP settings
   - Ensure firewall rules allow traffic on port 3000

2. Service Issues:
   - Verify Node.js is installed and running
   - Check console for error messages
   - Ensure correct IP addresses in frontend configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- VirtualBox documentation
- Node.js and Express.js communities
- Contributors and testers

