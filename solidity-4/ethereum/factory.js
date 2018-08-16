import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa8fBa5Da1e2200575Cffeb816753A3BBb0bd5dDE'
);

export default instance;
