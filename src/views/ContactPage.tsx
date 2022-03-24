import React from 'react';

import { FormikHelpers, useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button } from 'components/Button';
import { FormControl, Input, Textarea } from 'components/form';
import { TextLink } from 'components/TextLink';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'providers/RootStoreProvider';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactPage = observer(function ContactPage() {
  const { authStore, uiStore } = useRootStore();

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Your name is really short!').required('Required'),
    email: Yup.string().email('Your email looks invalid').required('Required'),
    message: Yup.string().min(2, 'Your message is really too short!').required('Required'),
  });

  const onSubmit = async (v: ContactForm, { resetForm }: FormikHelpers<ContactForm>) => {
    const body = new FormData();
    Object.entries(v).forEach(([key, value]) => body.append(key, value));
    body.append('key', authStore.session);

    try {
      uiStore.setLoading(true);
      await fetch('https://getform.io/f/abb127f9-d25d-4b30-b33a-b63647f2dfe1', {
        method: 'POST',
        body,
      });

      uiStore.addNotification('Your message have been sent! Thank you!');
      resetForm();
    } catch (e) {
      uiStore.addFailNotification('Something went wrong sending the form');
    } finally {
      uiStore.setLoading(false);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors, isSubmitting } = useFormik<ContactForm>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Header>
        <h1>Say hello!</h1>
        <h5>
          If you would like to get in touch you can reach me in different ways! If you prefer email you can fill out the
          form below or send a message directly <TextLink to="mailto:graziastracquadanio@gmail.com">here</TextLink>.
        </h5>
      </Header>
      <Form method="post" action={process.env.REACT_APP_MAIL_ENDPOINT}>
        <FormControl label="Your name" htmlFor="name" {...(touched.name && errors.name && { error: errors.name })}>
          <Input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            hasError={touched.name && !!errors.name}
          />
        </FormControl>
        <FormControl label="Your email" htmlFor="email" {...(touched.email && errors.email && { error: errors.email })}>
          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            hasError={touched.email && !!errors.email}
          />
        </FormControl>

        <FormControl
          label="Your message for me"
          htmlFor="message"
          {...(touched.message && errors.message && { error: errors.message })}
        >
          <Textarea
            id="message"
            rows={5}
            name="message"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            hasError={touched.message && !!errors.message}
          />
        </FormControl>

        <SendButton type="button" onClick={() => handleSubmit()} disabled={isSubmitting}>
          Send your message!
        </SendButton>
      </Form>

      <OtherLinks>
        <h6>Elsewhere, I can be found at the following:</h6>
        <ul>
          <li>
            <h6>
              Github:{' '}
              <TextLink to="https://github.com/graziastracquadanio" rel="noreferrer">
                graziastracquadanio
              </TextLink>
            </h6>
          </li>
          <li>
            <h6>
              Codepen:{' '}
              <TextLink to="https://codepen.io/graziastrax" rel="noreferrer">
                graziastrax
              </TextLink>
            </h6>
          </li>
          <li>
            <h6>
              Linkedin:{' '}
              <TextLink to="https://www.linkedin.com/in/graziastracquadanio/en/" rel="noreferrer">
                graziastracquadanio
              </TextLink>
            </h6>
          </li>
          <li>
            <h6>
              Instagram:{' '}
              <TextLink to="https://www.instagram.com/finding_grace__/" rel="noreferrer">
                finding_grace__
              </TextLink>
            </h6>
          </li>
        </ul>
      </OtherLinks>
    </Container>
  );
});

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'form' 'others';

  @media (min-width: ${BREAKPOINTS.large}) {
    row-gap: 2rem;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'header header' 'others form';
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Form = styled.form`
  grid-area: form;
  background-color: var(--color-background-dark);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

const SendButton = styled(Button)`
  align-self: center;
`;

const OtherLinks = styled.section`
  grid-area: others;
`;

export default ContactPage;
