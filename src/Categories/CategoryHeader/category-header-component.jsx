import React from "react";
import Navigation from "../../components/Navigation/navigation.component";
import { auth } from "../../firebase/firebase.utils";
import "./category-header.styles.scss";

class CategoryHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="category-header-container">
        <header className="category-header">
          <div className="wrapper">
            <Navigation currentUser={this.state.currentUser} />
            <h1>{this.props.header}</h1>
          </div>
        </header>
      </div>
    );
  }
}

// function CategoryHeader({ header }) {
//   return (
//     <div className="category-header-container">
//       <header className="category-header">
//         <div className="wrapper">
//           <Navigation />
//           <h1>{header}</h1>
//         </div>
//       </header>
//     </div>
//   );
// }

export default CategoryHeader;
