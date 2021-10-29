import {TypePhase, useTypedSkill} from "../../Hooks/useTypedSkill"
import cm from 'classnames'
import './AnimatedSkills.css'

const skills = ['GOLANG', 'REACT⚛', 'SQL', 'ALGORITHMS', 'DATA STRUCTURES', 'INTERNET', 'HTTP', 'TCP/IP']



const AnimatedSkills = () => {

    const {typedSkill, selectedSkill, phase } = useTypedSkill(skills)
    return (
        <div className="row skills-animation col-xl-3 offset-2">
            <span className={cm('skill end-cursor', {['blinking-cursor']: phase === TypePhase.Awaiting})} aria-lable={selectedSkill}>{typedSkill}</span>
        </div>
    );
};

export default AnimatedSkills;

