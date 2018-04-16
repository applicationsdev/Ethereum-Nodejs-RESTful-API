import { Router } from 'express';

// Import ethers.js library
let ethers = require('ethers');

// Connect to Eth network
let providers = ethers.providers;
let provider = providers.getDefaultProvider('ropsten');

export default ({ config }) => {
	let api = Router();

	return api;
};
