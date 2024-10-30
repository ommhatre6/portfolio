import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../Assets/profile.png';
import Title from './Title';

class App extends Component {
    // constructor() {
    //     super();
    // this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    // readMore(){
    //     console.log('readMore this', this);
    //     this.setState({ displayBio: true});
    // }
    // showLess() {
    //     this.setState({displayBio:false});
    // }
    state= { displayBio: false};  
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        const bio  = this.state.displayBio ? (
            <div>
                
                <p> I live in Mumbai  and code every day.</p>
                <p> My favorite language is JavaScript and I think React.js  is awesome.</p>
                <button onClick={this.toggleDisplayBio}> Show Less</button>
            </div>
        ): (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        ) ;
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>
                    Hello!
                </h1>
                <p> My name is Om. <Title />.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}
export default App;

