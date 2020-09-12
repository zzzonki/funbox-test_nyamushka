import React, {Component} from 'react'
import './style.css'
import Card from '../Card'
import info from '../../info'

export default class CardField extends Component{
    render(){
        const element = info.map((i) =>
            <Card key={i.id} weight={i.weight} inside={i.inside} portions={i.portions} mouses={i.mouses} p3={i.p3} about={i.about} out={i.out} />
        )
        return(
            <div className='card_field'>
                {element}
            </div>
        )
    }
}