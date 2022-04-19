import classNames from "classnames";
import { useState } from "react";
import styles from "./app.module.scss";

const list = [
  {
    data: "One",
    seen: false
  },
  {
    data: "Two",
    seen: false
  },
  {
    data: "Three",
    seen: false
  },
  {
    data: "Four",
    seen: false
  },
  {
    data: "Five",
    seen: true
  },
  {
    data: "Six",
    seen: true
  }
];

export default function App() {
  const [seen, setSeen] = useState(false);

  return (
    <>
      <button onClick={() => setSeen((value) => !value)}>Toggle seen</button>
      <br /> <br />
      {list.map((item) => {
        return <Item key={item.data} item={item} seen={seen} />;
      })}
    </>
  );
}

const Item = ({ item, seen }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "44px",
        margin: "44px"
      }}
    >
      {item.data}

      {!item.seen && (
        <div
          className={classNames(styles.dot, {
            [styles.seenDot]: seen
          })}
        />
      )}
    </div>
  );
};
