import React from 'react';

import styled from 'styled-components';

const ResumePage = () => (
  <Container>
    <li>This is my experience so far as developer.</li>
    <li>
      <h5>
        Senior Frontend developer @{' '}
        <a href="https://www.xing.com/" target="_blank" rel="noreferrer">
          Xing
        </a>{' '}
        part of{' '}
        <a href="https://www.new-work.se/en/about-new-work-se" target="_blank" rel="noreferrer">
          NEW WORK SE
        </a>
      </h5>
      <h6>
        <span>#react</span> <span>#typescript</span> <span>#graphql</span> <span>#apollo</span>
      </h6>
      <p>
        <em>Valencia (SPAIN), April 2020 – October 2021</em>
      </p>
      <p>
        XING is a social network for business contacts and it is the largest jobs search engine in German-speaking
        countries. I joined a brand new internal and experimental project, working mainly remotely in a
        multidisciplinary agile team, using React, Apollo, GraphQL and Jest among other in-house technologies.
      </p>
    </li>

    <li>
      <h5>
        Senior Frontend developer and architect @{' '}
        <a href="https://forwardkeys.com/" target="_blank" rel="noreferrer">
          ForwardKeys
        </a>
      </h5>
      <h6>
        <span>#angular</span> <span>#typescript</span> <span>#scss</span> <span>#highcharts</span>
      </h6>
      <p>
        <em>Valencia (SPAIN), April 2018 – February 2020</em>
      </p>
      <p>
        ForwardKeys is a business intelligence company that processes travel data. In 2018, the company decided to
        rebuild the old monolithic application with modern technologies and a fresh look. I was responsible for putting
        in place the frontend architecture. Our goal was to build a set of modules and components to combine them to
        quickly and consistently build new products. The living styleguide and the product web apps were built using
        Angular, SCSS, Highcharts, PrimeNG and Karma and Jasmine for the unit tests.
      </p>
    </li>

    <li>
      <h5>
        Senior Frontend developer @{' '}
        <a href="https://www.hmhco.com/" target="_blank" rel="noreferrer">
          Houghton Mifflin Harcourt
        </a>
      </h5>
      <h6>
        <span>#react</span> <span>#redux</span> <span>#node</span>
      </h6>
      <p>
        <em>Dublin (IRELAND), August 2016 – January 2018</em>
      </p>
      <p>
        HMH is a company that provides educational content and learning tools to schools. I worked on a project named
        RCE (Responsive Content Engine), an epub parser/reader with a set of tools that allows the users to interact
        with the content in a persistent way. It was written in javascript ES6 and built with the following libraries
        and tools (among others): React, Redux, Panels, Pages and Node.js.
      </p>
    </li>
    <li>
      <h5>
        Frontend developer @{' '}
        <a href="https://sysnetgs.com/" target="_blank" rel="noreferrer">
          Sysnet Global Solution
        </a>
      </h5>
      <h6>
        <span>#angular</span> <span>#typescript</span> <span>#less</span>
      </h6>
      <p>
        <em>Dublin (IRELAND), July 2015 – July 2016</em>
      </p>
      <p>
        Built an enterprise AngularJs based app easily customizable, in terms of interface and features, for each
        client. Merged the previous apps in one, migrating the frontend from JSP to AngularJs using Typescript.
        Co-authoring the internal UI framework used in all products.
      </p>
    </li>
    <li>
      <h5>
        Frontend developer @{' '}
        <a href="https://ped.company/" target="_blank" rel="noreferrer">
          Pane&Design
        </a>
      </h5>
      <h6>
        <span>#angularjs</span> <span>#less</span> <span>#jquery</span>
      </h6>
      <p>
        <em>ITALY, February 2014 – June 2015</em>
      </p>
      <p>
        Working as a frontend developer with web/graphics design abilities, using HTML5, CSS3 (LESS), Twig, Bootstrap
        native JavaScript, jQuery and AngularJS, through Git-flow, in a multidisciplinary development team using the
        latest technologies and continuous learning.
      </p>
    </li>
    <li>
      <h5>Web developer/iOS developer/Graphic designer @ Neperia Group / PaperCopy Design / Freelance</h5>
      <p>
        <em>ITALY, February 2012 – January 2014</em>
      </p>
      <p>
        Designed and developed several Wordpress based websites for small local businesses. Worked on projects like
        Semantic Sicily, Sicania Online. Designed and prototyped some native iOS mobile apps. Graphic and typographic
        productions including logos, business cards, posters a­nd flyers, illustrations of book covers, advertising,
        prints and plots using the Adobe Creative Suite, in particular, Illustrator and Photoshop.
      </p>
    </li>
  </Container>
);

const Container = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    padding: 2rem 0;
  }

  h6 {
    color: var(--color-primary-dark);
  }
`;

export default ResumePage;
