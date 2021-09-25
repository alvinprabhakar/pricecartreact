import React from 'react';
import { Card , Button} from 'react-bootstrap';
import './App.css'


function App(){

  return (
    <>
    <h1>Price Cart Bootstrap App</h1>
    <div className="homebox">
      <div className="cartinfo">
       
      <Card className="text-center text-head border-0">
          <Card.Title className="mb-2 text-muted">FREE</Card.Title>
          <Card.Subtitle><span className="amount-info">$0</span>/month</Card.Subtitle>
          <hr />
          <ul>
              <li className="tick-list">Single User</li>
              <li className="tick-list">5GB Storage</li>
              <li className="tick-list">Unlimited Public Projects</li>
              <li className="tick-list">Community Access</li>
              <li className="text-muted wrong-list">Unlimited Private Projects</li>
              <li className="text-muted wrong-list">Dedicated Phone Support</li>
              <li className="text-muted wrong-list">Free Subdomain</li>
              <li className="text-muted wrong-list">Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
              <Button className="btn btn-primary text-uppercase">Button</Button>
          </div>
      </Card>
        
      </div>
      <div className="cartinfo">
      <Card className="text-center text-head border-0">
          <Card.Title className="mb-2 text-muted">PLUS</Card.Title>
          <Card.Subtitle><span className="amount-info">$9</span>/month</Card.Subtitle>
          <hr />
          <ul>
              <li className="tick-list"><b>5 Users</b></li>
              <li className="tick-list">50GB Storage</li>
              <li className="tick-list">Unlimited Public Projects</li>
              <li className="tick-list">Community Access</li>
              <li className="tick-list">Unlimited Private Projects</li>
              <li className="tick-list">Dedicated Phone Support</li>
              <li className="tick-list">Free Subdomain</li>
              <li className="text-muted wrong-list">Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
          <Button className="btn btn-primary text-uppercase">Button</Button>
          </div>
        
      </Card>
      </div>
      <div className="cartinfo">
      <Card className="text-center text-head border-0">
          <Card.Title className="mb-2 text-muted">PRO</Card.Title>
          <Card.Subtitle><span className="amount-info">$49</span>/month</Card.Subtitle>
          <hr />
          <ul>
              <li className="tick-list"><b>Unlimited Users</b></li>
              <li className="tick-list">150GB Storage</li>
              <li className="tick-list">Unlimited Public Projects</li>
              <li className="tick-list">Community Access</li>
              <li className="tick-list">Unlimited Private Projects</li>
              <li className="tick-list">Dedicated Phone Support</li>
              <li className="tick-list"><b>Unlimited </b>Free Subdomain</li>
              <li className="tick-list">Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
          <Button className="btn btn-primary text-uppercase">Button</Button>
          </div>
        
      </Card>
 
      </div>  
    </div>
    </>
  )
}

export default App;