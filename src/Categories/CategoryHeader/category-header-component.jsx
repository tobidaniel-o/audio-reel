import React from "react";
import Navigation from "../../components/Navigation/navigation.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
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
