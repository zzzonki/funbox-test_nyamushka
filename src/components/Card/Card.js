import React, {Component} from 'react'
import './style.css'

export default class Card extends Component{
    state = {
        isDisabled: false,
        isSelected: false,
        isHovered: false
    }

    componentDidMount(){
        const {out} = this.props
        if(out){
            this.setState({
                isDisabled: true
            })
        } else{
            this.setState({
                isDisabled: false
            })
        }
    }
    render(){
        const {weight, inside, portions, mouses, p3, about} = this.props
        const border_color = this.state.isDisabled ? 'card_border is_disabled' : (this.state.isSelected ? (this.state.isHovered ? 'card_border is_selected-hovered' : 'card_border is_selected') : (this.state.isHovered ? 'card_border is_hovered' : 'card_border is_default')) 
        const ellips = this.state.isDisabled ? 'card_weight is_disabled' : (this.state.isSelected ? (this.state.isHovered ? 'card_weight is_selected-hovered' : 'card_weight is_selected') : (this.state.isHovered ? 'card_weight is_hovered' : 'card_weight is_default')) 
    const undercard = this.state.isDisabled ? <p className="card_outer-text">Печалька, с {inside} закончился</p> : (this.state.isSelected ? <p className="card_outer-text">{about}</p> : <p className="card_outer-text">Чего сидишь? Порадуй котэ, <span onClick={() => this.cardClick()} className="card_outer-text__link">купи.</span></p>)
        
        return(
            <div className="card_wrapper">
                <div onClick={() => this.cardClick()} onMouseEnter={() => this.cardHover()} onMouseLeave={() => this.cardLeave()} className={border_color}>
                    <div className="card">
                        <div className='card_info'>
                        <p>Сказочное заморское яство</p>
                        <h2>Нямушка</h2>
                        <h3>с {inside}</h3>
                        <ul>
                            <li>{portions} порций</li>
                            <li>{mouses} в подарок</li>
                            <li>{p3}</li>
                        </ul>
                        </div>
                        <div className="card_pic"></div>
                        <div className={ellips}><p>{weight}</p><p>кг</p></div>
                    </div>
                </div>
                {undercard}
            </div>
        )
    }

    cardClick = () =>{
        this.setState({
            isSelected: !this.state.isSelected,
            isHovered: false
        })
    }

    cardHover = () =>{
        this.setState({
            isHovered: true
        })
    }
    
    cardLeave = () =>{
        this.setState({
            isHovered: false
        })
    }
    test = () =>{
        this.setState({
            isHovered: !this.state.isHovered
        })
    }
}