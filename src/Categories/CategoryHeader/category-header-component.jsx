import React from "react";
import Navigation from "../../components/Navigation/navigation.component";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";
import "./category-header.styles.scss";

class CategoryHeader extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // userRef.onSnapshot((snapShot) => {
        //   this.setState(
        //     {
        //       currentUser: {
        //         id: snapShot.id,
        //         ...snapShot.data(),
        //       },
        //     },
        //     () => {
        //       console.log(this.state);
        //     }
        //   );
        // });

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth );
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
            <Navigation />
            <h1>{this.props.header}</h1>
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(CategoryHeader);
