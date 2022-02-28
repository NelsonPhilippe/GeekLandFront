import * as React from 'react'
import ItemsCarousel from 'react-items-carousel';


export default class CarouselPromo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            activeItemIndex: 0,
            count: 0
        });


        // setTimeout(() => {
        //     this.setState({
        //         children: this.createChildren(20),
        //     })
        // }, 100);
    }

    // createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);


    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                // Carousel configurations
                numberOfCards={3}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
            >
               <h1>1</h1> 
               <h1>2</h1> 
               <h1>3</h1> 
               <h1>4</h1> 
               <h1>5</h1> 

            </ItemsCarousel>
        );
    }
}