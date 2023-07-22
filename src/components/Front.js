import React from "react"

const Front = () => {
    return (
        <div className="front">
            <div className="home_container">
                <div >
                    <h1 className="hero">Hi, my name is Jack.</h1>
                </div>
                <p className="paragraph">I'm a computer science student with an affinity for data.
                    I have experience in <b className="other">software development</b>, <b className="duh">data science</b>, and <b className="well">sports analytics</b>, 
                    and am currently running a blog for football analysis.
                </p>
                {/* <div class="blog">
                    <a href="/blog">read me blog</a>
                </div> */}
            </div>
        </div>
    );
}

export default Front