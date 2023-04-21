import React from 'react';
import ResumeHeader from './ResumeHeader';

const ResumeContent = ({data}) => {
    let entry = data.entries;
    return(
        <div>
            <div class='mt-10 border-b-4 border-black'>
                <div className='resumeHeader'>
                    <ResumeHeader name={data.name} img={data.imageSource}/>
                </div>

            </div> 
            <div className="lg:w-11/12 md:mx-auto">
                
                { entry.map(project => (
                    <div className="resumeContent">
                        <h1 className='entryTitle'>{project.title}</h1>
                        <p className='entryHolder'>{project.holder}</p>
                        <div className="entryLogistics">
                            <p>{project.location}</p>
                            <p >{project.time}</p>
                        </div>

                        
                            <ul className='resumeEntry'>
                                {project.points.map(point => (
                                    <li className='entry'>
                                        <p>&#x2022; {point}</p>
                                    </li>
                                ))}
                                
                            </ul>
                     </div>
                ))
                }
        
            </div>
        </div>
    )
}


 
export default ResumeContent;