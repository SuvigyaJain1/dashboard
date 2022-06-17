import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, FormGroup, Row, Col } from 'react-bootstrap';
import Card from '../Card/Card'

function WeatherCard() {

    const url = "http://api.weatherstack.com/"
    const access_key = "b6f5071dd2f61854bee2d879a1359206";

    const [cardData, setData] = useState({
        location: 'loading',
        temperature: 'loading',
        humidity: 'loading',
        weather: 'loading'
    })

    interface WeatherApiReq {
        reqType: "current" | "historical" | "forecast";
        query: string;
        access_key: string;
        params?: object;
    }

    function makeApiReq(reqData: WeatherApiReq) {
        console.log(reqData);

        let endpoint: string;
        endpoint = url + reqData.reqType;
        console.log(endpoint);

        axios.get(endpoint, {
            params: {
                query: reqData.query,
                access_key: reqData.access_key,
            }
         })
         .then(res => {
            let data = res.data.current;
            setData({
                ...cardData,
                location: res.data.location.region,
                temperature: data.temperature,
                humidity: data.humidity,
                weather: data.weather_descriptions[0]
            })
         })
         .catch(err => {
            console.log(err);
         })
        
    }

    const formik = useFormik({
        initialValues: {},

        onSubmit: (values)=> {
            const reqData: WeatherApiReq = {
                reqType: "current",
                query: "New York",
                access_key: access_key,
            }
            makeApiReq(reqData);
        }
    });

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        formik.handleSubmit(e);
    }

    return (
        <Card className='weather row' >
            <Form onSubmit={handleSubmit} action="" className='col-md-5'>
                <Form.Group className='form-group'>
                    <Button type='submit' value='Refresh'variant='primary' as='input'/>
                </Form.Group>
            </Form>
            <Container className='col-md-5'>
                <Row>
                    <Col>Location</Col>
                    <Col>{cardData.location}</Col>
                </Row>
                <Row>
                    <Col>Temperature(°C)</Col>
                    <Col>{cardData.temperature}</Col>
                </Row>
                <Row>
                <Col>Humidity</Col>
                    <Col>{cardData.humidity}</Col>
                </Row>
                <Row>
                    <Col>Weather</Col>
                    <Col>{cardData.weather}</Col>
                </Row>
            </Container>
        </Card>
    )
}

export default WeatherCard