function PrivateRoute ({ children, ...allProps }) {
    return (
      <Route {...allProps} render={() => {
        return Auth.isAuthenticated === true
          ? children
          : <Redirect to='/login' />
      }} />
    )
  }