import React, {Component} from "react";
import Card from "./card";
import Wrapper from "./wrapper/index";

import projects from "../assets/projects.json";

class App extends Component {
    state={
        projects
    }
    removeProject = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const projects = this.state.projects.filter(project => project.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ projects });
      };
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

export default App