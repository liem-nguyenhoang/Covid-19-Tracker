import React from 'react'
import "./InfoBox.css"
import { Card, CardContent, Typography } from '@material-ui/core'


function InfoBox({ title, cases, total,active, isRed, ...props }) {
    return (
        <Card 
        id="infoBox" 
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} 
                    ${isRed && "infoBox--red"}`}
        >
            <CardContent>
                {/* Title i.e. Coronavirus cases */}
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

                {/* Number of cases */}
                <h2 className={`infoBox__cases  ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                {/* Number of totel */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox