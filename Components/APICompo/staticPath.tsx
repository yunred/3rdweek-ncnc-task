//다이나믹 라우팅을 위해서는 getStaticPaths가 꼭 있어야한다
//getStaticProps는 미리 페이지들을 빌드해서 html로 만든다.
// 뭘 미리만들어야할지 모르니까 미리 만들 것들을 path에 넣어준다.
//list 전체 다 불러오면 안되고 제한을 둬야한다 html로 미리 만들만한 것들만 page에 넣어둔다

import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
};
