import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import PropTypes from 'prop-types'

const Header = ({cliamFreeCoin, coin}) => {
    return (
      <header className="md:container mx-auto w-[92%]">
        <Navbar coin={coin}></Navbar>
        <Banner cliamFreeCoin = {cliamFreeCoin}></Banner>
      </header>
    );
};

Header.propTypes = {
  cliamFreeCoin: PropTypes.func,
  coin:PropTypes.number,
}
export default Header;