import React, { Component } from 'react';
import {
  Carousel,
  Container,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://media.defense.gov/2010/Oct/18/2000315629/780/780/0/101016-F-1979R-001.JPG',
    altText: 'Passing out food',
    caption: 'Human_Kind'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Helping_Needy_People_-_Makar_Sankranti_Observance_-_Ramkrishnapur_Ghat_-_Howrah_2018-01-14_6430.JPG/800px-Helping_Needy_People_-_Makar_Sankranti_Observance_-_Ramkrishnapur_Ghat_-_Howrah_2018-01-14_6430.JPG',
    altText: 'Slide 2',
    caption: 'Human_Kind'
  },
  {
    src: 'https://navylive.dodlive.mil/files/2016/04/110915-N-YU572-076.jpg',
    altText: 'Slide 3',
    caption: 'Human_Kind'
},
{
  src: 'https://live.staticflickr.com/3028/2905921539_7d0a4d50a5_b.jpg',
  altText: 'Slide 4',
  caption: 'Human_Kind'
},
{
  src: 'https://media.defense.gov/2014/Nov/07/2000988405/780/780/0/141107-F-OW434-216.JPG',
  altText: 'Slide 5',
  caption: 'Human_Kind'
}
];

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText="" captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <Container>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
      </Container>
    );
  }
}


export default ImageSlider;
