import * as S from "./styles";
import Header from "../common/header";
import { PlusImg, Folder } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateProject = () => {
  const [tag, setTag] = useState<string | "">("");
  const [hash, setHash] = useState<string[] | []>([]);
  const [input, setInput] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let compare = /[\s]/g;
    if (compare.test(tag) || tag === "") {
      alert("공백으로 시작하거나 아무것도 입력 안하셨습니다.");
    } else {
      let left: number = 0;
      let right: number = hash.length;
      while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        if (hash[mid] === tag) {
          alert("중복 태그가 존재합니다. 다시 시도해주세요 !");
          return;
        }
        hash[mid] > tag ? (right = mid - 1) : (left = mid + 1);
        console.log(hash);
      }
      setHash([...hash, tag]);
      setTag("");
    }
  };
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.InnerWrapper>
          <S.InputWrapper>
            <input
              autoComplete="off"
              type="text"
              placeholder="제목을 입력해주세요."
            />
            <span>추가할 태그</span>
            <div>
              <form onSubmit={onSubmit}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={PlusImg}
                    alt="Plus Img"
                    style={{ marginRight: "20px" }}
                  />
                  <S.TagInput
                    type="text"
                    placeholder="태그를 입력해주세요."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setTag(e.target.value)
                    }
                    value={tag}
                  />
                </div>
                <S.TagWrapper>
                  {hash.length !== 0 ? (
                    hash.map((e: string, i: number) => (
                      <S.Tag
                        key={i}
                        onClick={() =>
                          setHash(hash.filter((ele: string) => ele !== e))
                        }
                      >
                        {e}
                      </S.Tag>
                    ))
                  ) : (
                    <span style={{ color: "#919191", cursor: "default" }}>
                      No Tag
                    </span>
                  )}
                </S.TagWrapper>
              </form>
              <S.FileWrapper>
                <img src={Folder} alt="Folder Img" />
                <input type="file" accept="image/*" />
              </S.FileWrapper>
              <S.CoreWrapper>
                <textarea
                  spellCheck="false"
                  placeholder="프로젝트 내용을 홍보해봐요!"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInput(e.target.value)
                  }
                  value={input}
                />
              </S.CoreWrapper>
            </div>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Link to="/find">
              <S.Button>만들기</S.Button>
            </Link>
            <Link
              onClick={() => alert("중간에 나가시면 내용이 다 날라갑니다.")}
              to="/find"
            >
              <S.Button>취소</S.Button>
            </Link>
          </S.ButtonWrapper>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default CreateProject;
