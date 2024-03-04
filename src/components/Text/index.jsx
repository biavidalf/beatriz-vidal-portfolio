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

export { TextHighlight, SectionTitle };
