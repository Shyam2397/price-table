import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <div className='card-con'>
      <Free/>
      <Plus/>
      <Pro/>
      </div>
    </div>
  );
}


export default App;

function Free(){
  return(
    <div className='price-card'>
      <h5>Free</h5>
      <div><h6><span className='rate'>$0</span><sub className='sub'>/month</sub></h6></div>
      <hr/>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Single User</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;5GB Storage</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Unlimited Public Projects</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Community Access</p>
      <p className='xmark'><span className='font'><FontAwesomeIcon icon={faXmark} /></span>&nbsp;&nbsp;Unlimited Private projects</p>
      <p className='xmark'><span className='font'><FontAwesomeIcon icon={faXmark} /></span>&nbsp;&nbsp;Dedicated Phone Support</p>
      <p className='xmark'><span className='font'><FontAwesomeIcon icon={faXmark} /></span>&nbsp;&nbsp;Free Subdomain</p>
      <p className='xmark'><span className='font'><FontAwesomeIcon icon={faXmark} /></span>&nbsp;&nbsp;Monthly Status Reports</p>
      <button type="button" className='btn'>BUTTON</button>
    </div>
  )
}

function Plus(){
  return(
    <div className='price-card'>
      <h5>Plus</h5>
      <div><h6><span className='rate'>$9</span><sub className='sub'>/month</sub></h6></div>
      <hr/>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;<strong>5 Users</strong></p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;50GB Storage</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Unlimited Public Projects</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Community Access</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Unlimited Private projects</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Dedicated Phone Support</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Free Subdomain</p>
      <p className='xmark'><span className='font'><FontAwesomeIcon icon={faXmark} /></span>&nbsp;&nbsp;Monthly Status Reports</p>
      <button type="button" className='btn'>BUTTON</button>
    </div>
  )
}

function Pro(){
  return(
    <div className='price-card'>
      <h5>Pro</h5>
      <div><h6><span className='rate'>$49</span><sub className='sub'>/month</sub></h6></div>
      <hr/>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;<strong>Unlimited Users</strong></p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;150GB Storage</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Unlimited Public Projects</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Community Access</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Unlimited Private projects</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Dedicated Phone Support</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;<strong>Unlimited</strong> Free Subdomain</p>
      <p><span className='font'><FontAwesomeIcon icon={faCheck} /></span>&nbsp;&nbsp;Monthly Status Reports</p>
      <button type="button" className='btn'>BUTTON</button>
    </div>
  )
}