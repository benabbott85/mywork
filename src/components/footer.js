import React from "react"
import {Row} from "reactstrap"
// import Resume from '../assets/Ben Abbott.pdf'
import Resume from '../components/pdf'
function Footer (){
    return(
        <>
        <Row>
        <div class="footalign">
        <a href="https://drive.google.com/file/d/1Xq2eH-aQgW8J4s60Dywfq1fVFERLkfqB/view?usp=sharing" target="_blank" rel="noreferrer"><h3><strong>Resume</strong></h3></a>
        <a href="mailto:babbott85@gmail.com" target="_blank" rel="noreferrer"><i class="fas fa-envelope fa-4x " target='_blank'></i></a>
        <a className="linkedin"href="https://www.linkedin.com/in/ben-abbott-51394421/" target="_blank" rel="noreferrer" ><i class="fab fa-linkedin fa-4x linkedin" target='_blank'></i></a>
        </div>
        </Row>
        </>
    )
}
export default Footer