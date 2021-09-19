import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title, ongoing } from '../../profile'

const Works = () => {

    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{'On Going Project'}</h1>
                    </div>
                </>
                <div className="row">

                    {ongoing && ongoing.map((x) =>

                        <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} role={x.role} />
                    )}
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">

                    {projects && projects.map((x) =>

                        <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} role={x.role} />
                    )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    <div className="video-responsive" >
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/9v5hSZxZTEU`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        {/* <b>{'- Its android app based on Flutter also had payment integration with Razor pay.'}</b>
                        <div>

                        </div> */}
                    </div>
                </div>



                {/* <div className="row">
                    {miscellaneous && miscellaneous.map((x) =>
                        <Project key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div> */}
            </div>
        </>
    )
}

export default Works
