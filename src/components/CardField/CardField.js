import React, {Component} from 'react'
import './style.css'
import Card from '../Card'

export default class CardField extends Component{
    render(){
        return(
            <div className='card_field'>
                <Card weight='0,5' inside='фуа-гра' portions='10' mouses='мышь' p3='' about='Печень утки разварная с артишоками.' />
                <Card weight='2' inside='рыбой' portions='40' mouses='2 мыши' p3='' about='Головы щучьи с чесноком да свежайшая сёмгушка.' />
                <Card weight='5' inside='курой' portions='100' mouses='5 мышей' p3='заказчик доволен' about='Филе из цыплят с трюфелями в бульоне.' />
            </div>
        )
    }
}