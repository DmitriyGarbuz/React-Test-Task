import React, {Component} from 'react';
import '../users/users.scss'
import { NavLink } from 'react-router-dom';
import Heder from '../heder/Heder';
import Futer from '../futer/Futer';
import Data  from '../lib/users.json';
import DataUser from '../lib/users_statistic.json';
//import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
//import PageItem from 'react-bootstrap/PageItem';




class List extends Component {
    state = {
        email: this.props.email || '',
        first_name: this.props.first_name || '',
        gender: this.props.gender || '',
        id: this.props.id || '',
        ip_address: this.props.ip_address || '',
        last_name: this.props.last_name || '',
        clicks:  this.props.allClicks || '',
        page_views: this.props.allPage_views || '',
        nav: { pathname: '/user/:id-'+ this.props.id,
      state: this.props.id }|| '',
      }
      render() {

        return ( 
            <tr>
            
            <th scope="row"><NavLink to={this.state.nav}  >{this.state.id}</NavLink></th>
            <td><NavLink to={this.state.nav}  >{this.state.first_name}</NavLink></td>
            <td>{this.state.last_name}</td>
            <td>{this.state.email}</td>
            <td>{this.state.gender}</td>
            <td>{this.state.ip_address}</td>
            <td>{this.state.clicks}</td>
            <td>{this.state.page_views}</td>
            
          </tr>
      )};
    }



class Users extends Component {
  _isMounted = false;

    constructor(props){
        super(props)
        this.state = {
page: [{size: 1, active: true, s:0, e:51 },
       {size: 2, active: false, s:50, e:101 },
       {size: 3, active: false , s:100, e:151 },
       {size: 4, active: false , s:150, e:201 },
       {size: 5, active: false , s:200, e:251 },
       {size: 6, active: false , s:250, e:301 },
       {size: 7, active: false , s:300, e:351 },
       {size: 8, active: false , s:350, e:401 },
       {size: 9, active: false , s:400, e:451 },
       {size: 10, active: false , s:450, e:501 },
       {size: 11, active: false , s:500, e:551 },
       {size: 12, active: false , s:550, e:601 },
       {size: 13, active: false , s:600, e:651 },
       {size: 14, active: false , s:650, e:701 },
       {size: 15, active: false , s:700, e:751 },
       {size: 16, active: false , s:750, e:801 },
       {size: 17, active: false , s:800, e:851 },
       {size: 18, active: false , s:850, e:901 },
       {size: 19, active: false , s:900, e:951 },
       {size: 20, active: false , s:950, e:1001 }],
start: 0,
end: 51,
datas: [] ,
datas_users: '' ,
email: '',
first_name: '',
gender:  '',
id:  '',
ip_address: '',
last_name: '',
user_id:  '',
data_clicks: [],
clicks:  '',
date: '',
items: [],
numb: 1,
page_views:  ''
    }  

    }
  

componentDidMount() {
      this._isMounted = true;
const start = this.state.start;
const end = this.state.end;

this.getStat = (Data, DataUser, start, end) => {
  if(start === 0){        
    let info = Data.filter(item => item.id < end);
    let infoUser = DataUser.filter(item => item.user_id < end);

    this.getClicks = (info, infoUser) => {
      let n = 1;
      do {
         if (n === 1){let user = infoUser.filter(item => item.user_id === info[0].id); 
          let clicks = user.reduce((a, b) => a + b.clicks, 0);
          let page_views = user.reduce((a, b) => a + b.page_views, 0);
          let data_clicks = info[0];
          data_clicks['allClicks'] = clicks;
          data_clicks['allPage_views'] = page_views;
        }
        let user = infoUser.filter(item => item.user_id === info[n].id); 
          let clicks = user.reduce((a, b) => a + b.clicks, 0);
          let page_views = user.reduce((a, b) => a + b.page_views, 0);
          let data_clicks = info[n];
          data_clicks['allClicks'] = clicks;
          data_clicks['allPage_views'] = page_views;
        n += 1;
      }while ( n < 50);          
       }
       this.getClicks (info, infoUser);
       this.setState({datas: info, datas_users: infoUser});

 }else{         
  let info1 = Data.filter(item => item.id < end);
  let infoUser1 = DataUser.filter(item => item.user_id < end);
  let info = info1.filter(item => item.id > start);
  let infoUser = infoUser1.filter(item => item.user_id > start);

  this.getClicks = (info, infoUser) => {
    let n = 1;
    do {
      if (n === 1){let user = infoUser.filter(item => item.user_id === info[0].id); 
        let clicks = user.reduce((a, b) => a + b.clicks, 0);
        let page_views = user.reduce((a, b) => a + b.page_views, 0);
        let data_clicks = info[0];
        data_clicks['allClicks'] = clicks;
        data_clicks['allPage_views'] = page_views;
      }
      let user = infoUser.filter(item => item.user_id === info[n].id); 
        let clicks = user.reduce((a, b) => a + b.clicks, 0);
        let page_views = user.reduce((a, b) => a + b.page_views, 0);
        let data_clicks = info[n];
        data_clicks['allClicks'] = clicks;
        data_clicks['allPage_views'] = page_views;
      n += 1;
    }while ( n < 50);       
     }
     this.getClicks (info, infoUser);
     this.setState({datas: info, datas_users: infoUser});
}

}

this.pigmintation = (numb, a, b) => {
  let actives = numb;
let items = [];
for (let number = a; number <= b; number++) { 
  items.push(
    <Pagination.Item onClick={(e) => this.pigm(number)} key={number} active={number === actives}>
      {number}
    </Pagination.Item>,
  );
  this.setState({items: items});
}
let start = this.state.page[actives-1].s;
let end = this.state.page[actives-1].e;
this.setState({start: start, end: end});
this.getStat(Data, DataUser, start, end);
}
this.pigmintation(this.state.numb, this.state.page[0].size, this.state.page[4].size);

this.pigm = (number)  => {
  let i = number;
this.setState({numb: i});
if(i > 5){
  this.pigmintation(i, this.state.page[5].size, this.state.page[9].size);
}if(i>10){this.pigmintation(i, this.state.page[10].size, this.state.page[14].size);}
if(i>15) {this.pigmintation(i, this.state.page[15].size, this.state.page[19].size);}
if(i < 6){this.pigmintation(i, this.state.page[0].size, this.state.page[4].size);}
}

     this.prev = () => {
        if (this.state.start === 0){
          let i = 20;
          this.setState({numb: i});
            this.pigmintation(i, this.state.page[14].size, this.state.page[19].size);
        }else{
          let i = this.state.numb-1;
          this.setState({numb: i});
          this.pigm(i);
        }
     }

     this.next = () => {
      if (this.state.start === 950){
        let i = 1;
        this.setState({numb: i});
          this.pigmintation(i, this.state.page[0].size, this.state.page[4].size);
      }else{
let i = this.state.numb+1;
this.setState({numb: i});
  this.pigm(i);
      }
    }
    

    
    this.getStat(Data, DataUser, start, end);


  }


