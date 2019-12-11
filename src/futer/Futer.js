import React, {Component} from 'react';
import "../futer/futer.scss";



class Futer extends Component {
    constructor(props){
        super(props)
        this.state = {

            

    }
    }

    render () {
        return (<div className="futer-bottom">
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
        </div>)
    }
}
export default Futer;