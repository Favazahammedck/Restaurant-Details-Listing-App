import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurant({item}) {
  return (
    <Link to={`restaurants/${item.name}/${item.id}`}>
        <Card className='my-3 p-3 rounded'>
  <Card.Img variant="top" src={item.photograph} className="p-3"/>
  <Card.Body>
    <Card.Title as="div">{item.name}</Card.Title>
    <Card.Text as="div"><p>cuisine:{item.cuisine_type}</p> </Card.Text>
    <Card.Text as="div">{item.neighborhood} </Card.Text>
    
  </Card.Body>
</Card>
    </Link>
  )
}

export default Restaurant
