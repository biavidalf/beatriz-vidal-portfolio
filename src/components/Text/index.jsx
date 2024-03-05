function TextHighlight({ children, className }) {
  return (
    <strong className={`font-medium text-purple-main ${className}`}>
      {children}
    </strong>
  );
}

function SectionTitle({ content, className }) {
  return (
    <h1
      className={`text-[32px] font-medium leading-10 text-gray-300 ${className}`}
    >
      {content}
    </h1>
  );
}

function SectionSubtitle({ content, className }) {
  return (
    <div className={`w-fit ${className}`}>
      <h2 className="text-2xl font-medium">{content}</h2>
      <hr className="mt-1 w-4/5 rounded border-[2px] border-purple-main" />
    </div>
  );
}

export { TextHighlight, SectionTitle, SectionSubtitle };
