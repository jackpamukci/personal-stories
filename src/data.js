import briefcase from './images/briefcase-solid.svg'
import education from './images/graduation-cap-solid.svg'
import project from './images/diagram-project-solid.svg'
import skills from './images/microchip-solid.svg'

export default {

    sections: [
        {
            name: "Education",
            imageSource: education,
            entries: [
                {
                    title: 'Bachelor of Science in Computer Science',
                    holder: 'University of North Carolina at Charlotte',
                    location: 'Charlotte, NC',
                    time: 'August 2021',
                    points: [
                        [<b>GPA</b>,': 3.8'],
                        [<b>Minor</b>, ': Data Science'],
                        ['University Honors Program'],
                        ['Unisys Corporation Scholar'],
                        ['Foundation for IT Education Scholar'],
                        ['Enactus Director of Projects']
                    ]
                },
            ]
        },
        {
            name: 'Experience',
            imageSource: briefcase,
            entries: [
                {
                    title: 'Incoming Software Engineering Intern',
                    holder: 'Bank of America',
                    location: 'Charlotte, NC',
                    time: 'June 2022',
                    points: [
                        ['Incoming @ CashPro Payments Team'],
                        ['Improving enterprise facing payment systems in Java and quantitaive credit estimators in Python']
                    ]
                },
                {
                    title: 'ETL Development Intern',
                    holder: 'Bank of Montreal Harris',
                    location: 'Charlotte, NC',
                    time: 'January 2022',
                    points: [
                        ['Developed ETL automation for automizing extraction and regression tasks. The automation resulted in ', <b>75% resource bandwidth reduction</b>, ' in regression testing and data masking loading activities.'],
                        ['Wrote transformation SQL files to process and load data tables used in bank economic stress testing models with ', <b>17 million+ entries and 100+ columns</b>,' to cloud data lake from on premises, ', <b>cutting processing time by 80%.</b>],
                        ['Maintained and debugged AWS cloud setup to automate ETL jobs using Airflow and PostgreSQL RDS setup']
                    ]
                },
                {
                    title: 'Full Stack Engineering Intern',
                    holder: 'Automotive Sporting Company (NDA)',
                    location: 'Charlotte, NC',
                    time: 'August 2022',
                    points: [
                        ['Modernized and optimized business workflows by constructing a ',<b>full-stack web app</b>,' migrating from original native tooling to ', <b>Flask/React frameworks</b>],
                        ['Implemented graphing functionalities for front-end using ', <b>D3 graphing library</b>, ' with editing capability'],
                        ['Wrote ', <b>REST API route</b>,' for sending changes from key graph points to backend']
                    ]
                },
                {
                    title: 'Undergraduate Research Assistant',
                    holder: 'University of North Carolina at Charlotte',
                    location: 'Charlotte, NC',
                    time: 'May 2022',
                    points: [
                        ['Created Python algorithms for cleaning and visualizing data collected from ', <b>500+</b>, ' student forms for CCI courses using ', <b>pandas</b>, ' and ', <b>NumPy</b>, '  libraries'],
                        ["Provided analysis for 3 dimensional data regarding student sentiment, grades and subjectivity using ", <b>sci-kit learn's K-means clustering model</b>, " and ", <b>NLTK natural language processing library</b>],
                        ['Developed online interface to display visualizations with ', <b>Nuxt.js</b>, ' and ', <b>Plotly.js</b>],
                        ["Presented research at 2022 UNC Charlotte Research Symposium, findings implemented on campus wide app"]
                    ]
                },
                
                {
                    title: 'College of Computing & Informatics Teaching Assistant',
                    holder: 'University of North Carolina at Charlotte',
                    location: 'Charlotte, NC',
                    time: 'January 2022',
                    points: [
                        ['Served as teaching assistant for ', <b>Introduction to Data Mining</b>,' and ', <b>Intro to Object Oriented Programming</b>,' for sections of ', <b>75 students</b>,' and ', <b>85 students</b>,' respectively'],
                        ['Conducted weekly labs and held office hours bi-weekly, providing key assistance to students'],
                        ['Learned to better explain technical concepts and give detailed feedback on assignments and projects, with a ', <b>94% rating</b>, ' from students']
                    ]
                }
            ]
        },
        {
            name: "Projects",
            imageSource: project,
            entries: [
                {
                    title: 'Tackling the Maldini Doctrine: Quantifying Defensive Positioning',
                    holder: 'Stats Perform',
                    location: 'London, England',
                    time: 'March 2023',
                    points: [
                        ['Introduced two new novel metrics to quantify positioning of football players in regards to cutting off dangerous passing options and winning the ball back in a position to start a counter attack'],
                        ['Trained xGBoost classification models using the new OptaVision dataset and tracking data from 100 Ligue One matches with hand crafted features based on player positioning, speed and control over a certain space'],
                        ['Presented findings at the Opta Forum, winning the Dr. Gary Gelade award for most outstanding presentation by an undergraduate student']
                    ]
                },
                {
                    title: 'Urban Thesaurus',
                    holder: 'React Native, Expo, Flask',
                    location: 'Charlotte, NC',
                    time: 'October 2022',
                    points: [
                        ['Created a ', <b>native mobile app</b>,' version of the popular website Urban Dictionary, but in thesaurus form, where word synonyms are defined using the Urban Dictionary API'],
                        ['Developed, designed and deployed Android and iOS exports on ', <b>Expo Go</b>, ' using ', <b>React Native</b>],
                        ['Wrote ', <b>Flask REST API</b>,' to fetch synonyms, antonyms and Urban Dictionary terms, deployed on ', <b>Heroku</b>]
                    ]
                },
                {
                    title: 'Find it Used',
                    holder: 'Python, Flask, React, Requests-HTML',
                    location: 'Charlotte, NC',
                    time: 'February 2022',
                    points: [
                        ['Built ', <b>full stack</b>,' web extension to aggregate products from a wide range of retailers to find the best price. Targeted towards online shoppers looking to find the best deal for products'],
                        ['Migrated ',<b>REST API</b> ,' from Node.js to Python ', <b>(reduced API call time by 70%)</b>,' using Flask and the Requests-HTML library to scrape large online marketplaces Amazon, Ebay and Newegg for essential data'],
                        ['Implemented ', <b>front end GUI</b>, ' using ', <b>React</b>, ' and designed using ', <b>Bulma</b>, '. Learned key skills for ',<b>software engineering</b>]
                    ]
                }
            ]
        },
        // {
        //     name: "Technical Skills",
        //     imageSource: skills
        // }
    ]
}

