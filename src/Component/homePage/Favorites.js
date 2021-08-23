import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { actions } from "../../redux/Action";

export default function Favorites() {
    const favorites = useSelector(state => state.favorites.arrFavorites);
    const dispatch = useDispatch();
    const history = useHistory();

    //this function delete the select favorite  from the favorites list
    function deleteFavorites(i) {
        let arr = [...favorites];
        arr.splice(i, 1);
        console.log("arr", arr);
        dispatch(actions.setArrFavorites(arr));
    }
    //this function return us to home and show the details 
    function showDetails(city) {
        dispatch(actions.setCurrentCity(city));
        history.push("/")
    }
    return (
        <>
            {favorites?.map((favorite, i) => (
                <Card className="col-5" >
                    <Card.Body >
                        <Container onClick={()=>showDetails(favorite.city)} className="d-flex-column justify-content-center  ">
                            <Row className="d-flex align-items-center justify-content-center">
                                <Card.Text>
                                    {favorite.city}
                                </Card.Text>
                                <Card.Text >
                                    {favorite.temp}C
                                </Card.Text>
                                <Card.Text >
                                    {favorite.weather}
                                </Card.Text>
                            </Row>
                        </Container>
                          <Card.Text>
                            <button onClick={() => deleteFavorites(i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg></button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}