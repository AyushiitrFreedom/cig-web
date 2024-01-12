import React from 'react'
import './Administrative.css'
import Director from '../Images/Director.png'
import Dean from '../Images/Dean.png'
import AssociateDean from '../Images/AssociateDean.png'

function Administrative() {
    return (
        <>
            <div className="cardbox">
                <div className="row">
                    {
                        AdministrativeData.map((A) => (
                            <div className="profileA my-4">
                                <div className="profile-imageA">
                                    <img src={A.Img} alt='' />
                                </div>
                                <p className="profile-usernameA"><span>{A.Name}</span></p>
                                <p className="profile-user-positionA"><span>{A.position}</span></p>
                                <div className="profile-linksA">
                                    <div className="mail">
                                        <i class="fa fa-envelope-o mx-1" aria-hidden="true"></i>
                                        <p>{A.Email}</p>
                                    </div>
                                    <div className="phone">
                                        <i class="fa fa-phone mx-1" aria-hidden="true"></i>
                                        <p> {A.phoneno}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )
}
const AdministrativeData = [
    {
        Name: "Prof. K.K Pant",
        position: "Director",
        Img: Director,
        Email: "kkpant[at]ch.iitr.ac.in",
        phoneno: "01332-285500"


    },
    {
        Name: "Prof.Akshay Dvivedi",
        position: "Dean Sponsored Research & Industrial Consultancy",
        Img: Dean,
        Email: "akshaydvivedi[at]me.iitr.ac.in",
        phoneno: "01332285428"
    },
    {
        Name: "Prof.Sai Ramudu Meka",
        position: "Associate Dean (Corporate Interaction)",
        Img: AssociateDean,
        Email: "s.r.meka[at]mt.iitr.ac.in",
        phoneno: "01332284860"
    },
]

export default Administrative