module.exports = () => {
  return {
    view: {
      title: '소마홈페이지 계정 모달',
      accept: '확인',
      decline: '취소',
      value: '{"modal_name": "account_write"}',
      blocks: [
        {
          type: 'label',
          text: '소마 홈페이지 아이디',
          markdown: true,
        },
        {
          type: 'input',
          name: 'input_name1',
          required: true,
          placeholder: '아이디를 입력해주세요',
        },
        {
          type: 'label',
          text: '소마 홈페이지 패스워드',
          markdown: true,
        },
        {
          type: 'input',
          name: 'input_name2',
          required: true,
          placeholder: '패스워드를 입력해주세요',
        },
        {
          type: 'label',
          text: '개인정보동의',
          markdown: true,
        },
        {
          type: 'select',
          name: 'select_name',
          options: [
            {
              text: '동의합니다.',
              value: '1',
            },
          ],
          required: true,
          placeholder: '옵션을 선택해주세요',
        },
      ],
    },
  };
};
