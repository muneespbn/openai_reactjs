
import React, { useEffect } from "react";
import axios from 'axios';

export default function MyPageCheck() {
    const [dataOne, setDataOne] = React.useState()
    const [dataTwo, setDataTwo] = React.useState()
    const [dataThree, setDataThree] = React.useState()
    const [result1, setResult1] = React.useState()
    const [result2, setResult2] = React.useState()
    const [result3, setResult3] = React.useState()

    const handleChangeOne = (event) => {
        setDataOne(event.target.value)
    }

    const handleChangeTwo = (event) => {
        setDataTwo(event.target.value)
    }

    const handleChangeThree = (event) => {
        setDataThree(event.target.value)
    }
    const handleClickOne = async () => {
        const apiResponse = await axios.post("http://localhost:3000/grammerCheck", { content: dataOne });
        if (apiResponse.status === 200) {
            setResult1(apiResponse.data.message);
        }
    }

    const handleClickTwo = async() => {

        const apiResponse = await axios.post("http://localhost:3000/textCompletion", { content: dataTwo });
        if (apiResponse.status === 200) {
            setResult2(apiResponse.data.message);
        }
    }

    const handleClickThree = async() => {
        const apiResponse = await axios.post("http://localhost:3000/textContentBetter", { content: dataThree });
        if (apiResponse.status === 200) {
            setResult3(apiResponse.data.message);
        }
    }

    return (
        <>
            <div>
                <div>
                    <h5>GRAMMER CHECK</h5>
                    <textarea rows="5" cols="50" onChange={handleChangeOne}>
                    </textarea>
                </div>
                <div>
                    <button type="button" onClick={() => {
                        handleClickOne()
                    }}>Submit Text</button>
                    
                </div>
                {result1 ? <div>Result: <p>{result1}</p></div> : null}
            </div>
            <div>
                <div>
                    <h5>TEXT COMPLETION</h5>
                    <textarea rows="5" cols="50" onChange={handleChangeTwo}></textarea>
                </div>
                <div>
                    <button type="button" onClick={() => {
                        handleClickTwo()
                    }}>Submit text two</button>
                </div>
                {result2 ? <div>Result: <p>{result2}</p></div> : null}
            </div>
            <div>
                <div>
                    <h5>TEXT CONTENT BETTER</h5>
                    <textarea rows="5" cols="50" onChange={handleChangeThree}></textarea>
                </div>
                <div>
                    <button type="button" 
                    onClick={() => {
                        handleClickThree()
                    }}
                    >submit text three</button>
                </div>
                {result3 ? <div>Result: <p>{result3}</p></div> : null}
            </div>
        </>)
}