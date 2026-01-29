"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  type ContentBlock,
  type ChecklistItem,
  type BulletItem,
  type CodeData,
  type LinkData,
  type BentoData,
  type BentoCard,
  generateId,
} from "./calendar-types";

// Link icon component
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="10" 
      height="10" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// Grid icon for bento
function GridIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="10" 
      height="10" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

interface ContentEditorProps {
  blocks: ContentBlock[];
  onUpdate: (blocks: ContentBlock[]) => void;
}

const BLOCK_TYPES: { type: ContentBlock["type"]; label: string; icon: string | "link" | "bento" }[] = [
  { type: "text", label: "Text", icon: "T" },
  { type: "checklist", label: "Checklist", icon: "☑" },
  { type: "bullets", label: "Bullets", icon: "•" },
  { type: "heading", label: "Heading", icon: "H" },
  { type: "code", label: "Code", icon: "</>" },
  { type: "link", label: "Link", icon: "link" },
  { type: "bento", label: "Bento", icon: "bento" },
  { type: "divider", label: "Divider", icon: "—" },
];

export function ContentEditor({ blocks, onUpdate }: ContentEditorProps) {
  const addBlock = (type: ContentBlock["type"]) => {
    let content: ContentBlock["content"];
    switch (type) {
      case "text":
      case "heading":
        content = "";
        break;
      case "checklist":
        content = [{ id: generateId(), text: "", checked: false }];
        break;
      case "bullets":
        content = [{ id: generateId(), text: "" }];
        break;
      case "code":
        content = { language: "javascript", code: "" };
        break;
      case "link":
        content = { url: "", title: "", description: "" };
        break;
      case "bento":
        content = { 
          columns: 2, 
          cards: [
            { id: generateId() },
            { id: generateId() },
            { id: generateId() },
            { id: generateId() },
          ] 
        };
        break;
      case "divider":
        content = "";
        break;
      default:
        content = "";
    }
    const newBlock: ContentBlock = { id: generateId(), type, content };
    onUpdate([...blocks, newBlock]);
  };

  const updateBlock = (id: string, content: ContentBlock["content"]) => {
    onUpdate(blocks.map((b) => (b.id === id ? { ...b, content } : b)));
  };

  const deleteBlock = (id: string) => {
    onUpdate(blocks.filter((b) => b.id !== id));
  };

  const moveBlock = (id: string, direction: "up" | "down") => {
    const index = blocks.findIndex((b) => b.id === id);
    if (direction === "up" && index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      onUpdate(newBlocks);
    } else if (direction === "down" && index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      onUpdate(newBlocks);
    }
  };

  return (
    <div className="space-y-3">
      {/* Add block buttons - fixed at top */}
      <div className="flex gap-1.5 flex-wrap pb-2 border-b border-border/50">
        {BLOCK_TYPES.map(({ type, label, icon }) => (
          <button
            key={type}
            type="button"
            onClick={() => addBlock(type)}
            className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground px-2 py-1.5 border border-dashed border-border hover:border-foreground/30 transition-colors rounded-sm"
          >
            {icon === "link" ? (
              <LinkIcon className="w-2.5 h-2.5" />
            ) : icon === "bento" ? (
              <GridIcon className="w-2.5 h-2.5" />
            ) : (
              <span className="text-[10px]">{icon}</span>
            )}
            {label}
          </button>
        ))}
      </div>

      {/* Content blocks */}
      {blocks.map((block, index) => (
        <ContentBlockItem
          key={block.id}
          block={block}
          onUpdate={(content) => updateBlock(block.id, content)}
          onDelete={() => deleteBlock(block.id)}
          onMoveUp={index > 0 ? () => moveBlock(block.id, "up") : undefined}
          onMoveDown={index < blocks.length - 1 ? () => moveBlock(block.id, "down") : undefined}
        />
      ))}
    </div>
  );
}

interface ContentBlockItemProps {
  block: ContentBlock;
  onUpdate: (content: ContentBlock["content"]) => void;
  onDelete: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}

