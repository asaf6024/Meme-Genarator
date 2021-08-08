import React from 'react'
import { MDBCol, MDBCard } from 'mdbreact'
const TextStyles2 = (props) => {
    return (
        <MDBCol sm='12'>
            <h3 className='text-dark text-center'>{props.topText != null ? 'Top Text' : 'Bottom Text'}</h3>
            <MDBCard className='text-left' style={{ margin: 'auto' }}>
                <div className='col-sm-12'>
                    <label className='col-sm-6'>Text: </label>
                    <input type='text'
                        className='col-sm-6'
                        name={props.topText != null ? 'topText' : 'bottomText'}
                        value={props.topText != null ? props.topText : props.bottomText}
                        onChange={props.ChangeHandler}>
                    </input>
                    <br />
                    <label for="head" className='col-sm-10'>Color: </label>
                    <input onChange={props.setColor} type="color" id="head"
                        className='col-sm-2'
                        name="topTextColor"
                        name={props.topTextColor != null ? 'topTextColor' : 'bottomTextColor'}
                        value={props.topTextColor != null ? props.topTextColor : props.bottomTextColor}
                    >
                    </input>
                    <br />
                    <label className='col-sm-8 col-lg-4'>X Position:</label>
                    <input type='number'
                        placeholder='X position'
                        onChange={props.changePosiotiontTopText != null ? props.changePosiotiontTopText : props.changePosiotiontBottomText}
                        className='col-sm-4 col-lg-2'
                        name={props.topPositionX != null ? 'topPositionX' : 'topPositionXBottom'}
                        value={props.topPositionX != null ? props.topPositionX : props.topPositionXBottom}
                        step='50'>
                    </input>

                    <label className='col-sm-8 col-lg-4'>Y Position:</label>
                    <input type='number'
                        placeholder='Y position'
                        className='col-sm-4 col-lg-2'
                        onChange={props.changePosiotiontTopText != null ? props.changePosiotiontTopText : props.changePosiotiontBottomText}
                        name={props.topPositionY != null ? 'topPositionY' : 'topPositionYBottom'}
                        value={props.topPositionY != null ? props.topPositionY : props.topPositionYBottom}
                        step='50'>
                    </input>

                    <>
                        <label className='col-sm-12 col-lg-4'>Weight:</label>
                        <span className='col-sm-12 col-lg-8'>
                            {
                                props.fontWeight.map(font => {
                                    let classActive = ''
                                    if (font.selected)
                                        classActive = 'selectedTextDecoration'

                                    return <React.Fragment key={font.id}>
                                        <button value='normal'
                                            className={`buttonOfProperty ${classActive}`}
                                            name={'fontWeight'}
                                            value={props.fontWeight}
                                            id={font.id}
                                            onClick={e => props.setSelected(e, props.fontWeight)}
                                        >{font.name}</button>
                                    </React.Fragment>
                                })
                            }

                        </span>
                        <br />
                        <label className='col-sm-12 col-lg-4'>Decoration:</label>
                        <span className='col-sm-12 col-lg-8'>
                            {
                                props.fontDecoration.map(font => {
                                    let classActive = ''
                                    if (font.selected)
                                        classActive = 'selectedTextDecoration'
                                    return <React.Fragment key={font.id}>
                                        <button value='normal'
                                            className={`buttonOfProperty ${classActive}`}
                                            id={font.id}
                                            onClick={e => props.setSelected(e, props.fontDecoration)}
                                        >{font.name}</button>
                                    </React.Fragment>

                                })
                            }
                        </span>
                        <br />
                        <label className='col-sm-12 col-lg-4'>Style:</label>
                        <span className='col-sm-12 col-lg-8'>
                            {
                                props.fontStyle.map(font => {
                                    let classActive = ''
                                    if (font.selected)
                                        classActive = 'selectedTextDecoration'
                                    return <React.Fragment key={font.id}>
                                        <button value='normal'
                                            className={`buttonOfProperty ${classActive}`}
                                            id={font.id}
                                            onClick={e => props.setSelected(e, props.fontStyle)}
                                        >{font.name}</button>
                                    </React.Fragment>

                                })
                            }
                        </span>
                        <label className='col-sm-12 col-lg-4'>Style:</label>
                        <span className='col-sm-12 col-lg-8'>
                            {
                                props.fontVariante.map(font => {
                                    let classActive = ''
                                    if (font.selected)
                                        classActive = 'selectedTextDecoration'
                                    return <React.Fragment key={font.id}>
                                        <button value='normal'
                                            className={`buttonOfProperty ${classActive}`}
                                            id={font.id}
                                            onClick={e => props.setSelected(e, props.fontVariante)}
                                        >{font.name}</button>
                                    </React.Fragment>

                                })
                            }
                        </span>
                        <br />
                        <label className='col-sm-12 col-lg-4'>Transform:</label>
                        <span className='col-sm-12 col-lg-8'>
                            {
                                props.fontTransform.map(font => {
                                    let classActive = ''
                                    if (font.selected)
                                        classActive = 'selectedTextDecoration'
                                    return <React.Fragment key={font.id}>
                                        <button value='normal'
                                            className={`buttonOfProperty ${classActive}`}
                                            id={font.id}
                                            onClick={e => props.setSelected(e, props.fontTransform)}
                                        >{font.name}</button>
                                    </React.Fragment>

                                })
                            }
                        </span>
                    </>

                </div>
            </MDBCard>
        </MDBCol >
    )
}
export default TextStyles2