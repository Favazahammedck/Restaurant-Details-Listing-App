import React from 'react'
import { useEffect,useState } from 'react'
import {Col, Row} from 'react-bootstrap'
import Restaurant from './Restaurant'
import {useSelector,useDispatch} from 'react-redux'
import {listrestaurants} from '../actions/Restaurantaction.js'

function Home() {
    // const [hotels,sethotels]=useState([])
    const [filter,setfilter]=useState("")
    const dispatch=useDispatch()
    const restaurantdata=useSelector(state=>state.restaurantReducer)
    const {restaurants}=restaurantdata
    useEffect(() => {
      dispatch(listrestaurants())
  
    }, [])
console.log("our data is",restaurants)
    
    
  return (
    <>
      <Row>
          <input value={filter} placeholder="Search a place here" type="text" onChange={event=>setfilter(event.target.value)}/>
          {restaurants ? (
              restaurants.filter(item=>{
                  if(filter==""){
                      return item
                  }
                  else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
                      return item
                  }
              })
              .map(item=>
                <Col sm={12} md={8} lg={6} xl={3}>
                    <Restaurant item={item}/>
                  </Col>
                
                )
          ):("errors")}
      </Row>



    </>
  )
}

export default Home