function ContentBlockItem({ block, onUpdate, onDelete, onMoveUp, onMoveDown }: ContentBlockItemProps) {
  const BlockControls = () => (
    <div className="absolute -left-6 top-0 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
      {onMoveUp && (
        <button
          type="button"
          onClick={onMoveUp}
          className="text-[9px] text-muted-foreground hover:text-foreground w-4 h-4 flex items-center justify-center"
        >
          ↑
        </button>
      )}
      {onMoveDown && (
        <button
          type="button"
          onClick={onMoveDown}
          className="text-[9px] text-muted-foreground hover:text-foreground w-4 h-4 flex items-center justify-center"
        >
          ↓
        </button>
      )}
    </div>
  );

  if (block.type === "text") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <TextBlockEditor
          content={block.content as string}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "heading") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <HeadingBlockEditor
          content={block.content as string}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "checklist") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <ChecklistEditor
          items={block.content as ChecklistItem[]}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <BulletListEditor
          items={block.content as BulletItem[]}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <CodeBlockEditor
          data={block.content as CodeData}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "link") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <LinkBlockEditor
          data={block.content as LinkData}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "bento") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <BentoBlockEditor
          data={block.content as BentoData}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>
    );
  }

  if (block.type === "divider") {
    return (
      <div className="group relative pl-6">
        <BlockControls />
        <div className="relative py-2">
          <hr className="border-border" />
          <button
            type="button"
            onClick={onDelete}
            className="absolute top-1/2 right-0 -translate-y-1/2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// Text Block
function TextBlockEditor({
  content,
  onUpdate,
  onDelete,
}: {
  content: string;
  onUpdate: (content: string) => void;
  onDelete: () => void;
}) {
  const [value, setValue] = useState(content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setValue(content);
  }, [content]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onUpdate(value)}
        placeholder="Write something..."
        className="w-full text-sm leading-relaxed bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none resize-none min-h-[2rem]"
        rows={1}
      />
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        Remove
      </button>
    </div>
  );
}

// Heading Block
function HeadingBlockEditor({
  content,
  onUpdate,
  onDelete,
}: {
  content: string;
  onUpdate: (content: string) => void;
  onDelete: () => void;
}) {
  const [value, setValue] = useState(content);

  useEffect(() => {
    setValue(content);
  }, [content]);

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onUpdate(value)}
        placeholder="Heading..."
        className="w-full text-base font-medium bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none"
      />
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        Remove
      </button>
    </div>
  );
}

