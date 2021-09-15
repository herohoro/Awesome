import { useState, useEffect, CSSProperties } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  url: string;
  children?: React.ReactNode;
};

export const LazyBackground: React.FC<Props> = (props) => {
  const { className, url, children, ...attrs } = props;
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setStyle({
      backgroundImage: `url(${props.url})`,
    });
  }, []);

  return (
    <div className={props.className} style={style} {...attrs}>
      {props.children}
    </div>
  );
};
