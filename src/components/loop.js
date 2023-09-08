import { TextLoop } from "easy-react-text-loop";

const myStyle={
marginLeft: '610px'
}

const Loop = () => {
  return (
    <div>
      {/* I will loop through these words:{" "} */}
      <TextLoop>
        <h3 className="loop" style={myStyle}>Web Designer</h3>
        <h3 className="loop"  style={myStyle}>UX/UI Designer</h3>
        <h3 className="loop" style={myStyle}>Project Manager</h3>
      </TextLoop>{" "}
      {/* and then start again! */}
    </div>
  );
};

export default Loop