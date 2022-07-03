import React from "react";
import { List, AutoSizer } from "react-virtualized";

import useSWR from "swr";

const App = () => {
  const { data: posts } = useSWR(`https://jsonplaceholder.typicode.com/posts`);

  return (
    <div className="px-10 py-6 bg-slate-400 min-h-screen">
      <header className="App-header"></header>
      <h1 className="text-xl text-slate-500">saman</h1>

      <List
        height={700}
        width={700}
        rowCount={100}
        rowHeight={50}
        rowRenderer={({index,key,style,parent}) => {
          const post = posts[index]
          // console.log(post)
          return (
            <div key={key} style={style}>
              <p>
                {post.body}
              </p>
            </div>
          )
        }}
      />
    </div>
  );
};

export default App;
