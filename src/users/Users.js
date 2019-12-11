import React, {Component} from 'react';
import '../users/users.scss'
import { NavLink } from 'react-router-dom';
import Heder from '../heder/Heder';
import Futer from '../futer/Futer';
import Data  from '../lib/users.json';
import DataUser from '../lib/users_statistic.json';
//import React, { useState } from 'react';





class List extends Component {
    state = {
        email: this.props.email || '',
        first_name: this.props.first_name || '',
        gender: this.props.gender || '',
        id: this.props.id || '',
        ip_address: this.props.ip_address || '',
        last_name: this.props.last_name || '',
        clicks:  this.props.allClicks || '',
        page_views: this.props.allPage_views || ''
      }
      render() {

        return (
            <tr>
             <th scope="row">{this.state.id}</th>
            <td>{this.state.first_name}</td>
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
page: [{size: 1, active: false, s:0, e:51 },
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
page_views:  ''
    }  

    }
  

componentDidMount() {
      this._isMounted = true;
const start = this.state.start;
const end = this.state.end;



     this.prev = () => {
        if (this.state.start === 0){
          const s = 950;
          const e = 1001;
          this.setState({start: s, end: e});
          this.getStat(Data, DataUser, s, e);
        }else{
const s = this.state.start - 50;
const e = this.state.end - 50;
this.setState({start: s, end: e});
this.getStat(Data, DataUser, s, e);
        }
     }

     this.next = () => {
      if (this.state.start === 950){
        const s = 0;
        const e = 51;
        this.setState({start: s, end: e});
        this.getStat(Data, DataUser, s, e);
      }else{
const s = this.state.start + 50;
const e = this.state.end + 50;
this.setState({start: s, end: e});
this.getStat(Data, DataUser, s, e);
      }
    }
    
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
    
    this.getStat(Data, DataUser, start, end);

  }

  componentWillUnmount() {
    this._isMounted = false; 
  }
    render () {
        return (<div>
<Heder/>
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
           <table className="table table-bordered">
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
          <List {...data}  key={data.id} />
        ) : <p>Загрузка ... </p>
      }
              </tbody>
             </table>

         </div>
         </div>
         <div className="row justify-content-center align-items-center">

             <p className="arrow-p"> <i className="arrow left" onClick={this.prev}></i></p>
             <div className='box' active={this.state.page[0].active}><p className="text-center" box='1'>{this.state.page[0].size}</p></div>
             <div className='box' active={this.state.page[1].active}><p className="text-center" box='2'>{this.state.page[1].size}</p></div>
             <div className='box' active={this.state.page[2].active}><p className="text-center" box='3'>{this.state.page[2].size}</p></div>  
             <div className='box' active={this.state.page[3].active}><p className="text-center" box='4'>{this.state.page[3].size}</p></div>
             <div className='box' active={this.state.page[4].active}><p className="text-center" box='5'>{this.state.page[4].size}</p></div>
                 <p className="arrow-p"> <i className="arrow right" onClick={this.next}></i></p>
</div>
    
</div>
<Futer/>
        </div>)
    }
}
export default Users;