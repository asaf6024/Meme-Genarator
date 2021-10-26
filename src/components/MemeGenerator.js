import React from 'react'
import '../memeGenerator.css'
import { MDBCard, MDBCol, MDBRow } from 'mdbreact';
import Option from './Option'
import Download from './Download';
import fontWeight from '../dist/obj/fontWeight';
import fontDecoration from '../dist/obj/fontDecoration'
import fontStyle from '../dist/obj/fontStyle';
import fontVariante from '../dist/obj/fontVariante';
import fontTransform from '../dist/obj/fontTransform';
import TextStyles from './TextStyles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class MemeGenerator extends React.Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: '',
            allMemeImages: [],
            urlImg: '',
            topTextColor: '',
            bottomTextColor: '',
            topTextSize: '',
            bottomTextSize: '',
            topPositionX: null,
            topPositionY: null,
            topPositionXBottom: null,
            topPositionYBottom: null,
            headerText: '',
            cardText: '',
            display: 'none',
            memeTextsDisplay: 'none',
            visibility: '',
            disable1: '',
            disable2: '',
            disable3: '',
            fontWeight: [],
            fontDecoration: [],
            fontStyle: [],
            fontVariante: [],
            fontTransform: [],
            fontWeight2: [],
            fontDecoration2: [],
            fontStyle2: [],
            fontVariante2: [],
            fontTransform2: []
        }
        this.ChangeHandler = this.ChangeHandler.bind(this)
        this.ChangeImg = this.ChangeImg.bind(this)
        this.insertUrlToImg = this.insertUrlToImg.bind(this)
        this.setColor = this.setColor.bind(this)
        this.changePosiotiontTopText = this.changePosiotiontTopText.bind(this)
        this.changePosiotiontBottomText = this.changePosiotiontBottomText.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.gererateActive = this.gererateActive.bind(this)
        this.reset = this.reset.bind(this)
        this.setSelected = this.setSelected.bind(this)
    }

    componentDidMount() {

        // Meme API
        fetch('https://api.imgflip.com/get_memes')

            //convert Api to a json
            .then(response => response.json())

            //Insert Api obj into the App obj
            .then(response => {
                const { memes } = response.data

                this.setState({
                    allMemeImages: memes, topTextColor: '#ffffff', bottomTextColor: '#ffffff',
                    topTextSize: '24',
                    bottomTextSize: '24',
                    topPositionX: 0, topPositionY: 0,
                    topPositionXBottom: 50, topPositionYBottom: 50,
                    cardText: 'Select one Option',
                    displayReset: 'none',
                    visibility: '',
                    fontWeight: fontWeight,
                    fontDecoration: fontDecoration,
                    fontStyle: fontStyle,
                    fontVariante: fontVariante,
                    fontTransform: fontTransform,
                    fontWeight2: [
                        {
                            id: 1,
                            name: 'normal',
                            selected: true
                        },
                        {
                            id: 2,
                            name: 'bold',
                            selected: false
                        }
                    ],
                    fontDecoration2: [
                        {
                            id: 1,
                            name: 'none',
                            selected: true
                        },
                        {
                            id: 2,
                            name: 'underline',
                            selected: false
                        },
                        {
                            id: 3,
                            name: 'overline',
                            selected: false
                        },
                        {
                            id: 4,
                            name: 'line-through',
                            selected: false
                        }
                    ],
                    fontStyle2: [
                        {
                            id: 1,
                            name: 'normal',
                            selected: true
                        },
                        {
                            id: 2,
                            name: 'unset',
                            selected: false
                        },
                        {
                            id: 3,
                            name: 'italic',
                            selected: false
                        },
                        {
                            id: 4,
                            name: 'Oblique',
                            selected: false
                        }
                    ],
                    fontVariante2: [
                        {
                            id: 1,
                            name: 'normal',
                            selected: true
                        },
                        {
                            id: 2,
                            name: 'small-caps',
                            selected: false
                        }
                    ],
                    fontTransform2: [
                        {
                            id: 1,
                            name: 'none',
                            selected: true
                        },
                        {
                            id: 2,
                            name: 'uppercase',
                            selected: false
                        },
                        {
                            id: 3,
                            name: 'lowercase',
                            selected: false
                        },
                        {
                            id: 4,
                            name: 'capitalize',
                            selected: false
                        }
                    ]
                })
            })
    }

    reset = () => {
        window.location.reload()
    }

    ChangeHandler(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    ChangeImg(event) {
        event.preventDefault()

        //get a random number (index in the array from api)
        const randomNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        //get the meme from that index + set 'randomImg' to the 'url (from api) of the random meme
        const randomMemeImg = this.state.allMemeImages[randomNum].url

        this.setState({
            randomImg: randomMemeImg,
            display: 'block',
            memeTextsDisplay: 'block',
            displayCardText: 'none',
            classOfHeadline: 'font-weight-bold h2',
            visibility: 'hidden'
        })
        this.gererateActive(event.target.id)
    }

    insertUrlToImg(event) {
        // event.preventDefault()

        this.setState({
            randomImg: event.target.value,
            display: 'block',
            memeTextsDisplay: 'block',
            displayCardText: 'none',
            classOfHeadline: 'font-weight-bold h2'
        })
        this.gererateActive(event.target.id)
    }

    uploadFile(event) {
        event.preventDefault()

        //insert img into img selector
        // document.getElementById('randomImg').src = URL.createObjectURL(event.target.files[0]);

        this.setState({
            randomImg: URL.createObjectURL(event.target.files[0]),
            display: 'block',
            memeTextsDisplay: 'block',
            displayCardText: 'none',
            classOfHeadline: 'font-weight-bold h2'
        })
        this.gererateActive(event.target.id)
    }

    gererateActive = (id) => {
        try {
            const el = document.querySelector('.active');
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            }
        } catch (error) {

        }
        this.setState({ headerText: 'Reset', displayReset: 'inline' })
        for (let index = 1; index < 4; index++) {

            if (index != id)
                document.getElementById(`option${index}`).classList.add('notActive')
            else {
                document.getElementById(`option${index}`).classList.add('col-md-12')
                document.getElementById(`cardOption${index}`).classList.add('active')
            }
        }
    }

    setColor(event) {
        event.preventDefault()

        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    // setSize(event) {
    //     event.preventDefault()

    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
    changePosiotiontTopText(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

        if (name === 'topPositionX') {
            document.getElementById('topText').style.marginLeft = value + 'px'
        }
        else if (name === 'topPositionY') {
            const positionY = document.getElementById('topText')
            positionY.style.bottom = value + 'px'
            positionY.style.position = 'relative'
        }
    }

    changePosiotiontBottomText(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

        if (name === 'topPositionXBottom') {
            document.getElementById('bottomText').style.marginLeft = value + 'px'
        }
        else if (name === 'topPositionYBottom') {
            const positionY = document.getElementById('bottomText')
            positionY.style.bottom = value + 'px'
            positionY.style.position = 'relative'
        }
    }

    setSelected(event, myArray) {
        event.preventDefault()

        let dinamicArray = [...myArray]

        dinamicArray.forEach(element => {
            if (element.id == event.target.id)
                element.selected = true
            else
                element.selected = false
        })

        this.setState({
            myArray: [dinamicArray]
        })
    }

    render() {

        return (
            <div className='container-fluid'>
                <div id='headerText' className='container'>
                    <h2 style={{ display: 'inline' }}>{this.state.headerText}&nbsp;</h2>
                    <i className="fas fa-redo pointer" style={{ display: this.state.displayReset }} title='Reset' onClick={this.reset}></i>

                    <MDBRow>
                        <Option
                            display={this.state.displayCardText}
                            classOfHeadline={this.state.classOfHeadline}
                            optionNumber={1}
                            optionType={'Paste an image url:'}
                            optionTag={'Text'}
                            insertUrlToImg={this.insertUrlToImg}
                        />
                        <Option
                            display={this.state.displayCardText}
                            classOfHeadline={this.state.classOfHeadline}
                            optionNumber={2}
                            optionType={'Upload a file:'}
                            optionTag={'File'}
                            uploadFile={this.uploadFile}
                        />
                        <Option
                            display={this.state.displayCardText}
                            classOfHeadline={this.state.classOfHeadline}
                            optionNumber={3}
                            optionType={'Find a random image:'}
                            optionTag={'Click to find'}
                            ChangeImg={this.ChangeImg}
                            visibility={this.state.visibility}
                        />
                    </MDBRow>
                    <hr />
                    <MDBCard className='col-sm-12'>
                        <div style={{ display: this.state.displayCardText }}>
                            <h2 className='text-dark'
                            >{this.state.cardText}&nbsp;
                                <i className="far fa-hand-point-up text-dark"></i>
                            </h2>
                        </div>
                        <MDBRow>
                            <form className='col-sm-12 col-md-6'>
                                <div id='memeTexts' style={{ display: this.state.memeTextsDisplay }}>

                                    <Tabs className='text-center'>
                                        <TabList>
                                            <Tab>First Text</Tab>
                                            <Tab>Second text</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <TextStyles
                                                topText={this.state.topText}
                                                ChangeHandler={this.ChangeHandler}
                                                setColor={this.setColor}
                                                topTextColor={this.state.topTextColor}
                                                topTextSize={this.state.topTextSize}
                                                changePosiotiontTopText={this.changePosiotiontTopText}
                                                topPositionX={this.state.topPositionX}
                                                topPositionY={this.state.topPositionY}
                                                setSelected={this.setSelected}
                                                fontWeight={this.state.fontWeight}
                                                fontDecoration={this.state.fontDecoration}
                                                fontStyle={this.state.fontStyle}
                                                fontVariante={this.state.fontVariante}
                                                fontTransform={this.state.fontTransform}
                                            />

                                        </TabPanel>
                                        <TabPanel>

                                            <TextStyles
                                                bottomText={this.state.bottomText}
                                                ChangeHandler={this.ChangeHandler}
                                                setColor={this.setColor}
                                                bottomTextColor={this.state.bottomTextColor}
                                                bottomTextSize={this.state.bottomTextSize}
                                                changePosiotiontBottomText={this.changePosiotiontBottomText}
                                                topPositionXBottom={this.state.topPositionXBottom}
                                                topPositionYBottom={this.state.topPositionYBottom}
                                                setSelected={this.setSelected}
                                                fontWeight={this.state.fontWeight2}
                                                fontDecoration={this.state.fontDecoration2}
                                                fontStyle={this.state.fontStyle2}
                                                fontVariante={this.state.fontVariante2}
                                                fontTransform={this.state.fontTransform2}
                                            />
                                        </TabPanel>
                                    </Tabs>
                                    <br />
                                </div>
                                <br />

                            </form>
                            <Download
                                display={this.state.display}
                                randomImg={this.state.randomImg}
                                topTextColor={this.state.topTextColor}
                                topText={this.state.topText}
                                topTextSize={this.state.topTextSize}
                                bottomText={this.state.bottomText}
                                bottomTextColor={this.state.bottomTextColor}
                                bottomTextSize={this.state.bottomTextSize}
                                fontWeight={this.state.fontWeight.filter(a => a.selected)}
                                fontDecoration={this.state.fontDecoration.filter(a => a.selected)}
                                fontStyle={this.state.fontStyle.filter(a => a.selected)}
                                fontVariante={this.state.fontVariante.filter(a => a.selected)}
                                fontTransform={this.state.fontTransform.filter(a => a.selected)}
                                fontWeight2={this.state.fontWeight2.filter(a => a.selected)}
                                fontDecoration2={this.state.fontDecoration2.filter(a => a.selected)}
                                fontStyle2={this.state.fontStyle2.filter(a => a.selected)}
                                fontVariante2={this.state.fontVariante2.filter(a => a.selected)}
                                fontTransform2={this.state.fontTransform2.filter(a => a.selected)}
                                ChangeImg={this.ChangeImg}
                                visibility={this.state.visibility}
                            />
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        )
    }
}
export default MemeGenerator