import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types'
class XiaojiejieItem  extends Component { //cc
    handleClick = ()=>{
        this.props.deleteItem(this.props.index)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }
    render() { 
        console.log('child-render')
        return ( 
            <div>
                <div onClick={this.handleClick}>{this.props.avname}为你做- {this.props.content}</div>
            </div>
         );
    }
}
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    avname:PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
export default XiaojiejieItem;