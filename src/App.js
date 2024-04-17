import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
      
    };
  }

  toggleMode = () => {
    this.setState(prevState => {
      const newMode = prevState.mode === 'light' ? 'dark' : 'light';
      if (newMode === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      return { mode: newMode };
    });
  };
  apiKey='a9ecbc81f59f4fdfab43a9aec5eae8b4';
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    const { mode } = this.state;
    
    return (
      <Router>
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Navbar mode={mode} toggleMode={this.toggleMode} />
          <Routes>
  <Route
    exact path="/"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'general'} />}
  />
  <Route
    exact path="/business"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'business'} />}
  />
  <Route
    exact path="/entertainment"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'entertainment'} />}
  />
  <Route
    exact path="/general"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'general'} />}
  />
  <Route
    exact path="/health"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'health'} />}
  />
  <Route
    exact path="/science"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'science'} />}
  />
  <Route
    exact path="/sports"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'sports'} />}
  />
  <Route
    exact path="/technology"
    element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" mode={mode} toggleMode={this.toggleMode} pageSize={6} country={'in'} category={'technology'} />}
  />
</Routes>

        </div>
      </Router>
    );
  }
}

export default App;
