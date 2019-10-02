var NewComponent = React.createClass({
  render: function() {
    return (

      <section id="aboutus" className="aboutus-section">
        <h2 className="aboutus-section-header"> About Us </h2>
        <div className="aboutus-grid">
          <div className="aboutus-grid">

            {/*- Team member 1 -*/}
            <a href="#" className="aboutus aboutus-tile">
              <img className="us-image" src alt="someone" />
              <p className="aboutus-title">
                <span />
                This guy
                <span />
              </p>
            </a>
            {/*- End Team member 1 -*/}

            {/*- Team member 2 -*/}
            <a href="#" className="aboutus aboutus-tile">
              <img className="us-image" src="#" alt="someone" />
              <p className="aboutus-title">
                <span />
                That guy
                <span />
              </p>
            </a>
            {/*- End Team member 2 */}

            {/*- Team member 3*/}
            <a href="#" className="aboutus aboutus-tile">
              <img className="us-image" src="#" alt="someone" />
              <p className="aboutus-title">
                <span />
                This guy
                <span />
              </p>
            </a>
            {/*- End Team member 3 -*/}

            {/*- Team member 4-*/}
            <a href="#" className="aboutus aboutus-tile">
              <img className="us-image" src="#" alt="someone" />
              <p className="aboutus-title">
                <span />
                That guy
                <span />
              </p>
            </a>
            {/*- End team member 4-*/}

            {/*- Team member 5-*/}
            <a href="#" className="aboutus aboutus-tile">
              <img className="us-image" src="#" alt="someone" />
              <p className="aboutus-title">
                <span />
                This guy
                <span />
              </p>
            </a>
            {/*- End Team member 5 -*/}

            {/*- Team member 6-*/}
            <a href="#" target="_blank" className="aboutus aboutus-tile">
              <img className="us-image" src="#" alt="someone" />
              <p className="aboutus-title">
                <span />
                That guy
                <span />
              </p>
            </a>
            {/*- End Team member 6-*/}
          </div>
        </div></section>
    );
  }
});
