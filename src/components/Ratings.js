import React from 'react'
import {Card} from 'react-bootstrap'


function Ratings({item}) {
  return (
    <div>
        {item.map(ite=>(
           <Card>
           <Card.Body>{ite.name}</Card.Body>
           <Card.Body>Comments:{ite.comments}</Card.Body>
           <Card.Body>Rating: {ite.rating}</Card.Body>

         </Card>
        )
            )}
 
    </div>
  )
}

export default Ratings