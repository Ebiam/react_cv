import React from "react";
import "./Carousel.css";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Topbar from '..//Topbar/Topbar';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
});

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hide: false,
        }
    }

    render(){

        return (
            <div style={this.props.style}>
                <div className={"CarouselContainer"}>

                    <section className={"CarouselElement"}>
                        <Topbar color={"secondary"}/>
                        <div style={{scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
                            <h1 style={{color: 'white',}}>
                                Qui suis-je ?
                            </h1>
                            <p>Technophile passionné de sciences, d'entreuprenariat et de marketing mais aussi de cinéma, de voyages et d'animaux.</p>
                            <p>Mon parcours au sein de l'école Epitech m'a permis de travailler sur de nombreux projets riches et variés et l'atout de m'autoformer en permanence.</p>
                            <p>Ces projets m'ont dans un premier temps permis de découvrir les languages C et C++ et l'environement UNIX.</p>
                            <p>Puis la programation de serveurs de jeux et d'API, d'applications mobile mais aussi la gestion de projet en groupe.</p>
                            <p>Etudiant en cinquième année à l'école EPITECH passioné et desireux d'apprendre, je souhaite enrichir mes compétences dans un environnement stimulant et challengant et offrant des opportunitées d'évoultion motivantes.
                            </p>
                            <p>En pleine démarche vers un status de freelance, je recherche aussi activement des clients pour effectuer des missions.</p>
                        </div>
                    </section>

                    <section className={"CarouselElement"}>
                        <Topbar color={"secondary"}/>
                        <div style={{scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                            <h1 style={{color: 'white',}}>
                                Mon parcours
                            </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut neque eget libero vestibulum laoreet. Integer eget erat porta, fermentum dui nec, iaculis sem. Quisque sed orci blandit, porttitor lorem in, interdum arcu. Quisque sit amet leo sem. Fusce sit amet consequat nisl, consectetur mattis metus. Aliquam vel sem ac elit blandit vehicula. Praesent dapibus nibh nisi, nec euismod tortor mattis at. Aliquam erat volutpat. Aliquam in suscipit felis, a sollicitudin odio. Duis sit amet erat a eros feugiat molestie. Sed vel purus nisi. In convallis, nisl porttitor pulvinar blandit, turpis felis accumsan metus, sit amet facilisis augue purus sed orci. Maecenas id erat sed ante viverra rutrum. In ultrices placerat libero quis sollicitudin.

                                Nullam posuere, eros quis bibendum sagittis, est neque vestibulum urna, vel finibus nunc eros ut libero. Praesent sit amet eros eu mauris interdum vestibulum. Nulla vel luctus nunc, non auctor risus. Phasellus tincidunt nisi nisi, non porttitor quam hendrerit in. Donec nec vulputate ligula. Ut ac velit quis ligula bibendum rutrum. Sed sit amet aliquam justo. Nullam augue quam, lacinia viverra sodales a, consequat non est. Morbi vitae venenatis nisi. Nunc commodo, dolor in accumsan varius, neque purus condimentum mauris, sit amet elementum nisl sapien vitae leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porttitor, ante sit amet fermentum hendrerit, velit metus ultrices leo, sit amet feugiat magna enim non elit. In ultricies elementum sem dapibus ultrices. In porta vel massa et facilisis. </p>
                        </div>
                    </section>

                    <section className={"CarouselElement"}>
                        <Topbar color={"secondary"}/>
                        <div style={{scrollSnapAlign: 'center', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                            <h1 style={{color: 'white',}}>
                                Qui suis-je ?
                            </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut neque eget libero vestibulum laoreet. Integer eget erat porta, fermentum dui nec, iaculis sem. Quisque sed orci blandit, porttitor lorem in, interdum arcu. Quisque sit amet leo sem. Fusce sit amet consequat nisl, consectetur mattis metus. Aliquam vel sem ac elit blandit vehicula. Praesent dapibus nibh nisi, nec euismod tortor mattis at. Aliquam erat volutpat. Aliquam in suscipit felis, a sollicitudin odio. Duis sit amet erat a eros feugiat molestie. Sed vel purus nisi. In convallis, nisl porttitor pulvinar blandit, turpis felis accumsan metus, sit amet facilisis augue purus sed orci. Maecenas id erat sed ante viverra rutrum. In ultrices placerat libero quis sollicitudin.

                                Nullam posuere, eros quis bibendum sagittis, est neque vestibulum urna, vel finibus nunc eros ut libero. Praesent sit amet eros eu mauris interdum vestibulum. Nulla vel luctus nunc, non auctor risus. Phasellus tincidunt nisi nisi, non porttitor quam hendrerit in. Donec nec vulputate ligula. Ut ac velit quis ligula bibendum rutrum. Sed sit amet aliquam justo. Nullam augue quam, lacinia viverra sodales a, consequat non est. Morbi vitae venenatis nisi. Nunc commodo, dolor in accumsan varius, neque purus condimentum mauris, sit amet elementum nisl sapien vitae leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porttitor, ante sit amet fermentum hendrerit, velit metus ultrices leo, sit amet feugiat magna enim non elit. In ultricies elementum sem dapibus ultrices. In porta vel massa et facilisis. </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Carousel;
