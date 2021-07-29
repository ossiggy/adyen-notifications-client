import { Container, Jumbotron } from 'reactstrap';
import MerchantList from './MerchantList';

const MerchantsPage = ({ merchantList, setMerchant }) => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Merchant Accounts</h1>
        <p className="lead">Select an account to view saved reports</p>
      </Jumbotron>
      {merchantList && <MerchantList merchantList={merchantList} setMerchant={setMerchant} />}
    </Container>
  )
};

export default MerchantsPage;