// Checklist Editor
function ChecklistEditor({
  items,
  onUpdate,
  onDelete,
}: {
  items: ChecklistItem[];
  onUpdate: (items: ChecklistItem[]) => void;
  onDelete: () => void;
}) {
  const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const updateItem = (id: string, updates: Partial<ChecklistItem>) => {
    onUpdate(items.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  };

  const addItem = (afterId?: string) => {
    const newItem: ChecklistItem = { id: generateId(), text: "", checked: false };
    if (afterId) {
      const index = items.findIndex((item) => item.id === afterId);
      const newItems = [...items];
      newItems.splice(index + 1, 0, newItem);
      onUpdate(newItems);
    } else {
      onUpdate([...items, newItem]);
    }
    setTimeout(() => {
      inputRefs.current.get(newItem.id)?.focus();
    }, 0);
  };

  const deleteItem = (id: string) => {
    if (items.length === 1) {
      onDelete();
      return;
    }
    const index = items.findIndex((item) => item.id === id);
    const prevItem = items[index - 1];
    onUpdate(items.filter((item) => item.id !== id));
    if (prevItem) {
      setTimeout(() => {
        inputRefs.current.get(prevItem.id)?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: ChecklistItem) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(item.id);
    } else if (e.key === "Backspace" && item.text === "") {
      e.preventDefault();
      deleteItem(item.id);
    }
  };

  return (
    <div className="relative space-y-1">
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => updateItem(item.id, { checked: !item.checked })}
            className={cn(
              "w-3.5 h-3.5 mt-0.5 border flex-shrink-0 flex items-center justify-center transition-colors rounded-sm",
              item.checked
                ? "bg-foreground border-foreground"
                : "border-border hover:border-foreground/50"
            )}
          >
            {item.checked && (
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-background">
                <path d="M1 4L3 6L7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <input
            ref={(el) => {
              if (el) inputRefs.current.set(item.id, el);
            }}
            type="text"
            value={item.text}
            onChange={(e) => updateItem(item.id, { text: e.target.value })}
            onKeyDown={(e) => handleKeyDown(e, item)}
            placeholder="To do..."
            className={cn(
              "flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50",
              item.checked && "line-through text-muted-foreground"
            )}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        Remove
      </button>
    </div>
  );
}

// Bullet List Editor
function BulletListEditor({
  items,
  onUpdate,
  onDelete,
}: {
  items: BulletItem[];
  onUpdate: (items: BulletItem[]) => void;
  onDelete: () => void;
}) {
  const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const updateItem = (id: string, text: string) => {
    onUpdate(items.map((item) => (item.id === id ? { ...item, text } : item)));
  };

  const addItem = (afterId?: string) => {
    const newItem: BulletItem = { id: generateId(), text: "" };
    if (afterId) {
      const index = items.findIndex((item) => item.id === afterId);
      const newItems = [...items];
      newItems.splice(index + 1, 0, newItem);
      onUpdate(newItems);
    } else {
      onUpdate([...items, newItem]);
    }
    setTimeout(() => {
      inputRefs.current.get(newItem.id)?.focus();
    }, 0);
  };

  const deleteItem = (id: string) => {
    if (items.length === 1) {
      onDelete();
      return;
    }
    const index = items.findIndex((item) => item.id === id);
    const prevItem = items[index - 1];
    onUpdate(items.filter((item) => item.id !== id));
    if (prevItem) {
      setTimeout(() => {
        inputRefs.current.get(prevItem.id)?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: BulletItem) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(item.id);
    } else if (e.key === "Backspace" && item.text === "") {
      e.preventDefault();
      deleteItem(item.id);
    }
  };

  return (
    <div className="relative space-y-1">
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-foreground/60 flex-shrink-0" />
          <input
            ref={(el) => {
              if (el) inputRefs.current.set(item.id, el);
            }}
            type="text"
            value={item.text}
            onChange={(e) => updateItem(item.id, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            placeholder="List item..."
            className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        Remove
      </button>
    </div>
  );
}

// Code Block Editor
const CODE_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "sql", label: "SQL" },
  { value: "bash", label: "Bash" },
  { value: "json", label: "JSON" },
  { value: "markdown", label: "Markdown" },
  { value: "plaintext", label: "Plain Text" },
];

function CodeBlockEditor({
  data,
  onUpdate,
  onDelete,
}: {
  data: CodeData;
  onUpdate: (data: CodeData) => void;
  onDelete: () => void;
}) {
  const [code, setCode] = useState(data.code);
  const [language, setLanguage] = useState(data.language);
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCode(data.code);
    setLanguage(data.language);
  }, [data]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && isExpanded) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(textarea.scrollHeight, 120)}px`;
    }
  }, [code, isExpanded]);

  const handleBlur = () => {
    onUpdate({ language, code });
  };

  // Get first line preview
  const firstLine = code.split('\n')[0] || '';
  const lineCount = code.split('\n').length;
  const hasContent = code.trim().length > 0;

  return (
    <div className="relative border border-border rounded-sm overflow-hidden">
      {/* Header - always visible */}
      <div 
        className="flex items-center justify-between px-2 py-1.5 bg-muted/50 border-b border-border cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            type="button"
            className="text-[10px] text-muted-foreground hover:text-foreground transition-transform"
            style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ▶
          </button>
          <select
            value={language}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setLanguage(e.target.value);
              onUpdate({ language: e.target.value, code });
            }}
            className="text-[9px] uppercase tracking-wider bg-transparent text-muted-foreground outline-none cursor-pointer"
          >
            {CODE_LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          {!isExpanded && hasContent && (
            <span className="text-[9px] text-muted-foreground/70 truncate flex-1">
              {firstLine.slice(0, 40)}{firstLine.length > 40 ? '...' : ''} 
              <span className="ml-1 opacity-60">({lineCount} line{lineCount !== 1 ? 's' : ''})</span>
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity ml-2"
        >
          Remove
        </button>
      </div>
      
      {/* Expandable code area */}
      {isExpanded && (
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onBlur={handleBlur}
          placeholder="// Write your code here..."
          className="w-full px-3 py-2 text-xs font-mono leading-relaxed bg-muted/30 text-foreground placeholder:text-muted-foreground/50 outline-none resize-none min-h-[120px]"
          spellCheck={false}
          autoFocus
        />
      )}
      
      {/* Collapsed preview */}
      {!isExpanded && hasContent && (
        <div className="px-3 py-2 bg-muted/30 max-h-[60px] overflow-hidden">
          <pre className="text-[10px] font-mono text-muted-foreground leading-tight whitespace-pre-wrap">
            {code.split('\n').slice(0, 3).join('\n')}
            {lineCount > 3 && '\n...'}
          </pre>
        </div>
      )}
    </div>
  );
}

// Link Block Editor
function LinkBlockEditor({
  data,
  onUpdate,
  onDelete,
}: {
  data: LinkData;
  onUpdate: (data: LinkData) => void;
  onDelete: () => void;
}) {
  const [url, setUrl] = useState(data.url);
  const [title, setTitle] = useState(data.title || "");
  const [description, setDescription] = useState(data.description || "");

  useEffect(() => {
    setUrl(data.url);
    setTitle(data.title || "");
    setDescription(data.description || "");
  }, [data]);

  const handleBlur = () => {
    onUpdate({ url, title, description });
  };

  const isValidUrl = url.startsWith("http://") || url.startsWith("https://");

  return (
    <div className="relative border border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors">
      <div className="p-2 space-y-1.5">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={handleBlur}
          placeholder="https://example.com"
          className="w-full text-xs text-muted-foreground bg-transparent outline-none placeholder:text-muted-foreground/50"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          placeholder="Link title (optional)"
          className="w-full text-sm font-medium bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleBlur}
          placeholder="Description (optional)"
          className="w-full text-xs bg-transparent text-muted-foreground outline-none placeholder:text-muted-foreground/50"
        />
      </div>
      {isValidUrl && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-2 py-1.5 text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground bg-muted/30 border-t border-border"
        >
          Open Link →
        </a>
      )}
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-2 right-2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        Remove
      </button>
    </div>
  );
}

// Bento Grid Editor
function BentoBlockEditor({
  data,
  onUpdate,
  onDelete,
}: {
  data: BentoData;
  onUpdate: (data: BentoData) => void;
  onDelete: () => void;
}) {
  const fileInputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const handleImageUpload = (cardId: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const updatedCards = data.cards.map((card) =>
        card.id === cardId ? { ...card, imageData: base64 } : card
      );
      onUpdate({ ...data, cards: updatedCards });
    };
    reader.readAsDataURL(file);
  };

  const handleCardClick = (cardId: string) => {
    const input = fileInputRefs.current.get(cardId);
    if (input) {
      input.click();
    }
  };

  const addCard = () => {
    onUpdate({
      ...data,
      cards: [...data.cards, { id: generateId() }],
    });
  };

  const removeCard = (cardId: string) => {
    if (data.cards.length <= 1) return;
    onUpdate({
      ...data,
      cards: data.cards.filter((c) => c.id !== cardId),
    });
  };

  const toggleColumns = () => {
    onUpdate({
      ...data,
      columns: data.columns === 2 ? 3 : 2,
    });
  };

  return (
    <div className="relative">
      {/* Controls */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleColumns}
            className="text-[9px] text-muted-foreground hover:text-foreground px-1.5 py-0.5 border border-border rounded-sm"
          >
            {data.columns} cols
          </button>
          <button
            type="button"
            onClick={addCard}
            className="text-[9px] text-muted-foreground hover:text-foreground px-1.5 py-0.5 border border-border rounded-sm"
          >
            + Add card
          </button>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
        >
          Remove
        </button>
      </div>

      {/* Bento Grid */}
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${data.columns}, 1fr)` }}
      >
        {data.cards.map((card) => (
          <div
            key={card.id}
            className="relative aspect-square border border-dashed border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors cursor-pointer group/card"
            onClick={() => handleCardClick(card.id)}
          >
            <input
              ref={(el) => {
                if (el) fileInputRefs.current.set(card.id, el);
              }}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(card.id, file);
              }}
            />
            
            {card.imageData ? (
              <>
                <img
                  src={card.imageData}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCard(card.id);
                  }}
                  className="absolute top-1 right-1 w-5 h-5 bg-background/80 rounded-full flex items-center justify-center text-[10px] text-muted-foreground opacity-0 group-hover/card:opacity-100 hover:text-destructive transition-opacity"
                >
                  ×
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-[8px] mt-1">Click to upload</span>
                {data.cards.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCard(card.id);
                    }}
                    className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center text-[10px] text-muted-foreground opacity-0 group-hover/card:opacity-100 hover:text-destructive transition-opacity"
                  >
                    ×
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
