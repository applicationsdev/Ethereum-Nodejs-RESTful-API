import { Router } from 'express';

// Import Ethers.js library
let ethers = require('ethers');

// Connect to Eth network
let providers = ethers.providers;
let provider = providers.getDefaultProvider('ropsten');

// Ethers.js wallet module
let Wallet = ethers.Wallet;

export default ({ config }) => {
	let api = Router();
	
	api.get('/createWallet', (req, res) => {
	
		// To validate the process later,
		// ensure in explicit way that any previously created wallet is cleared
		let ETH_Wallet = null;
		
		ETH_Wallet = Wallet.createRandom();
		
		// Checking if newWallet is null or undefined
		if (ETH_Wallet == null) {
			res.status(501).json("Server was not able to resolve this request");
			
		} else {
			res.status(200).json({
				"Address": ETH_Wallet.address,
				"PrivateKey": ETH_Wallet.privateKey
			});
		}
	});

	api.get('/getBalance/:address', (req, res) => {
		
		provider.getBalance(req.params.address).then(
			
			// Promise has succeeded to resolve the request
			(balance) => {
				let ETH_Balance = ethers.utils.formatEther(balance);
				res.status(200).json({ETH_Balance});
			},
			
			// Promise failed
			() => { res.status(404).json("Invalid address or not found"); }
	    );
	});
	
	return api;
};
