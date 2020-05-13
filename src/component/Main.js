import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Catalog from './Catalog';
import ShoppingBasket from './ShoppingBasket';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Covid19Announcement from './COVID-19';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        // campsites: state.campsites,
        // comments: state.comments,
        // partners: state.partners,
        // promotions: state.promotions
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        // const CampsiteWithId = ({match}) => {
        //     return (
        //         <CampsiteInfo 
        //             campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
        //             comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
        //         />
        //     );
        // };    

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    {/* <Route exact path='/directory' render={ () => <Directory campsites={this.props.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} /> */}
                    <Route exact path='/catalog' component={Catalog} />

                    {/* <Route exact path='/about_us' render={ () => <About partners={this.props.partners} />} /> */}
                    <Route exact path='/about_us' component={About} />
                    <Route exact path='/contact_us' component={Contact} />
                    <Route exact path='/covid-19' component={Covid19Announcement} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };  // End of render()
}   // End of the Main Component

export default withRouter(connect(mapStateToProps)(Main));