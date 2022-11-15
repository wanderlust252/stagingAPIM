import React, { useState } from 'react';
import InforUser from '@/pages/setting/components/inforUser';
import InforApi from '@/pages/setting/components/inforApi';
import InforCallBack from '@/pages/setting/components/inforCallBack';
import '@/pages/setting/style/setting.css';
const Setting: React.FC = (): JSX.Element => {
  // const IMG_WARNING = require('');
  const COLOR_BLUE = '#3F3B6C';
  return (
    <div className="py-4">
      <h1 className="px-4 text-header">설정 및 정보</h1>
      <InforUser />
      <InforApi />
      <InforCallBack />
    </div>
  );
};

export default Setting;
