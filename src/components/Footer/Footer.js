import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, TitleFooter } from './FooterStyles';

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <AiFillGithub size="3rem" />,
      path: 'https://github.com/RafaelRamirez21'
    },
    {
      id: 2,
      icon: <AiFillLinkedin size="3rem" />,
      path: 'https://www.linkedin.com/in/rafael-ricardo-ram%C3%ADrez-burgos-9890a8191/'
    },

  ]
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+57 301-467-1037">+57 301-467-1037</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="rrramirezb251@gmail.com">rrramirezb251@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building a better world throughout code.</Slogan>
        </CompanyContainer>
        <SocialContainer>

          {socialMedia.map((media) => (
            <SocialIcons key={media.id} href={media.path}>
              {media.icon}
            </SocialIcons>
          ))

          }
        </SocialContainer>
        <TitleFooter>
          Made with love by Rafael R.
        </TitleFooter>


      </SocialIconsContainer>

    </FooterWrapper >
  );
};

export default Footer;
