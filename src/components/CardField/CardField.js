import React, {Component} from 'react'
import './style.css'
import Card from '../Card'
import info from '../../info'

export default class CardField extends Component{
    state = {
        onTablet: null
    }

    mediaUpdate = () => {
        this.setState({
            onTablet: window.matchMedia('screen and (max-width: 799px) and (min-width: 700px) and (orientation:portrait)').matches
        })
    }

    componentDidMount(){
        this.setState({
            onTablet: window.matchMedia('screen and (max-width: 799px) and (min-width: 700px) and (orientation:portrait)').matches
        })
        window.addEventListener('resize', this.mediaUpdate)
    }

    render(){
        if(this.state.onTablet){
            const info_top = info.slice(0,1)
            const info_bot = info.slice(1,3)
            const element_tablet__top = info_top.map((i) =>
            <div key={i.id} className='card_field__line'>
                <Card key={i.id} weight={i.weight} inside={i.inside} portions={i.portions} mouses={i.mouses} p3={i.p3} about={i.about} out={i.out} />
            </div>)
            const element_tablet__bot_cards = info_bot.map((i) =>
                <Card key={i.id} weight={i.weight} inside={i.inside} portions={i.portions} mouses={i.mouses} p3={i.p3} about={i.about} out={i.out} />
            )
            const element_tablet__bot = <div className='card_field__line'>{element_tablet__bot_cards}</div>
            return(
                <div className='card_field'>
                    {element_tablet__top}
                    {element_tablet__bot}
                </div>
            )
        } else{
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
}