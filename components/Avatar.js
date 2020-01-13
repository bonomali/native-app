import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import normalize from "react-native-normalize";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo:
      "https://p68.tr3.n0.cdn.getcloudapp.com/items/2NurlGwQ/avatar-default.jpg?v=4aadcdbdffe209bbd523530a75351afd"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext&gender=male&region=Brazil")
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response.photo
        });

        // this.props.updateName(response.name);
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: ${normalize(44)};
  height: ${normalize(44)};
  border-radius: ${normalize(22)};
`;
