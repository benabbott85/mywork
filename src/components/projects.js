import React, {Component} from "react";
import Card from "./card/index";
import Wrapper from "./wrapper/index";

import projects from "./projects.json";

class App extends Component {
    state={
        projects
    }

    render(){
        return(
            <Wrapper>
                {this.state.projects.map(project =>(
                    <Card>
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                    </Card>
        ))}
            </Wrapper>
        )
    }
}