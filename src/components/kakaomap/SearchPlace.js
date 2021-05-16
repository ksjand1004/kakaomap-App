import React, { useState } from "react";

const SearchPlace = ({ showClear }) => {
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 이벤트 중단
    if (inputText === "") {
      // 입력한 값이 없다는 알람 띄우기
    } else {
      // 입력된 값을 MapContatiner.js로 보내서  검색
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="장소를 검색하세요..."
          onChange={onChange}
          value={inputText}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default SearchPlace;
