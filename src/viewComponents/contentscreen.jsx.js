import React, { Component } from 'react';

class ContentScreen extends Component {
  render() {
    return (
      <div id="mainContent">
        <h1>Main Content</h1>
        <p>Dit is de homepage</p>
        <article className="message">
          <div className="message-header">
            <p>Hello World</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
      </div>
    );
  }
}

export default ContentScreen;
