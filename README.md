### Ethereum RESTful API operations in Node.js

@applicationsdev

GPLv3

### Get started

```bash
# Developed & tested in Node.js 8.9.4

## Installation

# Clone repository
git clone --depth 1 https://github.com/applicationsdev/Ethereum-Nodejs-RESTful-API.git

cd Ethereum-Nodejs-RESTful-API

# Install dependencies
npm install

# Start forking
rm -rf .git && git init

#

## Testing
## (Development Environment)

# Start development live-reload server
PORT=8080 npm run dev

# To test using cURL try the following command syntax examples:

# Create a new ETH Wallet
curl -X GET -H "Accept:application/json" -i -s http://YOUR_HOST/api/createWallet

# Get your ETH Balance
curl -X GET -H "Accept:application/json" -i -s http://YOUR_HOST/api/getBalance/YOUR_ETHEREUM_ADDRESS

# Send an ETH payment
curl -X POST -H 'Content-Type: application/json' http://YOUR_HOST/api/transaction/PRIVATE_KEY/PAYMENT_DESTINATION/ETH_AMOUNT

# notes:

# In Production Environments always use HTTPS

# as YOUR_HOST use your URL or IP or Localhost or Cloud Host,
depending where your Node.js runs -> example: http://127.0.0.1/Ethereum-Nodejs-RESTful-API/api/...

# as YOUR_ETHEREUM_ADDRESS use a valid Ethereum address (also known as public key)
# or just create one as shown above

# as PRIVATE_KEY use the ETH Wallet's private key of the one that sends the payment
# as PAYMENT_DESTINATION use the payment receiver's Ethereum address
# ETH_AMOUNT is the amount of ETH thay is sent by the payment -> example: 1.0

# To test the Email Validation API using some great REST visual testing tools, go to
# https://www.getpostman.com/
# https://addons.mozilla.org/en-US/firefox/addon/rested/

```

Credits, links & info about used packages + more documentation, coming soon..
