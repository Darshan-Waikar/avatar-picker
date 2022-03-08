import React, { useState } from 'react'
import './ProfileComponent.css'
import profileImage1 from '../Assets/avatar1.png'
import profileImage2 from '../Assets/avatar2.png'
import profileImage3 from '../Assets/avatar3.png'
import profileImage4 from '../Assets/avatar4.png'
import profileImage5 from '../Assets/avatar5.png'
import profileImage6 from '../Assets/avatar6.png'

import { Popover, Typography } from '@material-ui/core'



function ProfileComponent() {

    const ImagePool = [{ src: '../Assets/avatar1.png' },
    { src: '../Assets/avatar2.png' },
    { src: '../Assets/avatar3.png' },
    { src: '../Assets/avatar4.png' },
    { src: '../Assets/avatar5.png' },
    { src: '../Assets/avatar6.png' }]

    const [anchor, setAnchor] = useState(null)
    const [Image, SetImage] = useState(profileImage1)
    const imageID = document.getElementById('avatar')

    const openpopover = (event) => {

        console.log("hello")
        setAnchor(event.currentTarget);



    }

    const hover = () => {

        console.log("hovered")

    }

    const selector2 = () => {



        imageID.src = SetImage(profileImage2)

        console.log("CLICKED")





    }
    const selector1 = () => {




        imageID.src = SetImage(profileImage1)

        console.log("CLICKED")





    }
    const selector3 = () => {



        imageID.src = SetImage(profileImage3)

        console.log("CLICKED")





    }
    const selector4 = () => {




        imageID.src = SetImage(profileImage4)

        console.log("CLICKED")





    }
    const selector5 = () => {




        imageID.src = SetImage(profileImage5)

        console.log("CLICKED")





    }
    const selector6 = () => {


        imageID.src = SetImage(profileImage6)

        console.log("CLICKED")





    }
    return (
        <div className='Profile'>



            <div className='Profile_view'>

                <img src={Image} id='avatar' className='Profile' onClick={openpopover} onMouseOver={hover} />



            </div>

            <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                onClose={() => setAnchor(null)}>



                <Typography variant='h6' align='center'>
                    <div className='fontFamily'>

                        Choose Your Avatar
                    </div>
                </Typography>

                <img src={profileImage1} className='preview1' onClick={selector1} />
                <img src={profileImage2} className='preview2' onClick={selector2} />
                <img src={profileImage3} className='preview3' onClick={selector3} />
                <img src={profileImage4} className='preview4' onClick={selector4} />
                <img src={profileImage5} className='preview5' onClick={selector5} />
                <img src={profileImage6} className='preview6' onClick={selector6} />



            </Popover>


        </div >

    )
}

export default ProfileComponent