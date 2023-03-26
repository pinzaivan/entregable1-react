import React from 'react'
import Button from './Button'
import "./styles/containerInfo.css"

const ContainerInfo = ({quote, handlNewQuote}) => {

  return (
    <div>
      <section className='containerInfo'>
        <h1 className='containerInfo__title'>INFOGALAX</h1>

        <p className='containerInfo__phrase'>{quote.phrase}</p>

       <button className='containerInfo__buttom' onClick={handlNewQuote}><i class='bx bx-refresh'></i></button>

       <article className='containerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
      <h5>Autor: aIvan jojoa</h5>
    </article>
      </section>
    </div>
  )
}

export default ContainerInfo
