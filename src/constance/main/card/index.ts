interface PropsType {
  job: string;
  name: string;
  introduce: string;
  grade: number;
}

export const List: PropsType[] = [
  { job: "Frontend", name: "홍길동", introduce: "안녕하세요.", grade: 4.7 },
  { job: "Backend", name: "홍길순", introduce: "백엔드의 신.", grade: 2.1 },
  { job: "Design", name: "대마고", introduce: "와 코딩!.", grade: 1.6 },
];
