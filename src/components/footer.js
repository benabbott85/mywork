import React from "react"
import {Row} from "reactstrap"
function Footer (){
    return(
        <>
        <Row>
        <div class="footalign">
        <a className="foot" href="" target="_blank" rel="noreferrer"><h3><strong>Resume</strong></h3></a>
        <a href="mailto:babbott85@gmail.com" target="_blank"><i class="fas fa-envelope fa-4x " target='_blank'></i></a>
        <a className="linkedin"href="https://www.linkedin.com/in/ben-abbott-51394421/" target="_blank" ><i class="fab fa-linkedin fa-4x linkedin" target='_blank'></i></a>
        </div>
        </Row>
        </>
    )
}
export default Footer