import "./App.css";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver, useResizeObserver } from "./hooks";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useResizeObserver(ref.current);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!entry) {
      return;
    }

    const height = entry.borderBoxSize[0].blockSize;
    setHeight(height);
  }, [entry]);

  console.log("height", height);

  return (
    <div>
      {/* <div style={{ height: 2000 }} /> */}
      <p
        ref={ref}
        style={{
          overflow: "scroll",
          resize: "vertical",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
        molestiae, provident tempora cum minus, quisquam pariatur perspiciatis
        ipsam fugiat illo voluptate facilis. Sint sapiente dolor obcaecati
        veniam corrupti provident officiis? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quidem molestiae, provident tempora cum
        minus, quisquam pariatur perspiciatis ipsam fugiat illo voluptate
        facilis. Sint sapiente dolor obcaecati veniam corrupti provident
        officiis?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quidem molestiae, provident tempora cum minus, quisquam pariatur
        perspiciatis ipsam fugiat illo voluptate facilis. Sint sapiente dolor
        obcaecati veniam corrupti provident officiis? Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quidem molestiae, provident tempora
        cum minus, quisquam pariatur perspiciatis ipsam fugiat illo voluptate
        facilis. Sint sapiente dolor obcaecati veniam corrupti provident
        officiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quidem molestiae, provident tempora cum minus, quisquam pariatur
        perspiciatis ipsam fugiat illo voluptate facilis. Sint sapiente dolor
        obcaecati veniam corrupti provident officiis?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quidem molestiae, provident tempora cum
        minus, quisquam pariatur perspiciatis ipsam fugiat illo voluptate
        facilis. Sint sapiente dolor obcaecati veniam corrupti provident
        officiis?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quidem molestiae, provident tempora cum minus, quisquam pariatur
        perspiciatis ipsam fugiat illo voluptate facilis. Sint sapiente dolor
        obcaecati veniam corrupti provident officiis? Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quidem molestiae, provident tempora
        cum minus, quisquam pariatur perspiciatis ipsam fugiat illo voluptate
        facilis. Sint sapiente dolor obcaecati veniam corrupti provident
        officiis?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quidem molestiae, provident tempora cum minus, quisquam pariatur
        perspiciatis ipsam fugiat illo voluptate facilis. Sint sapiente dolor
        obcaecati veniam corrupti provident officiis?
      </p>
    </div>
  );
}

export default App;
