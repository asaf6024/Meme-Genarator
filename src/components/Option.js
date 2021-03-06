import { MDBCol, MDBCard } from 'mdbreact'
import React from 'react'
import Button from 'react-bootstrap/Button'
const Option = (props) => {
    return (
        <>
            <MDBCol sm='12' md='4' className='cardOfOption' id={`option${props.optionNumber}`}>
                <MDBCard id={`cardOption${props.optionNumber}`}>
                    <h3 style={{ display: props.display }}>Option {props.optionNumber}</h3>
                    <h4 className={`col-sm-12 h6 ${props.classOfHeadline}`}>{props.optionType}</h4>
                    {
                        props.optionTag == 'Text' ?
                            <input type='text' size='200'
                                title='Paste Url'
                                id='1'
                                className='col-sm-12'
                                onChange={props.insertUrlToImg} >
                            </input>
                            : props.optionTag == 'File' ?
                                <>
                                    <label for="2" className="fas fa-upload fa-2x pointer" style={{ display: 'inline' }} title='Upload'></label>
                                    <input type="file" id='2' accept=".png, .jpg, .jpeg"
                                        className='col-sm-12'
                                        style={{ display: 'none' }}
                                        name="myfile" onChange={props.uploadFile}>
                                    </input>
                                </>
                                :
                                <i className="fas fa-random fa-2x" id='3' title='Find' onClick={props.ChangeImg} style={{ cursor: 'pointer', visibility: props.visibility }}>
                                </i>

                        // <Button onClick={props.ChangeImg} as="input" type="submit" value="Submit" value={props.optionTag} />

                    }
                </MDBCard>
            </MDBCol>
        </>
    )
}
export default Option