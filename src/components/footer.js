import React from 'react';
import { css } from '@emotion/core';
import Icon from './icon';
import AboutMeFooter from './aboutMeFooter';
const PostPreview = () => {
  return (
    <>
      <hr />
      <AboutMeFooter />
      <hr />
      <div
        css={css`
          text-align: center;
        `}
      >
        <Icon iconName="Linkedin" />
        <Icon iconName="Github" />
        <Icon iconName="Twitter" />
        <Icon iconName="Instagram" />
        <Icon iconName="Mail" />
      </div>
      © 2020, Built with Gatsby
    </>
  );
};

export default PostPreview;
