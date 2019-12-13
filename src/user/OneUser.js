import React, {Component} from 'react';
import Heder from '../heder/Heder';
import Futer from '../futer/Futer';
import './user.scss';
import { NavLink } from 'react-router-dom';
import Data  from '../lib/users.json';
import DataUser from '../lib/users_statistic.json';
import { Chart } from "react-google-charts";

class OneUser extends Component {
    _isMounted = false;
    constructor(props){
        super(props)
        this.state = {
id: this.props.location.state || '',
name: '' ,
data: '',
data2:'',
a: [["day", "clicks"],
['2019-10-01', 0],
['2019-10-02', 0],
['2019-10-03', 0],
['2019-10-04', 0],
['2019-10-05', 0],
['2019-10-06', 0],
['2019-10-07', 0],
['2019-10-08', 0],
['2019-10-09', 0],
['2019-10-10', 0],
['2019-10-11', 0],
['2019-10-12', 0],
['2019-10-13', 0],
['2019-10-14', 0],
['2019-10-15', 0],
['2019-10-16', 0],
['2019-10-17', 0],
['2019-10-18', 0],
['2019-10-19', 0],
['2019-10-20', 0],
['2019-10-21', 0],
['2019-10-22', 0],
['2019-10-23', 0],
['2019-10-24', 0],
['2019-10-25', 0],
['2019-10-26', 0],
['2019-10-27', 0],
['2019-10-28', 0],
['2019-10-29', 0],
['2019-10-30', 0],
],
start: [["day", "clicks"]],
start2: [["day", "pages"]],
options: {
      title: 'Clicks',
      titleTextStyle: {
        fontName: '"Montserrat", sans-serif',
        fontSize: 24,
        bold: true,
      },
      curveType: 'function'
        },
options2: {
          title: 'Vievs',
          titleTextStyle: {
            fontName: '"Montserrat", sans-serif',
            fontSize: 24,
            bold: true,
          },
          curveType: 'function'
            }, 
info: ''

    }
}
 componentDidMount() {
        this._isMounted = true;
this.getUser = (Data, DataUser, id, a, start, start2) => {
let  user = Data.filter(item => item.id === id);
let  stat = DataUser.filter(item => item.user_id === id);
this.setState({name: user[0].first_name + ' ' + user[0].last_name});

let statistic = [];
for (let i = 0; i < stat.length; i++) {
    statistic.push([stat[i].date, stat[i].clicks ]);  
}
const result = start.concat(statistic);
this.setState({data: result});

let statistic2 = [];
for (let i = 0; i < stat.length; i++) {
    statistic2.push([stat[i].date, stat[i].page_views]);  
}
const result2 = start2.concat(statistic2);
this.setState({data2: result2});

const c = a.concat(statistic.filter(i=>a.indexOf(i)===-1));
let r =[]
for (let i = 0; i < c.length; i++) {
  r.push([c[i].slice(',',0)]);  
}

this.setState({info: c});
   }
this.getUser(Data, DataUser, this.state.id, this.state.a, this.state.start, this.state.start2)

}

 componentWillUnmount() {
    this._isMounted = false; 
  }
    render () {
        return (<div>
<Heder/>
<div className="user">
    <div className="row justify-content-between">
        <div className="container">
           <nav className="nav">
              <NavLink to="/" className="nav-link active">Main page</NavLink>
              <NavLink to="#" className="nav-link disabled" tabIndex="-1" aria-disabled="false">></NavLink>
              <NavLink to="/user" className="nav-link active" tabIndex="-1" aria-disabled="true">User satistics</NavLink>
              <NavLink to="#" className="nav-link disabled" tabIndex="-1" aria-disabled="true">></NavLink>
              <NavLink to="#" className="nav-link disabled" tabIndex="-1" aria-disabled="true">{this.state.name}</NavLink>
             </nav>
         </div>
    </div>
    <div className="row justify-content-between">
        <div className="container">
        <h5>{this.state.name}</h5>
        </div>
    </div>
    <div className="row justify-content-between">
    <div className="container">
    <Chart className="chart"
          chartType="LineChart"
          data={this.state.data}
          legendToggle
          options= {this.state.options}
        />
            <Chart className="chart"
          chartType="LineChart"
          data={this.state.data2}

          legendToggle
          options= {this.state.options2}
        />
      </div>
      </div>
</div>
<Futer/>
        </div>)
    }
}
export default OneUser;