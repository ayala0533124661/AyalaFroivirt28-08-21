import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Days from './Days'
import { actions } from "../../redux/Action";

export default function HomeHeader() {

    // const { arrDays, temp, city } = props;
    const dispatch = useDispatch();
    const currentCity = useSelector(
        (state) => state.weather.currentCity);
    const currentTemp = useSelector(
        (state) => state.weather.currentTemp);
    const currentWeather = useSelector(
        (state) => state.weather.currentWeather);
    const arrDays = useSelector(
        (state) => state.weather.arrDays);
    const arrFavorites = useSelector(
        (state) => state.favorites.arrFavorites);


    //add the select city to the the favorites list
    function addFavorite() {
        let arr = [...arrFavorites]
        let flag = true;
        arr.forEach((item, i) => {
            if (item.city === currentCity) {
                flag = false
            }
        })
        if (flag === true) {
            arr.push({ city: currentCity, temp: currentTemp, weather: currentWeather });
            dispatch(actions.setArrFavorites(arr))
        }
        else {
            alert("this city exists");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={6} lg={6} className="d-flex justify-content-center text-secondary" >
                        <div>{currentCity}</div>
                    </Col>
                    <Col xs={6} lg={6} className="d-flex justify-content-center text-secondary" >
                        <div>{currentTemp} C</div>
                    </Col>
                    <Col xs={6} lg={6} className="d-flex justify-content-center text-secondary">

                        <Button variant="warning" onClick={addFavorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                {arrDays.map((day, i) => {
                    return <Days index={i} temp={day.Temperature.Minimum.Value} key={i} />
                })}
            </Container>
        </>
    );
}