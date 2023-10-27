import React from 'react';

import { getParametersForUnsplash } from '../../utils';

import './index.css';

function zeroPad(value, len) {
  const str = '0000000000' + value.toString();
  return str.substring(str.length - len);
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */
function removeSpecialCharacter(str) {
  let _str = str.substring(0, 300);
  _str = str.replace(/[#_*~&;![\]`>\n=\->]/g, '');
  return _str;
}

function Article(props) {
  const createdTime = new Date(props.createdTime);
  return (
    <div className={'Article'}>
      <div className={'Article__summary'}>
        <div className={'Article__summary__title'}>{props.title}</div>
        <div className={'Article__summary__desc'}>
          {removeSpecialCharacter(props.content)}
        </div>
        <div className={'Article__summary__etc'}>
          {createdTime.getFullYear() +
            '.' +
            zeroPad(createdTime.getMonth() + 1, 2) +
            '.' +
            zeroPad(createdTime.getDate(), 2)}
        </div>
      </div>
      <div className={'Article__thumbnail'}>
        <img
          src={
            props.image +
            getParametersForUnsplash({
              width: 240,
              height: 240,
              quality: 80,
              format: 'jpg',
            })
          }
          alt="thumbnail"
        />
      </div>
    </div>
  );
}

export default Article;
