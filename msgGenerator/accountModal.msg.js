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
          markdown: true
        },
        {
          type: 'label',
          text: 'Team[-2]는 원활한 서비스 제공을 위하여 SWM 홈페이지 계정과 이름, 학력, 거주지 등의 정보를 수집하고 있습니다.',
          markdown: true
        },
        {
          type: 'label',
          text: '사용자께서는 개인정보 제공 동의에 거부할 권리가 있습니다. 그러나 서비스 이용을 하실 수 없습니다. SWM 계정을 등록하시는 것으로 정보제공에 동의한 것으로 간주하며 처리할 것입니다. 제공하신 정보는 탈퇴시 삭제되며, 원하는 시기에 언제든지 탈퇴하시면 정보를 삭제하실 수 있습니다.',
          markdown: true
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
