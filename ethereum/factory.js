import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1143b7542763c74d96f93B11A7BA159471954FB9'
);

export default instance;