import React from 'react'

const Project = ({ id, name, url, skills, role }) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-6 project-card" >
            <div className="image-project">
                <div className={`img-pro ${id}`}> </div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            {skills && <h3><b>{'Skills - '}</b></h3>}
            {skills && <h3>{skills.map(skill => skill)}</h3>}
            {<h3><b>{'Roles and Responsiblities - '}</b></h3>}
            <div style={{ 'white-space': 'pre-line' }}>{role}</div>
        </div >
        // <div data-aos="fade-up" className=" col-12 col-lg-6 project-card" style={{ height: '50%' }}>
        //     <div className="image-project" >
        //         <div className={`img-pro ${id}`} ></div>
        //     </div>
        //     <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
        //     {skills && <h3>{skills.map(skill => skill)}</h3>}
        // </div>
    )
}

export default Project
