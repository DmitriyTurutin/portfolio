import {useEffect, useState} from "react";

export enum TypePhase{
    Typing,
    Awaiting,
    Deleting
}

export const useTypedSkill = (skills: string[]): {
    typedSkill: string,
    selectedSkill: string,
    phase: TypePhase,
} => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setTypePhase] = useState(TypePhase.Typing)
    const [typedSkill, setTypedSkill] = useState('')

    useEffect(() => {
        switch (phase){
            case TypePhase.Typing: {
                const nextTypedSkill = skills[selectedIndex].slice(
                    0,
                    typedSkill.length + 1
                )
                if (nextTypedSkill === typedSkill) {
                    setTypePhase(TypePhase.Awaiting)
                    return
                }


                const timeout = setTimeout(() => {
                    setTypedSkill(skills[selectedIndex].slice(0, typedSkill.length + 1))
                }, 100 + Math.random()*50 + 50)
                return () => clearTimeout(timeout)
            }
            case TypePhase.Deleting: {
                if (!typedSkill) {
                    const nextIndex = selectedIndex + 1
                    setSelectedIndex(skills[nextIndex] ? nextIndex: 0)
                    setTypePhase(TypePhase.Typing)
                    return
                }
                const nextRemaining= skills[selectedIndex].slice(
                    0,
                    typedSkill.length - 1
                )

                const timeout = setTimeout(() => {
                    setTypedSkill(nextRemaining)
                }, 90)
                return () => clearTimeout(timeout)
            }
            case TypePhase.Awaiting:
            default:
                const timeout = setTimeout(() => {
                    setTypePhase(TypePhase.Deleting)
                }, 2000 * skills[selectedIndex].length / 6)
                return () => clearTimeout(timeout)
        }




    }, [skills, phase,typedSkill, selectedIndex])

    return {typedSkill, selectedSkill: skills[selectedIndex], phase}
}