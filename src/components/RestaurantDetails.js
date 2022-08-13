import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import Ratings from './Ratings'

function RestaurantDetails() {
    const [data, setdata] = useState([])
    const params = useParams()
    const { id } = params
    useEffect(() => {
        const fetchdata = async () => {
            fetch('/restaurants.json')
                .then((res) => res.json())
                .then((data) => setdata(data.restaurants))
        }
        fetchdata()
    }, [])
    const details = data.find((i) => i.id == id)
    console.log("our data is ", data)
    console.log("our id is ", id)
    console.log("our details is", details)

    return (
        <>
            <Link className="btn btn-outline-dark my-2 rounded bt-sm" to="/">GO BACK</Link>
            {details ? (
                <Row className='my-3'>
                    <Col md={3}>
                        <Image className="img" src={details.photograph} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h2>{details.name}</h2>
                            <p>{details.neighborhood}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>cuisine:{details.cuisine_type}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Address:{details.address}</p>
                        </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h4>operating hours:</h4>
                            <p>Monday:{details.operating_hours.Monday}</p>
                            <p>tuesday:{details.operating_hours.Tuesday}</p>
                            <p>Wednesday:{details.operating_hours.Wednesday}</p>
                            <p>Thursday:{details.operating_hours.Thursday}</p>
                            <p>Friday:{details.operating_hours.Friday}</p>
                            <p>Saturday:{details.operating_hours.Saturday}</p>
                            <p>Sunday:{details.operating_hours.Sunday}</p>
                        </ListGroup.Item>

                    </Col>
                    <Ratings item={details.reviews}/>

                </Row>

            ) : null}
        </>
    )
}

export default RestaurantDetails