  componentWillUnmount() {
    this._isMounted = false; 
  }
    render () {
        return (<div>
<Heder />
<div className="users-statistics">
    <div className="row justify-content-between">
        <div className="container">
           <nav className="nav">
              <NavLink to="/" className="nav-link active">Main page</NavLink>
              <NavLink to="#" className="nav-link disabled" tabIndex="-1" aria-disabled="true">></NavLink>
              <NavLink to="#" className="nav-link disabled" tabIndex="-1" aria-disabled="true">User satistics</NavLink>
             </nav>
         </div>
    </div>
    <div className="row justify-content-between">
        <div className="container">
           <h5>Users statistics</h5>
           <div className="table-responsive">
           <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr className="bg-primary">
                  <th scope="col">id</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">IP address</th>
                  <th scope="col">Total clicks</th>
                  <th scope="col">Total page views</th>
                </tr>
              </thead>
              <tbody>
              {this.state.datas ?
         this.state.datas.map(data =>
          <List {...data} key={data.id}/>
        ) : <p>Загрузка ... </p>
      }
              </tbody>
             </table>
             </div>
         </div>
         </div>
         <div className="row justify-content-center align-items-center">
             <p className="arrow-p"> <i className="arrow left" onClick={this.prev}></i></p>
             <Pagination size="lg">{this.state.items}</Pagination>
                 <p className="arrow-p"> <i className="arrow right" onClick={this.next}></i></p>
</div>
    
</div>
<Futer/>
        </div>)
    }
}
export default Users;