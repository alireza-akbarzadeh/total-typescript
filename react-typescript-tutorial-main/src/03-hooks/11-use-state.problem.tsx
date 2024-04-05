import { useState } from "react";
type TagState = {
  id: number;
  value: string;
};

export const Tags = () => {
  const [tags, setTags] = useState<TagState[]>([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
