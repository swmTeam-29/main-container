module.exports = () => {
  return {
    view: {
      title: '개인 정보 제공 동의 및 SWM 계정 등록',
      accept: '확인',
      decline: '취소',
      value: '{"modal_name": "account_write"}',
      blocks: [
        {
          type: 'label',
          text: 'SWM 홈페이지 ID 등록',
          markdown: true,
        },
        {
          type: 'input',
          name: 'input_name1',
          required: true,
          placeholder: '소프트웨어 마에스트로 홈페이지 ID를 입력하세요.',
        },
        {
          type: 'label',
          text: 'SWM 홈페이지 PW 등록',
          markdown: true,
        },
        {
          type: 'input',
          name: 'input_name2',
          required: true,
          placeholder: '소프트웨어 마에스트로 홈페이지 PW를 입력하세요.',
        },
        {
          type: 'label',
          text: '개인정보 제공 동의',
          markdown: true,
        },
        {
          type: 'label',
          text: 'welcome 메시지에 개인정보수집동의서를 확인해주세요',
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
