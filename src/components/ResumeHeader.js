import React from 'react';

const ResumeHeader = ({name, img}) => {

    return(
        <div class="color">
                <div class='resumeHeader'>
                    <h1 class='inline text-3.5xl font-bold text-chestnut -ml-0.5'>
                        {name} 
                    </h1>
                    <img class="inline h-9 -mt-4 ml-5" alt="bootstrap" loading='lazy' src={img}/>
                </div>
        </div>
    )
}


 
export default ResumeHeader;