/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import styled from 'styled-components';

import { Section } from './Section';
import { TextLink } from 'components/TextLink';
import { HEADINGS } from 'constants/css-variables';

export const TypographySection: React.FC = () => {
  return (
    <>
      <Section title="Headings">
        <HorizontalList>
          {Object.entries(HEADINGS).map(([h, size]) => {
            const heading = `<${h}>${size}em</${h}>`;
            return <span key={`test-heading-size-${h}`} dangerouslySetInnerHTML={{ __html: heading }} />;
          })}
        </HorizontalList>
        <VerticalList>
          {Object.entries(HEADINGS).map(([h]) => {
            const heading = `<${h}>Broccoli ${h.toUpperCase()}</${h}>`;
            return (
              <div key={`test-heading-${h}`}>
                <div dangerouslySetInnerHTML={{ __html: heading }} />
                <p>
                  Shallots portobello mushrooms black beans salty peanut butter crunch spring thyme peach strawberry
                  mango cilantro lime vinaigrette dragon fruit.
                </p>
              </div>
            );
          })}
        </VerticalList>
      </Section>

      <Section title="P - Paragraph text">
        <p>
          Pinch of yum peanut butter comforting pumpkin spice latte mediterranean luxury bowl green tea lime ginger
          lemongrass banana <TextLink to="">this is how a link looks between a banana and an avocado</TextLink> avocado
          dressing drizzle mocha chocolate habanero golden cauliflower eating together grapefruit pumpkin sweet potato
          black bean burrito kale almonds. Black bean wraps couscous green pepper pineapple salsa a delicious meal
          Malaysian garlic sriracha noodles dark chocolate chai tea oranges tasty açai picnic jalapeño ginger tofu soy
          milk rich coconut cream almond milk naga viper chilies farro platter broccoli fall appetizer.
        </p>
        <p>
          Albert Einstein is credited with saying,{' '}
          <mark>
            “Nothing will benefit human health and increase the chances for survival of life on Earth as much as the
            evolution to a vegetarian diet.”
          </mark>
        </p>
        <p>
          Casserole lentils lime mango crisp double dark chocolate spiced peppermint blast mint hazelnut shiitake
          ultimate winter orange edamame parsley black beans sweet potato bite sized dark and stormy red amazon pepper
          walnut mushroom tart Thai dragon pepper hemp seeds banana bread bruschetta. dessert.
        </p>
        <p>
          <small>
            While I test how small text looks like with links and stuff you can check some{' '}
            <TextLink to="https://www.tastybite.com/2016/04/5-things-you-didnt-know-about-cilantro/" target="_blank">
              fun facts about cilantro and why you probably like it or not
            </TextLink>
            .
          </small>
        </p>

        <p>
          Also I need to test how the code looks, so.... How great would it be if <code>npm install -g veganism</code>?
        </p>

        <p>
          <small>
            This delicious text was provided by{' '}
            <TextLink to="https://veganipsum.me/" target="_blank" rel="noreferrer">
              veganipsum.me
            </TextLink>
          </small>
        </p>
      </Section>
    </>
  );
};

const HorizontalList = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
