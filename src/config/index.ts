const envConfig: any = require('dotenv').config({ path: require('find-config')('.env') }).parsed;

const defaultConfig: any = {
    PORT: 3000
};

const environment: string = process.env.NODE_ENV || 'development';

let configFile;

switch (environment) {
    case 'stage': {
        configFile = './staging';
        break;
    }

    case 'stress': {
        configFile = './stress';
        break;
    }
    case 'prod': {
        configFile = './production';
        break;
    }
    default: {
        configFile = './development';
    }
}
export const config = Object.assign({}, defaultConfig, require(configFile).configuration, process.env, envConfig, { environment });
