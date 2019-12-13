import React, {Component} from 'react';
import "../home/home.scss";
import { NavLink } from 'react-router-dom';
import Phone from '../img/mobile.png';
import Pic_1 from '../img/pic-1.png';
import Pic_2 from '../img/pic-2.png';
import Pic_3 from '../img/pic-3.png';
import Mac from '../img/macbook.png';
import Cost_1 from '../img/cost-1.png';
import Cost_2 from '../img/cost-2.png';
import Cost_3 from '../img/cost-3.png';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
title: '',
    }
    }

    setChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }
onUnlimited = () => {
  alert("Сongratulate! Your package Unlimited!");
}
onStandart = () => {
  alert("Сongratulate! Your package Standart!");
}
onBasic = () => {
  alert("Сongratulate! Your package Basic!");
}

onSubmit = (e) => {
    e.preventDefault();
   alert(this.state.title);
    this.setState({title: '' });
}   
    render () {
        return (<div>
<div className="heder">
   <div className="row justify-content-between">
     <div className="col-1"></div>
     <div className="col-4">
        <p className="top-text">AppCo</p>
        <h1><b>Brainstorming</b> for desired perfect Usability</h1>
        <p className="after-h1">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
        <NavLink to="/user"><button type="button" className="btn btn-outline-primary btn-lg">View Stats</button></NavLink>
     </div>
     <div className="col-4 ">
       <div className="col align-self-center" id="mobile">
         <img src={Phone} className="rounded float-right" alt="phone"></img>
       </div>
     </div>
     <div className="col-1"></div>
   </div>
</div>
<div className="small-business">
   <div className="row justify-content-center">
       <div className="h2-center">
       <h2>Why <b>small business owners love</b> AppCo?</h2>
       </div>
    </div>
    <div className="row justify-content-center">
       <div className="after-h2-center">
       <p className="after-h2">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
       </div>
    </div>

   <div className="row justify-content-center" id="row-column-blok-2">

      <div className="col-3">
         <img src={Pic_1} className="rounded mx-auto d-block" alt="pic-1"/>
         <div className="col align-self-center text-center">
         <h4>Clean Design</h4>
         <p>Increase sales by showing true dynamics of your website.</p>
         </div>
       </div>

       <div className="col-3">
          <img src={Pic_2} className="rounded mx-auto d-block" alt="pic-2"/>
          <div className="col align-self-center text-center">
          <h4>Secure Data</h4>
          <p>Build your online store’s trust using Social Proof &amp; Urgency.</p>
          </div>
       </div>

       <div className="col-3">
          <img src={Pic_3} className="rounded mx-auto d-block" alt="pic-3"/>
          <div className="col align-self-center text-center">
          <h4>Retina Ready</h4>
          <p>Realize importance of social proof in customer’s purchase decision.</p>
          </div>
       </div>

   </div>

</div>
<div className="start-managing">
  <div className="row justify-content-between">
      <div className="col-1"></div>
      <div className="col-4">
         <h3>Start Managing your apps business, more faster</h3>
         <p className="after-h3">Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
         <div className="btn-center">
            <button type="button" className="btn btn-outline-primary btn-lg">Learn more</button>
         </div>
       </div>
       <div className="col-5">
          <img src={Mac} alt="Responsive"></img>
       </div>
       <div className="col-1"></div>
  </div>

</div>
<div className="afforadble">
<div className="row justify-content-center">
       <div className="h2-center">
          <h2><b>Afforadble Pricing and Packages</b> choose your best one</h2>
       </div>
    </div>
    <div className="row justify-content-center">
       <div className="after-h2-center">
          <p className="after-h2">Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
       </div>
    </div>
   <div className="row justify-content-center" id="row-column-blok-2">
      <div className="col-3">
         <h5>Basic</h5>
         <img src={Cost_1} className="rounded mx-auto d-block" alt="pic-1"/>
         <div className="col align-self-center text-center">
         <p className="cost">$29</p>
         <p>Push Notifications
Data Transfer
SQL Database
Search &amp; SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
            <div className="btn-center">
               <button type="button" className="btn btn-primary btn-lg" onClick={this.onBasic}>Purchase now</button>
            </div>
         </div>
       </div>

       <div className="col-3">
       <h5>Standard</h5>
          <img src={Cost_2} className="rounded mx-auto d-block" alt="pic-2"/>
          <div className="col align-self-center text-center">
          <p className="cost" id="cost">$149</p>
          <p>Push Notifications
Data Transfer
SQL Database
Search &amp; SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
             <div className="btn-center">
               <button type="button" className="btn btn-primary btn-lg" onClick={this.onStandart}>Purchase now</button>
            </div>
          </div>
       </div>
       <div className="col-3">
       <h5>Unlimited</h5>
          <img src={Cost_3} className="rounded mx-auto d-block" alt="pic-2"/>
          <div className="col align-self-center text-center">
          <p className="cost">$39</p>
          <p>Push Notifications
Data Transfer
SQL Database
Search &amp; SEO Analytics
24/7 Phone Support
2 months technical support
2+ profitable keyword</p>
             <div className="btn-center">
               <button type="button" className="btn btn-primary btn-lg" onClick={this.onUnlimited}>Purchase now</button>
            </div>
          </div>
       </div>
   </div>
   <div className="row justify-content-center">
     <div className="text-center">
       <h6>If you need custom services or Need more? <b>Contact us</b></h6>
     </div>
   </div>
</div>
<div className="futer-home">
<div className="row justify-content-center">
  <div className="input-center">
<div className="input-group mb-3">
  <input type="text" className="form-control" name="title" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.title} onChange={this.setChange}/>
  <div className="input-group-append">
    <button className="btn btn-primary btn-lg" type="submit" onClick={this.onSubmit} id="button-addon2">Subscribe</button>
  </div>
</div>
</div>
</div>
<div className="row justify-content-between">
  <div className="col-3">
    <div className="text-center">
      <p className="bottom-text-1">AppCo</p>
    </div>
  </div>
  <div className="col-3">
    <div className="text-center">
      <p className="bottom-text-2">All rights reserved by ThemeTags</p>
    </div>
  </div>
  <div className="col-3">
    <div className="text-center">
      <p className="bottom-text-2">Copyrights © 2019. </p>
    </div>
  </div>
</div>
</div>
        </div>)
    }
}
export default Home;