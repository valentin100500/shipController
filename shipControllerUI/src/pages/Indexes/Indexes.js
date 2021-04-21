import React from 'react'
import classes from './Indexes.module.scss'
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

const Indexes = (props) => {
    return (
        <div className={classes.indexes}>
            <Card
                bg='secondary'
                text='white'
                className={classes.card}
            >
                <Card.Header>Показники датчиків</Card.Header>
                <Card.Body>
                    <div className={classes.cardText}>
                        <div className={classes.item}>
                            <p className={classes.title}>Рівень заряду: </p>
                            <p className={classes.value}>{props.chargeLevel} %</p>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>Температура двигуна: </p>
                            <p className={classes.value}>{props.temperature.motor} &deg;C</p>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>Температура регулятора: </p>
                            <p className={classes.value}>{props.temperature.regulator} &deg;C</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

Indexes.propTypes = {
    temperature: PropTypes.object,
    chargeLevel: PropTypes.number
}

export default Indexes
