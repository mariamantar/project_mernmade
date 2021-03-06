import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import AccountCard from "./AccountCard";

class CardGrid extends Component {
  constructor(props) {
    super(props);
  }

  //this function will return array of element 20 divs in this case 
  multipleElements() {
    let elements = [];
    const { profile } = this.props.profile;
    for(let i = 0; i < this.props.accounts.length; i++) {
      let saved;
      if ((profile.shortlist !== undefined) && (profile.shortlist.length !== 0) && (profile.shortlist.includes(this.props.accounts[i]._id))) {
        saved = true
      } else {
        saved = false
      }
      elements.push(<AccountCard key={i} account={this.props.accounts[i]} profile={this.props.profile} saved={saved}/>)
    }
    return elements;
  }

  //this function will separate each four element to display 
  separateElement () { 
    var separateElements = [];
    var multiElements = this.multipleElements();

    for(var i = 0; i < multiElements.length; i+=3) {
        var oneRow = [];
        oneRow.push(multiElements.slice(i, i+3).map(item => {
      return <Col key={i} style={{display: 'inline-block'}}>{item}</Col>
    }))
      separateElements.push(oneRow.map(itm => {return <Row key={i}>{itm}</Row>}))
    }
    return separateElements;
  }
              
  render() {
    return (<div> {this.separateElement()} </div>);
  }
};

export default CardGrid;
