import React from "react";
import "./Carousel.css";

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
});


function Carousel(props) {

    return (
        <>
            {props.header}
            <div className={'ContentContainer'}>
                <div className={"CarouselContainer"}>
                    {props.children.map(elem =>
                        <section className={"CarouselElement"} style={{scrollSnapPointsX: 'repeat(100%)'}}>
                            {elem}
                        </section>)
                    }
                </div>
            </div>
        </>
    );
}


export default Carousel;
