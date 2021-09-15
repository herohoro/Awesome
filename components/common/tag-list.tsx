import { Tag } from "@/types";

export const TagList: React.VFC<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <ul className="taglist">
      {tags.map((tag) => (
        <li key={tag.id}>{tag.title}</li>
      ))}
      <style jsx>
        {`
          .taglist {
            padding-left: 0;
            display: inline-flex;
            flex-wrap: wrap;
            white-space: nowrap;
          }
          .taglist li {
            list-style-type: none;
            display: inline-block;
            padding: 3px 7px;
            margin-right: 18px;
            margin-bottom: 10px;
            border: 1px solid var(--c-primary);
            color: var(--c-primary);
            border-radius: 10px;
            font-size: var(--text-sm);
          }
        `}
      </style>
    </ul>
  );
};
