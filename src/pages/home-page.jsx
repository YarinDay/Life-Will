import React, { useState } from 'react'
import { FormStructure } from '../cmps/form-structure'
import MultiStepForm from '../cmps/multi-step-form'


export function HomePage() {
    const [whatStage, setWhatStage] = useState(1)

    const onSetStage = (stage) => {
        setWhatStage(stage)
    }

    return (
        <div className="app-home main-view main-layout">
            <div className='form-container'>
                <div className='header'>
                    <div className='stage-1 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 1 ? `#662A68` : ''}` }}>1</div>
                        <span>הזדהות</span>
                    </div>
                    <div className='stage-2 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 2 && `#662A68`}` }}>2</div>
                        <span>מצב משפחתי ויורשים</span>
                    </div>
                    <div className='stage-3 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 3 && `#662A68`}` }}>3</div>
                        <span>מקרקעין</span>
                    </div>
                    <div className='stage-4 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 4 && `#662A68`}` }}>4</div>
                        <span>מטלטלין</span>
                    </div>
                    <div className='stage-5 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 5 && `#662A68`}` }}>5</div>
                        <span>כספים</span>
                    </div>
                    <div className='stage-6 stage'>
                        <div className={`number`} style={{ backgroundColor: `${whatStage === 6 && `#662A68`}` }}>6</div>
                        <span>רצונות</span>
                    </div>
                </div>
                {/* <div class="myBox">
                    <div class="boxItem">1</div>
                    <div class="boxItem">2</div>
                    <div class="boxItem">3</div>
                </div> */}
                {/* {whatStage === 1 && <FormStructure whatStage={whatStage} onSetStage={onSetStage} />} */}
                <MultiStepForm onSetStage={onSetStage} whatStage={whatStage} />
            </div>
        </div>
    )
}