import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

//Age
//Fat Burner or Mass Gainer
//Push or Pull or Legs or All around
import "../App.css"

export var option = 0
export var ageOption = 0
export var methodOption = 0
export var targetOption = 0
var aCreateRoutine = ''
var mCreateRoutine = ''
var tCreateRoutine = ''

function SmartList() {

    //age
    const [ageState, ageChangeState] = useState({
        activeObject: null,
        objects: ["1", "2", "3"],
        name: ["18-24", "24-30", "30+"]
    })

    function toggleActive(index) {
        ageChangeState({ ...ageState, activeObject: ageState.objects[index] })
    }

    function toggleActiveStyles(index) {
        if (ageState.objects[index] === ageState.activeObject) {
            ageOption = ageState.objects[index]
            aCreateRoutine = true
            return "box active"
        }
        else {
            return "box inactive"
        }
    }

    //method
    const [methodState, methodChangeState] = useState({
        activeObject: null,
        objects: ["1", "2"],
        name: ["Fat Burner", "Mass Gainer"],
        desc: ["For best results use lighter weights", "For best results use heavier weights"]
    })

    function toggleActive2(index) {
        methodChangeState({ ...methodState, activeObject: methodState.objects[index] })
    }

    function toggleActiveStyles2(index) {
        if (methodState.objects[index] === methodState.activeObject) {
            methodOption = methodState.objects[index]
            mCreateRoutine = true
            return "box active"
        }
        else {
            return "box inactive"
        }
    }

    //target
    const [targetState, targetChangeState] = useState({
        activeObject: null,
        objects: ["1", "2", "3", "4"],
        name: ["Push", "Pull", "Legs", "All around"],
        desc: ["Deltoids, Pectorals, Triceps", "Abdominals, Biceps, Obliques", "Quadriceps, Glutes, Calves"]
    })

    function toggleActive3(index) {
        targetChangeState({ ...targetState, activeObject: targetState.objects[index] })
    }

    function toggleActiveStyles3(index) {
        if (targetState.objects[index] === targetState.activeObject) {
            targetOption = targetState.objects[index]
            tCreateRoutine = true
            if (targetState.name[index] === "All around") {
                targetOption = targetState.objects[index]
                return "box3 active"
            }

            return "box active"
        }
        else {
            if (targetState.name[index] === "All around") {
                return "box3 inactive"
            }
            return "box inactive"
        }
    }

    return (
        <Fragment>
            <div style={{ border: '2px solid black', height: '46vh', paddingTop: '3%', marginBottom: '5%', width: '100%' }}>
                <div style={{ width: '10%', float: 'left', marginLeft: '10%' }}>
                    <h3 style={{ paddingBottom: '5vh', paddingTop: '3vh', margin: '0' }}>Age</h3>
                    <h3 style={{ paddingBottom: '6vh', margin: '0' }}>Method</h3>
                    <h3>Target</h3>
                </div>
                <div className="Age" style={{ display: 'inline-block', width: '80%', float: 'right' }}>
                    <div>
                        {ageState.objects.map((elements, index) => (
                            <div key={index}
                                className={toggleActiveStyles(index)}
                                onClick={() => {
                                    toggleActive(index)
                                }} >
                                <h3 style={{ textAlign: 'center' }}>{ageState.name[index]}</h3>
                            </div>
                        ))}
                    </div>
                    <div>
                        {methodState.objects.map((elements, index) => (
                            <div key={index}
                                className={toggleActiveStyles2(index)}
                                onClick={() => {
                                    toggleActive2(index)
                                }}>
                                <h3 style={{ textAlign: 'center', paddingTop: '0%' }}>{methodState.name[index]}<h4 style={{ fontSize: '50%', fontWeight: 'bold', paddingTop: '1%' }}>{methodState.desc[index]}</h4></h3>
                            </div>
                        ))}
                    </div>
                    <div>
                        {targetState.objects.map((elements, index) => (
                            <div key={index}
                                className={toggleActiveStyles3(index)}
                                onClick={() => {
                                    toggleActive3(index)
                                }}>
                                <h3 style={{ textAlign: 'center', paddingTop: '0%' }}>{targetState.name[index]}<h4 style={{ fontSize: '1.5vh', fontWeight: 'bold', paddingTop: '0.5vh' }}>{targetState.desc[index]}</h4></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {(aCreateRoutine && mCreateRoutine && tCreateRoutine) ?
                <Link className="createRoutine" to="/SmartExerciseList">Create Workout Routine
                </Link> : null}
        </Fragment>
    )
}


export default SmartList

/*
1: 18, fat, push
2: 18, fat, pull
3: 18, fat, legs
4: 18, fat, all

5: 18, mass, push
6: 18, mass, pull
7: 18, mass, legs
8: 18, mass, all

9: 24, fat, push
10: 24, fat, pull
11: 24, fat, legs
12: 24, fat, all

13: 24, mass, push
14: 24, mass, pull
15: 24, mass, legs
16: 24, mass, all

17: 30, fat, push
18: 30, fat, pull
19: 30, fat, legs
20: 30, fat, all

21: 30, mass, push
22: 30, mass, pull
23: 30, mass, legs
24: 30, mass, all

push: calves, deltoids, gluteals, pectorals, quadriceps, triceps {
push-ups, bench press, incline bench press, weighted squats, dips, shoulder press, chest dumbbell press, tricep kick backs, overhead press
}

pull: abdominals, biceps, forearms, hamstrings, obliques, trapezius {
    deadlifts, pull-ups, chin-ups, seated cable crunch, side lateral raises, bicep curls, barbell rows, oblique twists, hammer curls
}

legs: {
    squats, lunges, plank leg lifts, single leg deadlifts, step-ups, box jumps, speedskate jumps
}
*/
