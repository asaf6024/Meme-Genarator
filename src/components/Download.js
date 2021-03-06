import React, { useCallback, useRef, useEffect, useState } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { MDBCol, MDBRow } from 'mdbreact';

const Download = (props) => {
    const ref = useRef(null)
    const [display, setDisplay] = useState('none')

    useEffect(() => {

        props.randomImg.length > 10 &&
            window.scroll(0, 200)

    })
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }
        setDisplay('block')
        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name'
                link.href = dataUrl
                link.click()
                setDisplay('none')
            })
            .catch((err) => {
                console.error('oops, something went wrong!', err);
            })
    }, [ref])

    return (
        <>
            <MDBCol sm='12' md='6' style={{ display: props.display, margin: 'auto' }}>
                <div className="spinner-border" role="status" style={{ display }}>
                    <span className="sr-only">Loading...</span>
                </div>
                {
                    props.visibility == 'hidden' &&
                    <i className="fas fa-random fa-2x" title='Find' id='3' onClick={props.ChangeImg} style={{ cursor: 'pointer' }}>
                    </i>
                }
                <div ref={ref} >
                    <div id='imgDiv' >
                        <img id='randomImg' src={props.randomImg} alt='' />
                        <br />
                        <div id='imgTexts'>
                            <h2 id='topText'
                                style={{
                                    color: props.topTextColor,
                                    fontSize: `${props.topTextSize}pt`,
                                    fontWeight: props.fontWeight.map(a => a.name),
                                    textDecoration: props.fontDecoration.map(a => a.name),
                                    fontStyle: props.fontStyle.map(a => a.name),
                                    fontVariant: props.fontVariante.map(a => a.name),
                                    textTransform: props.fontTransform.map(a => a.name),
                                }}
                            >
                                {props.topText}</h2>
                            <h2 id='bottomText' style={{
                                color: props.bottomTextColor,
                                fontSize: `${props.bottomTextSize}pt`,
                                fontWeight: props.fontWeight2.map(a => a.name),
                                textDecoration: props.fontDecoration2.map(a => a.name),
                                fontStyle: props.fontStyle2.map(a => a.name),
                                fontVariant: props.fontVariante2.map(a => a.name),
                                textTransform: props.fontTransform2.map(a => a.name),
                            }}
                            >{props.bottomText}</h2>
                        </div>
                    </div>

                </div>

            </MDBCol>
            {
                props.visibility == 'hidden' &&
                <MDBCol sm='12' style={{ display: props.display }} className='text-center bgOfDownload'>
                    <i className="fas fa-download fa-3x text-dark pointer" title='Download' onClick={onButtonClick}></i>
                    <h3 className='text-dark'>Download</h3>
                </MDBCol>
            }

        </>
    )
}
export default Download