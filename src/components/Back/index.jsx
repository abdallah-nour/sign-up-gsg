import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './style.css'
import arrow from '../../images/arrow.svg'
import Txt from '../Txt'

class Back extends Component {
    render() {
        return (
            <div className='container-back'>
                <button onClick={()=> this.props.history.goBack()} className='back-btn'>
                    <img className='arrow-img' src={arrow} />
                    <Txt color='#8692A6' >Back</Txt>
                </button>
            </div>
        );
    }
}

export default withRouter(Back);
// export default (Back);
