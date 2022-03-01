import * as React from 'react'
import ItemsCarousel from 'react-items-carousel';
import ProductHome from './../ProductHome'
import './../../css/components/carousel/CarouselHomeArticle.css'


export default class CarouselPromo extends React.Component {


    componentWillMount() {
        this.setState({
            activeItemIndex: 0,
            count: 0
        });

    }



    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
        } = this.state;

        return (
            <div className="promo">
                <div className="promo-cat">
                    <h1>Promo</h1>
                </div>
                <ItemsCarousel

                    // Carousel configurations
                    numberOfCards={4}
                    gutter={12}
                    showSlither={true}
                    firstAndLastGutter={true}
                    freeScrolling={false}

                    // Active item configurations
                    requestToChangeActive={this.changeActiveItem}
                    activeItemIndex={activeItemIndex}

                    chevronWidth={24}
                    rightChevron={<h1>{'>'}</h1>}
                    leftChevron={<h1>{'<'}</h1>}
                    outsideChevron={false}
                >
                    <ProductHome img="Tanjiro Hinokami.jpg" title="test" />
                    <ProductHome img="Tanjiro Hinokami.jpg" title="test" />
                    <ProductHome img="Tanjiro Hinokami.jpg" title="test" />
                    <ProductHome img="Tanjiro Hinokami.jpg" title="test" />
                    <ProductHome img="Tanjiro Hinokami.jpg" title="test" />

                </ItemsCarousel>
            </div>
        );
    }
}