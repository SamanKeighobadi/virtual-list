import React from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  
} from "react-virtualized";
import { BASE_URL } from "./utils/config";
import useSWR from "swr";
import PostCard from "./components/PostCard";

const App = () => {
  const { data: posts } = useSWR(`${BASE_URL}`);
  const cash = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
    <div className=" bg-sky-400 min-h-screen ">
      <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer >
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={posts.length}
              rowHeight={cash.current.rowHeight}
              deferredMeasurementCache={cash.current}
              rowRenderer={({ index, key, style, parent }) => {
                const post = posts[index];

                return (
                  <CellMeasurer
                    cache={cash.current}
                    key={key}
                    rowIndex={index}
                    columnIndex={0}
                    parent={parent}
                  >
                    <div className=" " style={style}>
                      <PostCard body={post.body} title={post.title} />
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default App;
