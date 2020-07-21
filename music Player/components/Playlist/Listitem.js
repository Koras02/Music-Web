import React from 'react';
import Control from './Control';

const Item = props =>
  <div
    style={props.css}
    className={props.class}
  >
    <div onClick={props.onClick}>
        <img className={'${props.class}-cover'} src={props.cover} alt="playlist item" />
        <div className={'${props.class}-infoBox'}>
          <span className={'${props.class}-title'}>{props.title}</span>
          <span className={'${props.class}-artist'}>{props.artist}</span>
          <span ClassName={'${props.class}-album'}>{props.album}</span>
        </div>
    </div>
    <button onClick={props.deleteItem}>
       <i className="minus circle icon"/>
    </button>
  </div>;
export default Item;