"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

interface EditorProps {
  setText: (value: string) => void;
}

export default function Editor({setText}: EditorProps) {
  const edit = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "남들에게 들려주고 싶은 노래를 알려주세요!",
      }),
    ],
    autofocus: "start",
    content: "",
    onUpdate: ({editor}) => {
      const res = editor.getHTML();
      setText(res);
    },
  });

  return (
      <EditorContent editor={edit} />
  );
}
