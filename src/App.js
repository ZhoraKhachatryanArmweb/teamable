import React from 'react'
import JobListContainer from './Containers/JobListContainer/JobListContainer'
import Container from '@material-ui/core/Container'

const App = () => {
  return (
      <React.Fragment>
          <Container maxWidth="md">
              <JobListContainer />
          </Container>
      </React.Fragment>
  );
};

export default App
