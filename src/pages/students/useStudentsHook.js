import { useState, useEffect, useRef } from "react"


export const useStudentsHook =() => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name:'Jane Doe',
            level:"Level 7",
            examId:"ATC-1738",
            phone:"25573626262762"
        },
        {
            id: 2,
            name:"Alima Jhau",
            level:"Level 4",
            examId:"ATC-36373",
            phone:"25557226622"
        }
    ])

    return {
        students,
    }
}