import axios from 'axios';
import { expect } from 'chai';

describe('CREATED DAY REPORT', () => {
  console.log('AD' + process.env.TOKEN_ADMIN)
  it('should created day report', async () => {
    const diary = await axios({
      method: 'post',
      url: 'https://server-stage.pasv.us/diary',
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
      data: {
        description: 'Today I solved 5 katas, watched videos. Understood everything.',
        labels: 'understood_everything',
        morale: '9',
        hours: '6',
      },
    })
      .then(res => res.data)
      .catch(err => err);
    console.log('diary' + diary);
    expect(diary.message).eq('Diary created');
  });
});

//wdio wdio.conf.js --spec ./test/api/apiTest.js
