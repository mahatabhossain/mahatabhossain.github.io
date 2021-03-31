import React from 'react'
import Titlte from '../Components/Tittle'
import ImageSection from './ImageSection'
import SkillsSection from '../Components/SkillsSection'
import Services from '../Components/Services'
import ServiceImage from '../Images/Services.jpg'


const AboutPage = () => {
    return (
        <div>
            <Titlte tittle={'About me'} span={'About me'} />
            <ImageSection />

            <Titlte tittle={'My Skills'} span={'My Skills'} />
            <div className="skills-container">
                <SkillsSection skill={'JavaScript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Data Structure'} progress={'10%'} width={'10%'} />
                <SkillsSection skill={'Python'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'SASS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Cloutd'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'Git and GitHub'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React'} progress={'20%'} width={'20%'} />
            </div>

            <div className="service-container">
                <Services image={ServiceImage} />
            </div>
        </div>
    )
}

export default AboutPage
