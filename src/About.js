import { Fragment } from "react";
import { Jumbotron, Button, Media } from "react-bootstrap";

export default function About() {
  return (
    <Fragment>
      <Jumbotron>
        <Media>
          <Media.Body>
            <h2>About Us</h2>
            <p>
              Since 1999, Internet Marketing Ninjas has mastered the art of
              creating expert content that goes viral, earns trusted links, and
              ranks at the top of Google. Looking to transform your content
              marketing strategy? Learn how our Ninja team can help by
              scheduling a FREE consultation today.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Media.Body>
          <img
            width={300}
            height={300}
            className="ml-3"
            src="https://picsum.photos/id/1070/200/300"
            alt="Generic placeholder"
          />
        </Media>
      </Jumbotron>
    </Fragment>
  );
}
