import React, { useCallback, useRef } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { MDBCol } from 'mdbreact';

const Download = (props) => {
    const ref = useRef(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.error('oops, something went wrong!', err);
            })
    }, [ref])

    return (
        <MDBCol sm='12' md='6' style={{ display: props.display }}>
            <div ref={ref} >
                <div id='imgDiv' >
                    <img id='randomImg' src={props.randomImg} alt='' />
                    <br />
                    <div id='imgTexts'>
                        <h2 id='topText'
                            style={{
                                color: props.topTextColor,
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
            <div className='col-sm-12'>
                <i className="fas fa-download fa-3x text-dark pointer" title='Download' onClick={onButtonClick}></i>
                <h3 className='text-dark'>Download</h3>
            </div>
        </MDBCol>
    )
}
export default Download