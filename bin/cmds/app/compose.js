'use strict';

const Log = require('../../..').Log;
const App = require('../../..').App;
const colors = require('colors');

exports.desc = 'Migrate app to Homey compose';
exports.handler = async yargs => {
	
	const appPath = yargs.path || process.cwd();

	try {
		const app = new App( appPath );
		await app.migrateToCompose();
	} catch( err ) {
		Log(colors.red(err.message));
	}

}