import "./TimeLine.css";

import React from 'react';
import TimeLineSection from '@/component/modules/TimeLine/TimeLineSection'; // مسیر را چک کنید


function TimeLine() {
  return (
    // حذف ارتفاع ثابت و اسکرول اضافی. اجازه دهید صفحه اصلی اسکرول بخورد.
    <section className=" bg-bgDark mt-20">
      <div className="h-screen overflow-y-auto custom-scrollbar w-full">
      <TimeLineSection />
      </div>
    </section>
  );
}

export default TimeLine;