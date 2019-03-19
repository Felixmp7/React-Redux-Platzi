import React, { Component } from 'react'
import bitCoin from '../images/covers/bitcoin.jpg'

class Media extends Component {
  render(){
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red',
      }
    }
    return(
      <div style={styles.container}>
        <div>
          <img
            src={bitCoin}
            alt=""
            width={260}
            height={160}
          />
          <h3>¿Por qué aprender React?</h3>
          <p>Felix Pacheco</p>
        </div>
      </div>
    )
  }
}

export default Media;
