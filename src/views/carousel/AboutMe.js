import React, {useState, useContext} from "react";
import MyCard from '../../components/Card/MyCard';
import Form from '../../components/Form/Form';
import { CartContext } from '../../contexts/CartContext';
import './AboutMe.css'

const logos_href = {
    js: "https://img.icons8.com/color/48/000000/javascript--v2.png",
    html: "https://img.icons8.com/color/48/000000/html-5--v2.png",
    css: "https://img.icons8.com/color/48/000000/css3.png",
    cpp: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    c_sharp: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    python: "https://img.icons8.com/color/48/000000/python--v2.png",
    sql: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    react: "https://img.icons8.com/color/48/000000/react-native.png",
    node: "https://img.icons8.com/windows/32/000000/nodejs.png",
    git: "https://img.icons8.com/color/48/000000/git.png",
    azure: "https://img.icons8.com/color/48/000000/azure-1.png",
    docker: "https://img.icons8.com/color/48/000000/docker.png",
    wordpress: "https://img.icons8.com/material-outlined/24/000000/wordpress--v1.png",
    linux: "https://img.icons8.com/color/48/000000/linux--v1.png",
    ios: "https://img.icons8.com/color/48/000000/ios-logo.png",
    android: "https://img.icons8.com/color/48/000000/android-os.png",
    java: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"

};

const item_factory = (title = 'JavaScript', description = 'Backend (Node, expressJs) + Frontend', image = logos_href.js, images = []) => {
    return (
        {
            title: title,
            description: description,
            image: image,
            images: images,
        });
};

const Languages = [
    item_factory('C / C++', 'Shell, Réseaux', logos_href.cpp),
    item_factory('JavaScript', 'Backend (Node, expressJs) + Frontend', logos_href.js),
    item_factory('HTML', '', logos_href.html),
    item_factory('CSS', 'Material UI, Bootstrap', logos_href.css),
    item_factory('SQL', 'Scripts, Jupyter Notebook, notions Scikit-learn & Pandas', logos_href.sql),
    item_factory('C#', 'ASP .NET MVC + Razor', logos_href.c_sharp),
    item_factory('Java', 'Algorithmes, Multi-threading...', logos_href.java),
    item_factory('Python', 'Scripts, Jupyter Notebook, notions Scikit-learn & Pandas', logos_href.python),
];


const Tech = [
    item_factory('React + Native', 'React, React Native, Redux', logos_href.react),
    item_factory('Node', 'Express JS', logos_href.node),
    item_factory('Git', '', logos_href.git),
    item_factory('Docker', '', logos_href.docker),
    item_factory('Wordpress', '', logos_href.wordpress),
    item_factory('Linux / UNIX', '', logos_href.linux),
    item_factory('Azur', '', logos_href.azure),
];

const exp = [
    item_factory(
        'Développeur Full-Stack chez Timenjoy',
        'Ce stage de 4 mois m\'a permis de comprendre et de pouvoir intervenir en production sur les nombreuses technologies de l\'entreprise.',
        logos_href.js,
        [logos_href.react, logos_href.node, logos_href.ios, logos_href.css, logos_href.git]
    ),
    item_factory(
        'Développeur React Native chez Relax Max',
        'Création d\'une React Native complète avec Redux.',
        logos_href.react,
        [logos_href.react, logos_href.ios, logos_href.android, logos_href.css, logos_href.git]
    ),
    item_factory(
        'Développeur Full-Stack C#',
        'Création d\'un site de gestion des chantiers de type dashboard en ASP.NET MVC avec base de donnée, gestion de comptes et services Azur.',
        logos_href.c_sharp,
        [logos_href.c_sharp, logos_href.azure, logos_href.css]
    ),
    item_factory(
        'Projets C / C++',
        'Nombreux projets de l\'école Epitech visant à découvrir et manipuler l\'environnement unix, le Shell, la gestion de Réseaux, le Multi-threading et l\'Algorithmique.',
        logos_href.cpp,
        [logos_href.cpp, logos_href.git]
    ),
    item_factory(
        'Python',
        'Projets scolaires : Scripts, Jupyter Notebook. Notions Scikit-learn, Pandas et Machine learning.',
        logos_href.python,
        []
    )
];

function AboutMe(props) {

    const add_to_cart = useContext(CartContext).add_to_cart;
    const is_item_added = useContext(CartContext).is_item_added;
    const remove_from_cart = useContext(CartContext).remove_from_cart;
    const cart = useContext(CartContext).cart;

    const _add_to_cart = (item) => {
        add_to_cart(item);
    };

    const _cardLittleItems = (items) => {
        return (
            items.map((card, index) =>
                <div
                    className={'aboutme-card-item-container aboutme-card-items'}
                    >
                    <img src={card.image} alt="Logo" className={'aboutme-card-item-logo'}/>
                    <div className={'aboutme-card-item-title-container'}>
                        <p className={'aboutme-card-item-title'}>{card.title}</p>
                    </div>
                    {
                        is_item_added(card.title) ?
                            <p className={'aboutme-card-item-button aboutme-card-item-button-minus'} onClick={() => remove_from_cart(card.title)}>-</p> :
                            <p className={'aboutme-card-item-button'} onClick={() => {
                                _add_to_cart(card.title);
                            }}>+</p>
                    }

                </div>
            )
        );
    };

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingInline: "10px",
                maxHeight: '93vh',
                width: '100%',
            }} id={props.id}>

                <MyCard title={'Languages'} style={{height: '45%', maxWidth: '47%'}} ContentStyle={{height: '38vh', overflow: 'scroll'}}>
                    {_cardLittleItems(Languages)}
                </MyCard>
                <MyCard title={'Technologies'} style={{maxWidth: '47%'}} ContentStyle={{height: '38vh', overflow: 'scroll'}}>
                    {_cardLittleItems(Tech)}
                </MyCard>
                <MyCard title={'Expériences'}  style={{height: '100%'}} ContentStyle={{height: '38vh', overflow: 'scroll'}}>
                    {exp.map(card =>
                        <div >
                            <div style={{maxHeight: '50%', overflow: 'scroll'}} className={'aboutme-card-item-container aboutme-card-items'}>
                                <img src={card.image} alt="Logo" style={{width: '24px', height: 'auto'}}/>
                                <p style={{paddingLeft: "5px", width: '100%', color: 'black'}}>
                                    <strong>{card.title}</strong></p>
                            </div>
                            <p style={{
                                color: "black",
                                paddingInline: '5px',
                                fontFamily: 'Hahmlet, serif'
                            }}>{card.description}</p>
                            <div style={{display: "flex", justifyContent: 'center'}}>
                                {card.images.map(img => <img src={img} alt="Logo"
                                                             style={{width: '24px', height: 'auto'}}/>)}
                            </div>
                        </div>
                    )}
                </MyCard>
            </div>

            {/*<div style={{backgroundColor: 'red'}}>
                {cart.map((item) => <p style={{color: "white"}}>{item}</p>)}
            </div>

            <div style={{marginBlock: '10vh'}}><p style={{color: "white"}}> Mon parcours -></p></div>*/}
        </>
    )
}

export default AboutMe;
