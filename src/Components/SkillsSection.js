import React from 'react'

const SkillsSection = ({ skill, progress, width }) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skills-title"> {skill} </h5>
                <div className="skills-bar">
                    <p className="skills-text"> </p>
                    <div className="skills-progress">
                        {progress}
                        <div className="progress-bar">
                            <div className="inner-progress" style={{ width: width }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
