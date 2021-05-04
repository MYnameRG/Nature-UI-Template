import { Fragment } from "react";
import { Jumbotron, Button, Media } from "react-bootstrap";

export default function Feature() {
  return (
    <Fragment>
      <Jumbotron>
        <Media>
          <img
            width={300}
            height={300}
            className="mr-3"
            src="https://picsum.photos/id/1071/367/267"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h2>Features</h2>
            <p>
              The interior accessories are not necessary but they can help to
              protect certain things in your car or are just to make you more
              comfortable in your vehicle. These auto accessories include, dash
              covers, seat covers, mirrors, shifter knobs, steering wheel
              covers, fuel consumption meters, window tint, stereo system, DVD
              players, floor mats and even air fresheners.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Media.Body>
        </Media>
      </Jumbotron>
    </Fragment>
  );
}
