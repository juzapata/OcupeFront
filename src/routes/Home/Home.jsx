import Track from '../../containers/Track';
import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';

const Home = () => {
  return (
    <>
    <NavBar />
    <div className="container container__home">
      <Track/>
    </div>
    </>
  )
}

export default Home;