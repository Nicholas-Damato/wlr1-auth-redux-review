import './App.css';
import Auth from './components/Auth'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.user ? (
        <div> {props.user.email} </div>
      ) : (
        <div> Please log In </div>
      )}
      <Auth />
    </div>
  );
}

const mapStateToProps = (state) => state.authReducer

export default connect(mapStateToProps)(App);
