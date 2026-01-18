import "./Cover.css";

const Cover = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-9 w-240 h-270 bg-[#4C79FF]">
        <img className="w-66 h-50" src="/Logo.png" alt="로고 이미지" />
        <p className="font-semibold text-[20px] leading-6 text-white">개발자를 위한 타이머</p>
      </div>
    </>
  )
};

export default Cover;