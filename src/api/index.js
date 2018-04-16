/*
   Ethereum ops via RESTful API with Node.js
   
   @applicationsdev
   
   GPLv3
*/

/* Imports */

import { Router } from 'express';

// Import Ethers.js library
let ethers = require('ethers');

// Ethers.js module to connect to Eth networks
let providers = ethers.providers;

// Ethers.js wallet module
let Wallet = ethers.Wallet;

// Ethereum master configuration feature
import ethconfig from '../ethconfig.json';


/* API Routes */

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
		
		// Choose network
		let getBalanceProvider = providers.getDefaultProvider(ethconfig.network.API.routeGroup.TXN);
		
		getBalanceProvider.getBalance(req.params.address).then(
			
			// Promise has succeeded to resolve the request
			(balance) => {
				let ETH_Balance = ethers.utils.formatEther(balance);
				res.status(200).json({ETH_Balance});
			},
			
			// Promise failed
			() => { res.status(404).json("Invalid address or not found"); }
	    );
	});
	
	api.post('/transaction/:privateKey/:destination/:amount', (req, res) => {
		
		// Sender's account
		let walletOfSender = new Wallet(req.params.privateKey);
		
		// Choose network
		walletOfSender.provider = providers.getDefaultProvider(ethconfig.network.API.routeGroup.TXN);
		
		// TXN amount
		let amount = ethers.utils.parseEther(req.params.amount);
		
		// Send TXN execution request
		let sendEthPromise = walletOfSender.send(req.params.destination, amount);

		sendEthPromise.then(
			
			// Promise has succeeded to resolve the request
			(transactionHash) => {
				let ETH_TXN_Hash = transactionHash;
				res.status(200).json({ETH_TXN_Hash});
			},
			
			// Promise failed
			() => { res.status(501).json("Check your wallet's balance - Server was not able to resolve this request"); }
		);
	});
	
	return api;
};
