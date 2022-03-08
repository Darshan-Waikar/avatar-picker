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
    const [prevImage, updatedImage] = useState(false)

    const openpopover = (event) => {

        console.log("hello")
        setAnchor(event.currentTarget);



    }

    const hover = () => {

        console.log("hovered")

    }

    const selector = () => {

        updatedImage(!Boolean(prevImage))

        var imageID = document.getElementById('avatar')
        imageID.src = { profileImage2 }

        console.log("CLICKED")





    }
    return (
        <div className='Profile'>



            <div className='Profile_view'>

                <img src={profileImage2} id='avatar' className='Profile' onClick={openpopover} onMouseOver={hover} />



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



                <Typography variant='h6'>
                    Hello
                </Typography>

                <img src={profileImage1} />
                <img src={profileImage2} onClick={selector} />
                <img src={profileImage3} />
                <img src={profileImage4} />
                <img src={profileImage5} />
                <img src={profileImage6} />



            </Popover>


        </div >

    )
}

export default ProfileComponent