import React from 'react'
import './Department.css'
import img1 from '../Images/depimg.jpg'
// import img2 from '../Images/depimg.jpg'
// import img3 from '../Images/depimg.jpg'
// import img4 from '../Images/depimg.jpg'
// import img5 from '../Images/depimg.jpg'
// import img6 from '../Images/depimg.jpg'
// import img7 from '../Images/depimg.jpg'
// import img8 from '../Images/depimg.jpg'
// import img9 from '../Images/depimg.jpg'
// import img10 from '../Images/depimg.jpg'
// import img11 from '../Images/depimg.jpg'
// import img12 from '../Images/depimg.jpg'
// import img13 from '../Images/depimg.jpg'
// import img14 from '../Images/depimg.jpg'
// import img15 from '../Images/depimg.jpg'
// import img16 from '../Images/depimg.jpg'
// import img17 from '../Images/depimg.jpg'


function Departments() {
    return (
        <div className="cardbox">
            <div className="row">
                {
                    list.map((L) => (
                        <article className="profileC my-3 mx-3">
                            <div className="cardImg">
                                <img className="imgdep" style={{ width: "100%" }} src={L.depImg} alt="Card" />
                            </div>
                            <div className="cardContaint">
                                <h5 className="cardTitle"><strong>{L.dep}</strong></h5>
                            </div>
                        </article>
                    ))
                }
            </div>

        </div>
    )
}
const list = [
    { id: "1", dep: "Applied Science and Engineering", depImg: img1 },
    { id: " 2", dep: "Architecture & Planning", depImg: img1 },
    { id: "3", dep: "Biosciences and Bioengineering", depImg: img1 },
    { id: 4, dep: "Chemical Engineering", depImg: img1 },
    { id: 5, dep: "Chemistry", depImg: img1 },
    { id: 6, dep: "Civil Engineering", depImg: img1 },
    { id: 7, dep: "Computer Science and Engineering", depImg: img1 },
    { id: 8, dep: "Design", depImg: img1 },
    { id: 9, dep: "Earthquake Engineering", depImg: img1 },
    { id: 10, dep: "Earth Sciences", depImg: img1 },
    { id: 11, dep: "Electrical Engineering", depImg: img1 },
    { id: 12, dep: "Electronics and Communication Engineering", depImg: img1 },
    { id: 13, dep: "Humanities and Social Sciences", depImg: img1 },
    { id: 14, dep: "Hydrology", depImg: img1 },
    { id: 15, dep: "Hydro and Renewable Energy", depImg: img1 },
    { id: 16, dep: "Management studies", depImg: img1 },
    { id: 17, dep: "Mathematics", depImg: img1 },
    { id: 18, dep: "Mechanical and Industrial Engineering", depImg: img1 },
    { id: 19, dep: "Metallurgical and Materials Engineering", depImg: img1 },
    { id: 20, dep: "Paper Technology", depImg: img1 },
    { id: 21, dep: "Physics", depImg: img1 },
    { id: 22, dep: "Polymer and Process Engineering", depImg: img1 },
    { id: 23, dep: "Water Resources Development and Management", depImg: img1 },
];

export default Departments