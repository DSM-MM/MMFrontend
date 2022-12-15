import * as S from "./styles";
import Header from "../common/header";
import { PlusImg, Folder } from "../../assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createProject } from "../../apis/createproject";

const CreateProject = () => {
  const [tag, setTag] = useState<string | "">("");
  const [hash, setHash] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const nav = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let compare = /[\s]/g;
    if (compare.test(tag) || tag === "") {
      alert("공백으로 시작하거나 아무것도 입력 안하셨습니다.");
    } else {
      for (const str of hash) {
        if (tag === str) {
          alert("중복되는 태그가 존재합니다.");
          setTag("");
          return;
        }
      }
      setHash([...hash, tag]);
      setTag("");
    }
  };
  const createOnClick = () => {
    createProject(title, hash[0], input)
      .then((res) => {
        nav(-1);
        console.log(res);
      })
      .catch((err) => console.error(err));
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
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
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
              <S.CoreWrapper>
                <textarea
                  spellCheck="false"
                  placeholder="프로젝트를 홍보해보아요!"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInput(e.target.value)
                  }
                  value={input}
                />
              </S.CoreWrapper>
            </div>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Link
              onClick={() => alert("중간에 나가시면 내용이 다 날라갑니다.")}
              to="/find"
            >
              <S.Button>취소</S.Button>
            </Link>
            <S.Button onClick={createOnClick}>만들기</S.Button>
          </S.ButtonWrapper>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default CreateProject;
